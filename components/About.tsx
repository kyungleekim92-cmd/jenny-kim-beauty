"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import type { Lang } from "@/lib/i18n";

// Scope wording matters for compliance: Jenny is a consultant, not a practitioner.
const copy = {
  en: {
    alt: "Calm beige interior with sheer curtains in soft daylight",
    eyebrow: "About",
    title: (
      <>
        On skin, and the art of choosing <em>well</em>.
      </>
    ),
    p1: "An independent beauty consultant in Toronto, Jenny begins where most advice ends: with time, attention, and a careful reading of your skin and the life around it.",
    p2: "She performs no treatments and answers to no clinic. What she offers instead is perspective — the same counsel she would want for her own skin, with no clinic visit until you are ready.",
    detail: "The consultation, in detail",
    includedLabel: "Included",
    included: [
      "A private, one-on-one consultation at Bay & Adelaide, over tea or coffee",
      "Thirty minutes to an hour, fitted around your workday",
      "Clear guidance on each treatment option",
      "A considered view of what will suit your skin",
      "Introductions to trusted medi spas and practitioners",
    ],
    scopeLabel: "A note on scope",
    scope: [
      "Treatments, injections and device procedures are left to licensed practitioners",
      "Medical diagnosis and prescriptions remain with your physician",
    ],
  },
  ko: {
    alt: "부드러운 햇살이 드는 베이지색 실내와 쉬폰 커튼",
    eyebrow: "소개",
    title: (
      <>
        당신의 피부에 <em>맞는</em> 선택을 위해.
      </>
    ),
    p1: "토론토의 뷰티 컨설턴트, 제니예요. 상담에서는 피부 상태만 보지 않아요. 당신의 생활 습관과 일정, 지금까지 받아온 관리까지 함께 살펴봐요.",
    p2: "직접 시술하지도, 특정 클리닉에 소속되어 있지도 않아요. 제 피부라고 생각하고 솔직하게 말씀드려요. 마음이 정해지기 전까지는, 클리닉에 가지 않으셔도 돼요.",
    detail: "상담 안내",
    includedLabel: "상담 내용",
    included: [
      "Bay & Adelaide, 차 한잔과 함께하는 1:1 프라이빗 상담",
      "당신의 일정에 맞춰, 30분에서 한 시간",
      "시술 하나하나, 쉽고 정확한 설명",
      "당신의 피부에 맞는 시술에 대한 솔직한 의견",
      "믿을 수 있는 메디 스파와 전문가 연결",
    ],
    scopeLabel: "상담 범위 안내",
    scope: [
      "주사와 레이저 같은 시술은 면허를 가진 전문가가 진행해요",
      "진단과 처방은 담당 의사에게 받으셔야 해요",
    ],
  },
};

export default function About({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  return (
    <section id="about" className="section band-cream2 about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-feature">
          <Reveal className="about-figure">
            <div className="about-portrait">
              <div className="photo ratio-45">
                <video
                  className="photo-img"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                  src="/videos/about-interior.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={t.alt}
                />
              </div>
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal as="p" className="eyebrow chrome">
              {t.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={60} className="display-sm mt-2">
              <span id="about-title">{t.title}</span>
            </Reveal>
            <Reveal delay={120}>
              <span className="hairline-draw section-rule" aria-hidden="true" />
            </Reveal>
            <Reveal as="p" delay={240} className="lede mt-3">
              {t.p1}
            </Reveal>
            <Reveal as="p" delay={300} className="lede mt-2">
              {t.p2}
            </Reveal>

            <Reveal delay={340} className="mt-4">
              <div className={`acc-item${open ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="acc-trigger"
                    aria-expanded={open}
                    aria-controls="about-more-panel"
                    onClick={() => setOpen(!open)}
                  >
                    <span>{t.detail}</span>
                    <span className="acc-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id="about-more-panel"
                  role="region"
                  className="acc-panel"
                  inert={!open}
                >
                  <div className="acc-inner">
                    <div className="does">
                      <div>
                        <p className="eyebrow chrome">{t.includedLabel}</p>
                        <ul className="mt-2">
                          {t.included.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="doesnt">
                        <p className="eyebrow chrome">{t.scopeLabel}</p>
                        <ul className="mt-2">
                          {t.scope.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
