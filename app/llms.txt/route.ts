// /llms.txt — a plain-language summary for AI assistants (https://llmstxt.org).
import { faqs } from "@/lib/faqs";
import { conditions } from "@/lib/conditions";
import { abs, concernNames, concernPath, guidePath, sortedTreatments, treatmentsFor } from "@/lib/seo";
import { shopCopy } from "@/lib/i18n/content";
import { liveProducts } from "@/lib/shop";
import { DISCLAIMER } from "@/lib/treatments";
import { site, VENUE_LINE } from "@/lib/site";

function body(): string {
  const guides = sortedTreatments
    .map((t) => {
      const concerns = concernNames(t);
      return `- [${t.name}](${abs(guidePath(t))}): ${t.tagline}${concerns.length ? ` Often considered for: ${concerns.join(", ")}.` : ""}`;
    })
    .join("\n");
  const concerns = conditions
    .map((c) => `- [${c.name}](${abs(concernPath(c))}): ${c.overview[0]} Options: ${treatmentsFor(c).map((t) => t.name).join(", ")}.`)
    .join("\n");
  const edit = liveProducts
    .map((p) => `- ${shopCopy.en[p.slug]?.name ?? p.name} (${p.brand}): ${shopCopy.en[p.slug]?.note ?? p.note}`)
    .join("\n");
  const qa =faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  return `# ${site.brand}, ${site.brandLine}

> Jenny Kim is an independent beauty consultant in Toronto, Canada. She offers private, one-on-one skincare consultations, explains aesthetic treatments (Botox, dermal fillers, Ultherapy, Thermage, lasers, HydraFacial, peels and more), builds a personal plan, and refers clients to vetted Toronto medi spas. She does not perform treatments, inject, diagnose or prescribe.

- Location: ${VENUE_LINE}, Ontario, Canada
- Format: private 30–60 minute consultations over tea or coffee at Bay & Adelaide, convenient for busy professionals; no clinic visit needed to get informed
- Hours (by appointment only): ${site.hours.map((h) => `${h.label} ${h.display}`).join("; ")}
- Book a consultation: ${abs("/book")}
- Korean site (한국어): ${abs("/ko")}
- Instagram: ${site.contact.instagram}

${DISCLAIMER}

## Key pages

- [Where to Begin](${abs("/begin")}): a two-minute questionnaire that points to the right guides
- [Book a consultation](${abs("/book")}): request a private 30–60 minute consultation
- [About Jenny](${abs("/about")}): who Jenny is and the partner spas she introduces
- [Questions & contact](${abs("/faq")}): common questions and how to get in touch

## Treatment guides

${guides}

## Skin concerns

${concerns}

## The Edit (recommended skincare)

${edit}

Shop: ${abs("/shop")}

## Frequently asked questions

${qa}
`;
}

export function GET() {
  return new Response(body(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
