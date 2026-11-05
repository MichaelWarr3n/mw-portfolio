import { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import CursorTrail from '../CursorTrail/CursorTrail.jsx';
import About from '../About/About.jsx';
import Experience from '../Experience/Experience.jsx';
import Contact from '../Contact/Contact.jsx';

export default function App() {

  useEffect(() => {
    new fullpage("#fullpage", {
      autoScrolling: true,
      navigation: true,
      responsiveWidth: 768,
      navigationPosition: "right",
    });

    return () => {
      if (window.fullpage_api) {
        window.fullpage_api.destroy("all");
      }
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <CursorTrail>
          <Header />
          <Hero />
        </CursorTrail>
      </div>

      <div className="section">
        <About />
      </div>

      <div className="section">
        <Experience />
      </div>

      <div className="section">
        <Contact />
      </div>
    </div>
  );
}
