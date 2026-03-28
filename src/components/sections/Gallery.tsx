'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const images = [
  {
    src: '/bilder/480938558_1155680902930196_5186019735562947220_n.jpg',
    alt: 'Innvendig tømmerpanel og stue – ferdigstilt av Åge Vik',
    caption: 'Innvendig panel og stue, Bergen',
  },
  {
    src: '/bilder/484806716_1173757451122541_5985430994763062958_n.jpg',
    alt: 'Ferdig utebod og terrasse – Åge Vik Bergen',
    caption: 'Utebod og terrasse, Bergen',
  },
  {
    src: '/bilder/487811471_1183188123512807_8719243782712624156_n.jpg',
    alt: 'Takrekonstruksjon – Åge Vik Bergen',
    caption: 'Takrekonstruksjon, Bergen',
  },
  {
    src: '/bilder/649146764_1456854402812843_2860693789455835597_n.jpg',
    alt: 'Baderomsrenovering – Åge Vik Bergen',
    caption: 'Baderomsrenovering, Bergen',
  },
  {
    src: '/bilder/31947350_2097203127165854_5374168916786413568_n.jpg',
    alt: 'Utvendig terrasse og uthus – Åge Vik',
    caption: 'Terrasse og uthus, Bergen',
  },
  {
    src: '/bilder/35160535_2115346952018138_3657050960464707584_n.jpg',
    alt: 'Tilbygg med kran – Åge Vik Bergen',
    caption: 'Tilbygg under oppføring, Bergen',
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null)

  return (
    <section id="galleri" className="py-20 sm:py-24 bg-[#1E1A16]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C97C2A]">
              Kvalitet fra begynnelse til slutt
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F2EDE4] sm:text-4xl">
              Utvalgte prosjekter
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.map((image, i) => (
            <AnimateOnScroll key={image.src} delay={(i % 3) as 0|1|2|3|4}>
              <button
                onClick={() => setSelected(image)}
                className="group relative w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#3A3228]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/80 via-[#1E1A16]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-[#C97C2A]/90 px-4 py-1.5 text-xs font-semibold text-white">
                      Se bilde
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-[#9B8E7E] text-center">{image.caption}</p>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1A16]/95 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2A251F] border border-[#3A3228] text-[#F2EDE4] hover:bg-[#3A3228] transition-colors"
            aria-label="Lukk"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#3A3228]" style={{ aspectRatio: '4/3' }}>
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="mt-3 text-center text-sm text-[#9B8E7E]">{selected.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
