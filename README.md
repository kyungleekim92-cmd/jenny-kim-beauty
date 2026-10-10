# Jenny Kim, Beauty Consultant — website draft

First working draft (2026-10-10). Next.js 16 App Router, TypeScript, no Tailwind (hand-written
design system in `app/globals.css` following the Chanel-benchmark brief).

## Preview locally

```bash
cd site
npm install   # only needed once
npm run dev   # → http://localhost:3000
```

Production check: `npm run build` (verified passing — 32 static pages).

## What's built

- **Home** (`/`) — hero, how-it-works (3 steps), numbered treatment chapters, St. Regis venue
  feature band, quiz teaser, FAQ teaser
- **Treatment Guides** (`/guides`, `/guides/[slug]`) — 20 guides with original copy, concern
  filters, quick-facts panel, FAQs, related guides, prev/next navigation
- **Skin Quiz** (`/quiz`) — 4-step client quiz (concerns → downtime → matched guides + email capture)
- **Book a Consultation** (`/consultation`) — full lead form (contact, concerns, goals, skin
  type/tone, history, budget, Toronto area, health pre-screen, consent). Front-end only; the
  submit handler has a `// BACKEND:` comment marking where `/api/consultations` or Formspree plugs in.
- **About** (`/about`), **Partner Spas** (`/partners`), **FAQ** (`/faq`), **Contact** (`/contact`)

Design tokens: `--ink #141211`, `--cream #F6F1EA`, `--cream-2 #EDE6DB`, `--bronze #A88B5F`;
Cormorant Garamond (display) + Inter (body) via `next/font/google`. Scroll-reveal motion with
`prefers-reduced-motion` respected. Mobile responsive with full-screen overlay menu.

## Image placeholders

`PlaceholderImage` components mark every art slot with required specs:
- Portraits (Jenny): 4:5, warm desaturated grade, partial face crops, no stock smiles
- Treatment texture/macros: 16:9, soft light
- Consultation suite interior: 4:5, calm warm neutrals

## Still needed before launch

1. Real photography (see specs above) + Jenny's portrait
2. Real contact details (`lib/site.ts` has placeholders: email, phone, Instagram)
3. Partner spa pricing + confirmed partner profiles (`/partners` has a "in discussion" slot for Skinlab)
4. Booking backend for the consultation + quiz email capture (marked `// BACKEND:`)
5. Brand logo/wordmark asset (currently typeset)
6. Legal review of testimonials/before-after plans + referral-fee disclosure wording (Ontario rules)
7. More design benchmarks from Jenny (Chanel applied; additional refs to be folded in)
8. GitHub repo + Vercel project (accounts pending) — then `vercel --prod`

## Notes for future work

- IA is extensible: `site.categories` in `lib/site.ts` has skincare active; hair/nail/style/travel
  are stubbed inactive for the future "Beauty Holt" expansion.
- Copy compliance baked in: Health Canada framing (never FDA), softened claims, consultant-not-
  practitioner disclaimers on guides, quiz, and footer.
