// Sends a form submission to Jenny's inbox via Web3Forms (https://docs.web3forms.com).
// Web3Forms' free plan only accepts browser-side requests, so this runs in client components.
import { site } from "@/lib/site";

export type InquiryResult = "sent" | "not-configured" | "failed";

export async function sendInquiry(
  subject: string,
  fields: Record<string, string>,
  replyTo: string,
): Promise<InquiryResult> {
  if (!site.formsAccessKey) return "not-configured";
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: site.formsAccessKey,
        subject,
        from_name: `${site.brand} website`,
        replyto: replyTo,
        // Skip unanswered optional questions so the email only shows what the client wrote.
        ...Object.fromEntries(Object.entries(fields).filter(([, v]) => v)),
      }),
    });
    const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
    return res.ok && json?.success ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
