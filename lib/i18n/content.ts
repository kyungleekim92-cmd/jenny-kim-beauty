// Language-aware content: English sources in lib/*.ts, Korean overrides in lib/i18n/ko/*.ts.
import { DISCLAIMER, treatments, type Treatment } from "@/lib/treatments";
import { conditions, type Condition } from "@/lib/conditions";
import { faqs, type Faq } from "@/lib/faqs";
import type { Lang } from "@/lib/i18n";
import { koTreatments1 } from "@/lib/i18n/ko/treatments-1";
import { koTreatments2 } from "@/lib/i18n/ko/treatments-2";
import { koAuthorBio, koConditions, koDisclaimer, koFaqs, koShopProducts } from "@/lib/i18n/ko/content";

const koTreatments = { ...koTreatments1, ...koTreatments2 };

const byNumber = (a: Treatment, b: Treatment) => a.number.localeCompare(b.number);

// Treatments in guide order, with Korean text merged in for "ko".
export function getTreatments(lang: Lang): Treatment[] {
  const list = lang === "ko" ? treatments.map((t) => ({ ...t, ...koTreatments[t.slug] })) : treatments;
  return [...list].sort(byNumber);
}

export function getConditions(lang: Lang): Condition[] {
  return lang === "ko" ? conditions.map((c) => ({ ...c, ...koConditions[c.slug] })) : conditions;
}

export function getFaqs(lang: Lang): Faq[] {
  return lang === "ko" ? faqs.map((f, i) => koFaqs[i] ?? f) : faqs;
}

export const disclaimer: Record<Lang, string> = { en: DISCLAIMER, ko: koDisclaimer };

export const authorBio: Record<Lang, string> = {
  en: "Jenny Kim is an independent beauty consultant in Toronto. She helps clients understand aesthetic treatments before they commit, builds considered plans, and introduces them to vetted medi spas and licensed practitioners.",
  ko: koAuthorBio,
};

// Korean product names and notes for the shop, keyed by product slug.
export const shopCopy: Record<Lang, Record<string, { name: string; note: string }>> = {
  en: {},
  ko: koShopProducts,
};
