import Link from "next/link";
import { site, VENUE_LINE } from "@/lib/site";
import { navHref, navItems } from "@/lib/nav";
import { localePath, type Lang } from "@/lib/i18n";

// Hardcoded on purpose: calling new Date() during render breaks Next 16 prerendering.
// Bump each January.
const YEAR = 2026;

const copy = {
  en: {
    tagline: site.tagline,
    byAppointment: "By appointment",
    venue: VENUE_LINE,
    legal:
      "Jenny Kim is an independent beauty consultant, not a medical practitioner. Content on this site is educational and not medical advice.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    finePrint:
      "Jenny Kim is an independent beauty consultant, not a medical practitioner. Content on this site is educational, not medical advice. She provides consultations and introductions only — all treatments are performed by independent licensed practitioners, who are solely responsible for assessment, care, and outcomes. Partner privileges vary by provider and are subject to their terms.",
  },
  ko: {
    tagline: "토론토의 독립 스킨케어 상담. 당신만을 위한 1:1 프라이빗 상담.",
    byAppointment: "예약제 운영 (토론토 시간)",
    venue: `${site.venue.building}, ${site.venue.address}, 토론토`,
    legal:
      "제니는 의료인이 아닌 독립 뷰티 컨설턴트예요. 이 사이트의 내용은 정보 제공을 위한 것이며, 의학적 조언을 대신하지 않아요.",
    rights: "All rights reserved.",
    backToTop: "맨 위로",
    finePrint:
      "제니 킴은 독립적인 상담과 소개만을 제공하며, 어떠한 시술도 직접 시행·감독·보증하지 않습니다. 시술은 면허 보유 전문가가 직접 시행하며, 진단·관리 및 결과에 대한 책임은 해당 전문가에게 있습니다. 파트너 혜택은 업체마다 다르며 각 업체의 약관을 따릅니다.",
  },
};

export default function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer className="band-cream2 hairline-top footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href={localePath(lang, "/")} className="footer-wordmark">
              {site.brand}
              <small>{site.brandLine}</small>
            </Link>
            <p className="footer-address mt-2">{t.tagline}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {navItems(lang).map((item) => (
              <a key={item.href} href={navHref(item.href, false, lang)} className="underline-draw">
                {item.label}
              </a>
            ))}
          </nav>

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
