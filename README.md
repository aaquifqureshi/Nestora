# 🏠 Nestora

Nestora is a modern real-estate landing website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It focuses on a polished property-marketing experience with animated content, responsive layouts, visual property browsing, testimonials, and video-driven sections.

> **Project type:** Frontend-focused real-estate marketing / landing website.
> **Current scope:** Static/demo property content with interactive UI behavior. There is no backend, database, authentication, or real property-management workflow in the current codebase.

## Features

### Hero and Navigation
- Responsive desktop and mobile hero layouts
- Animated hero headline using Framer Motion
- Property/interior imagery
- Sticky responsive navigation
- Mobile menu with keyboard Escape handling
- Reduced-motion handling for the animated hero

### Property Showcase
- Typed property data rendered from TypeScript objects
- Property selection interface
- Dynamic property details
- Year, address, area, bedrooms, bathrooms, and price
- Responsive property presentation
- Horizontal location/property slider
- Pointer-drag interaction

### Visual Sections
- Video-backed analytics/intro section
- Animated numerical counters
- Residential property introduction
- Image and video testimonials
- Company/partner showcase
- Contact and lead-capture presentation
- Buy / Sell calls to action
- Separate responsive desktop/mobile contact layouts

## Architecture

Built with the Next.js App Router and reusable TypeScript components.

```text
Nestora/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── manifest.json
├── components/
│   ├── ContactSection/
│   ├── FeedbackSection/
│   ├── HeroSection/
│   ├── PropertySection/
│   ├── SubHeroSection/
│   ├── CTAButton.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── hooks/
│   └── ScrollCountAnimation.ts
├── types/
│   ├── feedback.ts
│   ├── location.ts
│   └── properties.ts
└── public/
    ├── Images/
    └── Video/
```

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Next Image

## Data and Interactivity

Property and location data are currently defined in the frontend. The property interface contains fields such as id, name, year, address, area, bath, bed, price, and image.

The contact area contains email and budget inputs, but the current implementation does not persist submissions or send them to an external service.

## Accessibility and Responsive Behavior
- Semantic section structure
- Accessible navigation attributes such as aria-label, aria-expanded, and aria-controls
- Keyboard Escape handling for the mobile menu
- Reduced-motion handling
- Responsive mobile/tablet/desktop layouts
- Image alt text

## Running Locally

```bash
git clone https://github.com/aaquifqureshi/Nestora.git
cd Nestora
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Current Limitations
- No backend or database
- No authentication
- No real property search/filtering
- No CMS integration
- No persistent lead management
- No real booking or transaction workflow
- Several CTA links are presentation-only

## Possible Next Improvements
- Property API/database
- Search and filtering
- Property detail routes
- Authentication and user accounts
- Agent/admin dashboard
- Lead management
- CMS integration
- API-backed inquiry forms
- Analytics and conversion tracking

## Project Context

Nestora was built as a frontend web project focused on responsive layout design, reusable React components, animation, interactive property presentation, and polished visual storytelling.