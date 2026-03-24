import Image from 'next/image'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

// TODO: Bytt ut placeholder-bildene med ekte før/etter-bilder fra Åge
// For å aktivere seksjonen: fjern {false && <BeforeAfter />} i page.tsx og bytt til <BeforeAfter />
// Send bilder til: agevik@tomrar.no

const projects = [
  {
    title: 'Takskifte',
    location: 'Bergen',
    before: 'https://placehold.co/600x400/1a1714/332e28?text=FØR+%E2%80%93+Send+bilde+til+%C3%85ge',
    after:  'https://placehold.co/600x400/1a1714/d97706?text=ETTER+%E2%80%93+Send+bilde+til+%C3%85ge',
    beforeAlt: 'Tak før renovering',
    afterAlt:  'Tak etter renovering av Åge Vik',
  },
  {
    title: 'Baderomsrenovering',
    location: 'Bergen',
    before: 'https://placehold.co/600x400/1a1714/332e28?text=FØR+%E2%80%93+Send+bilde+til+%C3%85ge',
    after:  'https://placehold.co/600x400/1a1714/d97706?text=ETTER+%E2%80%93+Send+bilde+til+%C3%85ge',
    beforeAlt: 'Bad før renovering',
    afterAlt:  'Bad etter renovering av Åge Vik',
  },
  {
    title: 'Kledning',
    location: 'Bergen',
    before: 'https://placehold.co/600x400/1a1714/332e28?text=FØR+%E2%80%93+Send+bilde+til+%C3%85ge',
    after:  'https://placehold.co/600x400/1a1714/d97706?text=ETTER+%E2%80%93+Send+bilde+til+%C3%85ge',
    beforeAlt: 'Kledning før rehabilitering',
    afterAlt:  'Kledning etter rehabilitering av Åge Vik',
  },
]

export function BeforeAfter() {
  return (
    <section className="py-20 sm:py-24 bg-[#1a1714]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#d97706]">
              Bevis på kvalitet
            </p>
            <h2 className="font-display text-3xl font-bold text-[#f5f0eb] sm:text-4xl">
              Før og etter – se forskjellen
            </h2>
            <p className="mt-3 text-[#9e9187] max-w-xl mx-auto">
              Ekte transformasjoner fra Åge Vik sine oppdrag i Bergen.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={(i % 3) as 0|1|2|3|4}>
              <div className="rounded-xl border border-[#332e28] bg-[#231f1b] overflow-hidden">
                {/* Header */}
                <div className="px-5 py-3 border-b border-[#332e28]">
                  <h3 className="font-display font-bold text-[#f5f0eb]">{project.title}</h3>
                  <p className="text-xs text-[#9e9187]">{project.location}</p>
                </div>

                {/* Before / After images */}
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 z-10 rounded px-2 py-0.5 text-xs font-bold bg-[#332e28] text-[#9e9187]">
                      FØR
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.before}
                        alt={project.beforeAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 17vw"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative border-l border-[#332e28]">
                    <div className="absolute top-2 left-2 z-10 rounded px-2 py-0.5 text-xs font-bold bg-[#d97706]/20 text-[#d97706]">
                      ETTER
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.after}
                        alt={project.afterAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 17vw"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
