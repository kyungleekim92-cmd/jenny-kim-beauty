// /llms.txt — a plain-language summary for AI assistants (https://llmstxt.org).
import { faqs } from "@/lib/faqs";
import { abs, concernNames, guidePath, sortedTreatments } from "@/lib/seo";
import { DISCLAIMER } from "@/lib/treatments";
import { site, VENUE_LINE } from "@/lib/site";

function body(): string {
  const guides = sortedTreatments
    .map((t) => {
      const concerns = concernNames(t);
      return `- [${t.name}](${abs(guidePath(t))}): ${t.tagline}${concerns.length ? ` Often considered for: ${concerns.join(", ")}.` : ""}`;
    })
    .join("\n");
  const qa = faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  return `# ${site.brand}, ${site.brandLine}

> Jenny Kim is an independent beauty consultant in Toronto, Canada. She offers private, one-on-one skincare consultations, explains aesthetic treatments (Botox, dermal fillers, Ultherapy, Thermage, lasers, HydraFacial, peels and more), builds a personal plan, and refers clients to vetted Toronto medi spas. She does not perform treatments, inject, diagnose or prescribe.

- Location: ${VENUE_LINE}, Ontario, Canada (by appointment)
- Book a consultation: ${abs("/#consult")}
- Instagram: ${site.contact.instagram}

${DISCLAIMER}

## Treatment guides

${guides}

## Frequently asked questions

${qa}
`;
}

export function GET() {
  return new Response(body(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
