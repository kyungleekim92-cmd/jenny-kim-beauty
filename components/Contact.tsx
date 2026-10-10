"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { site, VENUE_LINE } from "@/lib/site";

// PLACEHOLDERS — site.contact values are not final; replace in lib/site.ts before launch.
const rows = [
  { label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/[^\d+]/g, "")}` },
  { label: "Instagram", value: "Follow on Instagram", href: site.contact.instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap grid-2 contact-grid">
        <div>
          <SectionHead
            id="contact-title"
            eyebrow="Contact"
            title={
              <>
                Begin with a <em>conversation</em>.
              </>
            }
            lede="A question before you book, or simply hello. Jenny answers every message herself."
          />
        </div>

        <div>
          <Reveal delay={200}>
            <dl className="contact-rows">
              {rows.map((r) => (
                <div className="contact-row" key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>
                    <a
                      href={r.href}
                      className="underline-draw"
                      {...(r.label === "Instagram" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {r.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="contact-row">
                <dt>Address</dt>
                <dd>{VENUE_LINE}</dd>
              </div>
            </dl>
            <p className="contact-small mt-1">
              Placeholder details — to be confirmed before launch. Consultations by appointment.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-3">
            <p className="contact-note">Jenny replies within one business day.</p>
            <a href="#consult" className="btn-outline mt-3">
              Reserve your hour
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
