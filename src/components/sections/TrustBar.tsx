import { Star, Hammer, Award, CheckCircle } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

const signals = [
  { icon: Star,        text: '100% anbefalt',  sub: 'Alle 7 kunder' },
  { icon: Hammer,      text: '44 år',            sub: 'Erfaren håndverker' },
  { icon: Award,       text: 'Sentralgodkjent',  sub: 'Svennebrev · Våtromssertifikat' },
  { icon: CheckCircle, text: 'Gratis befaring', sub: 'Ingen forpliktelser' },
]

export function TrustBar() {
  return (
    <section className="border-y border-[#DDD0BE] bg-[#EBE3D5] py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {signals.map((signal, i) => (
            <AnimateOnScroll key={signal.text} delay={i as 0|1|2|3|4}>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C97C2A]/15 text-[#C97C2A]">
                  <signal.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-sans text-lg font-bold tracking-tight text-[#211E18]">{signal.text}</p>
                  <p className="text-xs text-[#6B5E4E]">{signal.sub}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
