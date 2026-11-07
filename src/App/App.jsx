import { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import CursorTrail from "../CursorTrail/CursorTrail.jsx";
import About from "../About/About.jsx";
import Experience from "../Experience/Experience.jsx";
import Contact from "../Contact/Contact.jsx";

export default function App() {
  useEffect(() => {
    new fullpage("#fullpage", {
      autoScrolling: true,
      navigation: true,
      navigationPosition: "right",
      responsiveWidth: 768,
    });

    return () => {
      window.fullpage_api?.destroy("all");
    };
  }, []);

  return (
    <main id="fullpage">
      <section className="section" aria-label="Introduction">
        <CursorTrail>
          <Header />
          <Hero />
        </CursorTrail>
      </section>

      <section className="section" aria-label="About me">
        <About />
      </section>

      <section className="section" aria-label="Experience">
        <Experience />
      </section>

      <section className="section" aria-label="Contact and projects">
        <Contact />
      </section>
    </main>
  );
}
