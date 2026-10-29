'use client'

import React from 'react'

export default function CTAButton({
  children,
  href = '#contact',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-brand-forest px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream ${
        className
      }`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
    </a>
  )
}
