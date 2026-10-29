import { useState, useEffect } from 'react';
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
  const [scanlinesActive, setScanlinesActive] = useState(true);

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
    <div className="relative min-h-screen bg-[#040711] text-[#f1f5f9] selection:bg-[#00f0ff] selection:text-[#040711] font-rajdhani">
      {/* CRT Scanline Overlay Effect */}
      {scanlinesActive && <div className="scanlines-fx" />}

      {/* Main Mecha HUD Navigation */}
      <Navbar
        scanlinesActive={scanlinesActive}
        onToggleScanlines={toggleScanlines}
      />

      <main>
        {/* Hero with Dual-View Mecha Avatar Deck */}
        <Hero />

        {/* Executive Holographic Dossier */}
        <About />

        {/* Tactical Services Modules */}
        <Services />

        {/* Live GCC Enterprise Deployments */}
        <WebDev />

        {/* Commercial Posters & Lightbox Modal */}
        <CreativeWork />

        {/* Corporate Print & Brochure Systems */}
        <Brochure />

        {/* High-Retention Motion & Video Reels */}
        <Video />

        {/* Interactive Operative CLI Terminal */}
        <Terminal />

        {/* Weaponized Technical Matrices */}
        <Skills />

        {/* Secure Communications & Project Dispatch */}
        <Contact />
      </main>

      {/* Mission Footer */}
      <Footer />
    </div>
  );
}
