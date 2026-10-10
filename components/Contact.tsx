"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { site } from "@/lib/site";

// PLACEHOLDERS — site.contact values are not final; replace in lib/site.ts before launch.
const tel = `tel:${site.contact.phone.replace(/[^\d+]/g, "")}`;

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
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

        <Reveal delay={200} className="contact-block">
          <dl className="contact-facts">
            <div>
              <dt>Address</dt>
              <dd>
                {site.venue.name}
                <br />
                {site.venue.address}
                <br />
                {site.venue.city}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.contact.email}`} className="underline-draw">
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={tel} className="underline-draw">
                  {site.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a
                  href={site.contact.instagram}
                  className="underline-draw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </dd>
            </div>
          </dl>
          <p className="contact-small">
            Placeholder details — to be confirmed before launch. Consultations by appointment.
            Jenny replies within one business day.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-4">
          <a href="#consult" className="quiet-link">
            Reserve your hour
          </a>
        </Reveal>
      </div>
    </section>
  );
}
