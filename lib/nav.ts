import { site } from "@/lib/site";
import { shopIsLive } from "@/lib/shop";
import { localePath, type Lang } from "@/lib/i18n";

const koLabels: Record<string, string> = {
  "/guides": "가이드",
  "/begin": "당신에게 맞는 시술",
  "/about": "소개",
  "/faq": "FAQ",
  "/shop": "추천 제품",
  "/book": "상담 예약",
};

// Primary navigation: the chapter pages, plus "Shop" (/shop) before Book once the shop has
// live products.
export function navItems(lang: Lang): { href: string; label: string }[] {
  const items = shopIsLive
    ? [...site.nav.slice(0, -1), { href: "/shop", label: "Shop" }, ...site.nav.slice(-1)]
    : site.nav;
  return items.map((i) => ({ href: i.href, label: lang === "ko" ? (koLabels[i.href] ?? i.label) : i.label }));
}

// Page links ("/shop") get the language prefix. Any remaining section links ("#faq") work
// as-is on the home page and point to the home page elsewhere.
export const navHref = (href: string, onHome: boolean, lang: Lang) =>
  href.startsWith("#") && onHome ? href : localePath(lang, href.startsWith("#") ? `/${href}` : href);
