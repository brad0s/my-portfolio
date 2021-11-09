import React, { useContext } from 'react';
import About from './about/About';
import Hero from './hero/Hero';

function App() {
  const htmlTag = document.getRootNode();
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

export default App;
