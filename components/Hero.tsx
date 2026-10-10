"use client";

import { type CSSProperties } from "react";
import { useScrolledPast } from "@/components/motion";
import Photo from "@/components/Photo";

const line = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  const scrolled = useScrolledPast(24);

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow chrome line-reveal" style={line(0)}>
            Independent skincare guidance — Toronto
          </p>
          <h1 className="display">
            <span className="mask-line" style={line(1)}>
              <span className="mask-inner">Know your skin</span>
            </span>
            <span className="mask-line" style={line(2)}>
              <span className="mask-inner">
                before you <em>treat</em> it.
              </span>
            </span>
          </h1>
          <p className="lede line-reveal" style={line(3)}>
            Honest, unhurried advice from someone with nothing to sell.
          </p>
          <span className="line-reveal" style={line(4)}>
            <a href="#consult" className="quiet-link hero-cta">
              Reserve your hour{" "}
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </a>
          </span>
        </div>

        <div className="hero-portrait curtain-reveal" style={line(2)}>
          <Photo
            src="/images/jenny-portrait.jpg"
            alt="Portrait of Jenny Kim, independent beauty consultant"
            ratio="45"
            sizes="(max-width: 900px) min(440px, 92vw), 40vw"
            parallax={0.05}
            drift
            eager
          />
        </div>
      </div>

      <span className={`scroll-cue${scrolled ? " is-hidden" : ""}`} aria-hidden="true" />
    </section>
  );
}
