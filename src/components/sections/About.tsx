import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const stats = [
  { value: '20+',  label: 'År erfaring' },
  { value: '100%', label: 'Anbefalt' },
  { value: '5 år', label: 'Garanti' },
]

export function About() {
  return (
    <section id="om-age" className="bg-[#F0EAD6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left — dark stats panel */}
        <AnimateOnScroll>
          <div className="bg-[#161210] px-8 py-16 sm:px-12 sm:py-20 xl:px-16 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-4">
                Om tømraren
              </p>
              <h2
                className="font-display font-extrabold text-[#F0EAD6] leading-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Åge Vik
              </h2>

              {/* Big stats */}
              <div className="flex flex-col gap-6 mb-10">
                {stats.map((s) => (
                  <div key={s.value} className="border-l-2 border-[#C97C2A] pl-5">
                    <p
                      className="font-display font-extrabold text-[#C97C2A] leading-none"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-sm text-[#9B8E7E] font-body mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="font-body text-[#9B8E7E] text-sm leading-relaxed max-w-sm">
                Åge har drive for seg sjølv sidan 2003, med oppdrag i Bergen og omegn.
                Når du ringjer, er det Åge som svarar — og Åge som gjer jobben.
                Ingen mellomledd, ingen overraskingar.
              </p>
            </div>

            {/* Hyggeligste-award */}
            <a
              href="https://hyggeligste.no/2021/nominert/Age-Vik-Tomrar-Age-Vik/9176"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 border border-[#C97C2A]/30 px-5 py-3.5 hover:border-[#C97C2A]/60 transition-colors self-start"
            >
              <div className="text-[#C97C2A]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-display font-semibold text-[#F0EAD6]">Norges Hyggeligste Håndverker 2021</p>
                <p className="text-[10px] text-[#9B8E7E] font-body">Nominert · 230 stemmer</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-[#9B8E7E] shrink-0 group-hover:text-[#C97C2A] transition-colors" />
            </a>
          </div>
        </AnimateOnScroll>

        {/* Right — full-bleed photo */}
        <AnimateOnScroll delay={1} className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/bilder/aage-igjen.jpg"
            alt="Åge Vik med firmabil – tømrer i Bergen"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay with qual text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161210]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {['Mesterbrev i tømrerfaget', '5 års garanti', 'Lokalt forankra i Bergen'].map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-[#161210]/70 backdrop-blur-sm border border-[#F0EAD6]/20 text-[#F0EAD6] text-[10px] font-display font-semibold uppercase tracking-widest px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
