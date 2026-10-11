"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";

const criteria = [
  {
    n: "01",
    title: "Licensed practitioners",
    body: "Physicians, nurse injectors, or certified aestheticians — credentials verified.",
  },
  {
    n: "02",
    title: "Authentic devices",
    body: "Real, maintained technology with Health Canada authorizations — no grey-market equipment.",
  },
  {
    n: "03",
    title: "Honest pricing",
    body: "Clear quotes before you commit. No surprise add-ons, no pressure tactics.",
  },
  {
    n: "04",
    title: "Hygiene & aftercare",
    body: "Clinical standards of cleanliness and proper follow-up for every treatment.",
  },
];

export default function Partners() {
  const [open, setOpen] = useState(false);

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
          lede="A short, curated circle of Toronto medi spas — each vetted personally."
        />

        <Reveal as="p" className="disclosure mt-4">
          Disclosure: partner spas may pay Jenny a referral fee when you book through her. It never
          changes what you pay, and every client is told before any referral is made.
        </Reveal>

        <Reveal className="band-cream2 partner-panel block-gap">
          <Photo
            src="/images/spa.jpg"
            alt="A folded white towel, a smooth grey stone and a single white orchid on a linen treatment bed"
            ratio="11"
            sizes="(max-width: 860px) 84vw, 50vw"
            parallax={0.03}
          />
          <div>
            <p className="eyebrow">Founding partners</p>
            <h3 className="display-sm mt-2">Introduced in person.</h3>
            <p className="lede mt-2">
              Partner profiles are published here once each spa signs. Until then, Jenny shares her
              recommendations at your consultation.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <div className={`acc-item${open ? " is-open" : ""}`}>
            <h3>
              <button
                type="button"
                className="acc-trigger"
                aria-expanded={open}
                aria-controls="vetting-panel"
                onClick={() => setOpen(!open)}
              >
                <span>How spas are vetted</span>
                <span className="acc-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id="vetting-panel" role="region" className="acc-panel" inert={!open}>
              <div className="acc-inner">
                <div className="grid-4 mt-3">
                  {criteria.map((c) => (
                    <div key={c.n} className="criterion">
                      <p className="numeral" aria-hidden="true">
                        {c.n}
                      </p>
                      <h3>{c.title}</h3>
                      <p>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <a href="#consult" className="quiet-link">
            Get matched to your spa
          </a>
        </Reveal>
      </div>
    </section>
  );
}
