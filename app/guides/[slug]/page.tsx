import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PlaceholderImage } from "@/components/Sections";
import FaqAccordion from "@/components/FaqAccordion";
import { treatments } from "@/lib/treatments";
import { conditions } from "@/lib/conditions";
import type { Metadata } from "next";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = treatments.find((x) => x.slug === slug);
  if (!t) return {};
  return {
    title: `${t.name} — Guide | Jenny Kim, Beauty Consultant`,
    description: t.tagline,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = treatments.find((x) => x.slug === slug);
  if (!t) notFound();

  const idx = treatments.findIndex((x) => x.slug === slug);
  const prev = treatments[idx - 1];
  const next = treatments[idx + 1];
  const related = treatments
    .filter((x) => x.slug !== slug && x.concerns.some((c) => t.concerns.includes(c)))
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="section" style={{ paddingTop: 190, paddingBottom: 80 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow bronze">
              Guide {t.number} — {t.category}
            </p>
            <h1 className="display mt-2">{t.name}</h1>
            <p className="lede mt-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>
              {t.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPLAINER + FACTS */}
      <section className="section hairline-top" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              {t.explainer.map((p, i) => (
                <Reveal key={i} delay={i * 90}>
                  <p className="body-narrow mt-2" style={{ fontSize: "1.08rem", lineHeight: 1.75 }}>
                    {p}
                  </p>
                </Reveal>
              ))}
              <Reveal>
                <div className="mt-4">
                  <PlaceholderImage
                    ratio="ph-169"
                    label="Treatment texture"
                    spec="16:9 · macro detail · soft light · warm desaturated"
                  />
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="band-cream2" style={{ padding: "clamp(28px, 4vw, 48px)" }}>
                <p className="eyebrow">At a glance</p>
                <div className="mt-2">
                  {t.quickFacts.map((f) => (
                    <div
                      key={f.label}
                      className="hairline-top"
                      style={{ padding: "16px 0", display: "grid", gap: 4 }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                        }}
                      >
                        {f.label}
                      </span>
                      <span style={{ fontSize: "1.02rem" }}>{f.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Link href="/consultation" className="quiet-link">
                    {t.cta}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section band-cream2 hairline-top">
        <div className="wrap-narrow">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="display-sm mt-2">What clients ask about {t.name.toLowerCase()}.</h2>
            <div className="divider-bronze" />
          </Reveal>
          <Reveal>
            <FaqAccordion items={t.faqs} />
          </Reveal>
        </div>
      </section>

      {/* CONCERNS + RELATED */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow bronze">Also relevant if you worry about</p>
            <div className="chip-group mt-2">
              {t.concerns.map((cs) => {
                const c = conditions.find((x) => x.slug === cs);
                return (
                  <span key={cs} className="chip" aria-pressed="false" style={{ cursor: "default" }}>
                    {c ? c.name : cs}
                  </span>
                );
              })}
            </div>
          </Reveal>
          {related.length > 0 && (
            <div className="mt-4">
              <Reveal>
                <p className="eyebrow">Continue reading</p>
              </Reveal>
              <div className="grid-3 mt-2">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 90}>
                    <Link href={`/guides/${r.slug}`} style={{ textDecoration: "none" }}>
                      <p className="numeral">{r.number}</p>
                      <h3 className="display-sm mt-1" style={{ fontSize: "1.5rem" }}>
                        {r.name}
                      </h3>
                      <p className="lede mt-1" style={{ fontSize: "0.95rem" }}>
                        {r.tagline}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
          <Reveal>
            <div
              className="hairline-top mt-4"
              style={{ paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
            >
              {prev ? (
                <Link href={`/guides/${prev.slug}`} className="quiet-link">
                  ← {prev.number} · {prev.name}
                </Link>
              ) : (
                <Link href="/guides" className="quiet-link">
                  ← All guides
                </Link>
              )}
              {next && (
                <Link href={`/guides/${next.slug}`} className="quiet-link">
                  {next.number} · {next.name} →
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-4" style={{ fontSize: 14, color: "var(--muted)", maxWidth: "64ch" }}>
              Educational guide only — Jenny is an independent consultant, not a medical
              practitioner. Discuss this treatment with a licensed practitioner at a partner spa;
              results vary from person to person.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
