import { Phone, ArrowRight } from 'lucide-react'

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t border-[#DDD0BE] bg-[#F4EFE6]/97 backdrop-blur-md px-3 py-3 shadow-[0_-4px_16px_rgba(33,30,24,0.1)]">
      <div className="flex gap-2">
        <a
          href="tel:92816022"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#C97C2A] py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(201,124,42,0.4)] active:scale-95 transition-transform min-h-[44px]"
        >
          <Phone className="h-4 w-4" />
          Ring nå
        </a>
        <a
          href="#kontakt"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#C97C2A] py-3 text-sm font-semibold text-[#C97C2A] active:scale-95 transition-transform min-h-[44px]"
        >
          Gratis befaring
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
