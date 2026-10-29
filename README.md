# Nestora

Nestora is a real-estate landing page concept built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The experience is designed around thoughtful property discovery, editorial typography, architectural photography, and clear next steps.

## Design direction

- Forest green, warm cream, sage, and clay accents.
- Playfair Display-inspired editorial headlines paired with a calm sans-serif interface.
- Image-led responsive hero and curated property presentation.
- Accessible mobile navigation, property selection tabs, and scroll-aware motion.
- Reduced-motion support for animated sections.
- Consistent rounded calls to action, clear section anchors, and responsive spacing.

## Current experience

- Responsive navigation and cinematic image-led hero.
- Editorial brand statement and approach sections.
- Selectable illustrative property collection with location, size, bed/bath, and sample price details.
- Draggable horizontal lifestyle image rail.
- Brand principles section instead of fabricated testimonials and partner logos.
- Responsive inquiry UI with client-side validation.
- Updated metadata and PWA theme colors.

## Demo limitations

This is a frontend concept, not a live listing service. The property names, addresses, prices, and images in the showcase are illustrative. There is no property API, database, authentication, saved-search service, or lead-management backend. The inquiry form shows a clear demo status and does not send or store submissions.

Before production use, replace the sample listings with verified inventory, configure a real contact destination, connect an enquiry endpoint, and review the image license/usage requirements for the chosen assets.

## Tech stack

- Next.js 16 / App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Next Image

## Run locally

```bash
npm install
npm run dev
```

Production build and lint:

```bash
npm run build
npm run lint
```
