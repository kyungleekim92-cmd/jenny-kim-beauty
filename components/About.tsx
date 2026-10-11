"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";

const does = [
  "One-on-one private consultations in Toronto",
  "Plain-language education on every treatment option",
  "Honest assessment of what suits your skin — and what to skip",
  "Referrals to vetted Toronto medi spas and the right practitioner",
];

const doesnt = [
  "Perform treatments, inject, or operate devices",
  "Prescribe or diagnose any medical condition",
];

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="section band-cream2 about" aria-labelledby="about-title">
      <div className="wrap">
        <header className="about-masthead center">
          <Reveal as="p" className="eyebrow">
            About Jenny
          </Reveal>
          <Reveal delay={120}>
            <p className="wordmark-xl" aria-hidden="true">
              Jenny Kim
            </p>
          </Reveal>
        </header>

        <div className="about-feature">
          <Reveal className="about-figure">
            <figure>
              <Photo
                src="/images/jenny-portrait.jpg"
                alt="Portrait of Jenny Kim in a black turtleneck against a soft grey backdrop"
                ratio="45"
                sizes="(max-width: 860px) min(560px, 92vw), 50vw"
                className="about-portrait"
              />
              <figcaption className="about-caption">
                <span>Jenny Kim</span>
                <span>Independent beauty consultant, Toronto</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="about-copy">
            <Reveal as="h2" className="display-sm">
              <span id="about-title">
                On skin, and the art of choosing <em>well</em>.
              </span>
            </Reveal>
            <Reveal delay={120}>
              <span className="hairline-draw section-rule" aria-hidden="true" />
            </Reveal>
            <Reveal as="p" delay={240} className="lede mt-3">
              Jenny Kim is an independent beauty consultant in Toronto. Her work begins where most
              advice ends: with time, attention, and a careful reading of your skin and the life
              around it.
            </Reveal>
            <Reveal as="p" delay={300} className="lede mt-2">
              She performs no treatments and answers to no clinic. What she offers instead is
              perspective — the same counsel she would want for her own skin.
            </Reveal>

            <Reveal delay={340} className="mt-4">
              <div className={`acc-item${open ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="acc-trigger"
                    aria-expanded={open}
                    aria-controls="about-more-panel"
                    onClick={() => setOpen(!open)}
                  >
                    <span>What Jenny does — and doesn&apos;t</span>
                    <span className="acc-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id="about-more-panel"
                  role="region"
                  className="acc-panel"
                  inert={!open}
                >
                  <div className="acc-inner">
                    <div className="does">
                      <p className="eyebrow chrome">She does</p>
                      <ul className="mt-2">
                        {does.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <p className="eyebrow mt-3">She doesn&apos;t</p>
                      <ul className="mt-2">
                        {doesnt.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
