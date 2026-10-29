'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const heroImage = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=90'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" aria-labelledby="hero-heading" className="overflow-hidden bg-brand-cream">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 py-4 lg:py-8"
        >
          <div className="mb-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-forest sm:text-xs">
            <span className="h-px w-8 bg-brand-clay" />
            Homes chosen with intention
          </div>

          <h1 id="hero-heading" className="max-w-xl font-display text-5xl font-normal leading-[0.99] tracking-editorial text-brand-ink sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.4rem]">
            Find a place
            <br />
            to call <em className="font-normal text-brand-forest">your own.</em>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
            A more considered way to find home. Explore thoughtful spaces, discover new possibilities, and move forward with clarity.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a href="#properties" className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-brand-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-soft">
              Explore properties
              <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a href="#approach" className="inline-flex min-h-12 items-center justify-center gap-3 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink transition-colors hover:text-brand-forest">
              Our approach <span aria-hidden="true" className="text-lg">↓</span>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-brand-line pt-6">
            <span className="flex -space-x-2" aria-hidden="true">
              <span className="h-8 w-8 rounded-full border-2 border-brand-cream bg-brand-sage" />
              <span className="h-8 w-8 rounded-full border-2 border-brand-cream bg-brand-clay/80" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-cream bg-brand-forest text-[10px] text-white">N.</span>
            </span>
            <p className="max-w-xs text-xs leading-5 text-brand-muted">Space to grow into. A process that feels personal.</p>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.12, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="relative aspect-[0.92] overflow-hidden rounded-t-[10rem] rounded-b-2xl sm:rounded-t-[14rem] lg:aspect-[0.88] lg:rounded-t-[15rem]">
            <Image
              src={heroImage}
              alt="Contemporary home surrounded by trees and considered landscaping"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-brand-ink/5" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.24em] text-white/75">A place to begin</p>
                <p className="font-display text-2xl sm:text-3xl">Come home to possibility.</p>
              </div>
              <a href="#properties" aria-label="Explore property collection" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-ink transition-transform duration-300 hover:-rotate-45">
                <span aria-hidden="true" className="text-xl">↗</span>
              </a>
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 hidden border border-brand-line bg-brand-cream px-5 py-4 shadow-soft sm:block md:-left-10 md:bottom-10">
            <p className="text-[9px] uppercase tracking-[0.2em] text-brand-muted">The Nestora outlook</p>
            <p className="mt-1 font-display text-lg text-brand-ink">Space for what’s next.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
