'use client'

import Image from 'next/image'
import CTAButton from '../CTAButton'
import type { Property } from '@/types/properties'

export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-brand-line bg-white shadow-soft lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
        <Image
          src={property.image}
          alt={`Exterior and architectural details of ${property.name}`}
          fill
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover transition-transform duration-[1200ms] hover:scale-[1.035]"
        />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-brand-cream/95 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-forest shadow-sm sm:left-7 sm:top-7">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-forest" />
          Sample listing
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-brand-muted">Featured residence</p>
            <p className="mt-2 text-xs text-brand-muted">Concept collection · {property.year}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-line text-lg text-brand-forest" aria-hidden="true">↗</span>
        </div>

        <div className="my-9">
          <h3 className="font-display text-3xl leading-tight tracking-editorial text-brand-ink sm:text-4xl lg:text-5xl">{property.name}</h3>
          <p className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-forest" fill="none" aria-hidden="true">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {property.address}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 border-y border-brand-line py-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.14em] text-brand-muted">Interior</p>
            <p className="mt-2 text-sm font-semibold text-brand-ink">{property.area}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.14em] text-brand-muted">Bedrooms</p>
            <p className="mt-2 text-sm font-semibold text-brand-ink">{property.bed}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.14em] text-brand-muted">Bathrooms</p>
            <p className="mt-2 text-sm font-semibold text-brand-ink">{property.bath}</p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.16em] text-brand-muted">Illustrative price</p>
            <p className="mt-2 font-display text-3xl text-brand-ink">{property.price}</p>
          </div>
          <CTAButton href="#contact">Enquire</CTAButton>
        </div>
      </div>
    </article>
  )
}
