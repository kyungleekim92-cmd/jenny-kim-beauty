"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";

const steps = [
  {
    n: "I",
    title: "You share",
    body: "Your concerns, your history, your goals — in the quiz, the booking form, or across the table.",
  },
  {
    n: "II",
    title: "Jenny advises",
    body: "One private, unhurried consultation. The treatments that suit your skin — and the ones to leave alone.",
  },
  {
    n: "III",
    title: "You're matched",
    body: "A vetted Toronto medi spa and the right practitioner for your plan. Jenny stays in your corner.",
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
          lede="Designed around you, not a treatment menu. Jenny listens, translates, and matches — so you walk into every room informed."
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
