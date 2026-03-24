'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Prosjekter', href: '#galleri' },
  { label: 'Omtaler', href: '#omtaler' },
  { label: 'Om Åge', href: '#om-age' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLAnchorElement>(null)
  const lastFocusRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      firstFocusRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!open) return
    if (e.key === 'Escape') { setOpen(false); return }
    if (e.key !== 'Tab') return
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }, [open])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#DDD0BE] bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(33,30,24,0.08)]'
            : 'bg-[#F4EFE6]/90 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Åge Vik Tømrer – til toppen">
            <Image
              src="/logo.png"
              alt="Tømrar Åge Vik – logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop right */}
          <div className="hidden sm:flex items-center gap-4">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-[#6B5E4E] hover:text-[#211E18] hover:bg-[#EBE3D5] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="tel:92816022" className="flex items-center gap-1.5 text-sm font-semibold text-[#211E18] hover:text-[#C97C2A] transition-colors">
              <Phone className="h-4 w-4 text-[#C97C2A]" />
              928 16 022
            </a>
            <Button size="sm" variant="green" asChild>
              <a href="#kontakt">Få gratis befaring</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="sm:hidden flex items-center justify-center h-10 w-10 rounded-lg text-[#6B5E4E] hover:text-[#211E18] hover:bg-[#EBE3D5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
            aria-label="Åpne meny"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-[#211E18]/40 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasjon"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white border-l border-[#DDD0BE] p-6 flex flex-col sm:hidden transition-transform duration-300 shadow-[-4px_0_20px_rgba(33,30,24,0.1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Image src="/logo.png" alt="Tømrar Åge Vik" width={100} height={40} className="h-8 w-auto" />
          <button
            ref={lastFocusRef}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center h-9 w-9 rounded-lg text-[#6B5E4E] hover:text-[#211E18] hover:bg-[#EBE3D5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
            aria-label="Lukk meny"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              ref={i === 0 ? firstFocusRef : undefined}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base text-[#6B5E4E] hover:text-[#211E18] hover:bg-[#EBE3D5] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-6 border-t border-[#DDD0BE]">
          <a
            href="tel:92816022"
            className="flex items-center justify-center gap-2 h-12 rounded-lg border border-[#DDD0BE] text-[#211E18] hover:bg-[#EBE3D5] transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            <Phone className="h-4 w-4 text-[#C97C2A]" />
            Ring 928 16 022
          </a>
          <Button size="lg" variant="green" className="w-full" asChild>
            <a href="#kontakt" onClick={() => setOpen(false)}>
              Få gratis tilbud
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
