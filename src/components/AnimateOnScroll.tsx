'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
  threshold?: number
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const delayClass = delay > 0 ? `delay-${delay}` : ''

  return (
    <div ref={ref} className={cn('animate-on-scroll', delayClass, className)}>
      {children}
    </div>
  )
}
