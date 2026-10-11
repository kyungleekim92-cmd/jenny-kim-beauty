// One indexable page per treatment guide, e.g. /guides/botox.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { DISCLAIMER, treatments } from "@/lib/treatments";
import {
  concernNames,
  guideDescription,
  guideJsonLd,
  guidePath,
  relatedGuides,
} from "@/lib/seo";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

const find = (slug: string) => treatments.find((t) => t.slug === slug);
const titleFor = (name: string) => `${name} in Toronto — An Independent Guide`;

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const t = find((await params).slug);
  if (!t) return {};
  const title = titleFor(t.name);
  return {
    title,
    description: guideDescription(t),
    alternates: { canonical: guidePath(t) },
    openGraph: { title, description: guideDescription(t), url: guidePath(t), type: "article" },
  };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const t = find((await params).slug);
  if (!t) notFound();
  const concerns = concernNames(t);
  const related = relatedGuides(t);

  return (
    <>
      <JsonLd data={guideJsonLd(t, titleFor(t.name))} />
      <Nav home={false} />
      <main id="top" className="guide">
        <article className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/guides">Treatment guides</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{t.name}</span>
            </nav>

            <header className="mt-4">
              <p className="eyebrow chrome">Treatment guide · Toronto</p>
              <h1 className="display-sm mt-2">{t.name}</h1>
              <p className="chapter-lead mt-3">{t.tagline}</p>
              <p className="guide-byline mt-3">
                An independent guide by Jenny Kim, beauty consultant in Toronto.
              </p>
            </header>

            <div className="chapter-explainer guide-block">
              {t.explainer.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <section className="guide-block" aria-labelledby="facts-title">
              <h2 id="facts-title" className="eyebrow chrome">
                At a glance
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
                  Often considered for
                </h2>
                <p className="mt-2">{concerns.join(" · ")}</p>
              </section>
            )}

            <section className="guide-block" aria-labelledby="faq-title">
              <h2 id="faq-title" className="eyebrow chrome">
                Questions clients ask
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
                <Link href="/#consult" className="quiet-link">
                  Reserve your hour
                </Link>
              </p>
            </section>

            {related.length > 0 && (
              <section className="guide-block" aria-labelledby="related-title">
                <h2 id="related-title" className="eyebrow chrome">
                  Related guides
                </h2>
                <ul className="guide-list mt-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={guidePath(r)}>
                        <span className="guide-list-name">{r.name}</span>
                        <span className="guide-list-tag">{r.tagline}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="disclaimer guide-block">{DISCLAIMER}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
