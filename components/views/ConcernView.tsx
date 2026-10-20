// One skin-concern page (/concerns/acne-scars, /ko/concerns/acne-scars).
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangRoot from "@/components/views/LangRoot";
import { pageCopy } from "@/components/views/copy";
import type { Condition } from "@/lib/conditions";
import { localePath, type Lang } from "@/lib/i18n";
import { authorBio, disclaimer } from "@/lib/i18n/content";
import { REVIEWED, REVIEWED_LABEL, concernJsonLd, concernPath, guidePath, treatmentsFor } from "@/lib/seo";

export default function ConcernView({ c, lang, title }: { c: Condition; lang: Lang; title: string }) {
  const p = pageCopy[lang];
  const options = treatmentsFor(c, lang);
  const to = (path: string) => localePath(lang, path);

  return (
    <LangRoot lang={lang}>
      <JsonLd data={concernJsonLd(c, title, lang)} />
      <Nav lang={lang} path={concernPath(c)} home={false} />
      <main id="top" className="guide">
        <article className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href={to("/")}>{p.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href={to("/guides")}>{p.guides}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.name}</span>
            </nav>

            <header className="mt-4">
              <p className="eyebrow chrome">{p.concernEyebrow}</p>
              <h1 className="display-sm mt-2">{c.name}</h1>
              <p className="chapter-lead mt-3">{c.question}</p>
              <p className="guide-byline mt-3">
                {p.byline} <time dateTime={REVIEWED}>{REVIEWED_LABEL[lang]}</time>
              </p>
            </header>

            <div className="chapter-explainer guide-block">
              {c.overview.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>

            <section className="guide-block" aria-labelledby="options-title">
              <h2 id="options-title" className="eyebrow chrome">
                {p.optionsTitle}
              </h2>
              <ul className="guide-list mt-2">
                {options.map((t) => (
                  <li key={t.slug}>
                    <Link href={to(guidePath(t))}>
                      <span className="guide-list-name">{t.name}</span>
                      <span className="guide-list-tag">{t.tagline}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="guide-block">
              <p className="chapter-cta">{p.notSure}</p>
              <p className="mt-3">
                <Link href={to("/book")} className="quiet-link">
                  {p.reserve}
                </Link>
              </p>
            </section>

            <aside className="author-box guide-block" aria-label={p.aboutAuthor}>
              <p className="eyebrow">{p.aboutAuthor}</p>
              <p className="mt-2">{authorBio[lang]}</p>
              <Link href={to("/about")} className="quiet-link mt-2">
                {p.moreAboutJenny}
              </Link>
            </aside>

            <p className="disclaimer guide-block">{disclaimer[lang]}</p>
          </div>
        </article>
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
