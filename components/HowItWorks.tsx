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
        title: "Then, a quiet hour",
        body: "A private consultation where every option is laid out, and the ones not worth your time are gently set aside.",
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
    title: "모든 플랜은 여기서 시작해요.",
    steps: [
      {
        n: "I",
        title: "먼저, 당신의 이야기",
        body: "고민과 지금까지의 경험, 바라는 모습을 들려주세요. 스킨 퀴즈나 상담 신청서로, 혹은 직접 만나서 편하게 이야기해 주셔도 돼요.",
      },
      {
        n: "II",
        title: "그다음, 조용한 한 시간",
        body: "프라이빗한 상담에서 모든 선택지를 하나씩 살펴보고, 굳이 하지 않으셔도 될 것들은 제가 솔직하게 덜어 드려요.",
      },
      {
        n: "III",
        title: "마지막으로, 믿을 수 있는 손",
        body: "플랜에 가장 잘 맞는 토론토의 메디 스파와 전문가를 제가 직접 연결해 드려요.",
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
