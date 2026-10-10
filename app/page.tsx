// Jenny Kim, Beauty Consultant — one-page site.
// Sections are composed top to bottom; each owns its own anchor id.
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Chapters from "@/components/Chapters";
import Quiz from "@/components/Quiz";
import Booking from "@/components/Booking";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Chapters />
        <Statement>
          Not every concern needs a treatment. Every concern deserves an <em>honest</em> answer.
        </Statement>
        <Quiz />
        <Statement>
          Come with your questions. Leave with clarity, and a plan you can <em>trust</em>.
        </Statement>
        <Booking />
        <About />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
