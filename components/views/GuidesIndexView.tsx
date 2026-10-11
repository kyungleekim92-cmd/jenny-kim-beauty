// Index of every treatment guide (/guides, /ko/guides) — a crawlable hub linking to each guide.
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangRoot from "@/components/views/LangRoot";
import { pageCopy } from "@/components/views/copy";
import { localePath, type Lang } from "@/lib/i18n";
import { getConditions, getTreatments } from "@/lib/i18n/content";
import { concernPath, guidePath, guidesIndexJsonLd } from "@/lib/seo";

export default function GuidesIndexView({ lang }: { lang: Lang }) {
  const p = pageCopy[lang];
  const to = (path: string) => localePath(lang, path);

  return (
    <LangRoot lang={lang}>
      <JsonLd data={guidesIndexJsonLd(lang)} />
      <Nav lang={lang} path="/guides" home={false} />
      <main id="top" className="guide">
        <section className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href={to("/")}>{p.home}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{p.guides}</span>
            </nav>
            <header className="mt-4">
              <p className="eyebrow chrome">{p.indexEyebrow}</p>
              <h1 className="display-sm mt-2">{p.indexTitle}</h1>
              <p className="lede mt-3">{p.indexLede}</p>
            </header>
            <ul className="guide-list guide-block">
              {getTreatments(lang).map((t) => (
                <li key={t.slug}>
                  <Link href={to(guidePath(t))}>
                    <span className="guide-list-num" aria-hidden="true">
                      {t.number}
                    </span>
                    <span className="guide-list-name">{t.name}</span>
                    <span className="guide-list-tag">{t.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <section className="guide-block" aria-labelledby="by-concern-title">
              <h2 id="by-concern-title" className="eyebrow chrome">
                {p.byConcern}
              </h2>
              <ul className="concern-links mt-2">
                {getConditions(lang).map((c) => (
                  <li key={c.slug}>
                    <Link href={to(concernPath(c))} className="underline-draw">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
