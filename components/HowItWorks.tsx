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
        title: "먼저, 고민을 알려 주세요",
        body: "지금 고민하시는 부분과 그동안 받아 보신 관리, 바라는 모습을 알려 주세요. '나에게 맞는 시술' 질문이나 상담 신청서로 남겨 주셔도 되고, 만나서 편하게 말씀해 주셔도 돼요.",
      },
      {
        n: "II",
        title: "그다음, 차 한잔 하며 상담해요",
        body: "금융가 Bay & Adelaide에서 30분에서 한 시간 정도 만나요. 받을 수 있는 시술을 하나씩 함께 살펴보고, 굳이 받지 않으셔도 되는 시술은 미리 말씀드려요.",
      },
      {
        n: "III",
        title: "마지막으로, 맞는 전문가를 만나요",
        body: "시술 계획에 가장 잘 맞는 토론토의 메디 스파와 전문가를 제가 직접 연결해 드려요.",
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
