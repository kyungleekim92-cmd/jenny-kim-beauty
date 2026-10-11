---
name: korean-voice
description: Write or edit any Korean text on byjennykim.com (/ko pages, `copy.ko` blocks, lib/i18n/ko/*). Use it whenever Korean copy is added, translated or changed, so it reads as native Korean in Jenny's own voice, never as a translation.
---

# Jenny's Korean voice

The Korean site is not a translation of the English site. Write each line the way a Korean
skincare consultant in Toronto would naturally say it to a client, then check it still carries
the same facts and safety caveats as the English.

## Voice

- 해요체, warm and professional. Jenny speaks in the first person: "저는 제니예요", 제가 / 저는 /
  제 (never 제니는 / 그녀는 in body copy).
- Calm, clear, spoken Korean. No slang, emojis, exclamation marks, or 인터넷 말투.
- Legal lines stay formal 합니다체: footer fine print (`components/Footer.tsx`), booking consent
  (`components/Booking.tsx`) and the third-person business description in `lib/seo.ts`.

## Write it natively, not as a translation

1. **Don't translate English metaphors or slogans word for word.** Say the plain idea.
   - ✗ 이해가 첫 번째 시술이에요 (Understanding is the first treatment) → ✓ 시술 전에 먼저 알아 두세요
   - ✗ 믿을 수 있는 손 (the right hands) → ✓ 나에게 맞는 전문가
   - ✗ 정성껏 고른 작은 모임 (a small, considered circle) → ✓ 제가 직접 고른 몇 곳
   - ✗ 대부분의 조언이 끝나는 곳에서 시작해요 → ✓ say what actually happens in the consultation
2. **Avoid 당신.** Korean drops the subject, or uses 내 피부 / 고객님 when needed.
   - ✗ 당신을 위한 가이드 → ✓ 추천 가이드 / 나에게 맞는 가이드
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
