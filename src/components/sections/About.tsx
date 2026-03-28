import Image from 'next/image'
import { CheckCircle, Award, ShieldCheck, ExternalLink, Trophy } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const values = [
  { label: 'Svennebrev, sentralgodkjenning og våtromssertifikat' },
  { label: 'Kvalitetskontroll på alle oppdrag' },
  { label: 'Svært allsidig – over 44 år i faget' },
  { label: '5 års garanti på utført arbeid' },
]

export function About() {
  return (
    <section id="om-age" className="py-20 sm:py-24 bg-[#F4EFE6]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Text side */}
          <AnimateOnScroll>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">
                Om tømreren
              </p>
              <h2 className="font-display text-3xl font-bold text-[#211E18] sm:text-4xl mb-4">
                Åge Vik
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C97C2A]/30 bg-[#C97C2A]/10 px-3 py-1.5 text-xs font-semibold text-[#C97C2A]">
                  <Award className="h-3.5 w-3.5" />
                  Svennebrev
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C97C2A]/30 bg-[#C97C2A]/10 px-3 py-1.5 text-xs font-semibold text-[#C97C2A]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Sentralgodkjent
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D5A27]/30 bg-[#2D5A27]/8 px-3 py-1.5 text-xs font-semibold text-[#2D5A27]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Våtromssertifikat
                </span>
              </div>

              <p className="text-[#6B5E4E] leading-relaxed mb-4">
                Åge Vik har lagt ned 44 år i tømrerfaget. I 2007 startet han for seg selv — og siden da har han gjort jobben selv, snakket med kundene selv og stått inne for resultatet selv. Det betyr at du vet hvem du har å gjøre med fra første samtale til siste spiker.
              </p>
              <p className="text-[#6B5E4E] leading-relaxed mb-4">
                Åge er svært allsidig. Tak, bad, vinduer, kledning, tilbygg og mye mer. Sentralgodkjent, med svennebrev og våtromssertifikat. Han bruker et kvalitetskontrollsystem og sender deg bilder når jobben er ferdig, så du har full oversikt.
              </p>
              <p className="text-[#6B5E4E] leading-relaxed mb-8">
                For Åge er det bare én ting som teller: at du er fornøyd. Ikke bare den uken han er hos deg, men lenge etter. Det er det som har gitt ham kunder som ringer tilbake og anbefaler ham videre.
              </p>

              {/* Hyggeligste håndverker */}
              <a
                href="https://hyggeligste.no/2021/nominert/Age-Vik-Tomrar-Age-Vik/9176"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 mb-8 hover:border-amber-300 hover:bg-amber-100 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-600">
                  <Trophy className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <p className="text-sm font-bold text-amber-800">Norges Hyggeligste Håndverker 2021</p>
                    <ExternalLink className="h-3 w-3 text-amber-500 shrink-0" />
                  </div>
                  <p className="text-xs text-amber-700 mb-2">Nominert i kategorien Snekker / Tømrer</p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-base font-bold text-amber-800">3</p>
                      <p className="text-xs text-amber-600">nominasjoner</p>
                    </div>
                    <div className="w-px bg-amber-200" />
                    <div>
                      <p className="text-base font-bold text-amber-800">230</p>
                      <p className="text-xs text-amber-600">stemmer</p>
                    </div>
                    <div className="w-px bg-amber-200" />
                    <div>
                      <p className="text-base font-bold text-amber-800">150.</p>
                      <p className="text-xs text-amber-600">plass totalt</p>
                    </div>
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-4">
                {values.map((v) => (
                  <div key={v.label} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#C97C2A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#211E18] text-sm">{v.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Visual side */}
          <AnimateOnScroll delay={1}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-[#DDD0BE] shadow-[var(--shadow-card)]">
                <Image
                  src="/bilder/aage-igjen.jpg"
                  alt="Åge Vik med firmabil – tømrer i Bergen"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-xl border border-[#DDD0BE] bg-white shadow-[var(--shadow-hover)] p-4 grid grid-cols-3 gap-x-5 gap-y-2">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-[#C97C2A]">44</p>
                  <p className="text-xs text-[#6B5E4E]">År erfaring</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-[#C97C2A]">100%</p>
                  <p className="text-xs text-[#6B5E4E]">Anbefalt</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-xl font-bold text-[#C97C2A]">Sentralgodkjent</p>
                  <p className="text-xs text-[#6B5E4E]">Fagbrev</p>
                </div>
              </div>

              <div className="absolute -inset-4 rounded-3xl bg-[#C97C2A]/5 blur-xl -z-10" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
