"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";
import type { Lang } from "@/lib/i18n";

// Scope wording matters for compliance: Jenny is a consultant, not a practitioner.
const copy = {
  en: {
    alt: "Stone basin with eucalyptus in a softly lit beige corner",
    eyebrow: "About",
    title: (
      <>
        Let&rsquo;s find the <em>right</em> choice for your skin.
      </>
    ),
    p1: "I'm Jenny, an independent beauty consultant in Toronto. We'll look at your skin together, along with your daily habits, your schedule, and the treatments you've had.",
    p2: "I don't perform treatments, and I'm not part of any clinic. I'll tell you honestly what I think, as if it were my own skin. There's no need to visit a clinic until you've decided.",
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
    alt: "부드러운 빛이 드는 베이지색 모서리의 스톤 세면대와 유칼립투스",
    eyebrow: "소개",
    title: (
      <>
        내 피부에 <em>맞는</em> 선택, 같이 찾아봐요.
      </>
    ),
    p1: "토론토에서 독립 뷰티 컨설턴트로 일하는 제니입니다. 피부 상태와 함께 생활 습관, 일정, 지금까지 받아온 관리를 살펴봅니다.",
    p2: "직접 시술하지 않으며, 어떤 클리닉에도 소속되어 있지 않습니다. 제 피부처럼 생각하고, 솔직하게 말씀드려요. 마음이 정해지기 전에는 클리닉에 가지 않으셔도 돼요.",
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

export default function About({ lang, titleAs = "h2" }: { lang: Lang; titleAs?: "h1" | "h2" }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  return (
    <section id="about" className="section band-cream2 about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-feature">
          <Reveal className="about-figure">
            <Photo
              src="/images/about-basin.jpg"
              alt={t.alt}
              ratio="45"
              sizes="(max-width: 860px) min(560px, 92vw), 50vw"
              className="about-portrait"
            />
          </Reveal>

          <div className="about-copy">
            <Reveal as="p" className="eyebrow chrome">
              {t.eyebrow}
            </Reveal>
            <Reveal as={titleAs} delay={60} className="display-sm mt-2">
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
