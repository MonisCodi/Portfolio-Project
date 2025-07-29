import "../src/Style/Sass/main.css"
import React from 'react';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
import Navbar from "./Component/Navbar/Header"
import Experiance from "./Component/Experiance";
import Footer from "./Component/Footer";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
