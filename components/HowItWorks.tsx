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
        body: "피부 고민, 받아 보신 관리, 바라는 모습을 편하게 알려 주세요.",
      },
      {
        n: "II",
        title: "1:1 맞춤 상담",
        body: "Bay & Adelaide에서 30분–1시간 만나요. 필요한 시술만 함께 골라요.",
      },
      {
        n: "III",
        title: "전문가 연결",
        body: "계획에 맞는 토론토 메디 스파와 전문가를 직접 연결해 드려요.",
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
