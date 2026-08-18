import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WebDev from './components/WebDev';
import CreativeWork from './components/CreativeWork';
import Brochure from './components/Brochure';
import Video from './components/Video';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WebDev />
      <CreativeWork />
      <Brochure />
      <Video />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
