// Languages: English lives at the root (/, /guides/botox), Korean under /ko (/ko, /ko/guides/botox).
// Each component keeps its own `{ en, ko }` copy next to its markup; content data (treatments,
// concerns, FAQs) is translated in lib/i18n/ko/ and merged by lib/i18n/content.ts.

export const langs = ["en", "ko"] as const;
export type Lang = (typeof langs)[number];

export const langLabels: Record<Lang, string> = { en: "EN", ko: "KO" };
export const langNames: Record<Lang, string> = { en: "English", ko: "한국어" };
export const ogLocale: Record<Lang, string> = { en: "en_CA", ko: "ko_KR" };
export const schemaLang: Record<Lang, string> = { en: "en-CA", ko: "ko" };

// Turn a language-neutral path ("/", "/guides/botox", "/#consult") into the path for `lang`.
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  if (path === "/") return "/ko";
  if (path.startsWith("/#")) return `/ko${path.slice(1)}`;
  return `/ko${path}`;
}

// hreflang alternates for a language-neutral path, for page metadata.
export function languageAlternates(path: string) {
  return {
    en: localePath("en", path),
    ko: localePath("ko", path),
    "x-default": localePath("en", path),
  };
}
