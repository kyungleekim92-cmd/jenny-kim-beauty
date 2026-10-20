// Standard chrome for a chapter page (/begin, /book, /about, /faq): nav, breadcrumb, the
// chapter's existing section components, footer.
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangRoot from "@/components/views/LangRoot";
import { pageCopy } from "@/components/views/copy";
import { localePath, type Lang } from "@/lib/i18n";

type ChapterViewProps = {
  lang: Lang;
  /** Language-neutral path ("/about"), for the nav and the EN | KO switch. */
  path: string;
  /** Breadcrumb label for this page. */
  crumb: string;
  jsonLd?: object;
  children: ReactNode;
};

export default function ChapterView({ lang, path, crumb, jsonLd, children }: ChapterViewProps) {
  const p = pageCopy[lang];

  return (
    <LangRoot lang={lang}>
      {jsonLd && <JsonLd data={jsonLd} />}
      <Nav lang={lang} path={path} home={false} />
      <main id="top">
        <div className="wrap-narrow chapter-crumb">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href={localePath(lang, "/")}>{p.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
        </div>
        {children}
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
