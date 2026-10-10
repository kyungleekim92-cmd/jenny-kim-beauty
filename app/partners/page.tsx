import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Sections";

const criteria = [
  {
    t: "Licensed practitioners",
    b: "Physicians, nurse injectors, or certified aestheticians — credentials verified, experience confirmed.",
  },
  {
    t: "Authentic devices",
    b: "Real, maintained technology with Health Canada authorizations for its uses — no grey-market equipment.",
  },
  {
    t: "Honest pricing",
    b: "Clear quotes before you commit. No surprise add-ons, no pressure tactics in the treatment room.",
  },
  {
    t: "Hygiene & aftercare",
    b: "Clinical standards of cleanliness and proper follow-up protocols for every treatment offered.",
  },
];

const steps = [
  {
    n: "I",
    t: "You consult with Jenny",
    b: "Your plan is built independently — before any spa enters the picture.",
  },
  {
    n: "II",
    t: "Jenny matches you",
    b: "She pairs your plan with the partner spa and practitioner best suited to deliver it.",
  },
  {
    n: "III",
    t: "You book directly",
    b: "You meet the spa as an informed client. Jenny remains available throughout.",
  },
];

export default function Partners() {
  return (
    <>
      <section className="section" style={{ paddingTop: 190 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow bronze">Partner spas</p>
            <h1 className="display mt-2">
              Trusted referrals,
              <br />
              not <em style={{ fontStyle: "italic" }}>listings</em>.
            </h1>
            <p className="lede mt-3">
              Jenny refers to a short, curated circle of Toronto medi spas — each one vetted
              personally and held to a standard most directories never check.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section hairline-top band-cream2" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="How referrals work"
            title="Your plan comes first."
            lede="The spa never shapes the advice — the advice shapes the spa you meet."
          />
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
          <Reveal>
            <p className="mt-4" style={{ fontSize: 14, color: "var(--muted)", maxWidth: "64ch" }}>
              Disclosure: partner spas may pay Jenny a referral fee when you book through her. It
              never changes what you pay, and every client is told before any referral is made.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="The circle"
            title="Vetted, personally."
            lede="Partnerships are confirmed one by one. Founding partners will appear here as agreements are signed."
          />
          <div className="mt-4">
            <Reveal>
              <div className="band-cream2" style={{ padding: "clamp(32px, 5vw, 64px)" }}>
                <p className="eyebrow">Founding partner — in discussion</p>
                <h3 className="display-sm mt-2">Skinlab Medispa</h3>
                <p className="lede mt-2" style={{ fontSize: "1rem" }}>
                  North York, Toronto — a full-spectrum medi spa offering injectables, ultrasound
                  and radiofrequency tightening, picosecond laser, Hydrafacial, and medical-grade
                  peels. Profile and practitioner details to be confirmed on partnership signing.
                </p>
                <p className="mt-2" style={{ fontSize: 13, color: "var(--muted)" }}>
                  Draft placeholder — final profile pending partnership confirmation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section hairline-top">
        <div className="wrap">
          <SectionHead
            eyebrow="Vetting criteria"
            title="What earns a place."
            lede="Four non-negotiables. A spa meets all four or it doesn't meet Jenny's clients."
          />
          <div className="grid-2 mt-4" style={{ alignItems: "start" }}>
            {criteria.map((c, i) => (
              <Reveal key={c.t} delay={(i % 2) * 100}>
                <div className="hairline-top" style={{ padding: "28px 0" }}>
                  <p className="numeral">0{i + 1}</p>
                  <h3 className="display-sm mt-1" style={{ fontSize: "1.5rem" }}>
                    {c.t}
                  </h3>
                  <p className="lede mt-1" style={{ fontSize: "0.98rem" }}>
                    {c.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="center mt-4">
              <Link href="/consultation" className="quiet-link">
                Get matched to your spa
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
