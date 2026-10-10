"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";

const steps = [
  {
    n: "I",
    title: "You share",
    body: "Your concerns, history, and goals — in the quiz, the form, or in person.",
  },
  {
    n: "II",
    title: "Jenny advises",
    body: "One private consultation. What suits your skin — and what to skip.",
  },
  {
    n: "III",
    title: "You're matched",
    body: "The right Toronto medi spa and practitioner for your plan.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section band-cream2" aria-labelledby="how-title">
      <div className="wrap">
        <SectionHead
          id="how-title"
          eyebrow="How it works"
          title="Guidance first. Everything else after."
        />
        <ol className="grid-3 mt-4" style={{ listStyle: "none" }}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={120 + i * 110} className="step">
              <span className="hairline-draw" aria-hidden="true" />
              <p className="step-num" aria-hidden="true">
                {s.n}
              </p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
