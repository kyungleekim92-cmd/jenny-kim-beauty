"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";
import { localePath, type Lang } from "@/lib/i18n";

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
        직접 <em>고른</em> 몇 곳.
      </>
    ),
    lede: "제가 몇 군데 고른 토론토 메디 스파예요.",
    privileges: "제니의 소개로 가시면 파트너 혜택을 받으실 수 있어요. 스파마다 우대 가격이나 추가 서비스 혜택이 있어요.",
    alt: "리넨 시술 베드 위에 놓인 흰 수건과 회색 돌, 흰 난초 한 송이",
    foundingEyebrow: "첫 파트너",
    foundingTitle: "상담에서, 직접 소개해 드려요.",
    foundingLede:
      "파트너 스파는 계약이 확정되는 대로 이곳에 소개해요. 그전까지는 상담 때 직접 추천해 드려요.",
    vetting: "스파를 고르는 기준",
    criteria: [
      {
        n: "01",
        title: "자격 있는 전문가",
        body: "의사, 간호사, 공인 에스테티션이 시술하는지, 자격을 직접 확인해요.",
      },
      {
        n: "02",
        title: "정품 장비",
        body: "캐나다 보건부(Health Canada) 허가를 받고 관리가 잘 된 정품 장비를 쓰는 곳만 골라요.",
      },
      {
        n: "03",
        title: "투명한 가격",
        body: "시술 전에 견적을 분명하게 안내하고, 예상 못한 추가 비용이나 무리한 권유가 없는 곳이에요.",
      },
      {
        n: "04",
        title: "위생과 사후 관리",
        body: "의료기관 수준으로 위생을 관리하고, 시술 후 관리까지 꼼꼼히 챙기는 곳이에요.",
      },
    ],
    cta: "당신에게 맞는 스파 추천받기",
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
          <Link href={localePath(lang, "/book")} className="quiet-link">
            {t.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
