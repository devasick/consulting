# Vivek Padghan Consulting - Website

A modern, mobile-first website for Vivek Padghan Consulting based in Hamburg.

## Overview

Professional website for Vivek Padghan Consulting featuring:
- Clean, trustworthy design with German corporate aesthetics
- Mobile-first responsive layout
- Multi-language support (German/English)
- Contact form with backend integration
- WhatsApp floating button for quick contact

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form with Zod validation
- Wouter for routing

### Backend
- Express.js server
- PostgreSQL database
- Drizzle ORM for database operations
- Zod for runtime validation

## Project Structure

```
client/
├── src/
│   ├── pages/          # Home, Services, About, Contact, Legal pages
│   ├── components/     # Navbar, Footer, WhatsAppButton, Layout
│   ├── hooks/          # useContact hook for form submission
│   └── lib/            # i18n translations, queryClient
server/
├── db.ts              # Database connection
├── storage.ts         # Database storage layer
└── routes.ts          # API routes
shared/
├── schema.ts          # Database schema and types
└── routes.ts          # API contract definitions
```

## Features

### Pages
1. **Home** - Hero section with CTA, services overview, testimonials
2. **Services** - Detailed cards for 6 services:
   - Finanzbuchhaltung (Financial Accounting)
   - Lohnbuchhaltung (Payroll Accounting)
   - Jahresabschluss (Annual Financial Statements)
   - Steuererklärung (Tax Returns)
   - Unternehmensberatung (Business Consulting)
   - Existenzgründung (Startup Consulting)
3. **About** - Profile, mission, qualifications
4. **Contact** - Form with name, email, phone, message + Google Maps placeholder
5. **Impressum** - Legal notice (required in Germany)
6. **Datenschutzerklärung** - Privacy policy (GDPR compliance)

### Design
- Soft dark blue primary color (#2D4A6E)
- White and light gray backgrounds
- Rounded cards with 2xl border radius
- Subtle shadows for depth
- Large typography with Plus Jakarta Sans display font
- Inter for body text
- Sticky mobile navigation with glass effect
- WhatsApp floating button (bottom right)

### Database
Single table for contact form submissions:
- `contact_messages` - Stores inquiries from the contact form

## API Endpoints

- `POST /api/contact` - Submit contact form

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Express session secret

## Development

The application runs on a single port with Vite middleware handling frontend HMR.

Run: `npm run dev`

## Design System

- Primary: Deep corporate blue (hsl(215 45% 25%))
- Background: Light gray (hsl(210 20% 98%))
- Font Display: Plus Jakarta Sans
- Font Sans: Inter
- Border Radius: 1rem (rounded-2xl)
- Mobile-first with full responsive support
