"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Partner spas",
    title: (
      <>
        A small circle, chosen with <em>care</em>.
      </>
    ),
    lede: "A handful of Toronto medi spas, each one vetted by Jenny personally.",
    privileges:
      "Introductions through Jenny may include partner privileges — preferred pricing or complimentary added services, where offered.",
    alt: "A folded white towel, a smooth grey stone and a single white orchid on a linen treatment bed",
    foundingEyebrow: "Founding partners",
    foundingTitle: "Introduced in person.",
    foundingLede:
      "Partner profiles are published here once each spa signs. Until then, Jenny shares her recommendations at your consultation.",
    vetting: "How spas are vetted",
    criteria: [
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
    ],
    cta: "Get matched to your spa",
  },
  ko: {
    eyebrow: "파트너 스파",
    title: (
      <>
        정성껏 고른 <em>작은</em> 모임.
      </>
    ),
    lede: "제니가 직접 검증한 토론토의 소수 정예 메디 스파.",
    privileges: "제니를 통한 소개에는 파트너 혜택이 포함될 수 있습니다 — 우대 가격 또는 추가 서비스 제공(해당 시).",
    alt: "리넨 시술 베드 위의 개어 둔 흰 수건, 매끄러운 회색 돌, 흰 난초 한 송이",
    foundingEyebrow: "파운딩 파트너",
    foundingTitle: "직접 소개해 드립니다.",
    foundingLede:
      "파트너 스파의 소개는 각 스파와 계약이 체결된 후 이곳에 게시됩니다. 그전까지는 상담에서 제니가 직접 추천해 드립니다.",
    vetting: "스파 검증 기준",
    criteria: [
      {
        n: "01",
        title: "자격을 갖춘 전문가",
        body: "의사, 간호사 인젝터 또는 공인 에스테티션 — 자격을 직접 확인합니다.",
      },
      {
        n: "02",
        title: "정품 장비",
        body: "캐나다 보건부(Health Canada) 승인을 받은, 제대로 관리되는 정품 장비만 사용합니다.",
      },
      {
        n: "03",
        title: "투명한 가격",
        body: "결정 전에 명확한 견적을 안내합니다. 예상치 못한 추가 비용이나 권유가 없습니다.",
      },
      {
        n: "04",
        title: "위생과 사후 관리",
        body: "의료 수준의 위생 기준과 시술 후 꼼꼼한 사후 관리를 지킵니다.",
      },
    ],
    cta: "나에게 맞는 스파 찾기",
  },
};

export default function Partners({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  return (
    <section id="partners" className="section" aria-labelledby="partners-title">
      <div className="wrap">
        <SectionHead
          id="partners-title"
          eyebrow={t.eyebrow}
          title={t.title}
          lede={t.lede}
        />

        <Reveal as="p" className="privileges mt-4">
          {t.privileges}
        </Reveal>

        <Reveal className="band-cream2 partner-panel block-gap">
          <Photo
            src="/images/spa.jpg"
            alt={t.alt}
            ratio="11"
            sizes="(max-width: 860px) 84vw, 50vw"
            parallax={0.03}
          />
          <div>
            <p className="eyebrow">{t.foundingEyebrow}</p>
            <h3 className="display-sm mt-2">{t.foundingTitle}</h3>
            <p className="lede mt-2">{t.foundingLede}</p>
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
                <span>{t.vetting}</span>
                <span className="acc-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id="vetting-panel" role="region" className="acc-panel" inert={!open}>
              <div className="acc-inner">
                <div className="grid-4 mt-3">
                  {t.criteria.map((c) => (
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
            {t.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
