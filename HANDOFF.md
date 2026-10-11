# Handoff — state of byjennykim.com (October 11, 2026)

For the next agent (Codex, Claude Code or Muse). **Read `AGENTS.md` first.** It holds the rules
for every change (voice, compliance, both languages, build checks, positioning). This file holds
only the current state and what is left to do.

## How to work

- Repo: `kyungleekim92-cmd/jenny-kim-beauty`. `main` is production; Vercel deploys each merge in ~2 min.
- Workflow: branch from the latest `main`, then commit and open a PR. Merge it, wait for the live
  site to show the change, then run `node scripts/indexnow.mjs` (expects HTTP 200).
- Before every commit:
  1. `npm run build`, then `npx tsc --noEmit` (build first; it generates the route types).
  2. `npm run lint`: only the 2 known errors in `components/motion.tsx` are allowed.
  3. Check the change at 1440px and 390px wide.
- Korean copy: follow `.claude/skills/korean-voice/SKILL.md`. Write natural 해요체 in Jenny's
  first person, never a translation.
- Next.js 16 with `cacheComponents`:
  - No `new Date()` in prerendered code; dates are constants.
  - Internal links use `next/link`.
  - Read `node_modules/next/dist/docs/` before using an API.

## What is live

- **Languages:** English at `/` and Korean at `/ko` on every page. The EN | KO switch sits in the
  top bar.
- **Pages:** 20 treatment guides, 12 skin-concern pages, an FAQ, the "Where to Begin" questionnaire
  (formerly "Skin Quiz"; the code still calls it `Quiz` / `#quiz`), the booking form and the shop.
- **Navigation:** a ☰ menu that turns into an X, at every screen size. The top bar shows only the
  wordmark, a small "Book a consultation" button (hidden on phones), EN | KO and ☰. All links open
  in the same tab.
- **Positioning:** discreet 30–60 minute consultations at Bay & Adelaide over tea or coffee, for
  busy Bay Street professional women.
  - The address line reads "St. Regis Hotel & Residences, 311 Bay St.". It is the owner's home,
    so never publish a floor or unit, and never name the hotel in body copy.
  - Details are in `AGENTS.md` → Positioning.
- **Forms:** Web3Forms, sent from the browser, deliver to the owner's Gmail. Korean submissions add
  `Language: Korean (한국어)`.
- **Search:**
  - Google Search Console and Bing Webmaster are verified, and the sitemap is submitted.
  - IndexNow is set up; the key is in `lib/site.ts`.
  - JSON-LD, hreflang and `llms.txt` are in place.
- **Addresses people type:** common paths such as `/contact`, `/book` and `/concerns` redirect to
  the right section (`next.config.ts`). Any other missing page shows a branded 404
  (`app/not-found.tsx`).

## Shop (`/shop`, `lib/shop.ts`)

| Product | Olive Young Global (5% off, reward code JENNYKIM10) | Amazon.ca (tag `byjennykim-20`) |
| --- | --- | --- |
| Biodance Bio-Collagen Real Deep Mask | ✅ | ✅ B0B2RM68G2 |
| Arocell Super Collagen Mask 2.0 | ✅ | ✅ B0D9LDNJ26 (the original overnight version; the owner chose to keep it) |
| Rejuran Turnover Mask (c-PDRN) | — | ✅ B0CYMZC3C6 |
| Rejuran Dual Effect Ampoule In Mask | ✅ | — |

- **Product photos** are brand-approved packshots (the owner has each brand's permission),
  re-toned onto the site's beige ground at 1200×1500 in `public/images/shop/<slug>.jpg`. New
  photos should match that look.
- **Store status:**
  - Sephora: skipped.
  - Olive Young Korea: not possible (it needs a Korean bank account and ID).

## Still to do

1. **Owner account tasks (no code):**
   - Olive Young Global: add PayPal and an address in account settings (payout from US$20).
   - Amazon Associates: needs 3 qualifying sales within 180 days of sign-up for final approval.
2. **Partner spas:** add profiles to `components/Partners.tsx` only after the owner confirms a
   signed agreement. Do this in both languages, and never invent names.
3. **Legal review:** have the footer fine print and the partner-privileges wording reviewed
   (Ontario).
4. **Footer year:** bump `YEAR` in `components/Footer.tsx` each January.
5. **Optional:** when Arocell Mask 2.0 is listed on Amazon.ca, swap its `asin` in `lib/shop.ts`.
6. **After any content change:** bump `REVIEWED` / `REVIEWED_LABEL` in `lib/seo.ts` if guides or
   concerns changed, then run IndexNow once the change is live.
