import React, { useContext } from 'react';
import About from './about/About';
import Experience from './experience/Experience';
import Hero from './hero/Hero';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Education from './education/Education';
import Footer from './footer/Footer';

function App() {
  const htmlTag = document.getRootNode();
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}

export default App;
