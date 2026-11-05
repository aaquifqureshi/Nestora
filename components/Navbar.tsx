'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'Properties', href: '#properties' },
  { label: 'Our approach', href: '#approach' },
  { label: 'The Nestora way', href: '#experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    const onClick = (event: MouseEvent) => {
      if (!open) return
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/80 bg-brand-cream/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="#home" onClick={closeMenu} className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream" aria-label="Nestora home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-forest text-brand-cream transition-transform duration-300 group-hover:rotate-[-8deg]">
            <svg viewBox="0 0 28 28" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M4 13.5 14 5l10 8.5V24h-7v-7h-6v7H4V13.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="m9 9 5-4 5 4" stroke="#a8b7a6" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-[-0.045em] text-brand-ink">nestora</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-brand-muted">Find your somewhere</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="group relative py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-ink/75 transition-colors hover:text-brand-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest">
              {link.label}
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand-forest transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-brand-forest px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-soft active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream">
            Let’s talk
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>

        <button
          ref={menuBtnRef}
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream md:hidden"
        >
          {open ? <HiX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        aria-hidden={!open}
        className={`overflow-hidden border-t border-brand-line bg-brand-cream transition-[max-height,opacity,transform] duration-300 ease-out md:hidden ${
          open ? 'max-h-96 translate-y-0 opacity-100' : 'max-h-0 -translate-y-1 opacity-0'
        }`}
      >
        <div className="space-y-1 px-5 py-4 sm:px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm text-brand-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" tabIndex={open ? 0 : -1} onClick={closeMenu} className="mt-2 flex items-center justify-between rounded-xl bg-brand-forest px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-2">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
