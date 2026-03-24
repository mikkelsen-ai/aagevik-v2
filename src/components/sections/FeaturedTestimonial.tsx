import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export function FeaturedTestimonial() {
  return (
    <section className="bg-[#161210] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="relative">
            {/* Giant amber quotation mark */}
            <div
              className="absolute -top-8 -left-4 sm:-left-8 font-display font-extrabold text-[#C97C2A]/20 select-none leading-none pointer-events-none"
              style={{ fontSize: 'clamp(140px, 20vw, 220px)', lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="relative z-10 pt-8 sm:pt-12">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#C97C2A]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <blockquote
                className="font-body italic text-[#F0EAD6] leading-relaxed"
                style={{ fontSize: 'clamp(1.3rem, 3vw, 2.1rem)' }}
              >
                Åge Vik og medarbeidere har gjort ein strålande jobb med å skifte tak på huset mitt.
                Dei jobbar raskt og følgde avtalt tidsskjema og prisoverslag.
              </blockquote>

              {/* Attribution */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-[#C97C2A]" />
                <div>
                  <p className="font-display font-semibold text-[#F0EAD6] tracking-wide">
                    Siv Stoldal
                  </p>
                  <p className="text-sm text-[#9B8E7E] font-body">Bergen, 2025 · Takskifte</p>
                </div>
              </div>

              {/* Tag */}
              <div className="mt-6">
                <span className="inline-block border border-[#C97C2A]/35 text-[#C97C2A] text-xs font-display tracking-widest uppercase px-4 py-1.5">
                  Kan varmt anbefalast
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
