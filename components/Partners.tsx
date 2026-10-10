"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";

const steps = [
  {
    n: "I",
    title: "You consult with Jenny",
    body: "Your plan is built independently — before any spa enters the picture.",
  },
  {
    n: "II",
    title: "Jenny matches you",
    body: "She pairs your plan with the partner spa and practitioner best suited to deliver it.",
  },
  {
    n: "III",
    title: "You book directly",
    body: "You meet the spa as an informed client. Jenny remains available throughout.",
  },
];

const criteria = [
  {
    n: "01",
    title: "Licensed practitioners",
    body: "Physicians, nurse injectors, or certified aestheticians — credentials verified, experience confirmed.",
  },
  {
    n: "02",
    title: "Authentic devices",
    body: "Real, maintained technology with Health Canada authorizations for its uses — no grey-market equipment.",
  },
  {
    n: "03",
    title: "Honest pricing",
    body: "Clear quotes before you commit. No surprise add-ons, no pressure tactics in the treatment room.",
  },
  {
    n: "04",
    title: "Hygiene & aftercare",
    body: "Clinical standards of cleanliness and proper follow-up protocols for every treatment offered.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="section" aria-labelledby="partners-title">
      <div className="wrap">
        <SectionHead
          id="partners-title"
          eyebrow="Partner spas"
          title={
            <>
              Trusted referrals, not <em>listings</em>.
            </>
          }
          lede="A short, curated circle of Toronto medi spas — each vetted personally, against standards most directories never check."
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

        <Reveal as="p" className="disclosure mt-4">
          Disclosure: partner spas may pay Jenny a referral fee when you book through her. It never
          changes what you pay, and every client is told before any referral is made.
        </Reveal>

        <Reveal className="band-cream2 partner-panel mt-4">
          <Photo
            src="/images/spa.jpg"
            alt="A folded white towel, a smooth grey stone and a single white orchid on a linen treatment bed"
            ratio="11"
            sizes="(max-width: 860px) 84vw, 40vw"
          />
          <div>
            <p className="eyebrow">Founding partner — in discussion</p>
            <h3 className="display-sm mt-2">Skinlab Medispa</h3>
            <p className="lede mt-2">
              North York, Toronto — a full-spectrum medi spa offering injectables, ultrasound and
              radiofrequency tightening, picosecond laser, Hydrafacial, and medical-grade peels.
              Profile and practitioner details to be confirmed on partnership signing.
            </p>
            <p className="partner-note mt-2">
              Draft placeholder — final profile pending partnership confirmation.
            </p>
          </div>
        </Reveal>

        <div className="mt-4">
          <Reveal as="p" className="eyebrow chrome">
            How spas are vetted
          </Reveal>
          <div className="grid-4 mt-3">
            {criteria.map((c, i) => (
              <Reveal key={c.n} delay={i * 100} className="criterion">
                <p className="numeral" aria-hidden="true">
                  {c.n}
                </p>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-4">
          <a href="#consult" className="quiet-link">
            Get matched to your spa
          </a>
        </Reveal>
      </div>
    </section>
  );
}
