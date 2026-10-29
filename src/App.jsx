import { useState } from 'react';
import { LanguageProvider } from './i18n';
import { GameProvider, useGame } from './context';
import IntroGate from './components/intro/IntroGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WebDev from './components/WebDev';
import CreativeWork from './components/CreativeWork';
import Video from './components/Video';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import CVSection from './components/CVSection';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Extras & Game Layer
import CustomCursor from './components/extras/CustomCursor';
import AchievementToaster from './components/extras/AchievementToaster';
import SecretConsultationModal from './components/extras/SecretConsultationModal';
import Confetti from './components/extras/Confetti';

function AppContent() {
  const { playerClass, retroMode, confettiActive } = useGame();
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070A12] text-[#F4F6FB] selection:bg-[#D4AF37] selection:text-[#070A12] font-sans">
      {/* Desktop-only custom cursor with trailing gold aura */}
      <CustomCursor />

      {/* Floating achievement toasts */}
      <AchievementToaster />

      {/* Easter egg consultation reward modal */}
      <SecretConsultationModal />

      {/* Canvas confetti celebration */}
      <Confetti active={confettiActive} />

      {/* Cinematic Game-Style Intro Gate */}
      {!introComplete && (
        <IntroGate onComplete={() => setIntroComplete(true)} />
      )}

      {/* Optional Retro CRT Scanlines overlay */}
      {retroMode && <div className="scanlines-fx" />}

      {/* Main Application Suite */}
      {introComplete && (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />

            {/* Personalized Section Ordering based on player_class */}
            {playerClass === 'developer' ? (
              <>
                <WebDev />
                <Services />
                <CreativeWork />
              </>
            ) : playerClass === 'creative' ? (
              <>
                <CreativeWork />
                <Services />
                <WebDev />
              </>
            ) : (
              <>
                <Services />
                <WebDev />
                <CreativeWork />
              </>
            )}

            <Video />
            <Skills />
            <Testimonials />
            <CVSection />
            <Terminal />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </LanguageProvider>
  );
}
