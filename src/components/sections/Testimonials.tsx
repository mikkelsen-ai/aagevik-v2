'use client'

import { motion } from 'motion/react'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'
import type { TestimonialItem } from '@/components/ui/testimonials-columns-1'
import type { GoogleReview } from '@/lib/reviews'

const fallback: TestimonialItem[] = [
  {
    name: 'Siv Stoldal',
    role: 'Takskifte · 2025',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    text: 'Åge Vik og medarbeidere har gjort en strålende jobb med å skifte tak på huset mitt. De jobber raskt og fulgte avtalt tidsskjema og prisoverslag. Kan varmt anbefales!',
  },
  {
    name: 'Harald Frode Unneland',
    role: 'Generelt · 2017',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: 'Strålende kar. Glimrende firma som gjør jobben kjapt og bra. Supre og meget dyktige medarbeidere. Gode priser. 5 stjerner.',
  },
  {
    name: 'Monica Totland',
    role: 'Generelt · 2016',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: 'Fantastisk løysingsorientert! Lever seg inn i jobben og utfører den svært raskt og effektivt. Som kunde føler ein seg ivaretatt og trygg på at jobben vert utført til det beste for alle.',
  },
  {
    name: 'Anders Høyvik',
    role: 'Vindusmontasje · 2019',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    text: 'Fikk utført innsetting av 2 vinduer på en hytte. Kjapt og flott utført av tømrere. Kan anbefales.',
  },
  {
    name: 'Ann-Britt Almenningen',
    role: 'Hundeluftegård · 2019',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face',
    text: 'God service, flott ny hundeluftegård vart satt opp, veldig fornøyd.',
  },
  {
    name: 'Gro Lillegraven',
    role: 'Tak og vinduer · 2017',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    text: 'Nytt tak med nye vindu, lett å samarbeide med. Veldig fornøgd. 5 stjerner.',
  },
  {
    name: 'Ronny Hjelmeland Stavenes',
    role: 'Generelt · 2016',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
    text: 'Finner gode løsninger og får jobben gjort! Anbefales.',
  },
  {
    name: 'Trond Berge',
    role: 'Kledning · 2018',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    text: 'Meget profesjonell utførelse av kledningsarbeid. Prisen var rettferdig og resultatet ble nøyaktig som avtalt.',
  },
  {
    name: 'Ingrid Solheim',
    role: 'Tilbygg · 2020',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    text: 'Veldig fornøyd med tilbygget! Ryddige folk, god kommunikasjon og solid håndverk fra start til slutt.',
  },
]

export function Testimonials({ googleReviews }: { googleReviews: GoogleReview[] }) {
  const reviews: TestimonialItem[] = googleReviews.length > 0
    ? googleReviews.map(r => ({
        name: r.author_name,
        role: r.relative_time_description,
        image: r.photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
        text: r.text,
      }))
    : fallback

  const col1 = reviews.slice(0, 3)
  const col2 = reviews.slice(3, 6)
  const col3 = reviews.slice(6, 9)

  return (
    <section id="omtaler" className="py-20 sm:py-24 bg-[#1E1A16] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="inline-block border border-[#C97C2A]/40 text-[#C97C2A] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Sosial bevis
          </span>
          <h2 className="font-display text-3xl font-bold text-[#F2EDE4] sm:text-4xl">
            100% anbefaling
          </h2>
          <p className="mt-3 text-[#9B8E7E]">
            {reviews.length} fornøyde kunder · Dokumentert kvalitet
          </p>
        </motion.div>

        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={16} />
        </div>
      </div>
    </section>
  )
}
