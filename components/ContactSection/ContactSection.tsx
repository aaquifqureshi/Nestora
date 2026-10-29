'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'

const contactImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'Buying a home', budget: '' })
  const [status, setStatus] = useState('')

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (status) setStatus('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Demo only: your details have not been sent or stored. Connect an enquiry endpoint to receive real leads.')
  }

  return (
    <section id="contact" className="bg-brand-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-2xl bg-brand-forest text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
            <Image
              src={contactImage}
              alt="Warm, sunlit living space with natural finishes"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-brand-deep/10 to-transparent lg:bg-gradient-to-r" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">The next chapter starts somewhere</p>
              <p className="max-w-md font-display text-3xl leading-tight sm:text-4xl">Let’s find the place that feels right.</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-sage sm:text-xs">Start a conversation</p>
            <h2 className="max-w-lg font-display text-3xl leading-tight tracking-editorial sm:text-4xl md:text-5xl">Tell us what home looks like to you.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
              Share a few details to shape your search. This form is a UI demo and is not connected to a lead-management service.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nestora-name" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">Your name</label>
                  <input
                    id="nestora-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    required
                    className="min-h-12 w-full border-b border-white/30 bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-sage focus:outline-none"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="nestora-email" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">Email address</label>
                  <input
                    id="nestora-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    required
                    className="min-h-12 w-full border-b border-white/30 bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-sage focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nestora-interest" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">I’m interested in</label>
                  <select
                    id="nestora-interest"
                    name="interest"
                    value={form.interest}
                    onChange={(event) => updateField('interest', event.target.value)}
                    className="min-h-12 w-full border-b border-white/30 bg-brand-forest py-3 text-sm text-white focus:border-brand-sage focus:outline-none"
                  >
                    <option>Buying a home</option>
                    <option>Renting a home</option>
                    <option>Selling a property</option>
                    <option>Exploring possibilities</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nestora-budget" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">Budget (optional)</label>
                  <select
                    id="nestora-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(event) => updateField('budget', event.target.value)}
                    className="min-h-12 w-full border-b border-white/30 bg-brand-forest py-3 text-sm text-white focus:border-brand-sage focus:outline-none"
                  >
                    <option value="">Select a range</option>
                    <option value="Under $500k">Under $500k</option>
                    <option value="$500k–$1m">$500k–$1m</option>
                    <option value="$1m–$2m">$1m–$2m</option>
                    <option value="$2m+">$2m+</option>
                    <option value="Undecided">Still deciding</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="group mt-2 inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-brand-cream px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-forest">
                Preview inquiry <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">↗</span>
              </button>

              {status && <p role="status" aria-live="polite" className="rounded-xl border border-white/20 bg-white/10 p-4 text-xs leading-6 text-white/85">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
