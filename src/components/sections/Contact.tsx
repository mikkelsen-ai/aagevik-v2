'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, MapPin } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [service, setService] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = {
      name:        (form.elements.namedItem('name') as HTMLInputElement).value,
      phone:       (form.elements.namedItem('phone') as HTMLInputElement).value,
      service,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full border border-[#2E2820] bg-[#201C18] text-[#F0EAD6] placeholder:text-[#6B5E4E] px-4 py-3 text-sm font-body focus:border-[#C97C2A] focus:outline-none focus:ring-1 focus:ring-[#C97C2A]/30 transition-colors"

  return (
    <section id="kontakt" className="bg-[#161210]">
      {/* Top — mega phone CTA */}
      <div className="border-b border-[#2E2820] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-3">
                  Kom i gang
                </p>
                <a
                  href="tel:92816022"
                  className="block font-display font-extrabold text-[#F0EAD6] leading-none hover:text-[#C97C2A] transition-colors"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
                >
                  928 16 022
                </a>
                <p className="mt-3 font-body text-[#9B8E7E] text-sm">
                  Ring oss direkte — tilgjengeleg kvardagar 07–17
                </p>
              </div>
              <div className="flex items-center gap-3 text-[#9B8E7E] sm:text-right">
                <MapPin className="h-4 w-4 text-[#C97C2A] shrink-0" />
                <div>
                  <p className="text-sm font-body">Storeboten 40, Bergen</p>
                  <a href="mailto:agevik@tomrar.no" className="text-xs hover:text-[#C97C2A] transition-colors font-body">
                    agevik@tomrar.no
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom — form */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-10">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F0EAD6] mb-2">
                Book gratis befaring
              </h2>
              <p className="text-sm font-body text-[#9B8E7E]">
                Fortell oss kva du treng hjelp med. Vi kjem til deg.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={1}>
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center border border-[#2E2820]">
                <CheckCircle className="h-10 w-10 text-[#C97C2A]" />
                <div>
                  <h3 className="font-display font-bold text-lg text-[#F0EAD6] mb-1">Takk for henvendinga!</h3>
                  <p className="text-sm font-body text-[#9B8E7E]">
                    Vi tek kontakt innan 24 timar. Hastar det? Ring{' '}
                    <a href="tel:92816022" className="text-[#C97C2A] hover:underline">928 16 022</a>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#9B8E7E]">
                      Namn *
                    </label>
                    <input id="name" name="name" placeholder="Ola Nordmann" required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#9B8E7E]">
                      Telefon *
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="900 00 000" required className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#9B8E7E]">
                    Teneste
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border border-[#2E2820] bg-[#201C18] text-[#F0EAD6] px-4 py-3 text-sm font-body focus:border-[#C97C2A] focus:outline-none focus:ring-1 focus:ring-[#C97C2A]/30 transition-colors"
                  >
                    <option value="" className="bg-[#201C18]">Vel type oppdrag</option>
                    <option value="tak" className="bg-[#201C18]">Takarbeid</option>
                    <option value="vinduer" className="bg-[#201C18]">Vinduer & dører</option>
                    <option value="bad" className="bg-[#201C18]">Bad & våtrom</option>
                    <option value="kledning" className="bg-[#201C18]">Kledning & utvendig</option>
                    <option value="tilbygg" className="bg-[#201C18]">Tilbygg & rehabilitering</option>
                    <option value="vannskade" className="bg-[#201C18]">Vannskadeopprydding</option>
                    <option value="annet" className="bg-[#201C18]">Anna</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="description" className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#9B8E7E]">
                    Kort om prosjektet <span className="normal-case text-[#6B5E4E]">(valfritt)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="F.eks: Skal skifte tak på einebustaden min, ca. 150 kvm..."
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm font-body text-red-400">
                    Noko gjekk gale. Ring oss på{' '}
                    <a href="tel:92816022" className="underline">928 16 022</a> i staden.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 bg-[#C97C2A] hover:bg-[#AE6820] active:scale-95 px-6 py-4 font-display font-semibold text-white text-sm tracking-wide transition-colors shadow-[0_4px_20px_rgba(201,124,42,0.3)] disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sender...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send forespørsel
                    </>
                  )}
                </button>

                <p className="text-center text-xs font-body text-[#6B5E4E]">
                  Vi svarar innan 24 timar · Ingen forplikting
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
