import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Sections";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <>
      <section className="section" style={{ paddingTop: 190 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow bronze">Contact</p>
            <h1 className="display mt-2">
              Say <em style={{ fontStyle: "italic" }}>hello</em>.
            </h1>
            <p className="lede mt-3">
              For anything that isn't a booking — press, partnerships, or a quick question before
              you commit to an hour.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section hairline-top" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 16 }}>
                Direct
              </p>
              <p style={{ fontSize: "1.3rem", fontFamily: "var(--font-serif)" }}>
                {site.contact.email}
              </p>
              <p className="mt-1" style={{ fontSize: "1.1rem" }}>
                {site.contact.phone}
              </p>
              <p className="lede mt-3" style={{ fontSize: "1rem" }}>
                Replies within one business day. For consultations, the{" "}
                <Link href="/consultation" className="quiet-link">
                  booking form
                </Link>{" "}
                gets you a faster, fuller answer.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="band-ink" style={{ padding: "clamp(28px, 4vw, 48px)" }}>
                <p className="eyebrow">Consultations</p>
                <p className="display-sm mt-2" style={{ fontSize: "1.8rem" }}>
                  {site.venue.name}
                </p>
                <p className="mt-1" style={{ color: "rgba(246,241,234,.72)" }}>
                  {site.venue.address}
                  <br />
                  {site.venue.city}
                </p>
                <div className="mt-3">
                  <Link href="/consultation" className="btn-outline">
                    Reserve your hour
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section hairline-top band-cream2">
        <div className="wrap-narrow">
          <SectionHead
            eyebrow="Areas served"
            title="Toronto, in person."
            lede="Consultations are held in person at the St. Regis. Virtual introductions can be arranged before you book — mention it in your request."
            center
          />
        </div>
      </section>
    </>
  );
}
