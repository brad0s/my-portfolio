import React from 'react';
import About from './about/About';
import Experience from './experience/Experience';
import Hero from './hero/Hero';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Education from './education/Education';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import { ThemeContextProvider } from '../context/ThemeContext';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
