
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Header/Header';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';

function App() {
  return (
    <div className="App bg-dark">
      <header>
        <Navbar />
        <Home/>
        <About />
        <Portfolio />
        <Contact />
      </header>

    </div>
  );
}

export default App;
