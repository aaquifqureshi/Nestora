'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import CTAButton from '../CTAButton'

const approachImage = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85'

const approachPoints = [
  { number: '01', title: 'Start with what matters', body: 'The location, the feeling, the space to grow — begin with your priorities.' },
  { number: '02', title: 'Explore thoughtfully', body: 'Compare homes with a clearer view of the details that shape everyday living.' },
  { number: '03', title: 'Move with confidence', body: 'When a place feels right, use it as the starting point for your next conversation.' },
]

export default function IntroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="approach" className="bg-brand-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 grid gap-7 md:grid-cols-2 md:items-end lg:mb-16">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-forest sm:text-xs">Less noise, more clarity</p>
            <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-editorial text-brand-ink sm:text-5xl md:text-6xl">
              Your next chapter deserves a <em className="font-normal text-brand-forest">better beginning.</em>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-brand-muted md:justify-self-end sm:text-base sm:leading-8">
            We make room for the practical and the personal. A home is an address, of course — but it’s also the quiet morning, the dinner with friends, and the everyday rituals that make it yours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[1.12] overflow-hidden rounded-t-[8rem] sm:rounded-t-[11rem] lg:aspect-[0.96]">
              <Image
                src={approachImage}
                alt="Sunlit modern living room with natural materials and garden views"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.035]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[14rem] border border-brand-line bg-white p-5 shadow-soft sm:right-8 sm:p-6">
              <p className="font-display text-2xl leading-tight text-brand-ink">A place for your life to unfold.</p>
              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-brand-muted">The Nestora philosophy</p>
            </div>
          </motion.div>

          <div className="pt-5 lg:pt-0">
            <div className="divide-y divide-brand-line border-y border-brand-line">
              {approachPoints.map((point) => (
                <div key={point.number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-7">
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-brand-clay">{point.number}</span>
                  <div>
                    <h3 className="font-display text-2xl text-brand-ink sm:text-3xl">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-brand-muted">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="#properties">Find your next home</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
