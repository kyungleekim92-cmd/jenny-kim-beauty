// Where to Begin (/begin, /ko/begin) — the questionnaire on its own page.
import ChapterView from "@/components/views/ChapterView";
import Quiz from "@/components/Quiz";
import type { Lang } from "@/lib/i18n";

const crumb = { en: "Where to Begin", ko: "당신에게 맞는 시술" };

export default function BeginView({ lang }: { lang: Lang }) {
  return (
    <ChapterView lang={lang} path="/begin" crumb={crumb[lang]}>
      <Quiz lang={lang} />
    </ChapterView>
  );
}
