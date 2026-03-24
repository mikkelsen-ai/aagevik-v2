'use client'

import { useState, FormEvent } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const steps = [
  {
    number: '01',
    title: 'Bestill befaring',
    description: 'Fyll inn skjemaet nedanfor. Vi tek kontakt og avtalar tidspunkt.',
  },
  {
    number: '02',
    title: 'Gratis befaring',
    description: 'Vi kjem og ser på jobben – utan kostnad og utan forplikting.',
  },
  {
    number: '03',
    title: 'Skriftleg tilbod',
    description: 'Du får eit tydeleg tilbod med fast pris. Ingen skjulte kostnadar.',
  },
  {
    number: '04',
    title: 'Solid utføring',
    description: 'Jobben vert gjort raskt og ordentleg – levert til avtalt tid og pris.',
  },
]

function BeferingForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = {
      name:  (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    }
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, service: 'Gratis befaring' }),
      })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle className="h-10 w-10 text-[#C97C2A]" />
        <p className="font-display font-bold text-lg text-[#161210]">Vi ringjer deg snart!</p>
        <p className="text-sm text-[#6B5E4E] font-body">Forvent svar innan 24 timar.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="hw-name" className="text-xs font-display font-semibold uppercase tracking-wider text-[#6B5E4E]">
            Namn *
          </label>
          <input
            id="hw-name"
            name="name"
            required
            placeholder="Ola Nordmann"
            className="border border-[#D5C9B4] bg-[#F0EAD6] px-4 py-3 text-sm font-body text-[#161210] placeholder:text-[#9B8E7E] focus:border-[#C97C2A] focus:outline-none focus:ring-2 focus:ring-[#C97C2A]/20 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="hw-phone" className="text-xs font-display font-semibold uppercase tracking-wider text-[#6B5E4E]">
            Telefon *
          </label>
          <input
            id="hw-phone"
            name="phone"
            type="tel"
            required
            placeholder="900 00 000"
            className="border border-[#D5C9B4] bg-[#F0EAD6] px-4 py-3 text-sm font-body text-[#161210] placeholder:text-[#9B8E7E] focus:border-[#C97C2A] focus:outline-none focus:ring-2 focus:ring-[#C97C2A]/20 transition-colors"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-1 inline-flex items-center justify-center gap-2 bg-[#C97C2A] hover:bg-[#AE6820] active:scale-95 px-6 py-3.5 text-sm font-display font-semibold text-white transition-colors shadow-[0_4px_16px_rgba(201,124,42,0.35)] disabled:opacity-60"
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {loading ? 'Sender...' : 'Send – vi tek kontakt'}
      </button>
      <p className="text-center text-xs text-[#9B8E7E] font-body">Ingen forplikting · Svarar innan 24 timar</p>
    </form>
  )
}

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-[#E6DFC8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-16">
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-3">
              Enkel prosess
            </p>
            <h2
              className="font-display font-extrabold text-[#161210] leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Slik fungerer det
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: vertical timeline */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={(i % 4) as 0|1|2|3|4}>
                <div className="flex gap-6 pb-8 relative">
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-0 w-px bg-[#D5C9B4]" />
                  )}
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 flex h-9 w-9 items-center justify-center border border-[#C97C2A]/50 bg-[#E6DFC8]">
                    <span className="font-display font-bold text-sm text-[#C97C2A]">{step.number}</span>
                  </div>
                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="font-display font-bold text-[#161210] text-base mb-1">{step.title}</h3>
                    <p className="text-sm font-body text-[#6B5E4E] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Right: form */}
          <AnimateOnScroll delay={1}>
            <div>
              <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-2">Steg 1</p>
              <h3 className="font-display font-bold text-xl text-[#161210] mb-6">Få gratis befaring</h3>
              <BeferingForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
