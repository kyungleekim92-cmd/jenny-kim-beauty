// Index of every treatment guide — a crawlable hub linking to each guide page.
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { concernPath, guidePath, guidesIndexJsonLd, sortedTreatments } from "@/lib/seo";
import { conditions } from "@/lib/conditions";

const title = "Aesthetic Treatment Guides — Botox, Fillers, Lasers & More";
const description =
  "Twenty independent guides to aesthetic treatments available in Toronto, from Botox and dermal fillers to Ultherapy, lasers and HydraFacial: what each does, downtime, sessions and questions to ask.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides" },
  openGraph: { title, description, url: "/guides" },
};

export default function GuidesIndex() {
  return (
    <>
      <JsonLd data={guidesIndexJsonLd()} />
      <Nav home={false} />
      <main id="top" className="guide">
        <section className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Treatment guides</span>
            </nav>
            <header className="mt-4">
              <p className="eyebrow chrome">Treatment guides · Toronto</p>
              <h1 className="display-sm mt-2">Understanding is the first treatment.</h1>
              <p className="lede mt-3">
                Twenty short essays on the treatments you&apos;ve heard of — and what each one is
                really for.
              </p>
            </header>
            <ul className="guide-list guide-block">
              {sortedTreatments.map((t) => (
                <li key={t.slug}>
                  <Link href={guidePath(t)}>
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
                Browse by concern
              </h2>
              <ul className="concern-links mt-2">
                {conditions.map((c) => (
                  <li key={c.slug}>
                    <Link href={concernPath(c)} className="underline-draw">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
