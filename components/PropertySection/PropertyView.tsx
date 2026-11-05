'use client'

import Image from 'next/image'
import type { Location } from '@/types/location'

export default function PropertyView({ location }: { location: Location }) {
  return (
    <article className="property-card group relative h-[300px] w-[82vw] shrink-0 overflow-hidden rounded-2xl bg-brand-sage/30 sm:h-[370px] sm:w-[60vw] md:h-[430px] md:w-[44vw] lg:w-[34vw] xl:w-[31vw]" role="listitem" aria-label={location.name}>
      <Image
        src={location.image}
        alt={`Home inspiration: ${location.name}`}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 34vw"
        draggable={false}
        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/15 to-transparent transition-colors duration-500 group-hover:from-brand-deep/90" />

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
        <div>
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">A way to live</p>
          <h3 className="font-display text-2xl leading-tight sm:text-3xl md:text-4xl">{location.name}</h3>
        </div>
        <a href="#contact" aria-label={`Ask about ${location.name}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-ink transition-all duration-300 hover:-rotate-45 hover:bg-brand-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-forest">
          <span aria-hidden="true" className="text-lg">↗</span>
        </a>
      </div>
    </article>
  )
}
