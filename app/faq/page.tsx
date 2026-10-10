import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Sections";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faqs";

export default function FaqPage() {
  return (
    <section className="section" style={{ paddingTop: 190 }}>
      <div className="wrap-narrow">
        <Reveal>
          <p className="eyebrow bronze">FAQ</p>
          <h1 className="display mt-2" style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>
            Asked often,
            <br />
            answered <em style={{ fontStyle: "italic" }}>plainly</em>.
          </h1>
          <div className="divider-bronze" />
        </Reveal>
        <Reveal delay={100}>
          <FaqAccordion items={faqs} />
        </Reveal>
        <Reveal>
          <div className="center mt-4">
            <p className="lede">Something else on your mind?</p>
            <div className="mt-2">
              <Link href="/consultation" className="quiet-link">
                Ask it in person
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
