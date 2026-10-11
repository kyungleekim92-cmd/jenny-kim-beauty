// One page per skin concern (e.g. /concerns/acne-scars), linking to the treatments that may help.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { conditions } from "@/lib/conditions";
import { DISCLAIMER } from "@/lib/treatments";
import {
  AUTHOR_BIO,
  REVIEWED,
  REVIEWED_LABEL,
  concernDescription,
  concernJsonLd,
  concernPath,
  guidePath,
  treatmentsFor,
} from "@/lib/seo";

export function generateStaticParams() {
  return conditions.map((c) => ({ page: c.page }));
}

const find = (page: string) => conditions.find((c) => c.page === page);
const titleFor = (name: string) => `${name}: Treatment Options in Toronto`;

export async function generateMetadata({ params }: PageProps<"/concerns/[page]">): Promise<Metadata> {
  const c = find((await params).page);
  if (!c) return {};
  const title = titleFor(c.name);
  return {
    title,
    description: concernDescription(c),
    alternates: { canonical: concernPath(c) },
    openGraph: { title, description: concernDescription(c), url: concernPath(c), type: "article" },
  };
}

export default async function ConcernPage({ params }: PageProps<"/concerns/[page]">) {
  const c = find((await params).page);
  if (!c) notFound();
  const options = treatmentsFor(c);

  return (
    <>
      <JsonLd data={concernJsonLd(c, titleFor(c.name))} />
      <Nav home={false} />
      <main id="top" className="guide">
        <article className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/guides">Treatment guides</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.name}</span>
            </nav>

            <header className="mt-4">
              <p className="eyebrow chrome">Skin concern · Toronto</p>
              <h1 className="display-sm mt-2">{c.name}</h1>
              <p className="chapter-lead mt-3">{c.question}</p>
              <p className="guide-byline mt-3">
                An independent guide by Jenny Kim, beauty consultant in Toronto · Reviewed{" "}
                <time dateTime={REVIEWED}>{REVIEWED_LABEL}</time>
              </p>
            </header>

            <div className="chapter-explainer guide-block">
              {c.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <section className="guide-block" aria-labelledby="options-title">
              <h2 id="options-title" className="eyebrow chrome">
                Treatments often considered
              </h2>
              <ul className="guide-list mt-2">
                {options.map((t) => (
                  <li key={t.slug}>
                    <Link href={guidePath(t)}>
                      <span className="guide-list-name">{t.name}</span>
                      <span className="guide-list-tag">{t.tagline}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="guide-block">
              <p className="chapter-cta">
                Not sure which fits? A private consultation maps your skin, history and goals to a
                considered plan.
              </p>
              <p className="mt-3">
                <Link href="/#consult" className="quiet-link">
                  Reserve your hour
                </Link>
              </p>
            </section>

            <aside className="author-box guide-block" aria-label="About the author">
              <p className="eyebrow">About the author</p>
              <p className="mt-2">{AUTHOR_BIO}</p>
              <Link href="/#about" className="quiet-link mt-2">
                More about Jenny
              </Link>
            </aside>

            <p className="disclaimer guide-block">{DISCLAIMER}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
