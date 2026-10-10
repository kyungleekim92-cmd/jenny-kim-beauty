import Link from "next/link";
import { site } from "@/lib/site";

// Evaluated once at build time — keeps static prerendering deterministic.
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="band-ink">
      <div className="wrap section" style={{ paddingBottom: 64 }}>
        <div className="grid-2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Private enquiries</p>
            <p className="display-sm mt-2">
              Begin with
              <br />
              a conversation.
            </p>
            <div className="mt-3">
              <Link href="/consultation" className="btn-outline">
                Reserve your hour
              </Link>
            </div>
          </div>
          <div style={{ display: "grid", gap: 32 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Consultations
              </p>
              <p style={{ color: "rgba(246,241,234,.72)", maxWidth: "38ch" }}>
                {site.venue.name}
                <br />
                {site.venue.address}, {site.venue.city}
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Contact
              </p>
              <p style={{ color: "rgba(246,241,234,.72)" }}>
                {site.contact.email}
                <br />
                {site.contact.phone}
              </p>
            </div>
          </div>
        </div>
        <div
          className="hairline-top mt-4"
          style={{
            borderColor: "var(--line-light)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 13,
            color: "rgba(246,241,234,.5)",
          }}
        >
          <span>
            © {YEAR} {site.brand}, {site.brandLine}. All rights reserved.
          </span>
          <span style={{ maxWidth: "52ch" }}>
            Jenny is an independent consultant, not a medical practitioner. Nothing here is medical
            advice — discuss every treatment with a licensed practitioner.
          </span>
        </div>
      </div>
    </footer>
  );
}
