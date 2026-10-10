import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PlaceholderImage, SectionHead } from "@/components/Sections";
import { site } from "@/lib/site";

const values = [
  {
    t: "Independence first",
    b: "Jenny doesn't sell treatments and doesn't work for any spa. Her only incentive is that you make a decision you'll still be happy about in a year.",
  },
  {
    t: "Candour over comfort",
    b: "If a treatment won't serve you, she'll say so — including when the honest answer is 'you don't need anything.'",
  },
  {
    t: "Privacy as standard",
    b: "Consultations are private, unhurried, and discreet. Your details go nowhere without your explicit consent.",
  },
];

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingTop: 190 }}>
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <PlaceholderImage
                ratio="ph-45"
                label="Portrait — Jenny"
                spec="4:5 · natural pose · soft daylight · warm desaturated"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow bronze">About</p>
              <h1 className="display-sm mt-2">
                The advisor
                <br />
                between you
                <br />
                and the <em style={{ fontStyle: "italic" }}>menu</em>.
              </h1>
              <p className="lede mt-3">
                Jenny Kim is an independent beauty consultant in Toronto. She doesn't perform
                treatments, doesn't represent any clinic, and doesn't earn from what you choose —
                only from guiding you to the right choice.
              </p>
              <p className="body-narrow mt-2" style={{ color: "var(--muted)" }}>
                After years of navigating the aesthetic world herself — the consultations, the
                conflicting advice, the treatments that overpromised — Jenny built the service she
                wished existed: one honest expert, in your corner, translating an entire industry
                into a plan made for your skin.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section hairline-top band-cream2">
        <div className="wrap">
          <SectionHead
            eyebrow="What Jenny does — and doesn't do"
            title="Clarity, kept honest."
          />
          <div className="grid-2 mt-4" style={{ alignItems: "start" }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                She does
              </p>
              {[
                "One-on-one private consultations at the St. Regis",
                "Plain-language education on every treatment option",
                "Honest assessment of what suits your skin — and what to skip",
                "Referrals to vetted Toronto medi spas and the right practitioner",
                "Ongoing guidance as your plan unfolds",
              ].map((x) => (
                <p key={x} className="hairline-top" style={{ padding: "14px 0" }}>
                  {x}
                </p>
              ))}
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                She doesn't
              </p>
              {[
                "Perform treatments, inject, or operate devices",
                "Prescribe or diagnose any medical condition",
                "Push packages, upsells, or treatments you don't need",
                "Share your details without explicit consent",
              ].map((x) => (
                <p key={x} className="hairline-top" style={{ padding: "14px 0", color: "var(--muted)" }}>
                  {x}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Values" title="How she works." />
          <div className="grid-3 mt-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <p className="numeral">0{i + 1}</p>
                <h3 className="display-sm mt-1" style={{ fontSize: "1.6rem" }}>
                  {v.t}
                </h3>
                <p className="lede mt-1" style={{ fontSize: "1rem" }}>
                  {v.b}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="center mt-4">
              <Link href="/consultation" className="btn-outline">
                Meet Jenny in person
              </Link>
              <p className="mt-2" style={{ fontSize: 14, color: "var(--muted)" }}>
                {site.venue.name}, {site.venue.address}, {site.venue.city}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
