import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Left — dark editorial panel */}
      <div className="relative z-10 flex flex-col justify-between w-full lg:w-[46%] bg-[#161210] px-8 pt-12 pb-10 sm:px-12 sm:pt-16 sm:pb-14 xl:px-16">
        {/* Thin amber bar on far left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C97C2A]" />

        {/* Top: badge */}
        <div
          className="flex items-center gap-2 self-start"
          style={{ animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}
        >
          <span className="text-[#C97C2A] tracking-widest text-xs font-display font-semibold uppercase">
            Bergen · Siden 2003
          </span>
          <span className="inline-block h-px w-8 bg-[#C97C2A]" />
        </div>

        {/* Middle: main headline */}
        <div className="flex-1 flex flex-col justify-center py-10 sm:py-14">
          <h1
            className="font-display font-extrabold leading-[0.9] tracking-tight text-[#F0EAD6]"
            style={{ animation: 'fadeUp 0.5s ease 0.1s forwards', opacity: 0 }}
          >
            <span className="block text-[clamp(4rem,8vw,7rem)]">TØMRAR</span>
            <span className="block text-[clamp(4rem,8vw,7rem)] text-[#C97C2A]">BERGEN.</span>
          </h1>

          <p
            className="mt-6 text-[#9B8E7E] font-body text-base sm:text-lg leading-relaxed max-w-xs"
            style={{ animation: 'fadeUp 0.5s ease 0.2s forwards', opacity: 0 }}
          >
            Erfaren handverkar i Bergen i 20+ år. Mesterbrev. Ingen mellomledd — Åge sjølv gjer jobben.
          </p>

          {/* Trust pills */}
          <div
            className="mt-6 flex flex-wrap gap-2"
            style={{ animation: 'fadeUp 0.5s ease 0.25s forwards', opacity: 0 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-[#C97C2A]/15 border border-[#C97C2A]/30 rounded-full px-3 py-1 text-xs text-[#E8A14E] font-display">
              ★★★★★ 100% anbefalt
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#F0EAD6]/08 border border-[#F0EAD6]/15 rounded-full px-3 py-1 text-xs text-[#9B8E7E] font-display">
              Mesterbrev
            </span>
          </div>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animation: 'fadeUp 0.5s ease 0.35s forwards', opacity: 0 }}
          >
            <a
              href="tel:92816022"
              className="inline-flex items-center justify-center gap-2.5 bg-[#C97C2A] hover:bg-[#AE6820] active:scale-95 px-6 py-3.5 font-display font-semibold text-white text-sm tracking-wide transition-colors shadow-[0_4px_20px_rgba(201,124,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#161210]"
            >
              <Phone className="h-4 w-4" />
              Ring 928 16 022
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 border border-[#F0EAD6]/25 hover:border-[#F0EAD6]/50 hover:bg-[#F0EAD6]/05 active:scale-95 px-6 py-3.5 font-display font-semibold text-[#F0EAD6] text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Gratis befaring
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom: micro-copy */}
        <p
          className="text-xs text-[#6B5E4E] font-body"
          style={{ animation: 'fadeUp 0.5s ease 0.45s forwards', opacity: 0 }}
        >
          Svarer innen 24 timer · Ingen forpliktelse
        </p>
      </div>

      {/* Right — full-bleed photo (desktop only; mobile shows behind) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%]">
        <Image
          src="/bilder/aage-hoved.jpg"
          alt="Åge Vik – tømrer i Bergen, på jobb"
          fill
          priority
          className="object-cover object-center"
          sizes="54vw"
        />
        {/* Subtle left-edge fade to blend with dark panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161210]/60 via-[#161210]/10 to-transparent" />
      </div>

      {/* Mobile: background image behind the panel */}
      <div className="absolute inset-0 lg:hidden z-0">
        <Image
          src="/bilder/aage-hoved.jpg"
          alt="Åge Vik – tømrer i Bergen"
          fill
          priority
          className="object-cover object-right-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#161210]/80" />
      </div>
    </section>
  )
}
