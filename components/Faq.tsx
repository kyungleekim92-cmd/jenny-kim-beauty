"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section band-cream2" aria-labelledby="faq-title">
      <div className="wrap-narrow">
        <SectionHead
          id="faq-title"
          eyebrow="Questions"
          title="Asked often, answered plainly."
          lede="The things you'd want to know before you book — no fine print."
        />

        <div className="acc-list mt-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 4) * 80} className={`acc-item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    className="acc-trigger faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="acc-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="acc-panel"
                  inert={!isOpen}
                >
                  <div className="acc-inner">
                    <p className="faq-answer">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
