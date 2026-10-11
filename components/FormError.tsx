import type { InquiryResult } from "@/lib/inquiry";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const copy = {
  en: {
    "not-configured": "Online requests open soon. For now, please message Jenny on Instagram — ",
    failed: "Sorry — that didn't go through. Please try again, or message Jenny on Instagram — ",
  },
  ko: {
    "not-configured": "온라인 신청은 곧 열릴 예정이에요. 지금은 인스타그램 DM으로 연락 주세요: ",
    failed: "죄송해요, 전송이 되지 않았어요. 다시 시도해 주시거나 인스타그램 DM으로 연락 주세요: ",
  },
};

// Shown when a form can't reach Jenny, so a visitor is never left thinking it went through.
export default function FormError({ reason, lang }: { reason: Exclude<InquiryResult, "sent">; lang: Lang }) {
  return (
    <p className="form-error" role="alert">
      {copy[lang][reason]}
      <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer">
        @{site.contact.instagramHandle}
      </a>
      .
    </p>
  );
}
