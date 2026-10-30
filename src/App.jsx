import { useState, lazy, Suspense } from 'react';
import { LanguageProvider } from './i18n';
import { GameProvider, useGame } from './context';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import AchievementToaster from './components/extras/AchievementToaster';

// Lazy-loaded Below-the-Fold Sections & Game Modals for Code Splitting
const IntroGate = lazy(() => import('./components/intro/IntroGate'));
const Services = lazy(() => import('./components/Services'));
const WebDev = lazy(() => import('./components/WebDev'));
const CreativeWork = lazy(() => import('./components/CreativeWork'));
const Video = lazy(() => import('./components/Video'));
const Skills = lazy(() => import('./components/Skills'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CVSection = lazy(() => import('./components/CVSection'));
const Terminal = lazy(() => import('./components/Terminal'));
const Contact = lazy(() => import('./components/Contact'));

// Lazy Extras
const CustomCursor = lazy(() => import('./components/extras/CustomCursor'));
const SecretConsultationModal = lazy(() => import('./components/extras/SecretConsultationModal'));
const Confetti = lazy(() => import('./components/extras/Confetti'));

// Minimal elegant fallback for lazy chunks
function SectionLoader() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-7 h-7 rounded-full border-2 border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin" />
    </div>
  );
}

function AppContent() {
  const { playerClass, retroMode, confettiActive } = useGame();
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070A12] text-[#F4F6FB] selection:bg-[#D4AF37] selection:text-[#070A12] font-sans">
      {/* Desktop-only custom cursor */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Floating achievement toasts */}
      <AchievementToaster />

      {/* Easter egg consultation reward modal */}
      <Suspense fallback={null}>
        <SecretConsultationModal />
      </Suspense>

      {/* Canvas confetti celebration */}
      <Suspense fallback={null}>
        <Confetti active={confettiActive} />
      </Suspense>

      {/* Cinematic Game-Style Intro Gate */}
      {!introComplete && (
        <Suspense fallback={null}>
          <IntroGate onComplete={() => setIntroComplete(true)} />
        </Suspense>
      )}

      {/* Optional Retro CRT Scanlines overlay */}
      {retroMode && <div className="scanlines-fx" />}

      {/* Main Application Suite */}
      {introComplete && (
        <>
          <Navbar />

          <main id="main-content" tabIndex="-1" className="focus:outline-none">
            <Hero />
            <About />

            {/* Personalized Section Ordering based on player_class */}
            <Suspense fallback={<SectionLoader />}>
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
            </Suspense>
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
