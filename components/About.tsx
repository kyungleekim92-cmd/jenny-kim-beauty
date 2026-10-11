"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";

const included = [
  "A private, one-on-one consultation in Toronto",
  "Clear guidance on each treatment option",
  "A considered view of what will suit your skin",
  "Introductions to trusted medi spas and practitioners",
];

// Scope wording matters for compliance: Jenny is a consultant, not a practitioner.
const scope = [
  "Treatments, injections and device procedures are left to licensed practitioners",
  "Medical diagnosis and prescriptions remain with your physician",
];

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="section band-cream2 about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-feature">
          <Reveal className="about-figure">
            <Photo
              src="/images/jenny-portrait.jpg"
              alt="Portrait of Jenny Kim in a black turtleneck against a soft grey backdrop"
              ratio="45"
              sizes="(max-width: 860px) min(560px, 92vw), 50vw"
              className="about-portrait"
            />
          </Reveal>

          <div className="about-copy">
            <Reveal as="p" className="eyebrow chrome">
              About
            </Reveal>
            <Reveal as="h2" delay={60} className="display-sm mt-2">
              <span id="about-title">
                On skin, and the art of choosing <em>well</em>.
              </span>
            </Reveal>
            <Reveal delay={120}>
              <span className="hairline-draw section-rule" aria-hidden="true" />
            </Reveal>
            <Reveal as="p" delay={240} className="lede mt-3">
              An independent beauty consultant in Toronto, Jenny begins where most advice ends:
              with time, attention, and a careful reading of your skin and the life around it.
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
                    <span>The consultation, in detail</span>
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
                      <div>
                        <p className="eyebrow chrome">Included</p>
                        <ul className="mt-2">
                          {included.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="doesnt">
                        <p className="eyebrow chrome">A note on scope</p>
                        <ul className="mt-2">
                          {scope.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
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
