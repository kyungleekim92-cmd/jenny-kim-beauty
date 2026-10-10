"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { conditions } from "@/lib/conditions";
import { treatments } from "@/lib/treatments";

const downtimeOptions = [
  { id: "none", label: "None — I need zero recovery" },
  { id: "minimal", label: "Minimal — a day or two" },
  { id: "moderate", label: "Moderate — up to a week" },
  { id: "significant", label: "Significant — I'll plan around it" },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [downtime, setDowntime] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);

  const toggle = (slug: string) =>
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const matchedSlugs: string[] = [];
  selected.forEach((cs) => {
    const c = conditions.find((x) => x.slug === cs);
    c?.treatments.forEach((t) => {
      if (!matchedSlugs.includes(t)) matchedSlugs.push(t);
    });
  });
  let results = matchedSlugs
    .map((s) => treatments.find((t) => t.slug === s))
    .filter((t): t is (typeof treatments)[number] => Boolean(t));
  const filteredCo2 = downtime === "none" && results.some((t) => t.slug === "co2-laser");
  if (downtime === "none") results = results.filter((t) => t.slug !== "co2-laser");
  results = results.slice(0, 4);
  const showMoleNote = selected.includes("mole-removal");

  const reset = () => {
    setStep(0);
    setSelected([]);
    setDowntime(null);
    setEmail("");
    setEmailDone(false);
  };

  return (
    <section className="section" style={{ paddingTop: 190, minHeight: "80vh" }}>
      <div className="wrap-narrow">
        {step < 3 && (
          <Reveal>
            <p className="eyebrow bronze">Skin quiz — step {step + 1} of 3</p>
          </Reveal>
        )}

        {step === 0 && (
          <Reveal>
            <h1 className="display mt-2">
              Two minutes. Your skin, <em style={{ fontStyle: "italic" }}>mapped</em>.
            </h1>
            <p className="lede mt-3">
              Answer a few questions about your concerns and your tolerance for downtime. You'll
              receive the two to four treatment guides worth reading first — matched to you, not
              to a sales target.
            </p>
            <div className="mt-3">
              <button className="quiet-link" onClick={() => setStep(1)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                Begin
              </button>
            </div>
          </Reveal>
        )}

        {step === 1 && (
          <Reveal>
            <h2 className="display-sm mt-2">What concerns you most?</h2>
            <p className="lede mt-2" style={{ fontSize: "1rem" }}>
              Choose all that apply.
            </p>
            <div className="chip-group mt-3">
              {conditions.map((c) => (
                <button
                  key={c.slug}
                  className="chip"
                  aria-pressed={selected.includes(c.slug)}
                  onClick={() => toggle(c.slug)}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div className="mt-4" style={{ display: "flex", gap: 28, alignItems: "center" }}>
              <button
                className="quiet-link"
                disabled={selected.length === 0}
                onClick={() => selected.length > 0 && setStep(2)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: selected.length ? "pointer" : "not-allowed",
                  opacity: selected.length ? 1 : 0.4,
                  fontFamily: "inherit",
                }}
              >
                Continue
              </button>
              <button
                onClick={() => setStep(0)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                ← Back
              </button>
            </div>
          </Reveal>
        )}

        {step === 2 && (
          <Reveal>
            <h2 className="display-sm mt-2">How much downtime can you accept?</h2>
            <p className="lede mt-2" style={{ fontSize: "1rem" }}>
              Be honest — the right plan respects your real life.
            </p>
            <div className="chip-group mt-3">
              {downtimeOptions.map((d) => (
                <button
                  key={d.id}
                  className="chip"
                  aria-pressed={downtime === d.id}
                  onClick={() => setDowntime(d.id)}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <div className="mt-4" style={{ display: "flex", gap: 28, alignItems: "center" }}>
              <button
                className="quiet-link"
                disabled={!downtime}
                onClick={() => downtime && setStep(3)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: downtime ? "pointer" : "not-allowed",
                  opacity: downtime ? 1 : 0.4,
                  fontFamily: "inherit",
                }}
              >
                See my matches
              </button>
              <button
                onClick={() => setStep(1)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                ← Back
              </button>
            </div>
          </Reveal>
        )}

        {step === 3 && (
          <div>
            <Reveal>
              <p className="eyebrow bronze">Your matches</p>
              <h2 className="display-sm mt-2">Start your reading here.</h2>
              {showMoleNote && (
                <p className="mt-3" style={{ border: "1px solid var(--bronze-faint)", padding: 20, fontSize: "0.98rem" }}>
                  A note on moles: anything changing, dark, or unusual needs a physician's
                  assessment first. Jenny works on aesthetic concerns only and will redirect you
                  when that's the right call.
                </p>
              )}
              {filteredCo2 && (
                <p className="lede mt-3" style={{ fontSize: "1rem" }}>
                  We've set aside deeper resurfacing options since you preferred no downtime —
                  mention it at your consultation if you reconsider.
                </p>
              )}
            </Reveal>
            <div className="mt-3">
              {results.map((t, i) => (
                <Reveal key={t.slug} delay={i * 90}>
                  <Link
                    href={`/guides/${t.slug}`}
                    className="hairline-top"
                    style={{ textDecoration: "none", display: "block", padding: "30px 0" }}
                  >
                    <p className="numeral">{t.number}</p>
                    <h3 className="display-sm mt-1" style={{ fontSize: "1.7rem" }}>
                      {t.name}
                    </h3>
                    <p className="lede mt-1" style={{ fontSize: "0.98rem" }}>
                      {t.tagline}
                    </p>
                    <span className="quiet-link mt-2" style={{ display: "inline-block" }}>
                      Read the guide
                    </span>
                  </Link>
                </Reveal>
              ))}
              <div className="hairline-top" />
            </div>

            <Reveal>
              <div className="band-cream2 mt-4" style={{ padding: "clamp(28px, 4vw, 48px)" }}>
                <p className="eyebrow">Keep your matches</p>
                {emailDone ? (
                  <p className="mt-2">
                    Noted — email delivery plugs in here in production.
                  </p>
                ) : (
                  <form
                    className="mt-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email.includes("@")) setEmailDone(true);
                    }}
                  >
                    <div className="field">
                      <label htmlFor="quiz-email">Email address</label>
                      <input
                        id="quiz-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                    <button type="submit" className="btn-outline">
                      Send my matches
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="center mt-4" style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/consultation" className="quiet-link">
                  Book a consultation
                </Link>
                <button
                  onClick={reset}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500 }}
                >
                  Retake the quiz
                </button>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
