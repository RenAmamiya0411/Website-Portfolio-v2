import { useState } from "react";
import About from "./parts/About";
import Contact from "./parts/Contact";
import Hero from "./parts/Hero";
import Navbar from "./parts/Navbar";
import Projects from "./parts/Projects";
import Skills from "./parts/Skills";
import FadeIn from "./utilities/FadeIn";
import Preloader from "./utilities/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="md:ml-16">
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </div>
  );
}

export default App;
