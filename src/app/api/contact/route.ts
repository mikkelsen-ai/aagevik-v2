import { NextRequest, NextResponse } from 'next/server'

// Enkel rate limiting: maks 5 forespørsler per IP per time
const rateLimit = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }

  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'For mange forespørsler' }, { status: 429 })
  }

  // Parse body
  let body: { name?: string; phone?: string; service?: string; description?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel' }, { status: 400 })
  }

  const { name, phone, service, description } = body

  // Validation
  if (!name || !phone) {
    return NextResponse.json({ error: 'Navn og telefon er påkrevd' }, { status: 400 })
  }

  const emailTo = process.env.EMAIL_TO ?? 'agevik@tomrar.no'
  const apiKey  = process.env.RESEND_API_KEY

  // Build email content
  const emailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #d97706;">Ny forespørsel fra nettsiden</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 140px;">Navn:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold;">Telefon:</td>
          <td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Tjeneste:</td>
          <td style="padding: 8px;">${service ?? '(ikke valgt)'}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">Beskrivelse:</td>
          <td style="padding: 8px;">${description ?? '(ingen)'}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #666; font-size: 14px;">
        Sendt fra agevik.no – ${new Date().toLocaleString('nb-NO')}
      </p>
    </div>
  `

  // If no Resend API key, log to console (development mode)
  if (!apiKey) {
    console.log('[Contact form – dev mode]', { name, phone, service, description })
    console.log('Set RESEND_API_KEY in .env.local to enable email delivery.')
    return NextResponse.json({ ok: true })
  }

  // Send via Resend
  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from:    'Åge Vik Nettside <onboarding@resend.dev>',
      to:      emailTo,
      subject: `Ny forespørsel fra ${name} – ${service ?? 'nettside'}`,
      html:    emailHtml,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'E-post feilet' }, { status: 500 })
  }
}
