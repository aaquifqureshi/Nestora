'use client'

import { motion, useReducedMotion } from 'framer-motion'

const principles = [
  {
    number: '01',
    title: 'Considered, not crowded',
    copy: 'Explore a focused collection of homes, presented with the details that help a space make sense for you.',
  },
  {
    number: '02',
    title: 'Personal, not pressured',
    copy: 'Your priorities set the pace. A home search should feel like a conversation, not a sales funnel.',
  },
  {
    number: '03',
    title: 'Clear from the start',
    copy: 'Straightforward information and useful next steps help you move from inspiration to a confident decision.',
  },
]

export default function FeedbackSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-forest sm:text-xs">The Nestora way</p>
            <h2 className="max-w-lg font-display text-4xl leading-[1.02] tracking-editorial text-brand-ink sm:text-5xl md:text-6xl">
              Make space for what <em className="font-normal text-brand-forest">matters.</em>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
              Property decisions are personal. We’re designing a home-finding experience that puts the person before the process.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-brand-forest/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-forest transition-colors hover:border-brand-forest">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <div className="divide-y divide-brand-line border-y border-brand-line">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.08 }}
                className="group grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-9"
              >
                <span className="pt-1 text-[10px] font-semibold tracking-[0.18em] text-brand-clay sm:text-xs">{principle.number}</span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-brand-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">{principle.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-brand-muted sm:text-base">{principle.copy}</p>
                </div>
                <span className="col-start-2 mt-1 h-px w-12 bg-brand-sage transition-all duration-500 group-hover:w-20" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
