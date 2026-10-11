import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

// Marks Korean pages with lang="ko" (the root <html> is English), which drives Korean
// typography in animations.css and tells browsers and screen readers the language.
export default function LangRoot({ lang, children }: { lang: Lang; children: ReactNode }) {
  return lang === "en" ? <>{children}</> : <div lang={lang}>{children}</div>;
}
