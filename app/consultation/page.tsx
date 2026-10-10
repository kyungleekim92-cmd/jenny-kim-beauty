"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Sections";
import { conditions } from "@/lib/conditions";
import { site } from "@/lib/site";

const contactMethods = ["Email", "Phone", "Text"];
const budgetBands = ["Under $500", "$500–$1,500", "$1,500–$3,000", "$3,000+", "Not sure yet"];
const heardFrom = ["Instagram", "Google", "Friend referral", "Other"];

const steps = [
  {
    n: "I",
    t: "You share",
    b: "The form below takes about five minutes. The more you share, the sharper your hour becomes.",
  },
  {
    n: "II",
    t: "We meet",
    b: "A private hour at the St. Regis: your skin reviewed, your options explained honestly — including what to avoid.",
  },
  {
    n: "III",
    t: "You get a plan",
    b: "Matched to a vetted partner spa and the right practitioner. Jenny stays in your corner throughout.",
  },
];

export default function Consultation() {
  const [concerns, setConcerns] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("Email");
  const [budget, setBudget] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleConcern = (slug: string) =>
    setConcerns((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // BACKEND: POST form data to /api/consultations (or Formspree / CRM webhook).
    // Wire email notification + lead capture here before launch.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="section" style={{ paddingTop: 190 }}>
        <div className="wrap">
          {submitted ? (
            <Reveal>
              <div className="wrap-narrow center">
                <p className="eyebrow bronze">Request received</p>
                <h1 className="display-sm mt-2">Thank you — your hour is in motion.</h1>
                <p className="lede mt-3">
                  Jenny replies personally within one business day to arrange your consultation
                  at the St. Regis. Keep an eye on your inbox.
                </p>
                <p className="mt-2" style={{ fontSize: 13, color: "var(--muted)" }}>
                  Draft note: in production this submits to the booking backend (see code comment
                  in the form handler).
                </p>
              </div>
            </Reveal>
          ) : (
            <>
              <Reveal>
                <p className="eyebrow bronze">Consultation</p>
                <h1 className="display mt-2">
                  Reserve your <em style={{ fontStyle: "italic" }}>hour</em>.
                </h1>
                <p className="lede mt-3">
                  One private hour with Jenny — your skin, your history, your goals, and an
                  honest plan. No treatments are performed; this is guidance.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="band-ink mt-4" style={{ padding: "clamp(28px, 4vw, 48px)" }}>
                  <p className="eyebrow">The setting</p>
                  <p className="display-sm mt-2" style={{ fontSize: "1.9rem" }}>
                    {site.venue.name}
                  </p>
                  <p className="mt-1" style={{ color: "rgba(246,241,234,.72)" }}>
                    {site.venue.address}, {site.venue.city}
                  </p>
                  <p className="lede mt-2" style={{ fontSize: "1rem" }}>
                    {site.venue.blurb}
                  </p>
                </div>
              </Reveal>
            </>
          )}
        </div>
      </section>

      {!submitted && (
        <>
          <section className="section hairline-top band-cream2" style={{ paddingTop: 80 }}>
            <div className="wrap">
              <SectionHead eyebrow="What happens" title="Your hour, mapped." />
              <div className="grid-3 mt-4">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 100}>
                    <p className="numeral">{s.n}</p>
                    <h3 className="display-sm mt-1" style={{ fontSize: "1.6rem" }}>
                      {s.t}
                    </h3>
                    <p className="lede mt-1" style={{ fontSize: "1rem" }}>
                      {s.b}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="wrap-narrow">
              <Reveal>
                <p className="eyebrow bronze">The form</p>
                <h2 className="display-sm mt-2">Tell Jenny everything.</h2>
                <div className="divider-bronze" />
              </Reveal>
              <Reveal delay={80}>
                <form onSubmit={onSubmit}>
                  <div className="field">
                    <label htmlFor="c-name">Full name *</label>
                    <input id="c-name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="grid-2" style={{ gap: 24 }}>
                    <div className="field">
                      <label htmlFor="c-email">Email *</label>
                      <input id="c-email" type="email" required placeholder="you@example.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="c-phone">Phone</label>
                      <input id="c-phone" type="tel" placeholder="+1 (___) ___-____" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Preferred contact method</label>
                    <div className="chip-group">
                      {contactMethods.map((m) => (
                        <button
                          key={m}
                          type="button"
                          className="chip"
                          aria-pressed={contactMethod === m}
                          onClick={() => setContactMethod(m)}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="c-time">Best time to reach you</label>
                    <input id="c-time" type="text" placeholder="e.g. weekday afternoons" />
                  </div>

                  <div className="field">
                    <label>Skin concerns * (choose all that apply)</label>
                    <div className="chip-group">
                      {conditions.map((c) => (
                        <button
                          key={c.slug}
                          type="button"
                          className="chip"
                          aria-pressed={concerns.includes(c.slug)}
                          onClick={() => toggleConcern(c.slug)}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-goals">Goals & timeline</label>
                    <textarea
                      id="c-goals"
                      placeholder="What would you love to change? Any event date you're working toward?"
                    />
                  </div>

                  <div className="grid-2" style={{ gap: 24 }}>
                    <div className="field">
                      <label htmlFor="c-type">Skin type</label>
                      <select id="c-type" defaultValue="">
                        <option value="" disabled>
                          Select…
                        </option>
                        {["Normal", "Dry", "Oily", "Combination", "Sensitive", "Not sure"].map(
                          (o) => (
                            <option key={o}>{o}</option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="c-tone">Skin tone (self-described)</label>
                      <select id="c-tone" defaultValue="">
                        <option value="" disabled>
                          Select…
                        </option>
                        {["Fair", "Light", "Medium", "Olive", "Brown", "Deep", "Not sure"].map(
                          (o) => (
                            <option key={o}>{o}</option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-past">Past treatments</label>
                    <textarea
                      id="c-past"
                      placeholder="Anything you've tried before — injectables, lasers, facials — and when."
                    />
                  </div>

                  <div className="field">
                    <label>Budget band</label>
                    <div className="chip-group">
                      {budgetBands.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className="chip"
                          aria-pressed={budget === b}
                          onClick={() => setBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="c-area">Preferred area of Toronto</label>
                    <input id="c-area" type="text" placeholder="e.g. Downtown, North York…" />
                  </div>

                  <div className="field">
                    <label htmlFor="c-health">
                      Health pre-screen <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional — pre-screen only, not medical advice)</span>
                    </label>
                    <textarea
                      id="c-health"
                      placeholder="Medications, allergies, pregnancy or breastfeeding — anything a practitioner should know."
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="c-heard">How did you hear about Jenny?</label>
                    <select id="c-heard" defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      {heardFrom.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label className="check-row">
                      <input
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                      />
                      <span>
                        I agree to be contacted about my consultation and — only with my permission
                        at the appointment — to have relevant details shared with a partner spa. *
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-outline"
                    disabled={concerns.length === 0 || !consent}
                    style={{
                      opacity: concerns.length === 0 || !consent ? 0.45 : 1,
                      cursor: concerns.length === 0 || !consent ? "not-allowed" : "pointer",
                    }}
                  >
                    Request my consultation
                  </button>
                  {(concerns.length === 0 || !consent) && (
                    <p className="mt-1" style={{ fontSize: 13, color: "var(--muted)" }}>
                      Please choose at least one skin concern and accept the consent to continue.
                    </p>
                  )}
                </form>
              </Reveal>
              <Reveal>
                <p className="mt-4" style={{ fontSize: 14, color: "var(--muted)" }}>
                  Jenny replies within one business day. Your details stay private and are shared
                  with a partner spa only with your explicit consent. Jenny is an independent
                  consultant, not a medical practitioner.
                </p>
              </Reveal>
            </div>
          </section>
        </>
      )}
    </>
  );
}
