import { Phone, ArrowRight } from 'lucide-react'

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#161210]/97 backdrop-blur-md border-t border-[#2E2820] px-3 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="flex gap-2">
        <a
          href="tel:92816022"
          className="flex flex-1 items-center justify-center gap-2 bg-[#C97C2A] py-3 text-sm font-display font-semibold text-white shadow-[0_2px_12px_rgba(201,124,42,0.4)] active:scale-95 transition-transform min-h-[44px]"
        >
          <Phone className="h-4 w-4" />
          Ring nå
        </a>
        <a
          href="#kontakt"
          className="flex flex-1 items-center justify-center gap-2 border border-[#C97C2A] py-3 text-sm font-display font-semibold text-[#C97C2A] active:scale-95 transition-transform min-h-[44px]"
        >
          Gratis befaring
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
