"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";
import type { OpenChapterDetail } from "@/components/Chapters";
import { conditions } from "@/lib/conditions";
import { treatments, type Treatment } from "@/lib/treatments";

type Step = 0 | 1 | 2 | 3;
type Downtime = "none" | "minimal" | "moderate" | "significant";

const downtimeOptions: { id: Downtime; label: string }[] = [
  { id: "none", label: "None — I need zero recovery" },
  { id: "minimal", label: "Minimal — a day or two" },
  { id: "moderate", label: "Moderate — up to a week" },
  { id: "significant", label: "Significant — I'll plan around it" },
];

// Selected conditions → unique treatment slugs (in condition order), minus CO2 when
// no downtime is acceptable, capped at four.
function matchTreatments(selected: string[], downtime: Downtime | null) {
  const slugs: string[] = [];
  for (const cs of selected) {
    const c = conditions.find((x) => x.slug === cs);
    c?.treatments.forEach((t) => {
      if (!slugs.includes(t)) slugs.push(t);
    });
  }
  let results = slugs
    .map((s) => treatments.find((t) => t.slug === s))
    .filter((t): t is Treatment => Boolean(t));
  const filteredCo2 = downtime === "none" && results.some((t) => t.slug === "co2-laser");
  if (downtime === "none") results = results.filter((t) => t.slug !== "co2-laser");
  return { results: results.slice(0, 4), filteredCo2 };
}

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readGuide(slug: string) {
  const event = new CustomEvent<OpenChapterDetail>("open-chapter", {
    detail: { slug },
    cancelable: true,
  });
  const handled = !window.dispatchEvent(event);
  // Chapters scrolls to the exact guide when it handles the event; otherwise land on the section.
  if (!handled) {
    document.getElementById("guides")?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  }
}

export default function Quiz() {
  const [step, setStep] = useState<Step>(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [downtime, setDowntime] = useState<Downtime | null>(null);
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastStep = useRef<Step>(0);

  // On each step change: move focus to the new heading, and bring the quiz back
  // into view if its top has scrolled away (the results step is taller).
  useEffect(() => {
    if (lastStep.current === step) return;
    lastStep.current = step;
    headingRef.current?.focus({ preventScroll: true });
    const section = sectionRef.current;
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
    }
  }, [step]);

  const toggle = (slug: string) =>
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const reset = () => {
    setSelected([]);
    setDowntime(null);
    setEmail("");
    setEmailDone(false);
    setStep(0);
  };

  const { results, filteredCo2 } = matchTreatments(selected, downtime);
  const showMoleNote = selected.includes("mole-removal");

  const onEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // BACKEND: POST { email, matches: results.map((t) => t.slug), concerns: selected, downtime }
    // to /api/quiz-matches (or the email provider's list endpoint) and send the matches by email.
    setEmailDone(true);
  };

  const progress = (
    <div className="quiz-progress" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={step >= n ? "is-done" : ""} />
      ))}
    </div>
  );

  return (
    <section id="quiz" ref={sectionRef} className="section band-deep quiz" aria-label="Skin quiz">
      <div className="wrap quiz-grid">
        <Reveal>
          <div className="quiz-step" key={step}>
            {step === 0 && (
              <>
                <p className="eyebrow">Skin quiz</p>
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-2">
                  Two minutes. Your skin, <em>mapped</em>.
                </h2>
                <span className="hairline-draw mt-3" style={{ width: 56 }} aria-hidden="true" />
                <p className="lede mt-3">
                  A few honest questions about your concerns and the downtime your life allows.
                  You&apos;ll receive the guides worth reading first — matched to you, never to a
                  sales target.
                </p>
                <div className="quiz-actions">
                  <button type="button" className="quiet-link text-btn" onClick={() => setStep(1)}>
                    Begin
                  </button>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <p className="eyebrow">Skin quiz — question 1 of 2</p>
                {progress}
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-3">
                  What concerns you most?
                </h2>
                <p className="quiz-aside mt-2">Choose all that apply.</p>
                <div className="chip-group mt-3" role="group" aria-label="Skin concerns">
                  {conditions.map((c) => (
                    <button
                      key={c.slug}
                      type="button"
                      className="chip"
                      aria-pressed={selected.includes(c.slug)}
                      title={c.question}
                      onClick={() => toggle(c.slug)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
                <div className="quiz-actions">
                  <button
                    type="button"
                    className="quiet-link text-btn"
                    disabled={selected.length === 0}
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </button>
                  <button type="button" className="text-btn back-btn" onClick={() => setStep(0)}>
                    ← Back
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="eyebrow">Skin quiz — question 2 of 2</p>
                {progress}
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-3">
                  How much downtime can you accept?
                </h2>
                <p className="quiz-aside mt-2">Be honest — the right plan respects your real life.</p>
                <div className="chip-group mt-3" role="group" aria-label="Acceptable downtime">
                  {downtimeOptions.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      className="chip"
                      aria-pressed={downtime === d.id}
                      onClick={() => setDowntime(d.id)}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="quiz-actions">
                  <button
                    type="button"
                    className="quiet-link text-btn"
                    disabled={!downtime}
                    onClick={() => setStep(3)}
                  >
                    See my matches
                  </button>
                  <button type="button" className="text-btn back-btn" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="eyebrow">Skin quiz — your reading list</p>
                {progress}
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-3">
                  Your matches.
                </h2>

                {showMoleNote && (
                  <p className="quiz-note mt-3">
                    A note on moles: anything changing, dark, or unusual needs a physician&apos;s
                    assessment first. Jenny works on aesthetic concerns only and will redirect you
                    when that&apos;s the right call.
                  </p>
                )}
                {filteredCo2 && (
                  <p className="quiz-aside mt-3">
                    We&apos;ve set aside deeper resurfacing options since you preferred no downtime —
                    mention it at your consultation if you reconsider.
                  </p>
                )}

                {results.length > 0 ? (
                  <ul className="matches mt-3" style={{ listStyle: "none" }}>
                    {results.map((t, i) => (
                      <Reveal as="li" key={t.slug} delay={120 + i * 100} className="match">
                        <p className="numeral">{t.number}</p>
                        <h3>{t.name}</h3>
                        <p>{t.tagline}</p>
                        <a
                          href={`#chapter-${t.slug}`}
                          className="quiet-link"
                          onClick={(e) => {
                            e.preventDefault();
                            readGuide(t.slug);
                          }}
                        >
                          Read the guide
                        </a>
                      </Reveal>
                    ))}
                  </ul>
                ) : (
                  <p className="quiz-aside mt-3">
                    None of the guides fit zero downtime for this concern — Jenny can walk you
                    through the options in person.
                  </p>
                )}

                <Reveal delay={200} className="quiz-capture mt-4">
                  <p className="eyebrow">Keep your matches</p>
                  {emailDone ? (
                    <p className="mt-2">Thank you — your matches are on their way to {email}.</p>
                  ) : (
                    <form className="mt-2" onSubmit={onEmail}>
                      <div className="field">
                        <label htmlFor="quiz-email">Email address</label>
                        <input
                          id="quiz-email"
                          type="email"
                          required
                          autoComplete="email"
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
                </Reveal>

                <div className="quiz-actions">
                  <a href="#consult" className="quiet-link">
                    Reserve your hour
                  </a>
                  <button type="button" className="text-btn back-btn" onClick={reset}>
                    Retake the quiz
                  </button>
                </div>
              </>
            )}
          </div>
        </Reveal>

        <Reveal delay={200} className="quiz-media">
          <Photo
            src="/images/drop.jpg"
            alt="A single golden drop of serum falling from a glass dropper"
            ratio="34"
            sizes="(max-width: 960px) 0px, 30vw"
            parallax={0.04}
          />
        </Reveal>
      </div>
    </section>
  );
}
