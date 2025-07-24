import "../src/Style/Sass/main.css"

import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
import React from 'react';
import Navbar from "./Component/Navbar/Header"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}

export default App;
