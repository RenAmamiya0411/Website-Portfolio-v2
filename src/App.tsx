import React from "react";
import About from "./parts/About";
import Contact from "./parts/Contact";
import Hero from "./parts/Hero";
import Navbar from "./parts/Navbar";
import Projects from "./parts/Projects";
import Skills from "./parts/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
