"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import FormError from "@/components/FormError";
import { conditions } from "@/lib/conditions";
import { sendInquiry, type InquiryResult } from "@/lib/inquiry";
import type { Lang } from "@/lib/i18n";
import { getConditions } from "@/lib/i18n/content";

// Choice lists: `value` is what Jenny receives (always English); labels are shown per language.
type Choice = { value: string; ko: string };
const contactMethods: Choice[] = [
  { value: "Email", ko: "이메일" },
  { value: "Phone", ko: "전화" },
  { value: "Text", ko: "문자" },
  { value: "KakaoTalk", ko: "카카오톡" },
];
const budgetBands: Choice[] = [
  { value: "Under $500", ko: "$500 미만 (CAD)" },
  { value: "$500–$1,500", ko: "$500–$1,500" },
  { value: "$1,500–$3,000", ko: "$1,500–$3,000" },
  { value: "$3,000+", ko: "$3,000 이상" },
  { value: "Not sure yet", ko: "아직 모르겠어요" },
];
const skinTypes: Choice[] = [
  { value: "Normal", ko: "중성" },
  { value: "Dry", ko: "건성" },
  { value: "Oily", ko: "지성" },
  { value: "Combination", ko: "복합성" },
  { value: "Sensitive", ko: "민감성" },
  { value: "Not sure", ko: "잘 모르겠어요" },
];
const skinTones: Choice[] = [
  { value: "Fair", ko: "아주 밝은 편" },
  { value: "Light", ko: "밝은 편" },
  { value: "Medium", ko: "중간 톤" },
  { value: "Olive", ko: "올리브 톤" },
  { value: "Brown", ko: "브라운 톤" },
  { value: "Deep", ko: "어두운 편" },
  { value: "Not sure", ko: "잘 모르겠어요" },
];
const heardFrom: Choice[] = [
  { value: "Instagram", ko: "인스타그램" },
  { value: "Google", ko: "구글" },
  { value: "Naver", ko: "네이버" },
  { value: "Friend referral", ko: "지인 추천" },
  { value: "Other", ko: "기타" },
];
// KakaoTalk and Naver are offered on the Korean page only.
const koOnly = new Set(["KakaoTalk", "Naver"]);
const forLang = (list: Choice[], lang: Lang) => list.filter((c) => lang === "ko" || !koOnly.has(c.value));
const label = (c: Choice, lang: Lang) => (lang === "ko" ? c.ko : c.value);

const copy = {
  en: {
    receivedEyebrow: "Request received",
    receivedTitle: "Thank you — your consultation is in motion.",
    receivedLede:
      "Jenny replies personally within one business day to arrange your consultation. Keep an eye on your inbox.",
    eyebrow: "Consultation",
    title: (
      <>
        Thirty minutes to an hour, entirely <em>yours</em>.
      </>
    ),
    alt: "A quiet room in soft daylight: sheer linen curtains, a travertine side table, folded towels",
    caption: "By appointment at Bay & Adelaide, in quiet privacy. No clinic visit needed; simply bring your questions.",
    formEyebrow: "The form",
    formTitle: "Tell Jenny everything.",
    formHint: "About five minutes. Fields marked * are required.",
    g1: "About you",
    name: "Full name *",
    namePh: "Your name",
    email: "Email *",
    phone: "Phone",
    method: "Preferred contact method",
    time: "Best time to reach you",
    timePh: "e.g. weekday afternoons",
    g2: "Your skin",
    concerns: "Skin concerns *",
    concernsNote: "(choose all that apply)",
    goals: "Goals & timeline",
    goalsPh: "What would you love to change? Any event date you're working toward?",
    skinType: "Skin type",
    skinTone: "Skin tone",
    skinToneNote: "(self-described)",
    select: "Select…",
    past: "Past treatments",
    pastPh: "Anything you've tried before — injectables, lasers, facials — and when.",
    g3: "Before you meet",
    budget: "Budget band",
    area: "Preferred area of Toronto",
    areaPh: "e.g. Downtown, North York…",
    health: "Health pre-screen",
    healthNote: "(optional — pre-screen only, not medical advice)",
    healthPh: "Medications, allergies, pregnancy or breastfeeding — anything a practitioner should know.",
    heard: "How did you hear about Jenny?",
    g4: "Consent",
    consent:
      "I agree to be contacted about my consultation and — only with my permission at the appointment — to have relevant details shared with a partner spa. I understand Jenny provides consultation and introductions only, and that any treatment is the responsibility of the provider who performs it. *",
    sending: "Sending…",
    submit: "Request my consultation",
    needs: "Please choose at least one skin concern and accept the consent to continue.",
    close:
      "Jenny replies within one business day. Your details stay private and are shared with a partner spa only with your explicit consent. Jenny is an independent consultant, not a medical practitioner.",
  },
  ko: {
    receivedEyebrow: "신청 완료",
    receivedTitle: "신청해 주셔서 감사해요.",
    receivedLede: "영업일 기준 하루 안에 직접 연락드려, 상담 일정을 잡아 드릴게요. 메일함을 확인해 보세요.",
    eyebrow: "상담",
    title: (
      <>
        30분에서 한 시간, 온전히 <em>당신의 피부</em> 이야기.
      </>
    ),
    alt: "부드러운 햇살이 드는 조용한 방: 얇은 리넨 커튼, 트래버틴 사이드 테이블, 개어 둔 수건",
    caption: "Bay & Adelaide, 예약제로 조용하게 진행해요. 클리닉에 가실 필요 없이, 궁금한 점만 편하게 가져오세요.",
    formEyebrow: "상담 신청서",
    formTitle: "피부 고민을 편하게 적어 주세요.",
    formHint: "5분 정도 걸려요. * 표시는 필수 항목이에요.",
    g1: "기본 정보",
    name: "성함 *",
    namePh: "성함",
    email: "이메일 *",
    phone: "전화번호",
    method: "선호하는 연락 방법",
    time: "연락하기 편한 시간",
    timePh: "예: 평일 오후 (토론토 또는 한국 시간으로 적어 주세요)",
    g2: "피부 정보",
    concerns: "피부 고민 *",
    concernsNote: "(해당하는 항목 모두 선택)",
    goals: "원하는 변화와 일정",
    goalsPh: "어떤 점이 달라졌으면 하시나요? 결혼식이나 행사처럼 맞춰야 할 날짜가 있다면 알려 주세요.",
    skinType: "피부 타입",
    skinTone: "피부 톤",
    skinToneNote: "(대략적으로 골라 주세요)",
    select: "선택…",
    past: "이전 시술 경험",
    pastPh: "보톡스, 필러, 레이저, 피부 관리 등 받아 보신 시술과 대략적인 시기를 알려 주세요.",
    g3: "상담 전에",
    budget: "예산 범위",
    area: "선호 지역",
    areaPh: "예: 토론토 다운타운, 노스욕, 또는 서울 방문 일정",
    health: "건강 관련 참고 사항",
    healthNote: "(선택 사항이에요. 참고용으로만 받고, 의학적 조언은 드리지 않아요)",
    healthPh: "복용 중인 약, 알레르기, 임신·수유 여부처럼 시술 전에 알아야 할 내용이 있으면 적어 주세요.",
    heard: "제니를 어떻게 알게 되셨어요?",
    g4: "동의",
    consent:
      "상담 관련 연락을 받는 것에 동의하며, 상담 시 제가 허락하는 경우에 한해 필요한 정보가 파트너 스파에 공유되는 것에 동의합니다. 제니는 상담과 연결만 제공하며, 모든 시술의 책임은 시술을 제공하는 업체에 있음을 이해합니다. *",
    sending: "보내는 중…",
    submit: "상담 신청하기",
    needs: "피부 고민을 하나 이상 고르시고, 동의 항목에 체크해 주세요.",
    close:
      "영업일 기준 하루 안에 답장 드릴게요. 보내 주신 정보는 안전하게 보관하고, 동의해 주신 경우에만 파트너 스파와 공유해요. 제니는 의료인이 아닌 독립 뷰티 컨설턴트예요.",
  },
};

// Shared with the home page's slim booking call-to-action (components/BookCta.tsx).
export const bookingCopy = copy;

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function GroupHead({ n, title }: { n: string; title: string }) {
  return (
    <legend className="form-section-head" style={{ width: "100%" }}>
      <span className="numeral" aria-hidden="true">
        {n}
      </span>
      <h3>{title}</h3>
    </legend>
  );
}

export default function Booking({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [concerns, setConcerns] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("Email");
  const [budget, setBudget] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<Exclude<InquiryResult, "sent"> | null>(null);

  const canSubmit = concerns.length > 0 && consent;

  const toggleConcern = (slug: string) =>
    setConcerns((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || sending) return;
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const email = get("email");

    // Honeypot: only bots fill the hidden field. Show success without sending anything.
    let result: InquiryResult = "sent";
    if (!get("website")) {
      setSending(true);
      setError(null);
      // Labels are what Jenny sees in the email, in this order.
      result = await sendInquiry(
        `Consultation request — ${get("name")}`,
        {
          Name: get("name"),
          Email: email,
          Language: lang === "ko" ? "Korean (한국어)" : "English",
          Phone: get("phone"),
          "Preferred contact": contactMethod,
          "Best time to reach": get("bestTime"),
          "Skin concerns": concerns
            .map((slug) => conditions.find((c) => c.slug === slug)?.name ?? slug)
            .join(", "),
          "Goals & timeline": get("goals"),
          "Skin type": get("skinType"),
          "Skin tone": get("skinTone"),
          "Past treatments": get("pastTreatments"),
          Budget: budget,
          "Preferred area": get("area"),
          "Health pre-screen": get("healthPrescreen"),
          "Heard about Jenny from": get("heardFrom"),
          Consent: "Agreed",
        },
        email,
      );
      setSending(false);
    }
    if (result !== "sent") {
      setError(result);
      return;
    }
    setSubmitted(true);
    document.getElementById("consult")?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  };

  return (
    <section id="consult" className="section" aria-labelledby="consult-title">
      <div className="wrap">
        {submitted ? (
          <div className="wrap-narrow center form-success" role="status">
            <p className="eyebrow chrome">{t.receivedEyebrow}</p>
            <h2 id="consult-title" className="display-sm mt-2">
              {t.receivedTitle}
            </h2>
            <span className="hairline-draw on-load section-rule" aria-hidden="true" />
            <p className="lede mt-3">{t.receivedLede}</p>
          </div>
        ) : (
          <>
            <SectionHead
              id="consult-title"
              eyebrow={t.eyebrow}
              title={t.title}
            />

            <div className="booking-grid mt-4">
              <Reveal className="booking-media">
                <div className="photo ratio-45">
                  <video
                    className="photo-img"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    src="/videos/interior-portrait.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={t.alt}
                  />
                </div>
                <p className="booking-caption">{t.caption}</p>
              </Reveal>

              <div>
                <Reveal>
                  <p className="eyebrow chrome">{t.formEyebrow}</p>
                  <h3 className="display-sm mt-2" style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.55rem)" }}>
                    {t.formTitle}
                  </h3>
                  <p className="form-hint">{t.formHint}</p>
                </Reveal>

                <Reveal delay={100} className="mt-3">
                  <form onSubmit={onSubmit}>
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    />
                    <fieldset className="form-group">
                      <GroupHead n="I" title={t.g1} />
                      <div className="field">
                        <label htmlFor="c-name">{t.name}</label>
                        <input id="c-name" name="name" type="text" required autoComplete="name" placeholder={t.namePh} />
                      </div>
                      <div className="field-row">
                        <div className="field">
                          <label htmlFor="c-email">{t.email}</label>
                          <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                        </div>
                        <div className="field">
                          <label htmlFor="c-phone">{t.phone}</label>
                          <input
                            id="c-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder={lang === "ko" ? "+82 / +1" : "+1 (___) ___-____"}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <span className="field-label" id="c-method-label">
                          {t.method}
                        </span>
                        <div className="chip-group" role="group" aria-labelledby="c-method-label">
                          {forLang(contactMethods, lang).map((m) => (
                            <button
                              key={m.value}
                              type="button"
                              className="chip"
                              aria-pressed={contactMethod === m.value}
                              onClick={() => setContactMethod(m.value)}
                            >
                              {label(m, lang)}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="c-time">{t.time}</label>
                        <input id="c-time" name="bestTime" type="text" placeholder={t.timePh} />
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <GroupHead n="II" title={t.g2} />
                      <div className="field">
                        <span className="field-label" id="c-concerns-label">
                          {t.concerns} <span className="label-note">{t.concernsNote}</span>
                        </span>
                        <div className="chip-group" role="group" aria-labelledby="c-concerns-label">
                          {getConditions(lang).map((c) => (
                            <button
                              key={c.slug}
                              type="button"
                              className="chip"
                              aria-pressed={concerns.includes(c.slug)}
                              onClick={() => toggleConcern(c.slug)}
                            >
                              {c.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="c-goals">{t.goals}</label>
                        <textarea id="c-goals" name="goals" placeholder={t.goalsPh} />
                      </div>
                      <div className="field-row">
                        <div className="field">
                          <label htmlFor="c-type">{t.skinType}</label>
                          <select id="c-type" name="skinType" defaultValue="">
                            <option value="" disabled>
                              {t.select}
                            </option>
                            {skinTypes.map((o) => (
                              <option key={o.value} value={o.value}>
                                {label(o, lang)}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="c-tone">
                            {t.skinTone} <span className="label-note">{t.skinToneNote}</span>
                          </label>
                          <select id="c-tone" name="skinTone" defaultValue="">
                            <option value="" disabled>
                              {t.select}
                            </option>
                            {skinTones.map((o) => (
                              <option key={o.value} value={o.value}>
                                {label(o, lang)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="c-past">{t.past}</label>
                        <textarea id="c-past" name="pastTreatments" placeholder={t.pastPh} />
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <GroupHead n="III" title={t.g3} />
                      <div className="field">
                        <span className="field-label" id="c-budget-label">
                          {t.budget}
                        </span>
                        <div className="chip-group" role="group" aria-labelledby="c-budget-label">
                          {budgetBands.map((b) => (
                            <button
                              key={b.value}
                              type="button"
                              className="chip"
                              aria-pressed={budget === b.value}
                              onClick={() => setBudget(b.value)}
                            >
                              {label(b, lang)}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="c-area">{t.area}</label>
                        <input id="c-area" name="area" type="text" placeholder={t.areaPh} />
                      </div>
                      <div className="field">
                        <label htmlFor="c-health">
                          {t.health} <span className="label-note">{t.healthNote}</span>
                        </label>
                        <textarea id="c-health" name="healthPrescreen" placeholder={t.healthPh} />
                      </div>
                      <div className="field">
                        <label htmlFor="c-heard">{t.heard}</label>
                        <select id="c-heard" name="heardFrom" defaultValue="">
                          <option value="" disabled>
                            {t.select}
                          </option>
                          {forLang(heardFrom, lang).map((o) => (
                            <option key={o.value} value={o.value}>
                              {label(o, lang)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </fieldset>

                    <fieldset className="form-group">
                      <GroupHead n="IV" title={t.g4} />
                      <label className="check-row">
                        <input
                          type="checkbox"
                          name="consent"
                          required
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                        />
                        <span>{t.consent}</span>
                      </label>
                    </fieldset>

                    <div className="mt-3">
                      <button type="submit" className="btn-outline" disabled={!canSubmit || sending}>
                        {sending ? t.sending : t.submit}
                      </button>
                      {error && <FormError reason={error} lang={lang} />}
                      {!canSubmit && <p className="form-hint">{t.needs}</p>}
                    </div>
                  </form>
                </Reveal>

                <Reveal>
                  <p className="form-close mt-4">{t.close}</p>
                </Reveal>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
