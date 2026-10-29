import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n';
import IntroGate from './components/intro/IntroGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WebDev from './components/WebDev';
import CreativeWork from './components/CreativeWork';
import Brochure from './components/Brochure';
import Video from './components/Video';
import Terminal from './components/Terminal';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [scanlinesActive, setScanlinesActive] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('spc_crt_scanlines');
    if (saved !== null) {
      setScanlinesActive(saved === 'true');
    }
  }, []);

  const toggleScanlines = () => {
    setScanlinesActive((prev) => {
      const next = !prev;
      localStorage.setItem('spc_crt_scanlines', String(next));
      return next;
    });
  };

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#070A12] text-[#F4F6FB] selection:bg-[#D4AF37] selection:text-[#070A12] font-sans">
        {/* Cinematic Game-Style Intro Gate */}
        {!introComplete && (
          <IntroGate onComplete={() => setIntroComplete(true)} />
        )}

        {/* Optional Retro Scanline Overlay Easter Egg */}
        {scanlinesActive && <div className="scanlines-fx" />}

        {/* Main Application Suite */}
        {introComplete && (
          <>
            <Navbar
              scanlinesActive={scanlinesActive}
              onToggleScanlines={toggleScanlines}
            />

            <main>
              <Hero />
              <About />
              <Services />
              <WebDev />
              <CreativeWork />
              <Brochure />
              <Video />
              <Terminal />
              <Skills />
              <Contact />
            </main>

            <Footer />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}
