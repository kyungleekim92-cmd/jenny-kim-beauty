// Jenny Kim, Beauty Consultant — the short home, in either language: hero, a book-style table
// of contents linking to the chapter pages, and a slim booking call-to-action.
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Contents from "@/components/Contents";
import BookCta from "@/components/BookCta";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangRoot from "@/components/views/LangRoot";
import { homeJsonLd } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";

export default function HomeView({ lang }: { lang: Lang }) {
  return (
    <LangRoot lang={lang}>
      <JsonLd data={homeJsonLd(lang)} />
      <Nav lang={lang} path="/" />
      <main>
        <Hero lang={lang} />
        <Contents lang={lang} />
        <BookCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
