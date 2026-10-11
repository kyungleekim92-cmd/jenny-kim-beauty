import type { InquiryResult } from "@/lib/inquiry";
import { site } from "@/lib/site";

// Shown when a form can't reach Jenny, so a visitor is never left thinking it went through.
export default function FormError({ reason }: { reason: Exclude<InquiryResult, "sent"> }) {
  return (
    <p className="form-error" role="alert">
      {reason === "not-configured"
        ? "Online requests open soon. For now, please message Jenny on Instagram — "
        : "Sorry — that didn't go through. Please try again, or message Jenny on Instagram — "}
      <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer">
        @{site.contact.instagramHandle}
      </a>
      .
    </p>
  );
}
