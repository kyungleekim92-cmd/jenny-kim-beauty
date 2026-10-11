"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";
import type { Lang } from "@/lib/i18n";

// Scope wording matters for compliance: Jenny is a consultant, not a practitioner.
const copy = {
  en: {
    alt: "Portrait of Jenny Kim in a black turtleneck against a soft grey backdrop",
    eyebrow: "About",
    title: (
      <>
        On skin, and the art of choosing <em>well</em>.
      </>
    ),
    p1: "An independent beauty consultant in Toronto, Jenny begins where most advice ends: with time, attention, and a careful reading of your skin and the life around it.",
    p2: "She performs no treatments and answers to no clinic. What she offers instead is perspective — the same counsel she would want for her own skin.",
    detail: "The consultation, in detail",
    includedLabel: "Included",
    included: [
      "A private, one-on-one consultation in Toronto",
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
    alt: "부드러운 회색 배경 앞, 검은 터틀넥을 입은 제니 킴의 인물 사진",
    eyebrow: "소개",
    title: (
      <>
        피부에 대하여, 그리고 <em>잘</em> 고르는 법.
      </>
    ),
    p1: "저는 토론토에서 활동하는 독립 뷰티 컨설턴트 제니예요. 대부분의 조언이 끝나는 곳에서 제 상담이 시작돼요. 충분한 시간을 들여, 피부와 그 피부를 둘러싼 일상까지 세심하게 살펴요.",
    p2: "저는 직접 시술을 하지 않고, 어느 클리닉에도 소속되어 있지 않아요. 대신 제 피부였어도 똑같이 듣고 싶었을 관점과 조언을 드려요.",
    detail: "상담 안내",
    includedLabel: "포함 내용",
    included: [
      "토론토에서 진행되는 프라이빗 1:1 상담",
      "시술별로 명확한 안내",
      "내 피부에 맞는 선택에 대한 신중한 의견",
      "신뢰할 수 있는 메디 스파와 전문가 연결",
    ],
    scopeLabel: "상담 범위 안내",
    scope: [
      "시술, 주사, 기기 시술은 면허를 가진 전문가가 맡아요",
      "의학적 진단과 처방은 담당 의사의 영역이에요",
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
            <Photo
              src="/images/jenny-portrait.jpg"
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
