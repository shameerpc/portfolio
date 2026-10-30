import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiFastForward } from 'react-icons/fi';
import BootLoader from './BootLoader';
import TitleScreen from './TitleScreen';
import CharacterSelect from './CharacterSelect';
import WarpTransition from './WarpTransition';
import { cyberAudio } from '../../utils/cyberAudio';

export function IntroGate({ onComplete }) {
  const [stage, setStage] = useState('boot'); // 'boot' | 'title' | 'character' | 'warp'
  const [selectedClass, setSelectedClass] = useState(null);
  const [isFast, setIsFast] = useState(false);

  useEffect(() => {
    // Check if user is a returning visitor in this session
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('intro_seen');
      if (hasSeen === 'true') {
        setIsFast(true);
      }
    }
  }, []);

  const handleSkipAll = useCallback(() => {
    cyberAudio.playSoftClick();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('intro_seen', 'true');
      if (!localStorage.getItem('player_class')) {
        localStorage.setItem('player_class', 'full_package');
      }
    }
    onComplete();
  }, [onComplete]);

  // Global escape key handler to skip from any point
  useEffect(() => {
    const onGlobalKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleSkipAll();
      }
    };
    window.addEventListener('keydown', onGlobalKeyDown);
    return () => window.removeEventListener('keydown', onGlobalKeyDown);
  }, [handleSkipAll]);

  const handleBootComplete = () => {
    setStage('title');
  };

  const handleTitleStart = () => {
    setStage('character');
  };

  const handleCharacterSelect = (chosenClass) => {
    setSelectedClass(chosenClass);
    setStage('warp');
  };

  const handleWarpComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('intro_seen', 'true');
    }
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070A12] text-[#F4F6FB] overflow-hidden select-none">
      {/* Universal Top Bar Controls (Always accessible from second 0) */}
      <div className="absolute top-5 end-5 z-50 flex items-center gap-2">
        <button
          onClick={() => {
            cyberAudio.playSoftClick();
            // Toggle language
            if (typeof window !== 'undefined') {
              const cur = localStorage.getItem('spc_lang') || 'en';
              const next = cur === 'en' ? 'ar' : 'en';
              localStorage.setItem('spc_lang', next);
              document.documentElement.lang = next;
              document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
              window.location.reload();
            }
          }}
          className="px-3 py-1.5 rounded-full bg-[#0E1320]/80 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-heading font-bold text-white hover:text-[#D4AF37] transition-all backdrop-blur-md shadow-lg"
          aria-label="Toggle language"
        >
          {typeof window !== 'undefined' && localStorage.getItem('spc_lang') === 'ar' ? 'English' : 'العربية'}
        </button>

        <button
          onClick={handleSkipAll}
          className="group px-3.5 py-1.5 rounded-full bg-[#0E1320]/80 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-mono text-[#9AA4BC] hover:text-[#F5E6A8] transition-all flex items-center gap-1.5 backdrop-blur-md shadow-lg"
          aria-label="Skip Intro"
        >
          <span>Skip intro</span>
          <FiFastForward className="text-xs transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* State Machine Transition Viewports */}
      <AnimatePresence mode="wait">
        {stage === 'boot' && (
          <motion.div
            key="stage-boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full"
          >
            <BootLoader onComplete={handleBootComplete} isFast={isFast} />
          </motion.div>
        )}

        {stage === 'title' && (
          <motion.div
            key="stage-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <TitleScreen onStart={handleTitleStart} onSkip={handleSkipAll} />
          </motion.div>
        )}

        {stage === 'character' && (
          <motion.div
            key="stage-character"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full overflow-hidden"
          >
            <CharacterSelect onSelect={handleCharacterSelect} onSkip={handleSkipAll} />
          </motion.div>
        )}

        {stage === 'warp' && (
          <motion.div
            key="stage-warp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <WarpTransition onComplete={handleWarpComplete} selectedClass={selectedClass} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default IntroGate;
