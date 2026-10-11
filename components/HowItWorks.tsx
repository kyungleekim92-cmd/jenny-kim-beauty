"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";

const steps = [
  {
    n: "I",
    title: "First, your story",
    body: "Your concerns, your history, what you hope for — shared in the quiz, the form, or in person.",
  },
  {
    n: "II",
    title: "Then, a quiet hour",
    body: "A private consultation where every option is laid out, and the ones not worth your time are gently set aside.",
  },
  {
    n: "III",
    title: "Finally, the right hands",
    body: "An introduction to the Toronto medi spa and practitioner best suited to your plan.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section band-cream2" aria-labelledby="how-title">
      <div className="wrap">
        <SectionHead
          id="how-title"
          eyebrow="How it works"
          title="Where every plan begins."
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
