"use client";

import { type CSSProperties } from "react";
import { useScrolledPast } from "@/components/motion";
import Photo from "@/components/Photo";
import type { Lang } from "@/lib/i18n";

const line = (i: number) => ({ "--i": i }) as CSSProperties;

const copy = {
  en: {
    eyebrow: "Independent skincare guidance",
    city: "Toronto",
    line1: "Know your skin",
    line2: (
      <>
        before you <em>treat</em> it.
      </>
    ),
    lede: "One-to-one skincare consultations at Bay & Adelaide, Toronto.",
    cta: "Book a consultation",
    alt: "Portrait of Jenny Kim, independent beauty consultant",
  },
  ko: {
    eyebrow: "독립 스킨케어 컨설팅",
    city: "토론토",
    line1: "시술보다 먼저,",
    line2: (
      <>
        내 피부를 <em>아는</em> 것.
      </>
    ),
    lede: "토론토 Bay & Adelaide에서 1:1 스킨케어 상담을 해 드려요.",
    cta: "상담 예약하기",
    alt: "독립 뷰티 컨설턴트 제니 킴의 인물 사진",
  },
};

export default function Hero({ lang }: { lang: Lang }) {
  const scrolled = useScrolledPast(24);
  const t = copy[lang];

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow chrome line-reveal" style={line(0)}>
            <span>
              {t.eyebrow}
              <span className="eyebrow-sep"> — </span>
              <span className="eyebrow-tail">{t.city}</span>
            </span>
          </p>
          <h1 className="display">
            <span className="mask-line" style={line(1)}>
              <span className="mask-inner">{t.line1}</span>
            </span>
            <span className="mask-line" style={line(2)}>
              <span className="mask-inner">{t.line2}</span>
            </span>
          </h1>
          <p className="lede line-reveal" style={line(3)}>
            {t.lede}
          </p>
          <span className="line-reveal" style={line(4)}>
            <a href="#consult" className="quiet-link hero-cta">
              {t.cta}{" "}
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </a>
          </span>
        </div>

        <div className="hero-portrait curtain-reveal" style={line(2)}>
          <Photo
            src="/images/jenny-portrait.jpg"
            alt={t.alt}
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
