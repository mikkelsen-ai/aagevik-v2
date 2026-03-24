'use client'

import { useState, FormEvent } from 'react'
import { Eye, FileText, Hammer, Send, CheckCircle } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const steps = [
  {
    number: '01',
    icon: Send,
    title: 'Bestill befaring',
    description: 'Fyll inn skjemaet nedenfor. Vi tar kontakt og avtaler tidspunkt.',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Gratis befaring',
    description: 'Vi kommer og ser på jobben – uten kostnad og uten forpliktelse.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Skriftlig tilbud',
    description: 'Du får et tydelig tilbud med fast pris. Ingen skjulte kostnader.',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Solid utførelse',
    description: 'Jobben gjøres raskt og ordentlig – levert til avtalt tid og pris.',
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
      <div className="mx-auto max-w-md rounded-2xl border border-[#2D5A27]/30 bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-[#C97C2A]" />
        <p className="font-display text-lg font-bold text-[#211E18]">Vi ringer deg snart!</p>
        <p className="mt-1 text-sm text-[#6B5E4E]">Forvent svar innen 24 timer.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-[#C97C2A]/20 bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(201,124,42,0.1)]">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">Steg 1</p>
      <h3 className="font-display text-xl font-bold text-[#211E18] mb-4">Få gratis befaring</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="hw-name" className="text-xs font-medium text-[#6B5E4E]">Navn *</label>
            <input
              id="hw-name"
              name="name"
              required
              placeholder="Ola Nordmann"
              className="rounded-lg border border-[#DDD0BE] bg-[#F4EFE6] px-3 py-2.5 text-sm text-[#211E18] placeholder:text-[#9B8E7E] focus:border-[#C97C2A] focus:outline-none focus:ring-2 focus:ring-[#C97C2A]/20 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="hw-phone" className="text-xs font-medium text-[#6B5E4E]">Telefon *</label>
            <input
              id="hw-phone"
              name="phone"
              type="tel"
              required
              placeholder="900 00 000"
              className="rounded-lg border border-[#DDD0BE] bg-[#F4EFE6] px-3 py-2.5 text-sm text-[#211E18] placeholder:text-[#9B8E7E] focus:border-[#C97C2A] focus:outline-none focus:ring-2 focus:ring-[#C97C2A]/20 transition-colors"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#C97C2A] hover:bg-[#AE6820] active:scale-95 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 shadow-[0_4px_16px_rgba(201,124,42,0.35)] hover:shadow-[0_6px_24px_rgba(201,124,42,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A] disabled:opacity-60"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {loading ? 'Sender...' : 'Send – vi tar kontakt'}
        </button>
        <p className="text-center text-xs text-[#9B8E7E]">Ingen forpliktelse · Svarer innen 24 timer</p>
      </form>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-[#EBE3D5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">
              Enkel prosess
            </p>
            <h2 className="font-display text-3xl font-bold text-[#211E18] sm:text-4xl">
              Slik fungerer det
            </h2>
            <p className="mt-3 text-[#6B5E4E] max-w-xl mx-auto">
              Fire enkle steg fra første kontakt til ferdig jobb.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C97C2A]/25 to-transparent hidden lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i as 0|1|2|3|4}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C97C2A]/40 bg-white mb-5 shadow-[0_4px_12px_rgba(201,124,42,0.12)]">
                    <span className="font-display text-2xl font-bold text-[#C97C2A]">{step.number}</span>
                  </div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C97C2A]/12 text-[#C97C2A]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#211E18] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B5E4E] leading-relaxed">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll className="mt-14">
          <BeferingForm />
        </AnimateOnScroll>
      </div>
    </section>
  )
}
