import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PlaceholderImage, SectionHead } from "@/components/Sections";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

const chapters = [
  {
    n: "01",
    title: "Injectables, explained honestly",
    body: "Botox, fillers, and skin boosters — what each one actually does, how long it lasts, and who it suits. No hype, no pressure.",
    href: "/guides/botox",
  },
  {
    n: "02",
    title: "Lasers & light, demystified",
    body: "IPL, PicoSure, Laser Genesis — which concerns each one answers, and how to think about sessions and downtime.",
    href: "/guides/picosure",
  },
  {
    n: "03",
    title: "The quiet workhorses",
    body: "Hydrafacials, peels, and skin-tightening treatments — the understated options behind lasting skin quality.",
    href: "/guides/hydrafacial",
  },
];

const steps = [
  {
    n: "I",
    title: "Tell Jenny",
    body: "Share your concerns, history, and goals — in the quiz, the booking form, or across the table.",
  },
  {
    n: "II",
    title: "Get a plan",
    body: "In a private consultation at the St. Regis, Jenny maps the treatments that suit your skin — and names the ones to avoid.",
  },
  {
    n: "III",
    title: "Meet your spa",
    body: "You're referred to a vetted Toronto medi spa and the right practitioner for your plan. Jenny stays in your corner.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="section"
        style={{ paddingTop: 200, minHeight: "92vh", display: "flex", alignItems: "center" }}
      >
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <p className="eyebrow bronze">Private skincare consultancy — Toronto</p>
              <h1 className="display mt-2">
                Know your skin
                <br />
                before you <em style={{ fontStyle: "italic" }}>treat</em> it.
              </h1>
              <p className="lede mt-3">
                Jenny Kim advises you independently — then refers you to the right Toronto medi
                spa for your plan. No selling, no guessing.
              </p>
              <div className="mt-3">
                <Link href="/consultation" className="quiet-link">
                  Reserve your hour
                </Link>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <PlaceholderImage
                ratio="ph-45"
                label="Portrait — Jenny"
                spec="4:5 · warm desaturated grade · partial crop · no stock smile"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section hairline-top band-cream2">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            title="Three steps, one advisor."
            lede="You never walk into a treatment room unsure again. Jenny stands between you and the menu of options — translating, filtering, and matching."
          />
          <div className="grid-3 mt-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <p className="numeral">{s.n}</p>
                <h3 className="display-sm mt-1" style={{ fontSize: "1.7rem" }}>
                  {s.title}
                </h3>
                <p className="lede mt-1" style={{ fontSize: "1rem" }}>
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERED CHAPTERS */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Treatment guides"
            title="Begin with understanding."
            lede="Twenty guides written in plain language — what each treatment does, what it costs in candour, and who it suits."
          />
          <div className="mt-4">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={i * 90}>
                <Link
                  href={c.href}
                  style={{ textDecoration: "none", display: "block" }}
                  className="hairline-top"
                >
                  <div className="grid-2" style={{ padding: "44px 0", gap: "clamp(24px, 4vw, 64px)" }}>
                    <div style={{ display: "flex", gap: 28, alignItems: "baseline" }}>
                      <span className="numeral">{c.n}</span>
                      <h3 className="display-sm" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
                        {c.title}
                      </h3>
                    </div>
                    <p className="lede" style={{ fontSize: "1rem" }}>
                      {c.body}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal>
              <div className="hairline-top hairline-bottom center" style={{ padding: "40px 0" }}>
                <Link href="/guides" className="quiet-link">
                  All twenty guides
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VENUE — dark band */}
      <section className="section band-ink">
        <div className="wrap">
          <div className="grid-2">
            <Reveal>
              <PlaceholderImage
                ratio="ph-45"
                label="The consultation suite"
                spec="4:5 · calm interior · warm neutrals · soft daylight"
              />
            </Reveal>
            <Reveal delay={140}>
              <p className="eyebrow">The setting</p>
              <h2 className="display-sm mt-2">
                Private consultations,
                <br />
                thirty-two floors up.
              </h2>
              <p className="lede mt-3">{site.venue.blurb}</p>
              <p className="mt-2" style={{ color: "rgba(246,241,234,.72)" }}>
                {site.venue.name}
                <br />
                {site.venue.address}, {site.venue.city}
              </p>
              <div className="mt-3">
                <Link href="/consultation" className="btn-outline">
                  Book a consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUIZ TEASER */}
      <section className="section">
        <div className="wrap center">
          <Reveal>
            <p className="eyebrow bronze">Not sure where to start?</p>
            <h2 className="display-sm mt-2">
              Two minutes. Your skin,
              <br />
              mapped.
            </h2>
            <p className="lede mt-3">
              Answer a few questions about your concerns and tolerance for downtime — receive the
              two or three treatment guides worth reading first.
            </p>
            <div className="mt-3">
              <Link href="/quiz" className="quiet-link">
                Take the skin quiz
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="section hairline-top band-cream2">
        <div className="wrap-narrow">
          <SectionHead eyebrow="Questions" title="Asked often, answered plainly." center />
          <Reveal>
            <FaqAccordion items={faqs.slice(0, 4)} />
            <div className="center mt-3">
              <Link href="/faq" className="quiet-link">
                All questions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
