import About from "./parts/About";
import Contact from "./parts/Contact";
import Hero from "./parts/Hero";
import Navbar from "./parts/Navbar";
import Projects from "./parts/Projects";
import Skills from "./parts/Skills";
import FadeIn from "./utilities/FadeIn";

function App() {
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
