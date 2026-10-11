// Jenny Kim, Beauty Consultant — the one-page home, in either language.
// Sections are composed top to bottom; each owns its own anchor id.
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Chapters from "@/components/Chapters";
import Quiz from "@/components/Quiz";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
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
        <HowItWorks lang={lang} />
        <Chapters lang={lang} />
        <Quiz lang={lang} />
        <Booking lang={lang} />
        <About lang={lang} />
        <Partners lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
