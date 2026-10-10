"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Sections";
import { treatments } from "@/lib/treatments";
import { conditions } from "@/lib/conditions";

export default function GuidesIndex() {
  const [filter, setFilter] = useState<string | null>(null);

  const visible = filter
    ? treatments.filter((t) => t.concerns.includes(filter))
    : treatments;

  return (
    <>
      <section className="section" style={{ paddingTop: 190 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow bronze">Treatment guides</p>
            <h1 className="display mt-2">
              Twenty chapters.
              <br />
              Zero <em style={{ fontStyle: "italic" }}>jargon</em>.
            </h1>
            <p className="lede mt-3">
              Every guide is written the way Jenny speaks in consultation — plainly, honestly,
              and with your interests first. Filter by what concerns you, or read them as a
              progression.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="chip-group mt-4" role="group" aria-label="Filter by concern">
              <button
                className="chip"
                aria-pressed={filter === null}
                onClick={() => setFilter(null)}
              >
                All
              </button>
              {conditions.map((c) => (
                <button
                  key={c.slug}
                  className="chip"
                  aria-pressed={filter === c.slug}
                  onClick={() => setFilter(filter === c.slug ? null : c.slug)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-4">
            {visible.map((t, i) => (
              <Reveal key={t.slug} delay={Math.min(i, 6) * 60}>
                <Link
                  href={`/guides/${t.slug}`}
                  className="hairline-top"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    className="grid-2"
                    style={{ padding: "36px 0", gap: "clamp(16px, 3vw, 48px)" }}
                  >
                    <div style={{ display: "flex", gap: 26, alignItems: "baseline" }}>
                      <span className="numeral">{t.number}</span>
                      <div>
                        <h2
                          className="display-sm"
                          style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)" }}
                        >
                          {t.name}
                        </h2>
                        <p className="lede mt-1" style={{ fontSize: "0.98rem" }}>
                          {t.tagline}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        flexWrap: "wrap",
                        alignContent: "center",
                      }}
                    >
                      {t.concerns.slice(0, 4).map((cs) => {
                        const c = conditions.find((x) => x.slug === cs);
                        return (
                          <span
                            key={cs}
                            style={{
                              fontSize: 12,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--muted)",
                              border: "1px solid var(--line)",
                              padding: "6px 12px",
                            }}
                          >
                            {c ? c.name : cs}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
            {visible.length === 0 && (
              <p className="lede">No guides match this filter yet.</p>
            )}
            <div className="hairline-top" />
          </div>

          <Reveal>
            <p
              className="mt-4"
              style={{ fontSize: 14, color: "var(--muted)", maxWidth: "64ch" }}
            >
              Jenny is an independent consultant, not a medical practitioner. These guides are
              educational — discuss every option with a licensed practitioner at a partner spa
              before deciding.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
