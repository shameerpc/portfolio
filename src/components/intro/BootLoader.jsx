import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

const statusLines = [
  'Loading Doha & Dubai skyline…',
  'Compiling React components…',
  'Rendering poster designs…',
  'Ready player one.',
];

export function BootLoader({ onComplete, isFast = false }) {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Speed factor: 1.2s for returning visitors, 2.4s for fresh visits
  const durationMs = isFast ? 1200 : 2400;

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(pct);

      // Advance typewriter status lines
      const step = Math.min(statusLines.length - 1, Math.floor((pct / 100) * statusLines.length));
      setLineIdx(step);

      if (pct >= 100) {
        clearInterval(interval);
        setIsFinished(true);
        const timeout = setTimeout(() => {
          onComplete();
        }, 280);
        return () => clearTimeout(timeout);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [durationMs, onComplete]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#070A12] text-[#F4F6FB] overflow-hidden select-none">
      {/* Ambient Starfield Canvas */}
      <ParticleCanvas mode="boot" />

      {/* Center Monogram & Boot Loader Box */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 space-y-7">
        {/* Gold "SP" Monogram SVG with stroke self-draw animation */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Subtle Outer Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-xl animate-pulse" />

          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Diamond Shield Frame */}
            <motion.path
              d="M 50 4 L 96 50 L 50 96 L 4 50 Z"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: isFast ? 0.7 : 1.3, ease: 'easeInOut' }}
            />

            {/* Inner "S" & "P" Monogram Paths */}
            {/* Letter S */}
            <motion.path
              d="M 40 34 C 40 34, 28 34, 28 42 C 28 49, 44 49, 44 57 C 44 64, 28 65, 28 65"
              stroke="#F5E6A8"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isFast ? 0.6 : 1.1, delay: 0.2, ease: 'easeOut' }}
            />

            {/* Letter P */}
            <motion.path
              d="M 54 65 L 54 34 L 68 34 C 74 34, 76 39, 76 45 C 76 51, 72 53, 54 53"
              stroke="#D4AF37"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isFast ? 0.6 : 1.1, delay: 0.35, ease: 'easeOut' }}
            />
          </svg>
        </div>

        {/* Monogram Brand Mark */}
        <div className="text-center space-y-1">
          <div className="font-orbitron font-black text-xl tracking-[0.25em] text-[#F4F6FB]">
            SHAMSEER <span className="text-[#D4AF37]">PC</span>
          </div>
          <div className="text-[11px] font-mono text-[#9AA4BC] tracking-widest uppercase">
            FULL-STACK ARCHITECT // GCC
          </div>
        </div>

        {/* Segmented Game-style XP Loading Bar */}
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#D4AF37] font-semibold tracking-wider">
              {isFinished ? 'SYSTEMS LOADED' : 'INITIALIZING EXPERIENCE'}
            </span>
            <span className="text-[#F4F6FB] font-bold">
              {isFinished ? '✓' : `${progress}%`}
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="relative h-2.5 w-full bg-[#0E1320] border border-[#D4AF37]/30 rounded-full p-[2px] overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#22D3EE] relative"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
              }}
              transition={{ ease: 'linear' }}
            >
              {/* Light beam glint at the head of the progress bar */}
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[1px] rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Typewriter Status Text */}
        <div className="h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={lineIdx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18 }}
              className="text-xs font-mono text-[#9AA4BC] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-ping" />
              <span>{statusLines[lineIdx]}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Screen Flash upon reaching 100% */}
      {isFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-[#F5E6A8] pointer-events-none z-30"
        />
      )}
    </div>
  );
}

export default BootLoader;
