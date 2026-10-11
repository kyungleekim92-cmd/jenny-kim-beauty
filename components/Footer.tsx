import Link from "next/link";
import { site, VENUE_LINE } from "@/lib/site";

// Hardcoded on purpose: calling new Date() during render breaks Next 16 prerendering.
// Bump each January.
const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="band-cream2 hairline-top footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-wordmark">
              {site.brand}
              <small>{site.brandLine}</small>
            </Link>
            <p className="footer-address mt-2">{site.tagline}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {site.nav.map((item) => (
              <a key={item.href} href={`/${item.href}`} className="underline-draw">
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="eyebrow">By appointment</p>
            <p className="footer-address mt-1">{VENUE_LINE}</p>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            Jenny Kim is an independent beauty consultant, not a medical practitioner. Content on
            this site is educational and not medical advice.
          </p>
          <p>
            © {YEAR} {site.brand}, {site.brandLine}. All rights reserved.
          </p>
          <a href="#top" className="back-to-top underline-draw">
            Back to top<span aria-hidden="true">↑</span>
          </a>
        </div>

        <p className="fine-print">
          Jenny Kim provides independent consultation and introductions only, and does not perform,
          supervise or guarantee any treatment. Treatments are provided by independent licensed
          practitioners, who are solely responsible for assessment, care and outcomes. Jenny Kim
          accepts no liability for any treatment or its results. Partner privileges vary and are
          subject to each provider&apos;s terms.
        </p>
      </div>
    </footer>
  );
}
