# Jenny Kim, Beauty Consultant — website

One-page site: Next.js 16 App Router, TypeScript, no Tailwind (hand-written design system in
`app/globals.css` + `app/animations.css`). Deployed on Vercel.

## Preview locally

```bash
npm install   # only needed once
npm run dev   # → http://localhost:3000
```

Production check: `npm run build` and `npm run lint`.

**Working on this repo (people or AI agents):** read `AGENTS.md` first. It holds the shared rules
for every change (Claude Code loads it via `CLAUDE.md`; Codex reads it directly).

## Page sections (top to bottom, `app/page.tsx`)

Hero → How it works → Treatment guides (`lib/treatments.ts`) → Skin quiz (`lib/conditions.ts`) →
Consultation booking form → About → Partner spas → FAQ (`lib/faqs.ts`) → Contact → Footer.

Business details (domain, address, Instagram, nav) live in `lib/site.ts`.

## Search (SEO / AI answer engines)

- `/guides` and `/guides/[slug]` — one indexable page per treatment, generated from `lib/treatments.ts`.
- `/concerns/[page]` — one page per skin concern (overview + treatment options), from `lib/conditions.ts`.
- `lib/seo.ts` — schema.org JSON-LD (business, Jenny, FAQs, guide pages) and shared helpers.
- `app/sitemap.ts`, `app/robots.ts`, and `app/llms.txt/route.ts` (plain-language summary for AI assistants).
- Bump `REVIEWED` / `REVIEWED_LABEL` in `lib/seo.ts` when guide content changes (shown on pages and in the sitemap).
- Google / Bing ownership: paste each console's HTML-tag code into `site.verification` in `lib/site.ts`.
- After deploying new or changed pages, run `node scripts/indexnow.mjs` to notify Bing (and other IndexNow engines).

Live at https://www.byjennykim.com (bare domain redirects to www; registered at GoDaddy, nameservers on Vercel).

## Forms → Jenny's inbox

The consultation form and the quiz "Send my matches" form are emailed to Jenny through
[Web3Forms](https://web3forms.com) (free, 250 submissions/month). Submissions arrive with the
visitor's email as reply-to, so Jenny can answer with a plain "Reply".

**To switch them on:** enter the inbox address at web3forms.com, copy the access key it emails
you, and paste it into `formsAccessKey` in `lib/site.ts`. Until then, both forms tell visitors to
message Jenny on Instagram instead of pretending the request went through.

## Shop (Amazon affiliate)

`/shop` ("The Edit") lists products from `lib/shop.ts`, each linked to Amazon.ca with the Associates
tracking ID in `amazon.tag`. A product shows only once it has an `asin`, `name` and `note`, and the
page, nav link and sitemap entry stay hidden until at least one product is live.

## Still to do

1. Web3Forms access key (above)
2. Partner spa profiles once agreements are signed (`components/Partners.tsx`)
3. Legal review of the liability fine print and partner-privileges wording (Ontario)
4. Footer year is hardcoded (`components/Footer.tsx`) — bump in January

## Notes

- `site.categories` in `lib/site.ts` has skincare active; hair/nail/style/travel are stubbed
  inactive for future expansion.
- Copy compliance: Health Canada framing (never FDA), softened claims, consultant-not-practitioner
  disclaimers on guides, quiz, and footer.
- Share preview image: `app/opengraph-image.jpg`; tab icon: `app/favicon.ico` + `app/apple-icon.png`.
