import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="sobre" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <About />
          </div>
        </section>
        <section id="tecnologias" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <TechStack />
          </div>
        </section>
        <section id="experiencia" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Experience />
          </div>
        </section>
        <section id="projetos" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Projects />
          </div>
        </section>
        <section id="formacao" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Education />
          </div>
        </section>
        <section id="contato" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
