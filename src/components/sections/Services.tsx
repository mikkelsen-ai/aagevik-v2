import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const services = [
  {
    title: 'Takarbeid',
    description: 'Skifte og reparasjon av tak. Frå enkle reparasjonar til fullstendig takskifte med nye materialar.',
    tag: 'Populært',
  },
  {
    title: 'Vinduer & dører',
    description: 'Montering og utskifting av vinduer og dører. Tett hus, lågare straumrekning.',
    tag: null,
  },
  {
    title: 'Bad & våtrom',
    description: 'Rehabilitering av bad og våtrom. Flislegging, membran, og ferdig utføring etter byggeforskrift.',
    tag: null,
  },
  {
    title: 'Kledning & utvendig',
    description: 'Panel, kledning og utvendig arbeid. Beskytt huset og gje det eit friskt utsjånad.',
    tag: null,
  },
  {
    title: 'Tilbygg & rehabilitering',
    description: 'Utviding av bustad eller rehabilitering av eksisterande konstruksjon.',
    tag: null,
  },
  {
    title: 'Vannskadeopprydding',
    description: 'Rask og grundig opprydding etter vasskadar. Vi avdekker problemet og fiksar det ordentleg.',
    tag: 'Hasteoppgåver',
  },
]

export function Services() {
  return (
    <section id="tjenester" className="py-20 sm:py-28 bg-[#F0EAD6]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-3">
                Hva vi gjør
              </p>
              <h2 className="font-display font-extrabold text-[#161210] leading-tight"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
                Tjenester<br />i Bergen
              </h2>
            </div>
            <p className="text-[#6B5E4E] font-body text-sm max-w-xs sm:text-right leading-relaxed">
              Over 20 år med tømrararbeid. Vi tar jobben frå A til Å.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Editorial numbered list */}
        <div className="border-t border-[#D5C9B4]">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={(i % 4) as 0|1|2|3|4}>
              <div className="group border-b border-[#D5C9B4] py-6 sm:py-7 flex gap-6 sm:gap-10 items-start hover:bg-[#E6DFC8]/60 -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors">
                {/* Number */}
                <span className="font-display font-bold text-[#D5C9B4] group-hover:text-[#C97C2A] transition-colors text-xl sm:text-2xl shrink-0 w-10 pt-0.5 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h3 className="font-display font-bold text-[#161210] text-lg sm:text-xl group-hover:text-[#C97C2A] transition-colors">
                      {service.title}
                    </h3>
                    {service.tag && (
                      <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#C97C2A] border border-[#C97C2A]/40 px-2 py-0.5">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[#6B5E4E] font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow — visible on hover */}
                <div className="hidden sm:flex items-center pt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#C97C2A] shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10">
          <a
            href="tel:92816022"
            className="inline-flex items-center gap-3 text-sm font-display font-semibold text-[#C97C2A] hover:text-[#AE6820] transition-colors group"
          >
            <span className="h-px w-8 bg-[#C97C2A] group-hover:w-12 transition-all" />
            Ring 928 16 022 — vi svarar på alle spørsmål
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
