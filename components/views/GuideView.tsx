// One treatment guide (/guides/botox, /ko/guides/botox).
import Link from "next/link";
import { Fragment } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangRoot from "@/components/views/LangRoot";
import { pageCopy } from "@/components/views/copy";
import type { Treatment } from "@/lib/treatments";
import { localePath, type Lang } from "@/lib/i18n";
import { authorBio, disclaimer } from "@/lib/i18n/content";
import {
  REVIEWED,
  REVIEWED_LABEL,
  concernPath,
  concernsFor,
  guideJsonLd,
  guidePath,
  relatedGuides,
} from "@/lib/seo";

export default function GuideView({ t, lang, title }: { t: Treatment; lang: Lang; title: string }) {
  const c = pageCopy[lang];
  const concerns = concernsFor(t, lang);
  const related = relatedGuides(t, lang);
  const to = (path: string) => localePath(lang, path);

  return (
    <LangRoot lang={lang}>
      <JsonLd data={guideJsonLd(t, title, lang)} />
      <Nav lang={lang} path={guidePath(t)} home={false} />
      <main id="top" className="guide">
        <article className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href={to("/")}>{c.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href={to("/guides")}>{c.guides}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{t.name}</span>
            </nav>

            <header className="mt-4">
              <p className="eyebrow chrome">{c.guideEyebrow}</p>
              <h1 className="display-sm mt-2">{t.name}</h1>
              <p className="chapter-lead mt-3">{t.tagline}</p>
              <p className="guide-byline mt-3">
                {c.byline} <time dateTime={REVIEWED}>{REVIEWED_LABEL[lang]}</time>
              </p>
            </header>

            <div className="chapter-explainer guide-block">
              {t.explainer.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <section className="guide-block" aria-labelledby="facts-title">
              <h2 id="facts-title" className="eyebrow chrome">
                {c.atAGlance}
              </h2>
              <dl className="facts mt-2">
                {t.quickFacts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {concerns.length > 0 && (
              <section className="guide-block" aria-labelledby="concerns-title">
                <h2 id="concerns-title" className="eyebrow chrome">
                  {c.consideredFor}
                </h2>
                <ul className="concern-links mt-2">
                  {concerns.map((x) => (
                    <li key={x.slug}>
                      <Link href={to(concernPath(x))} className="underline-draw">
                        {x.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="guide-block" aria-labelledby="faq-title">
              <h2 id="faq-title" className="eyebrow chrome">
                {c.questions}
              </h2>
              <dl className="chapter-faqs mt-2">
                {t.faqs.map((f) => (
                  <Fragment key={f.q}>
                    <dt>{f.q}</dt>
                    <dd>{f.a}</dd>
                  </Fragment>
                ))}
              </dl>
            </section>

            <section className="guide-block">
              <p className="chapter-cta">{t.cta}</p>
              <p className="mt-3">
                <Link href={to("/book")} className="quiet-link">
                  {c.reserve}
                </Link>
              </p>
            </section>

            {related.length > 0 && (
              <section className="guide-block" aria-labelledby="related-title">
                <h2 id="related-title" className="eyebrow chrome">
                  {c.related}
                </h2>
                <ul className="guide-list mt-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={to(guidePath(r))}>
                        <span className="guide-list-name">{r.name}</span>
                        <span className="guide-list-tag">{r.tagline}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <aside className="author-box guide-block" aria-label={c.aboutAuthor}>
              <p className="eyebrow">{c.aboutAuthor}</p>
              <p className="mt-2">{authorBio[lang]}</p>
              <Link href={to("/about")} className="quiet-link mt-2">
                {c.moreAboutJenny}
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
