'use client'

import { useState } from 'react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const featured = [
  {
    name: 'Siv Stoldal',
    year: '2025',
    job: 'Takskifte',
    text: 'Åge Vik og medarbeidere har gjort en strålende jobb med å skifte tak på huset mitt. De jobber raskt og fulgte avtalt tidsskjema og prisoverslag. Kan varmt anbefales!',
  },
  {
    name: 'Harald Frode Unneland',
    year: '2017',
    job: 'Generelt',
    text: 'Strålende kar. Glimrende firma som gjør jobben kjapt og bra. Supre og meget dyktige medarbeidere. Gode priser. 5 stjerner.',
  },
  {
    name: 'Monica Totland',
    year: '2016',
    job: 'Generelt',
    text: 'Fantastisk løysingsorientert! Lever seg inn i jobben og utfører den svært raskt og effektivt. Som kunde føler ein seg ivaretatt og trygg på at jobben vert utført til det beste for alle. Virkelig å anbefale.',
  },
]

const all = [
  ...featured,
  {
    name: 'Anders Høyvik',
    year: '2019',
    job: 'Vindusmontasje',
    text: 'Fikk utført innsetting av 2 vinduer på en hytte. Kjapt og flott utført av tømrere. Kan anbefales.',
  },
  {
    name: 'Ann-Britt Almenningen',
    year: '2019',
    job: 'Hundeluftegård',
    text: 'God service, flott ny hundeluftegård vart satt opp, veldig fornøyd.',
  },
  {
    name: 'Gro Lillegraven',
    year: '2017',
    job: 'Tak og vinduer',
    text: 'Nytt tak med nye vindu, lett å samarbeide med. Veldig fornøgd. 5 stjerner.',
  },
  {
    name: 'Ronny Hjelmeland Stavenes',
    year: '2016',
    job: 'Generelt',
    text: 'Finner gode løsninger og får jobben gjort! Anbefales.',
  },
]

function AmberStars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-[#C97C2A]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const extra = all.slice(3)

  return (
    <section id="omtaler" className="py-20 sm:py-24 bg-[#EBE3D5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">
              Sosial bevis
            </p>
            <h2 className="font-display text-3xl font-bold text-[#211E18] sm:text-4xl">
              100% anbefaling
            </h2>
            <p className="mt-3 text-[#6B5E4E]">
              7 fornøyde kunder · Dokumentert kvalitet 2016–2025
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
          {featured.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={(i % 3) as 0|1|2|3|4}>
              <div className={`relative flex flex-col rounded-xl border p-6 h-full ${
                i === 0
                  ? 'border-[#C97C2A]/35 bg-white shadow-[0_0_40px_rgba(201,124,42,0.08)]'
                  : 'border-[#DDD0BE] bg-white'
              }`}>
                <AmberStars />
                <blockquote className="mt-3 flex-1 text-sm text-[#6B5E4E] leading-relaxed italic">
                  {t.text}
                </blockquote>
                <div className="mt-4 pt-4 border-t border-[#DDD0BE]">
                  <p className="font-semibold text-[#211E18] text-sm">{t.name}</p>
                  <p className="text-xs text-[#6B5E4E]">{t.job} · {t.year}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {!showAll && (
          <AnimateOnScroll className="text-center mb-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#DDD0BE] px-5 py-2.5 text-sm font-medium text-[#6B5E4E] hover:border-[#C97C2A]/40 hover:text-[#211E18] hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
            >
              Vis alle 7 omtaler ↓
            </button>
          </AnimateOnScroll>
        )}

        {showAll && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
            {extra.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={(i % 3) as 0|1|2|3|4}>
                <div className="rounded-xl border border-[#DDD0BE] bg-white p-5">
                  <AmberStars />
                  <blockquote className="mt-3 text-sm text-[#6B5E4E] leading-relaxed italic">
                    "{t.text}"
                  </blockquote>
                  <div className="mt-3 pt-3 border-t border-[#DDD0BE]">
                    <p className="font-semibold text-[#211E18] text-sm">{t.name}</p>
                    <p className="text-xs text-[#6B5E4E]">{t.job} · {t.year}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
