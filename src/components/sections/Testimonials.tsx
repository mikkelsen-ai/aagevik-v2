'use client'

import { useState } from 'react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const all = [
  {
    name: 'Siv Stoldal',
    year: '2025',
    job: 'Takskifte',
    text: 'Åge Vik og medarbeidere har gjort en strålende jobb med å skifte tak på huset mitt. De jobber raskt og fulgte avtalt tidsskjema og prisoverslag. Kan varmt anbefales!',
    featured: true,
  },
  {
    name: 'Harald Frode Unneland',
    year: '2017',
    job: 'Generelt',
    text: 'Strålende kar. Glimrende firma som gjør jobben kjapt og bra. Supre og meget dyktige medarbeidere. Gode priser. 5 stjerner.',
    featured: false,
  },
  {
    name: 'Monica Totland',
    year: '2016',
    job: 'Generelt',
    text: 'Fantastisk løysingsorientert! Lever seg inn i jobben og utfører den svært raskt og effektivt. Som kunde føler ein seg ivaretatt og trygg på at jobben vert utført til det beste for alle.',
    featured: false,
  },
  {
    name: 'Anders Høyvik',
    year: '2019',
    job: 'Vindusmontasje',
    text: 'Fikk utført innsetting av 2 vinduer på en hytte. Kjapt og flott utført av tømrere. Kan anbefales.',
    featured: false,
  },
  {
    name: 'Ann-Britt Almenningen',
    year: '2019',
    job: 'Hundeluftegård',
    text: 'God service, flott ny hundeluftegård vart satt opp, veldig fornøyd.',
    featured: false,
  },
  {
    name: 'Gro Lillegraven',
    year: '2017',
    job: 'Tak og vinduer',
    text: 'Nytt tak med nye vindu, lett å samarbeide med. Veldig fornøgd. 5 stjerner.',
    featured: false,
  },
  {
    name: 'Ronny Hjelmeland Stavenes',
    year: '2016',
    job: 'Generelt',
    text: 'Finner gode løsninger og får jobben gjort! Anbefales.',
    featured: false,
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-[#C97C2A]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const featured = all[0]
  const rest = all.slice(1)
  const visible = showAll ? rest : rest.slice(0, 2)

  return (
    <section id="omtaler" className="py-20 sm:py-28 bg-[#F0EAD6]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-3">
                Kva kundane seier
              </p>
              <h2
                className="font-display font-extrabold text-[#161210] leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
              >
                100%<br />anbefaling
              </h2>
            </div>
            <p className="text-[#6B5E4E] font-body text-sm max-w-xs sm:text-right">
              7 fornøgde kundar · 2016–2025
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured — big on left */}
          <AnimateOnScroll className="lg:col-span-3">
            <div className="h-full bg-[#161210] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <Stars />
                <blockquote className="mt-5 font-body italic text-[#F0EAD6] text-lg sm:text-xl leading-relaxed">
                  &ldquo;{featured.text}&rdquo;
                </blockquote>
              </div>
              <div className="mt-8 pt-6 border-t border-[#2E2820] flex items-center gap-3">
                <div className="h-px w-8 bg-[#C97C2A]" />
                <div>
                  <p className="font-display font-semibold text-[#F0EAD6] text-sm">{featured.name}</p>
                  <p className="text-xs text-[#9B8E7E] font-body">{featured.job} · {featured.year}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right column — stack of smaller reviews */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {visible.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={(i + 1) as 0|1|2|3|4}>
                <div className="border border-[#D5C9B4] bg-white p-5 flex flex-col gap-3">
                  <Stars />
                  <blockquote className="text-sm font-body italic text-[#6B5E4E] leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="pt-3 border-t border-[#E6DFC8]">
                    <p className="font-display font-semibold text-[#161210] text-xs">{t.name}</p>
                    <p className="text-[10px] text-[#9B8E7E] font-body">{t.job} · {t.year}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {!showAll && rest.length > 2 && (
          <AnimateOnScroll className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-display font-semibold text-[#C97C2A] hover:text-[#AE6820] transition-colors inline-flex items-center gap-2"
            >
              Vis alle {all.length} omtaler
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </AnimateOnScroll>
        )}

        {showAll && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
            {rest.slice(2).map((t, i) => (
              <AnimateOnScroll key={t.name} delay={(i % 3) as 0|1|2|3|4}>
                <div className="border border-[#D5C9B4] bg-white p-5">
                  <Stars />
                  <blockquote className="mt-3 text-sm font-body italic text-[#6B5E4E] leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="mt-3 pt-3 border-t border-[#E6DFC8]">
                    <p className="font-display font-semibold text-[#161210] text-xs">{t.name}</p>
                    <p className="text-[10px] text-[#9B8E7E] font-body">{t.job} · {t.year}</p>
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
