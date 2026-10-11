# Jenny Kim, Beauty Consultant — website

One-page site: Next.js 16 App Router, TypeScript, no Tailwind (hand-written design system in
`app/globals.css` + `app/animations.css`). Deployed on Vercel.

## Preview locally

```bash
npm install   # only needed once
npm run dev   # → http://localhost:3000
```

Production check: `npm run build` and `npm run lint`.

## Page sections (top to bottom, `app/page.tsx`)

Hero → How it works → Treatment guides (`lib/treatments.ts`) → Skin quiz (`lib/conditions.ts`) →
Consultation booking form → About → Partner spas → FAQ (`lib/faqs.ts`) → Contact → Footer.

Business details (address, Instagram, nav) live in `lib/site.ts`.

## Forms → Jenny's inbox

The consultation form and the quiz "Send my matches" form are emailed to Jenny through
[Web3Forms](https://web3forms.com) (free, 250 submissions/month). Submissions arrive with the
visitor's email as reply-to, so Jenny can answer with a plain "Reply".

**To switch them on:** enter the inbox address at web3forms.com, copy the access key it emails
you, and paste it into `formsAccessKey` in `lib/site.ts`. Until then, both forms tell visitors to
message Jenny on Instagram instead of pretending the request went through.

## Still to do

1. Web3Forms access key (above)
2. Own domain — then set `metadataBase` in `app/layout.tsx`
3. Partner spa profiles once agreements are signed (`components/Partners.tsx`)
4. Legal review of the referral-fee disclosure wording (Ontario)
5. Footer year is hardcoded (`components/Footer.tsx`) — bump in January

## Notes

- `site.categories` in `lib/site.ts` has skincare active; hair/nail/style/travel are stubbed
  inactive for future expansion.
- Copy compliance: Health Canada framing (never FDA), softened claims, consultant-not-practitioner
  disclaimers on guides, quiz, and footer.
- Share preview image: `app/opengraph-image.jpg`; tab icon: `app/favicon.ico` + `app/apple-icon.png`.
