// About Jenny (/about, /ko/about) — her story, then the partner spas.
import ChapterView from "@/components/views/ChapterView";
import About from "@/components/About";
import Partners from "@/components/Partners";
import type { Lang } from "@/lib/i18n";

const crumb = { en: "About", ko: "소개" };

export default function AboutView({ lang }: { lang: Lang }) {
  return (
    <ChapterView lang={lang} path="/about" crumb={crumb[lang]}>
      <About lang={lang} titleAs="h1" />
      <Partners lang={lang} />
    </ChapterView>
  );
}
