<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Jenny Kim, Beauty Consultant — rules for every agent and person working here

This repository is the single source of truth for **https://www.byjennykim.com**. Claude Code,
Codex, Muse and humans all work from it, so everyone follows the same rules below.

## How changes go live

- `main` is production. Every push or merge to `main` is deployed by Vercel within ~2 minutes.
- Always start from the latest `main` (`git pull origin main`) before changing anything.
- Prefer a branch + pull request for anything larger than a one-line config change.

## Before every commit (required)

1. **Change only what the task asks for.** Never delete, reformat, reorder or "tidy" unrelated
   code, copy or metadata. (A past one-line change also removed the Open Graph block in
   `app/layout.tsx`; that must not happen again.)
2. `npm run build` must pass, and `npx tsc --noEmit` must pass after the build.
3. `npm run lint`: only the two existing errors in `components/motion.tsx` are allowed. Any new
   lint error must be fixed.
4. Read `git diff` line by line and confirm every changed line is intended.
5. One clear commit message describing the change. Never commit `.env*` files.

## After a change that adds or edits pages or content

- Bump `REVIEWED` / `REVIEWED_LABEL` in `lib/seo.ts` if guide or concern content changed.
- After it is live, run `node scripts/indexnow.mjs` to notify Bing (expects HTTP 200 or 202).

## Two languages: English and Korean

- English lives at the root (`/`, `/guides/botox`); Korean under `/ko` (`/ko`, `/ko/guides/botox`).
  The EN | KO switch in the nav links each page to its twin.
- **Every copy change must be made in both languages.** UI text sits in each component as a
  `copy = { en, ko }` object; guide/concern/FAQ/shop text is translated in `lib/i18n/ko/*.ts`
  (keyed by slug) and merged by `lib/i18n/content.ts`. New treatments or concerns need a Korean
  entry too.
- Pages are shared views in `components/views/*` rendered by `app/**` (English) and `app/ko/**`
  (Korean) route files; metadata and hreflang come from `lib/i18n/meta.ts`.
- Korean voice (owner's choice): warm, professional 해요체 in Jenny's own first person
  ("저는 제니예요", 제가/저는 — not 제니는), natural spoken Korean, no slang, emojis or
  exclamation marks. Legal lines (footer fine print, booking consent) stay formal 합니다체.
  Same compliance rules: Jenny is an independent consultant, not a medical practitioner;
  캐나다 보건부(Health Canada), never the FDA. On this site "PRF" means
  pulsed radiofrequency (펄스 고주파), not platelet-rich fibrin.
- Form emails stay in English for the owner and include `Language: Korean (한국어)` for Korean
  submissions.

## Where things live

| What | File |
| --- | --- |
| Business details: domain, address, hours, Instagram, nav, form key, search verification | `lib/site.ts` |
| Treatment guides (20) → `/guides/[slug]` | `lib/treatments.ts` |
| Skin concerns (12) → `/concerns/[page]` and the Skin Quiz | `lib/conditions.ts` |
| Home FAQs | `lib/faqs.ts` |
| Structured data (JSON-LD), review date, author bio | `lib/seo.ts` |
| Sitemap, robots, AI summary | `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts` |
| Form delivery (Web3Forms, browser-side) | `lib/inquiry.ts`, `components/FormError.tsx` |
| Shop products + affiliate links (Olive Young Global/Korea, Amazon.ca, Sephora) → `/shop` | `lib/shop.ts` |
| Nav items (adds "Shop" once the shop is live) | `lib/nav.ts` |
| Korean translations of content | `lib/i18n/ko/` (merged in `lib/i18n/content.ts`) |
| Language helpers, page metadata/hreflang | `lib/i18n/index.ts`, `lib/i18n/meta.ts` |
| Styles (no Tailwind) | `app/globals.css`, `app/animations.css` |

Public-by-design values that are fine to commit: `formsAccessKey` (Web3Forms only sends to the
owner's inbox), the Google/Bing verification codes and the IndexNow key.

## Content and voice

- Tone: elegant, calm, editorial prose. Not salesy or defensive. Avoid lines like "nothing to
  sell", "no fine print", "not listings" or "unhurried".
- Jenny Kim is an **independent consultant, not a medical practitioner**. She never performs,
  injects, diagnoses or prescribes. Keep that framing everywhere.
- Use measured, educational language ("may", "often", "typically"); no guaranteed results.
  Reference **Health Canada**, never the FDA.
- Never invent credentials, years of experience, testimonials, reviews, prices or partner names.
  Do not name a partner spa until the owner confirms it is signed.
- Partner wording: introductions may include **partner privileges** (preferred pricing or
  complimentary added services, where offered). Do not reintroduce referral-fee wording unless
  the owner asks.
- Keep the small footer fine print (consultation and introductions only; the treating
  practitioner is responsible for treatments and outcomes) and the consent line in the booking
  form.
- Hours: Mon–Fri 10 am – 7 pm, Sat–Sun 11 am – 4 pm, by appointment only (`site.hours`).
- Shop (Olive Young Global, Sephora, Amazon.ca affiliate links): keep `SHOP_DISCLOSURE` on
  `/shop` (Amazon requires its line), keep `rel="sponsored"` on links, never show store prices or
  copy store product photos, and only list products the owner has chosen. Affiliate accounts
  must be in the owner's own name and country. Product notes follow the same measured voice.

## Design

- Palette: warm beige/cream grounds with deep taupe ink (tokens at the top of
  `app/globals.css`). Fonts: Cormorant Garamond (display) + Inter (body).
- Monogram/favicon: black serif "JK" on light beige `#efe8dc` (`app/favicon.ico`,
  `app/apple-icon.png`).
- Check every visual change at desktop (1440px) and phone (~390px) widths before committing.
