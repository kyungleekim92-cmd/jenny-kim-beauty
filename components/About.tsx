"use client";

import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";

const does = [
  "One-on-one private consultations in Toronto",
  "Plain-language education on every treatment option",
  "Honest assessment of what suits your skin — and what to skip",
  "Referrals to vetted Toronto medi spas and the right practitioner",
  "Ongoing guidance as your plan unfolds",
];

const doesnt = [
  "Perform treatments, inject, or operate devices",
  "Prescribe or diagnose any medical condition",
  "Push packages, upsells, or treatments you don't need",
  "Share your details without explicit consent",
];

const values = [
  {
    n: "01",
    title: "Independence first",
    body: "Jenny doesn't sell treatments and doesn't work for any spa. Her only incentive is that you make a decision you'll still be happy about in a year.",
  },
  {
    n: "02",
    title: "Candour over comfort",
    body: "If a treatment won't serve you, she'll say so — including when the honest answer is 'you don't need anything.'",
  },
  {
    n: "03",
    title: "Privacy as standard",
    body: "Consultations are private, unhurried, and discreet. Your details go nowhere without your explicit consent.",
  },
];

export default function About() {
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
                Compassion, candour, and nothing to <em>sell</em>.
              </span>
            </Reveal>
            <Reveal delay={120}>
              <span className="hairline-draw section-rule" aria-hidden="true" />
            </Reveal>
            <Reveal as="p" delay={240} className="lede mt-3">
              Jenny Kim is an independent beauty consultant in Toronto. She doesn&apos;t perform
              treatments and doesn&apos;t represent any clinic. Her advice is independent — she
              recommends only what she would choose for her own skin.
            </Reveal>
            <Reveal as="p" delay={340} className="body-narrow mt-2">
              After years of navigating the aesthetic world herself — the consultations, the
              conflicting advice, the treatments that overpromised — Jenny built the service she
              wished existed: one honest expert, in your corner, translating an entire industry into
              a plan made for your skin.
            </Reveal>
            <Reveal as="p" delay={440} className="about-belief">
              Your skin goes everywhere you go. It deserves to be understood before it is treated.
            </Reveal>
          </div>
        </div>

        <div className="does block-gap">
          <Reveal>
            <h3 className="eyebrow chrome">She does</h3>
            <ul>
              {does.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={110} className="doesnt">
            <h3 className="eyebrow">She doesn&apos;t</h3>
            <ul>
              {doesnt.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid-3 block-gap">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 110} className="value step">
              <span className="hairline-draw" aria-hidden="true" />
              <p className="numeral" aria-hidden="true">
                {v.n}
              </p>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
