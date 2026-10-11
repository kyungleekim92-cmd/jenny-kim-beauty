"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Contact",
    title: (
      <>
        Begin with a <em>conversation</em>.
      </>
    ),
    lede: "A question before you book, or simply hello. Jenny answers every message herself.",
    address: "Address",
    hours: "Hours",
    consultations: "Consultations",
    requestOnline: "Request online",
    small: "By appointment only. Jenny replies within one business day.",
    reserve: "Book a consultation",
  },
  ko: {
    eyebrow: "문의",
    title: (
      <>
        편하게 <em>연락</em> 주세요.
      </>
    ),
    lede: "예약 전에 궁금한 점이 있으시면 언제든 물어보세요. 메시지는 모두 제가 직접 읽고 답장 드려요.",
    address: "주소",
    hours: "운영 시간 (토론토 시간)",
    consultations: "상담",
    requestOnline: "온라인 신청",
    small: "예약제로만 운영해요. 영업일 기준 하루 안에 답장 드릴게요.",
    reserve: "상담 예약하기",
  },
};

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHead
          id="contact-title"
          eyebrow={t.eyebrow}
          title={t.title}
          lede={t.lede}
        />

        <Reveal delay={200} className="contact-block">
          <dl className="contact-facts">
            <div>
              <dt>{t.address}</dt>
              <dd>
                {site.venue.building}
                <br />
                {site.venue.address}
                <br />
                {lang === "ko" ? "토론토" : site.venue.city}
              </dd>
            </div>
            <div>
              <dt>{t.hours}</dt>
              <dd>
                {site.hours.map((h) => (
                  <span key={h.label} className="hours-line">
                    {lang === "ko" ? h.ko.label : h.label}
                    <br />
                    {lang === "ko" ? h.ko.display : h.display}
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
              <dt>{t.consultations}</dt>
              <dd>
                <a href="#consult" className="underline-draw">
                  {t.requestOnline}
                </a>
              </dd>
            </div>
          </dl>
          <p className="contact-small">{t.small}</p>
        </Reveal>

        <Reveal delay={300} className="mt-4">
          <a href="#consult" className="quiet-link">
            {t.reserve}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
