import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery/index';
import Services from './components/Services/index';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;