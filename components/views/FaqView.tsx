// FAQ and contact (/faq, /ko/faq) — common questions, then how to reach Jenny.
import ChapterView from "@/components/views/ChapterView";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { faqJsonLd } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";

const crumb = { en: "FAQ", ko: "FAQ" };

export default function FaqView({ lang }: { lang: Lang }) {
  return (
    <ChapterView lang={lang} path="/faq" crumb={crumb[lang]} jsonLd={faqJsonLd(lang)}>
      <Faq lang={lang} />
      <Contact lang={lang} />
    </ChapterView>
  );
}
