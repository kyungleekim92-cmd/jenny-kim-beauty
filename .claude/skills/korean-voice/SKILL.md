---
name: korean-voice
description: Write or edit any Korean text on byjennykim.com (/ko pages, `copy.ko` blocks, lib/i18n/ko/*). Use it whenever Korean copy is added, translated or changed, so it reads as native Korean in Jenny's own voice, never as a translation.
---

# Jenny's Korean voice

The Korean site is not a translation of the English site. Write each line the way a Korean
skincare consultant in Toronto would naturally say it to a client, then check it still carries
the same facts and safety caveats as the English.

## Voice (Shemonbred direction — chosen by Jenny 2026-10-13, supersedes the old first-person rule)

- 해요체, warm and professional. Brand voice modeled on shemonbred.com (쉬몬브레드):
  short, rhythmic sentences with mid-sentence commas; second-person 당신 address used
  poetically and sparingly ("당신의 피부를 아는 것", "지금, 당신만의 빛을"); gentle
  invitations ("~해보세요", "~만나보세요"). Soft, aspirational, poetic but never flowery.
- Jenny refers to herself in the third person in body copy: 제니는 / 제니가 / 제니의
  (never 저는 / 제가 as the speaker, except the client-approved Partners lede
  "제가 몇 군데 고른 토론토 메디 스파예요." and Jenny's personal shop product notes).
- Calm, clear, spoken Korean. No slang, emojis, exclamation marks, or 인터넷 말투.
- Legal lines stay formal 합니다체: footer fine print (`components/Footer.tsx`), booking consent
  (`components/Booking.tsx`) and the third-person business description in `lib/seo.ts`.

## Write it natively, not as a translation

1. **Don't translate English metaphors or slogans word for word.** Say the plain idea.
   - ✗ 이해가 첫 번째 시술이에요 (Understanding is the first treatment) → ✓ 시술 전에 먼저 알아 두세요
   - ✗ 믿을 수 있는 손 (the right hands) → ✓ 나에게 맞는 전문가
   - ✗ 정성껏 고른 작은 모임 (a small, considered circle) → ✓ 제가 몇 군데 고른 토론토 메디 스파예요 (Jenny's own phrasing — keep verbatim)
   - ✗ 대부분의 조언이 끝나는 곳에서 시작해요 → ✓ say what actually happens in the consultation
2. **당신 is the brand voice.** Use it the way Shemonbred does — poetically, not mechanically.
   - ✓ 당신의 피부를 아는 것 / 당신에게 맞는 가이드 / 당신의 피부 상태
   - ✗ overused 당신 in every sentence; drop the subject where Korean naturally would.
3. **Avoid translation patterns:** ~에 대하여, ~에 있어서, ~을 통해 (overused), ~것이다 endings,
   chains of 의 (나의 피부의 상태의…), passive ~되어지다, ~하는 것은 중요해요 for "it's important to".
   Prefer verbs over nouns: ✗ 회복 기간에 대한 확인이 필요해요 → ✓ 회복 기간을 꼭 확인하세요.
4. **Sentence length:** one idea per sentence. Split long English sentences; don't keep the
   em-dash structure. Use a comma or a new sentence instead of "—" in body text.
5. **Words Korean clinics and clients actually use:**
   - 시술, 관리, 상담, 회복 기간 (다운타임 is fine in parentheses), 시술 횟수, 유지 기간, 효과
   - 피부과·메디 스파, 담당 원장님 / 시술하시는 분 (not 프랙티셔너), 간호사, 에스테티션
   - 보톡스, 필러, 울쎄라, 써마지, 하이드라페이셜, 레이저 토닝, 프락셀, IPL, 스킨부스터, 리쥬란
   - PRF on this site means pulsed radiofrequency → 펄스 고주파 (never 혈소판)
   - Health Canada → 캐나다 보건부(Health Canada). Never mention the FDA.
   - "plan" → 시술 계획 / 관리 계획 (not 플랜, except in fixed UI labels already approved)
6. **Hedged, educational claims:** ~할 수 있어요, 보통, 대개, 사람마다 달라요. Never promise results.
7. **Jenny never performs, injects, diagnoses or prescribes.** Keep that framing; say 연결해 드려요 /
   소개해 드려요 for introductions, 파트너 혜택 for partner privileges.

## Before you commit

- Read every changed line aloud in your head. If it sounds like a subtitle or a translated
  manual, rewrite it.
- Keep object keys, array lengths, numbers, durations and prices the same as the English source.
- Follow the rest of `AGENTS.md` (build, tsc, lint, diff review).
