import { site } from "@/lib/site";
import { shopIsLive } from "@/lib/shop";
import { localePath, type Lang } from "@/lib/i18n";

const koLabels: Record<string, string> = {
  "#how": "상담 과정",
  "#guides": "가이드",
  "#quiz": "스킨 퀴즈",
  "#about": "소개",
  "#partners": "파트너",
  "#faq": "FAQ",
  "#contact": "문의",
  "/shop": "추천 제품",
};

// Primary navigation: the home-page sections, plus "Shop" (/shop) before Contact once the
// shop has live products.
export function navItems(lang: Lang): { href: string; label: string }[] {
  const items = shopIsLive
    ? [...site.nav.slice(0, -1), { href: "/shop", label: "Shop" }, ...site.nav.slice(-1)]
    : site.nav;
  return items.map((i) => ({ href: i.href, label: lang === "ko" ? (koLabels[i.href] ?? i.label) : i.label }));
}

// Section links ("#faq") work as-is on the home page and point to the home page elsewhere;
// page links ("/shop") get the language prefix.
export const navHref = (href: string, onHome: boolean, lang: Lang) =>
  href.startsWith("#") && onHome ? href : localePath(lang, href.startsWith("#") ? `/${href}` : href);
