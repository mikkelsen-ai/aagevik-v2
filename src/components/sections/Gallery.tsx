import Image from 'next/image'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const images = [
  {
    src: '/bilder/480938558_1155680902930196_5186019735562947220_n.jpg',
    alt: 'Innvendig tømmerpanel og stue – ferdigstilt av Åge Vik',
  },
  {
    src: '/bilder/484806716_1173757451122541_5985430994763062958_n.jpg',
    alt: 'Ferdig utebod og terrasse – Åge Vik Bergen',
  },
  {
    src: '/bilder/487811471_1183188123512807_8719243782712624156_n.jpg',
    alt: 'Takrekonstruksjon – Åge Vik Bergen',
  },
  {
    src: '/bilder/649146764_1456854402812843_2860693789455835597_n.jpg',
    alt: 'Baderomsrenovering – Åge Vik Bergen',
  },
  {
    src: '/bilder/31947350_2097203127165854_5374168916786413568_n.jpg',
    alt: 'Utvendig terrasse og uthus – Åge Vik',
  },
  {
    src: '/bilder/35160535_2115346952018138_3657050960464707584_n.jpg',
    alt: 'Tilbygg med kran – Åge Vik Bergen',
  },
]

export function Gallery() {
  return (
    <section id="galleri" className="py-20 sm:py-24 bg-[#1E1A16]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">
              Ekte prosjekter
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F2EDE4] sm:text-4xl">
              Ferdig utførte arbeider
            </h2>
            <p className="mt-3 text-[#9B8E7E] max-w-xl mx-auto">
              Bildene er fra ekte oppdrag i Bergen. Kvaliteten taler for seg selv.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.map((image, i) => (
            <AnimateOnScroll key={image.src} delay={(i % 3) as 0|1|2|3|4}>
              <div className="group relative aspect-square overflow-hidden rounded-xl border border-[#3A3228]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/80 via-[#1E1A16]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-[#F2EDE4]">Prosjekt av Åge Vik</p>
                  <p className="text-xs text-[#9B8E7E]">Bergen</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
