// Book a consultation (/book, /ko/book) — how it works, then the booking form.
import ChapterView from "@/components/views/ChapterView";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import type { Lang } from "@/lib/i18n";

const crumb = { en: "Book a consultation", ko: "상담 예약" };

export default function BookView({ lang }: { lang: Lang }) {
  return (
    <ChapterView lang={lang} path="/book" crumb={crumb[lang]}>
      <HowItWorks lang={lang} titleAs="h1" />
      <Booking lang={lang} />
    </ChapterView>
  );
}
