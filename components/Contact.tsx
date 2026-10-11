"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { site } from "@/lib/site";

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
                {site.venue.address}
                <br />
                {site.venue.city}
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                {site.hours.map((h) => (
                  <span key={h.label} className="hours-line">
                    {h.label}
                    <br />
                    {h.display}
                  </span>
                ))}
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
                  @{site.contact.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt>Consultations</dt>
              <dd>
                <a href="#consult" className="underline-draw">
                  Request online
                </a>
              </dd>
            </div>
          </dl>
          <p className="contact-small">
            By appointment only. Jenny replies within one business day.
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
