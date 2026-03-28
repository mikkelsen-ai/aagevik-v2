import { Phone, ArrowRight } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1c3d1d] py-16 sm:py-20">
      {/* Green radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#2d6b2e]/30 blur-3xl" />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64 bg-gradient-to-r from-transparent via-[#4a8f4b]/60 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <AnimateOnScroll>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#8fa98f]">
            Klar til å starte?
          </p>
          <h2 className="font-display text-3xl font-bold text-[#f2efe9] sm:text-4xl mb-4">
            Kontakt oss i dag – gratis befaring
          </h2>
          <p className="text-[#8fa98f] max-w-xl mx-auto mb-8">
            Vi hjelper boligeiere i Bergen med alt fra takarbeid til baderomsrenovering.
            Svar innen 24 timer. Ingen forpliktelse.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:92816022"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#1e6ec8] hover:bg-[#185db0] active:scale-95 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 shadow-[0_4px_20px_rgba(30,110,200,0.5)] hover:shadow-[0_6px_28px_rgba(30,110,200,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3f5] w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              Ring 928 16 022
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-lg border border-[#f2efe9]/20 px-7 py-3.5 text-base font-semibold text-[#f2efe9] hover:bg-[#f2efe9]/10 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2efe9]/30 w-full sm:w-auto justify-center"
            >
              Få gratis befaring
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-4 text-sm text-[#8fa98f]">
            100% anbefalt av alle kunder · Lokalt i Bergen siden 1982
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
