'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

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
            ? 'bg-[#161210]/97 backdrop-blur-md border-b border-[#2E2820] shadow-[0_1px_12px_rgba(0,0,0,0.3)]'
            : 'bg-[#161210]'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Åge Vik Tømrer – til toppen">
            <Image
              src="/logo.png"
              alt="Tømrar Åge Vik – logo"
              width={100}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <nav className="flex items-center gap-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-xs font-display font-semibold uppercase tracking-widest text-[#9B8E7E] hover:text-[#F0EAD6] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="h-4 w-px bg-[#2E2820]" />
            <a
              href="tel:92816022"
              className="flex items-center gap-1.5 text-sm font-display font-semibold text-[#9B8E7E] hover:text-[#C97C2A] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#C97C2A]" />
              928 16 022
            </a>
            <a
              href="#kontakt"
              className="bg-[#C97C2A] hover:bg-[#AE6820] active:scale-95 px-4 py-2 text-xs font-display font-semibold uppercase tracking-widest text-white transition-colors shadow-[0_2px_10px_rgba(201,124,42,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
            >
              Gratis befaring
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="sm:hidden flex items-center justify-center h-9 w-9 text-[#9B8E7E] hover:text-[#F0EAD6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
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
          className="fixed inset-0 z-50 bg-[#161210]/60 backdrop-blur-sm sm:hidden"
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
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#161210] border-l border-[#2E2820] p-6 flex flex-col sm:hidden transition-transform duration-300 shadow-[-4px_0_30px_rgba(0,0,0,0.4)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Image
            src="/logo.png"
            alt="Tømrar Åge Vik"
            width={80}
            height={32}
            className="h-7 w-auto brightness-0 invert opacity-80"
          />
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center h-8 w-8 text-[#9B8E7E] hover:text-[#F0EAD6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A]"
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
              className="px-3 py-3 text-sm font-display font-semibold uppercase tracking-widest text-[#9B8E7E] hover:text-[#F0EAD6] transition-colors border-b border-[#2E2820]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-6 border-t border-[#2E2820]">
          <a
            href="tel:92816022"
            className="flex items-center justify-center gap-2 h-11 border border-[#2E2820] text-[#9B8E7E] hover:text-[#F0EAD6] hover:border-[#C97C2A]/40 transition-colors font-display font-semibold text-sm"
            onClick={() => setOpen(false)}
          >
            <Phone className="h-4 w-4 text-[#C97C2A]" />
            Ring 928 16 022
          </a>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center h-11 bg-[#C97C2A] hover:bg-[#AE6820] text-white font-display font-semibold text-sm transition-colors"
          >
            Gratis befaring
          </a>
        </div>
      </div>
    </>
  )
}
