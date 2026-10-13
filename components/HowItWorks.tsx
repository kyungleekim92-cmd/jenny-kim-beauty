"use client";

import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "How it works",
    title: "Where every plan begins.",
    steps: [
      {
        n: "I",
        title: "First, your story",
        body: "Your concerns, your history, what you hope for — shared in the quiz, the form, or in person.",
      },
      {
        n: "II",
        title: "Then, tea and a conversation",
        body: "Thirty minutes to an hour, close to the office. Every option is laid out, and the ones not worth your time are gently set aside.",
      },
      {
        n: "III",
        title: "Finally, the right hands",
        body: "An introduction to the Toronto medi spa and practitioner best suited to your plan.",
      },
    ],
  },
  ko: {
    eyebrow: "상담 과정",
    title: "상담은 이렇게 진행돼요.",
    steps: [
      {
        n: "I",
        title: "피부 고민 상담",
        body: "피부 고민과 받아 보신 관리, 되고 싶은 모습을 편하게 털어놓으세요. 질문이나 상담 신청서로 미리 남겨 주셔도 돼요.",
      },
      {
        n: "II",
        title: "1:1 맞춤 상담",
        body: "Bay & Adelaide에서 30분에서 한 시간 정도 1:1로 만나요. 시술 하나하나 짚어보며 나에게 맞는 것만 고르고, 필요 없는 시술은 솔직하게 말씀드려요.",
      },
      {
        n: "III",
        title: "전문가 연결",
        body: "상담 내용을 토대로 나에게 딱 맞는 토론토 메디 스파와 전문가를 직접 연결해 드려요.",
      },
    ],
  },
};

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="how" className="section band-cream2" aria-labelledby="how-title">
      <div className="wrap">
        <SectionHead id="how-title" eyebrow={t.eyebrow} title={t.title} />
        <ol className="grid-3 mt-4" style={{ listStyle: "none" }}>
          {t.steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={120 + i * 110} className="step">
              <span className="hairline-draw" aria-hidden="true" />
              <p className="step-num" aria-hidden="true">
                {s.n}
              </p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
