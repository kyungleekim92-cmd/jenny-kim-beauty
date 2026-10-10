"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";
import { conditions } from "@/lib/conditions";

const contactMethods = ["Email", "Phone", "Text"];
const budgetBands = ["Under $500", "$500–$1,500", "$1,500–$3,000", "$3,000+", "Not sure yet"];
const skinTypes = ["Normal", "Dry", "Oily", "Combination", "Sensitive", "Not sure"];
const skinTones = ["Fair", "Light", "Medium", "Olive", "Brown", "Deep", "Not sure"];
const heardFrom = ["Instagram", "Google", "Friend referral", "Other"];

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function GroupHead({ n, title }: { n: string; title: string }) {
  return (
    <legend className="form-section-head" style={{ width: "100%" }}>
      <span className="numeral" aria-hidden="true">
        {n}
      </span>
      <h3>{title}</h3>
    </legend>
  );
}

export default function Booking() {
  const [concerns, setConcerns] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("Email");
  const [budget, setBudget] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = concerns.length > 0 && consent;

  const toggleConcern = (slug: string) =>
    setConcerns((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const payload = { ...data, contactMethod, concerns, budget, consent };
    // BACKEND: POST `payload` as JSON to /api/consultations (or a Formspree / CRM webhook).
    // Wire Jenny's email notification + lead capture there before launch.
    void payload;
    setSubmitted(true);
    document.getElementById("consult")?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  };

  return (
    <section id="consult" className="section" aria-labelledby="consult-title">
      <div className="wrap">
        {submitted ? (
          <div className="wrap-narrow center form-success" role="status">
            <p className="eyebrow chrome">Request received</p>
            <h2 id="consult-title" className="display-sm mt-2">
              Thank you — your hour is in motion.
            </h2>
            <span className="hairline-draw on-load section-rule" aria-hidden="true" />
            <p className="lede mt-3">
              Jenny replies personally within one business day to arrange your consultation.
              Keep an eye on your inbox.
            </p>
          </div>
        ) : (
          <>
            <SectionHead
              id="consult-title"
              eyebrow="Consultation"
              title={
                <>
                  An hour that&apos;s entirely <em>yours</em>.
                </>
              }
              lede="Your skin, your history, your goals — and an honest plan to follow. No treatments are performed and nothing is sold. This is guidance."
            />

            <div className="booking-grid mt-4">
              <Reveal className="booking-media">
                <Photo
                  src="/images/interior.jpg"
                  alt="A quiet room in soft daylight: sheer linen curtains, a travertine side table, folded towels"
                  ratio="45"
                  sizes="(max-width: 960px) min(520px, 92vw), 38vw"
                  parallax={0.04}
                />
                <p className="booking-caption">
                  Private, unhurried, by appointment. Come as you are — bring your questions.
                </p>
              </Reveal>

              <div>
                <Reveal>
                  <p className="eyebrow chrome">The form</p>
                  <h3 className="display-sm mt-2" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)" }}>
                    Tell Jenny everything.
                  </h3>
                  <p className="form-hint">About five minutes. Fields marked * are required.</p>
                </Reveal>

                <Reveal delay={100} className="mt-3">
                  <form onSubmit={onSubmit}>
                    <fieldset className="form-group">
                      <GroupHead n="I" title="About you" />
                      <div className="field">
                        <label htmlFor="c-name">Full name *</label>
                        <input id="c-name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
                      </div>
                      <div className="field-row">
                        <div className="field">
                          <label htmlFor="c-email">Email *</label>
                          <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                        </div>
                        <div className="field">
                          <label htmlFor="c-phone">Phone</label>
                          <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (___) ___-____" />
                        </div>
                      </div>
                      <div className="field">
                        <span className="field-label" id="c-method-label">
                          Preferred contact method
                        </span>
                        <div className="chip-group" role="group" aria-labelledby="c-method-label">
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
                        <input id="c-time" name="bestTime" type="text" placeholder="e.g. weekday afternoons" />
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <GroupHead n="II" title="Your skin" />
                      <div className="field">
                        <span className="field-label" id="c-concerns-label">
                          Skin concerns * <span className="label-note">(choose all that apply)</span>
                        </span>
                        <div className="chip-group" role="group" aria-labelledby="c-concerns-label">
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
                        <label htmlFor="c-goals">Goals &amp; timeline</label>
                        <textarea
                          id="c-goals"
                          name="goals"
                          placeholder="What would you love to change? Any event date you're working toward?"
                        />
                      </div>
                      <div className="field-row">
                        <div className="field">
                          <label htmlFor="c-type">Skin type</label>
                          <select id="c-type" name="skinType" defaultValue="">
                            <option value="" disabled>
                              Select…
                            </option>
                            {skinTypes.map((o) => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="c-tone">
                            Skin tone <span className="label-note">(self-described)</span>
                          </label>
                          <select id="c-tone" name="skinTone" defaultValue="">
                            <option value="" disabled>
                              Select…
                            </option>
                            {skinTones.map((o) => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="c-past">Past treatments</label>
                        <textarea
                          id="c-past"
                          name="pastTreatments"
                          placeholder="Anything you've tried before — injectables, lasers, facials — and when."
                        />
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <GroupHead n="III" title="Before you meet" />
                      <div className="field">
                        <span className="field-label" id="c-budget-label">
                          Budget band
                        </span>
                        <div className="chip-group" role="group" aria-labelledby="c-budget-label">
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
                        <input id="c-area" name="area" type="text" placeholder="e.g. Downtown, North York…" />
                      </div>
                      <div className="field">
                        <label htmlFor="c-health">
                          Health pre-screen{" "}
                          <span className="label-note">(optional — pre-screen only, not medical advice)</span>
                        </label>
                        <textarea
                          id="c-health"
                          name="healthPrescreen"
                          placeholder="Medications, allergies, pregnancy or breastfeeding — anything a practitioner should know."
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="c-heard">How did you hear about Jenny?</label>
                        <select id="c-heard" name="heardFrom" defaultValue="">
                          <option value="" disabled>
                            Select…
                          </option>
                          {heardFrom.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <GroupHead n="IV" title="Consent" />
                      <label className="check-row">
                        <input
                          type="checkbox"
                          name="consent"
                          required
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                        />
                        <span>
                          I agree to be contacted about my consultation and — only with my permission
                          at the appointment — to have relevant details shared with a partner spa. *
                        </span>
                      </label>
                    </fieldset>

                    <div className="mt-3">
                      <button type="submit" className="btn-outline" disabled={!canSubmit}>
                        Request my consultation
                      </button>
                      {!canSubmit && (
                        <p className="form-hint">
                          Please choose at least one skin concern and accept the consent to continue.
                        </p>
                      )}
                    </div>
                  </form>
                </Reveal>

                <Reveal>
                  <p className="form-close mt-4">
                    Jenny replies within one business day. Your details stay private and are shared
                    with a partner spa only with your explicit consent. Jenny is an independent
                    consultant, not a medical practitioner.
                  </p>
                </Reveal>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
