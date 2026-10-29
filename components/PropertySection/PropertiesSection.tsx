'use client'

import { useState } from 'react'
import PropertyDetails from './PropertyDetails'
import CTAButton from '../CTAButton'
import type { Property } from '@/types/properties'
import PropertySlider from './PropertySlider'

const properties: Property[] = [
  {
    id: 'willow-house',
    name: 'The Willow House',
    year: 2025,
    address: 'Brooklyn, New York',
    area: '2,850 sq ft',
    bath: 3,
    bed: 4,
    price: '$1,240,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'cedar-house',
    name: 'Cedar House',
    year: 2024,
    address: 'Austin, Texas',
    area: '3,210 sq ft',
    bath: 3,
    bed: 4,
    price: '$1,495,000',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'juniper-residence',
    name: 'Juniper Residence',
    year: 2025,
    address: 'Los Angeles, California',
    area: '2,320 sq ft',
    bath: 2,
    bed: 3,
    price: '$2,150,000',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'linden-retreat',
    name: 'Linden Retreat',
    year: 2023,
    address: 'Portland, Oregon',
    area: '1,890 sq ft',
    bath: 2,
    bed: 3,
    price: '$980,000',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'sol-house',
    name: 'Sol House',
    year: 2025,
    address: 'Scottsdale, Arizona',
    area: '2,760 sq ft',
    bath: 3,
    bed: 4,
    price: '$1,075,000',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  },
]

export default function PropertiesSection() {
  const [selectedProperty, setSelectedProperty] = useState<Property>(properties[0])

  return (
    <section id="properties" className="bg-brand-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-forest sm:text-xs">A considered collection</p>
            <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-editorial text-brand-ink sm:text-5xl md:text-6xl">
              Homes with a <em className="font-normal text-brand-forest">point of view.</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted sm:text-base">
              Explore this illustrative collection of thoughtfully designed spaces. Listing details are sample content for this Nestora demo.
            </p>
          </div>
          <CTAButton href="#contact" className="self-start lg:self-auto">Talk through your search</CTAButton>
        </div>

        <div className="mb-7 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2" role="tablist" aria-label="Select a sample property">
          {properties.map((property, index) => {
            const active = selectedProperty.id === property.id
            return (
              <button
                key={property.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="selected-property-details"
                onClick={() => setSelectedProperty(property)}
                className={`inline-flex shrink-0 items-center gap-3 rounded-full border px-4 py-3 text-left text-xs transition-all duration-300 ${
                  active
                    ? 'border-brand-forest bg-brand-forest text-white'
                    : 'border-brand-line bg-transparent text-brand-muted hover:border-brand-sage hover:bg-white/70'
                }`}
              >
                <span className={`text-[9px] tracking-[0.12em] ${active ? 'text-brand-sage' : 'text-brand-clay'}`}>0{index + 1}</span>
                <span className="whitespace-nowrap">{property.name}</span>
              </button>
            )
          })}
        </div>

        <div id="selected-property-details" role="tabpanel" aria-label={selectedProperty.name}>
          <PropertyDetails property={selectedProperty} />
        </div>

        <div className="mt-20 border-t border-brand-line pt-12 sm:mt-24 sm:pt-16">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-forest sm:text-xs">Find your setting</p>
              <h3 className="font-display text-3xl tracking-editorial text-brand-ink sm:text-4xl">Different places. Different possibilities.</h3>
            </div>
            <p className="max-w-sm text-sm leading-7 text-brand-muted">Browse a few of the lifestyles a home can open up.</p>
          </div>
        </div>
      </div>
      <PropertySlider />
    </section>
  )
}
