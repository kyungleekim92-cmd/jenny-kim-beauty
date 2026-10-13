"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion";
import Photo from "@/components/Photo";
import type { OpenChapterDetail } from "@/components/Chapters";
import FormError from "@/components/FormError";
import { conditions } from "@/lib/conditions";
import { sendInquiry, type InquiryResult } from "@/lib/inquiry";
import { treatments, type Treatment } from "@/lib/treatments";
import type { Lang } from "@/lib/i18n";
import { getConditions, getTreatments } from "@/lib/i18n/content";

type Step = 0 | 1 | 2 | 3;
type Downtime = "none" | "minimal" | "moderate" | "significant";
const downtimeIds: Downtime[] = ["none", "minimal", "moderate", "significant"];

const copy = {
  en: {
    section: "Where to begin",
    downtime: {
      none: "None — I need zero recovery",
      minimal: "Minimal — a day or two",
      moderate: "Moderate — up to a week",
      significant: "Significant — I'll plan around it",
    },
    introTitle: (
      <>
        Two minutes. Your skin, <em>mapped</em>.
      </>
    ),
    introLede: "A few questions. Get the guides worth reading first — matched to you.",
    begin: "Begin",
    q1Eyebrow: "Where to begin — question 1 of 2",
    q1: "What concerns you most?",
    q1Aside: "Choose all that apply.",
    q1Group: "Skin concerns",
    continue: "Continue",
    back: "← Back",
    q2Eyebrow: "Where to begin — question 2 of 2",
    q2: "How much downtime can you accept?",
    q2Aside: "Be honest — the right plan respects your real life.",
    q2Group: "Acceptable downtime",
    seeMatches: "See my matches",
    resultsEyebrow: "Where to begin — your reading list",
    results: "Your matches.",
    moleNote:
      "A note on moles: anything changing, dark, or unusual needs a physician's assessment first. Jenny works on aesthetic concerns only and will redirect you when that's the right call.",
    co2Note:
      "We've set aside deeper resurfacing options since you preferred no downtime — mention it at your consultation if you reconsider.",
    readGuide: "Read the guide",
    noMatches:
      "None of the guides fit zero downtime for this concern — Jenny can walk you through the options in person.",
    keep: "Keep your matches",
    thanks: (email: string) =>
      `Thank you — Jenny will send your matches, with a personal note, to ${email}.`,
    emailLabel: "Email address",
    sending: "Sending…",
    send: "Send my matches",
    reserve: "Book a consultation",
    retake: "Retake the quiz",
    alt: "A single golden drop of serum falling from a glass dropper",
  },
  ko: {
    section: "나에게 맞는 시술",
    downtime: {
      none: "회복 기간 없이 바로 일상으로 돌아가야 해요",
      minimal: "하루 이틀 정도는 괜찮아요",
      moderate: "일주일 이내면 괜찮아요",
      significant: "일정을 조정해서 충분히 쉴 수 있어요",
    },
    introTitle: (
      <>
        2분이면 <em>내 피부</em>에 맞는 가이드를 찾을 수 있어요.
      </>
    ),
    introLede: "몇 가지 질문에 답해 주시면, 먼저 읽어 보시면 좋은 가이드를 추천해 드려요.",
    begin: "시작하기",
    q1Eyebrow: "나에게 맞는 시술 · 질문 1/2",
    q1: "요즘 가장 신경 쓰이는 피부 고민은 뭐예요?",
    q1Aside: "해당하는 것을 모두 골라 주세요.",
    q1Group: "피부 고민",
    continue: "다음",
    back: "← 이전",
    q2Eyebrow: "나에게 맞는 시술 · 질문 2/2",
    q2: "회복 기간은 어느 정도까지 괜찮으세요?",
    q2Aside: "편하게 골라 주세요. 시술 계획은 일상에 맞아야 오래 갈 수 있어요.",
    q2Group: "가능한 회복 기간",
    seeMatches: "결과 보기",
    resultsEyebrow: "나에게 맞는 시술 · 추천 가이드",
    results: "이런 가이드를 추천해요.",
    moleNote:
      "점은 꼭 확인해 주세요. 모양이나 색이 변했거나 평소와 달라 보이는 점은 먼저 병원에서 진료를 받으셔야 해요. 저는 미용 고민만 상담하고, 진료가 필요해 보이면 병원부터 권해 드려요.",
    co2Note:
      "회복 기간이 없는 시술을 원하셔서 CO2 레이저처럼 깊게 박피하는 시술은 뺐어요. 생각이 바뀌시면 상담 때 말씀해 주세요.",
    readGuide: "가이드 읽기",
    noMatches:
      "이 고민은 회복 기간 없이 할 수 있는 시술이 마땅치 않아요. 상담 때 가능한 방법을 제가 직접 안내해 드릴게요.",
    keep: "결과를 메일로 받아 보세요",
    thanks: (email: string) => `감사해요. ${email} 주소로 결과와 제 짧은 메모를 함께 보내 드릴게요.`,
    emailLabel: "이메일 주소",
    sending: "보내는 중…",
    send: "메일로 받기",
    reserve: "상담 예약하기",
    retake: "다시 하기",
    alt: "유리 스포이트에서 떨어지는 황금빛 세럼 한 방울",
  },
};

// Selected conditions → unique treatment slugs (in condition order), minus CO2 when
// no downtime is acceptable, capped at four.
function matchTreatments(selected: string[], downtime: Downtime | null, list: Treatment[]) {
  const slugs: string[] = [];
  for (const cs of selected) {
    const c = conditions.find((x) => x.slug === cs);
    c?.treatments.forEach((t) => {
      if (!slugs.includes(t)) slugs.push(t);
    });
  }
  let results = slugs
    .map((s) => list.find((t) => t.slug === s))
    .filter((t): t is Treatment => Boolean(t));
  const filteredCo2 = downtime === "none" && results.some((t) => t.slug === "co2-laser");
  if (downtime === "none") results = results.filter((t) => t.slug !== "co2-laser");
  return { results: results.slice(0, 4), filteredCo2 };
}

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readGuide(slug: string) {
  const event = new CustomEvent<OpenChapterDetail>("open-chapter", {
    detail: { slug },
    cancelable: true,
  });
  const handled = !window.dispatchEvent(event);
  // Chapters scrolls to the exact guide when it handles the event; otherwise land on the section.
  if (!handled) {
    document.getElementById("guides")?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  }
}

export default function Quiz({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const localConditions = getConditions(lang);
  const [step, setStep] = useState<Step>(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [downtime, setDowntime] = useState<Downtime | null>(null);
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<Exclude<InquiryResult, "sent"> | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastStep = useRef<Step>(0);

  // On each step change: move focus to the new heading, and bring the quiz back
  // into view if its top has scrolled away (the results step is taller).
  useEffect(() => {
    if (lastStep.current === step) return;
    lastStep.current = step;
    headingRef.current?.focus({ preventScroll: true });
    const section = sectionRef.current;
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
    }
  }, [step]);

  const toggle = (slug: string) =>
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const reset = () => {
    setSelected([]);
    setDowntime(null);
    setEmail("");
    setEmailDone(false);
    setError(null);
    setStep(0);
  };

  const { results, filteredCo2 } = matchTreatments(selected, downtime, getTreatments(lang));
  const showMoleNote = selected.includes("mole-removal");

  // Sends the visitor's matches to Jenny, who follows up personally from her own inbox.
  const onEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@") || sending) return;
    setSending(true);
    setError(null);
    // Jenny's inbox stays in English; "Language" tells her which language to reply in.
    const result = await sendInquiry(
      `Skin quiz matches — ${email}`,
      {
        Email: email,
        Language: lang === "ko" ? "Korean (한국어)" : "English",
        Concerns: selected
          .map((slug) => conditions.find((c) => c.slug === slug)?.name ?? slug)
          .join(", "),
        "Downtime OK": downtime ? copy.en.downtime[downtime] : "",
        Matches:
          results.map((r) => treatments.find((x) => x.slug === r.slug)?.name ?? r.slug).join(", ") ||
          "None — wants to talk options through",
      },
      email,
    );
    setSending(false);
    if (result === "sent") setEmailDone(true);
    else setError(result);
  };

  const progress = (
    <div className="quiz-progress" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={step >= n ? "is-done" : ""} />
      ))}
    </div>
  );

  return (
    <section id="quiz" ref={sectionRef} className="section band-deep quiz" aria-label={t.section}>
      <div className="wrap quiz-grid">
        <Reveal>
          <div className="quiz-step" key={step}>
            {step === 0 && (
              <>
                <p className="eyebrow">{t.section}</p>
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-2">
                  {t.introTitle}
                </h2>
                <span className="hairline-draw mt-3" style={{ width: 56 }} aria-hidden="true" />
                <p className="lede mt-3">{t.introLede}</p>
                <div className="quiz-actions">
                  <button type="button" className="quiet-link text-btn" onClick={() => setStep(1)}>
                    {t.begin}
                  </button>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <p className="eyebrow">{t.q1Eyebrow}</p>
                {progress}
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-3">
                  {t.q1}
                </h2>
                <p className="quiz-aside mt-2">{t.q1Aside}</p>
                <div className="chip-group mt-3" role="group" aria-label={t.q1Group}>
                  {localConditions.map((c) => (
                    <button
                      key={c.slug}
                      type="button"
                      className="chip"
                      aria-pressed={selected.includes(c.slug)}
                      title={c.question}
                      onClick={() => toggle(c.slug)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
                <div className="quiz-actions">
                  <button
                    type="button"
                    className="quiet-link text-btn"
                    disabled={selected.length === 0}
                    onClick={() => setStep(2)}
                  >
                    {t.continue}
                  </button>
                  <button type="button" className="text-btn back-btn" onClick={() => setStep(0)}>
                    {t.back}
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="eyebrow">{t.q2Eyebrow}</p>
                {progress}
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-3">
                  {t.q2}
                </h2>
                <p className="quiz-aside mt-2">{t.q2Aside}</p>
                <div className="chip-group mt-3" role="group" aria-label={t.q2Group}>
                  {downtimeIds.map((id) => (
                    <button
                      key={id}
                      type="button"
                      className="chip"
                      aria-pressed={downtime === id}
                      onClick={() => setDowntime(id)}
                    >
                      {t.downtime[id]}
                    </button>
                  ))}
                </div>
                <div className="quiz-actions">
                  <button
                    type="button"
                    className="quiet-link text-btn"
                    disabled={!downtime}
                    onClick={() => setStep(3)}
                  >
                    {t.seeMatches}
                  </button>
                  <button type="button" className="text-btn back-btn" onClick={() => setStep(1)}>
                    {t.back}
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="eyebrow">{t.resultsEyebrow}</p>
                {progress}
                <h2 ref={headingRef} tabIndex={-1} className="display-sm mt-3">
                  {t.results}
                </h2>

                {showMoleNote && (
                  <p className="quiz-note mt-3">{t.moleNote}</p>
                )}
                {filteredCo2 && (
                  <p className="quiz-aside mt-3">{t.co2Note}</p>
                )}

                {results.length > 0 ? (
                  <ul className="matches mt-3" style={{ listStyle: "none" }}>
                    {results.map((r, i) => (
                      <Reveal as="li" key={r.slug} delay={120 + i * 100} className="match">
                        <p className="numeral">{r.number}</p>
                        <h3>{r.name}</h3>
                        <p>{r.tagline}</p>
                        <a
                          href={`#chapter-${r.slug}`}
                          className="quiet-link"
                          onClick={(e) => {
                            e.preventDefault();
                            readGuide(r.slug);
                          }}
                        >
                          {t.readGuide}
                        </a>
                      </Reveal>
                    ))}
                  </ul>
                ) : (
                  <p className="quiz-aside mt-3">{t.noMatches}</p>
                )}

                <Reveal delay={200} className="quiz-capture mt-4">
                  <p className="eyebrow">{t.keep}</p>
                  {emailDone ? (
                    <p className="mt-2">{t.thanks(email)}</p>
                  ) : (
                    <form className="mt-2" onSubmit={onEmail}>
                      <div className="field">
                        <label htmlFor="quiz-email">{t.emailLabel}</label>
                        <input
                          id="quiz-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                        />
                      </div>
                      <button type="submit" className="btn-outline" disabled={sending}>
                        {sending ? t.sending : t.send}
                      </button>
                      {error && <FormError reason={error} lang={lang} />}
                    </form>
                  )}
                </Reveal>

                <div className="quiz-actions">
                  <a href="#consult" className="quiet-link">
                    {t.reserve}
                  </a>
                  <button type="button" className="text-btn back-btn" onClick={reset}>
                    {t.retake}
                  </button>
                </div>
              </>
            )}
          </div>
        </Reveal>

        <Reveal delay={200} className="quiz-media">
          <Photo
            src="/images/drop.jpg"
            alt={t.alt}
            ratio="34"
            sizes="(max-width: 960px) 0px, 30vw"
            parallax={0.04}
          />
        </Reveal>
      </div>
    </section>
  );
}
