import Image from 'next/image'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const images = [
  {
    src: '/bilder/480938558_1155680902930196_5186019735562947220_n.jpg',
    alt: 'Innvendig tømmerpanel og stue – ferdigstilt av Åge Vik',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/bilder/484806716_1173757451122541_5985430994763062958_n.jpg',
    alt: 'Ferdig utebod og terrasse – Åge Vik Bergen',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/bilder/487811471_1183188123512807_8719243782712624156_n.jpg',
    alt: 'Takrekonstruksjon – Åge Vik Bergen',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/bilder/649146764_1456854402812843_2860693789455835597_n.jpg',
    alt: 'Baderomsrenovering – Åge Vik Bergen',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/bilder/31947350_2097203127165854_5374168916786413568_n.jpg',
    alt: 'Utvendig terrasse og uthus – Åge Vik',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/bilder/35160535_2115346952018138_3657050960464707584_n.jpg',
    alt: 'Tilbygg med kran – Åge Vik Bergen',
    span: 'col-span-2 row-span-1',
  },
]

export function Gallery() {
  return (
    <section id="galleri" className="bg-[#161210] py-16 sm:py-20">
      <AnimateOnScroll>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A] mb-3">
              Ekte prosjekter
            </p>
            <h2
              className="font-display font-extrabold text-[#F0EAD6] leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Ferdig utførte<br />arbeider
            </h2>
          </div>
          <p className="hidden sm:block text-sm text-[#9B8E7E] font-body max-w-xs text-right leading-relaxed">
            Bilder frå ekte oppdrag i Bergen og omegn.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Edge-to-edge masonry grid */}
      <div className="grid grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-1">
        {images.map((image, i) => (
          <AnimateOnScroll
            key={image.src}
            delay={(i % 4) as 0|1|2|3|4}
            className={image.span}
          >
            <div className="group relative w-full h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#161210]/0 group-hover:bg-[#161210]/55 transition-colors duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-display font-semibold uppercase tracking-widest text-[#C97C2A]">
                  Åge Vik · Bergen
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
