import { site, VENUE_LINE } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

// Hardcoded on purpose: calling new Date() during render breaks Next 16 prerendering.
// Bump each January.
const YEAR = 2026;

const copy = {
  en: {
    byAppointment: "By appointment",
    venue: VENUE_LINE,
    legal:
      "Jenny Kim is an independent beauty consultant, not a medical practitioner. Content on this site is educational and not medical advice.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    finePrint:
      "Jenny Kim provides independent consultation and introductions only, and does not perform, supervise or guarantee any treatment. Treatments are provided by independent licensed practitioners, who are solely responsible for assessment, care and outcomes. Jenny Kim accepts no liability for any treatment or its results. Partner privileges vary and are subject to each provider's terms.",
  },
  ko: {
    byAppointment: "예약제 운영 (북미 동부 시간)",
    venue: `${site.venue.building}, ${site.venue.address}, 토론토`,
    legal:
      "제니는 의료인이 아닌 독립 뷰티 컨설턴트예요. 이 사이트의 내용은 정보 제공을 위한 것이며, 의학적 조언을 대신하지 않아요.",
    rights: "All rights reserved.",
    backToTop: "맨 위로",
    finePrint:
      "제니 킴은 독립적인 상담과 소개만을 제공하며, 어떠한 시술도 직접 시행·감독·보증하지 않습니다. 시술은 독립적인 면허 보유 전문가가 제공하며, 진단·관리 및 결과에 대한 책임은 전적으로 해당 전문가에게 있습니다. 제니 킴은 시술 및 그 결과에 대해 어떠한 책임도 지지 않습니다. 파트너 혜택은 업체마다 다르며 각 업체의 약관을 따릅니다.",
  },
};

export default function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer className="band-cream2 hairline-top footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="eyebrow">{t.byAppointment}</p>
            <p className="footer-address mt-1">{t.venue}</p>
            {site.hours.map((h) => (
              <p key={h.label} className="footer-address">
                {lang === "ko" ? `${h.ko.label}, ${h.ko.display}` : `${h.label}, ${h.display}`}
              </p>
            ))}
          </div>
        </div>

        <div className="footer-legal">
          <p>{t.legal}</p>
          <p>
            © {YEAR} {site.brand}, {site.brandLine}. {t.rights}
          </p>
          <a href="#top" className="back-to-top underline-draw">
            {t.backToTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <p className="fine-print">{t.finePrint}</p>
      </div>
    </footer>
  );
}
