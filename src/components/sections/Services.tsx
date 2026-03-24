import { Hammer, Home, Droplets, Layers, Building2, AlertTriangle } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const services = [
  {
    icon: Hammer,
    title: 'Takarbeid',
    description: 'Skifte og reparasjon av tak. Fra enkle reparasjoner til fullstendig takskifte med nye materialer.',
    tag: 'Populært',
  },
  {
    icon: Home,
    title: 'Vinduer & dører',
    description: 'Montering og utskifting av vinduer og dører. Tett hus, lavere strømregning.',
    tag: null,
  },
  {
    icon: Droplets,
    title: 'Bad & våtrom',
    description: 'Rehabilitering av bad og våtrom. Flislegging, membran, og ferdig utførelse etter byggeforskrift.',
    tag: null,
  },
  {
    icon: Layers,
    title: 'Kledning & utvendig',
    description: 'Panel, kledning og utvendig arbeid. Beskytter huset og gir det et friskt utseende.',
    tag: null,
  },
  {
    icon: Building2,
    title: 'Tilbygg & rehabilitering',
    description: 'Utvidelse av bolig eller rehabilitering av eksisterende konstruksjon. Vi finner den beste løsningen.',
    tag: null,
  },
  {
    icon: AlertTriangle,
    title: 'Vannskadeopprydding',
    description: 'Rask og grundig opprydding etter vannskader. Vi avdekker problemet og fikser det ordentlig.',
    tag: 'Hasteoppgaver',
  },
]

export function Services() {
  return (
    <section id="tjenester" className="py-20 sm:py-24 bg-[#F4EFE6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">
              Hva vi gjør
            </p>
            <h2 className="font-display text-3xl font-bold text-[#211E18] sm:text-4xl">
              Tjenester i Bergen
            </h2>
            <p className="mt-3 text-[#6B5E4E] max-w-xl mx-auto">
              Over 20 år med tømrerarbeid i Bergen og omegn. Vi tar jobben fra A til Å.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={(i % 3) as 0|1|2|3|4} className="h-full">
              <div className="group relative flex flex-col h-full rounded-xl border border-[#DDD0BE] bg-white p-6 transition-transform transition-shadow duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-hover)] hover:border-[#C97C2A]/40">
                {service.tag && (
                  <span className="absolute top-4 right-4 inline-flex items-center rounded-full border border-[#C97C2A]/30 bg-[#C97C2A]/10 px-2.5 py-0.5 text-xs font-medium text-[#C97C2A]">
                    {service.tag}
                  </span>
                )}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C97C2A]/12 text-[#C97C2A] transition-colors group-hover:bg-[#C97C2A]/20">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#211E18] mb-2">{service.title}</h3>
                <p className="text-sm text-[#6B5E4E] leading-relaxed flex-1">{service.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <p className="text-[#6B5E4E] mb-4">Usikker på om vi tar din type jobb?</p>
          <a
            href="tel:92816022"
            className="inline-flex items-center gap-2 rounded-lg border border-[#C97C2A]/40 px-6 py-3 text-sm font-semibold text-[#C97C2A] hover:bg-[#C97C2A]/8 hover:border-[#C97C2A] active:scale-95 transition-all duration-200"
          >
            Ring 928 16 022 og spør
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
