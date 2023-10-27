import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portafolio/Portfolio";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

const App = () => {
  const [seeMore, setSeeMore] = useState(false);

  console.log(seeMore);
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <div id="Portfolio">
        <Portfolio setSeeMore={setSeeMore} seeMore={seeMore} />
      </div>
      {seeMore && (
        <details>
          <summary>
            <section id="Projects">Holaaaaaaaaaaaaaaaaaaaaaaa</section>
          </summary>
        </details>
      )}

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
