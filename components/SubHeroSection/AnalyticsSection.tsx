'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const interiorImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85'

const principles = [
  { number: '01', title: 'Space that fits', copy: 'Look beyond a floor plan to the way a home can support your life.' },
  { number: '02', title: 'Details that matter', copy: 'Thoughtful design, natural light, and practical living all belong in the picture.' },
  { number: '03', title: 'A clearer next step', copy: 'Explore at your own pace, with the information you need to move forward.' },
]

export default function AnalyticsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="point-of-view-heading" className="relative isolate overflow-hidden bg-brand-deep text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src={interiorImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-brand-deep/85" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/3 bg-white/[0.035] lg:block" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="max-w-xl"
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-sage sm:text-xs">
              <span className="h-px w-8 bg-brand-clay" />
              A different point of view
            </p>
            <h2 id="point-of-view-heading" className="font-display text-4xl leading-[1.04] tracking-editorial sm:text-5xl md:text-6xl">
              The right home changes how the <em className="font-normal text-brand-sage">everyday</em> feels.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We believe finding a home should feel inspiring, not overwhelming. Start with spaces worth imagining yourself in, then take the next step when it feels right.
            </p>
            <a href="#approach" className="mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-brand-sage hover:text-brand-sage">
              The Nestora approach <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 sm:grid-cols-[3.25rem_1fr] sm:gap-6 sm:py-8"
              >
                <span className="pt-1 text-[10px] tracking-[0.16em] text-brand-sage sm:text-xs">{item.number}</span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-white/65">{item.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
