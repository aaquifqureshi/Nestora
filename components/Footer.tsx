import Link from 'next/link'

const footerLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Our approach', href: '#approach' },
  { label: 'The Nestora way', href: '#experience' },
  { label: 'Start a conversation', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:pb-16">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3" aria-label="Nestora home">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg" aria-hidden="true">⌂</span>
              <span className="font-display text-3xl tracking-[-0.04em]">nestora</span>
            </Link>
            <h2 className="mt-8 max-w-xl font-display text-4xl leading-[1.02] tracking-editorial sm:text-5xl md:text-6xl">
              Make room for what’s <em className="font-normal text-brand-sage">next.</em>
            </h2>
            <a href="#properties" className="group mt-7 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-brand-sage hover:text-brand-sage">
              Explore homes <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:pt-3">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-sage">Explore</p>
              <nav aria-label="Footer navigation" className="flex flex-col items-start gap-4">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">{link.label}</a>
                ))}
              </nav>
            </div>
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-sage">Our point of view</p>
              <p className="max-w-xs text-sm leading-7 text-white/65">
                Thoughtful spaces. Clear choices. A more personal way to think about home.
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.14em] text-white/40">Illustrative frontend concept</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] tracking-wide text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nestora. All rights reserved.</p>
          <p>Find your somewhere.</p>
        </div>
      </div>
    </footer>
  )
}
