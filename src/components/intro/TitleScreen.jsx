import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX, FiFastForward } from 'react-icons/fi';
import ParticleCanvas from './ParticleCanvas';
import { cyberAudio } from '../../utils/cyberAudio';
import { useLanguage } from '../../i18n';

export function TitleScreen({ onStart, onSkip }) {
  const { lang, toggleLang } = useLanguage();
  const [audioMuted, setAudioMuted] = useState(cyberAudio.isMuted());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTriggering, setIsTriggering] = useState(false);

  // Parallax mouse tracker (desktop)
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    });
  }, []);

  const handleAudioToggle = (e) => {
    e.stopPropagation();
    const muted = cyberAudio.toggleMute();
    setAudioMuted(muted);
  };

  const handlePressStart = useCallback(() => {
    if (isTriggering) return;
    setIsTriggering(true);
    cyberAudio.playCoin();
    setTimeout(() => {
      onStart();
    }, 450);
  }, [isTriggering, onStart]);

  // Keyboard navigation: Enter or Space triggers Start; Esc skips intro
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        handlePressStart();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onSkip();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handlePressStart, onSkip]);

  const nameLetters = 'SHAMSEER PC'.split('');

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handlePressStart}
      className={`relative w-full h-full flex flex-col justify-between bg-[#070A12] text-[#F4F6FB] overflow-hidden select-none cursor-pointer ${
        isTriggering ? 'animate-[shake_0.4s_ease-in-out]' : ''
      }`}
    >
      {/* Layer 1: Atmospheric Aurora & Gradient Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-[#0B0F1C] to-[#070A12] pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D4AF37]/10 via-[#22D3EE]/10 to-[#FF3D8B]/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 25}px), ${mousePos.y * 20}px)`,
        }}
      />

      {/* Layer 2: Floating Canvas Particles ({ }, </>, stars) */}
      <ParticleCanvas mode="title" />

      {/* Layer 3: Original Layered SVG Skyline (Doha & Dubai silhouettes) */}
      <div
        className="absolute bottom-16 sm:bottom-20 inset-x-0 w-full h-44 sm:h-64 pointer-events-none transition-transform duration-500 ease-out z-10"
        style={{
          transform: `translateX(${mousePos.x * -18}px)`,
        }}
      >
        <svg
          viewBox="0 0 1200 320"
          className="w-full h-full opacity-45"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Doha Aspire Tower silhouette */}
          <path d="M 120 320 L 140 130 C 145 100 155 100 160 130 L 180 320 Z" fill="#0E1320" />
          <circle cx="150" cy="115" r="7" fill="#D4AF37" opacity="0.8" />
          {/* Doha Tornado Tower silhouette */}
          <path d="M 230 320 Q 250 180 230 150 L 270 150 Q 250 180 270 320 Z" fill="#141A2B" opacity="0.9" />

          {/* Dubai Frame style gate */}
          <rect x="360" y="160" width="80" height="160" fill="none" stroke="#0E1320" strokeWidth="12" />

          {/* Burj Al Arab Silhouette */}
          <path d="M 500 320 L 500 100 C 530 140 570 200 580 320 Z" fill="#141A2B" />
          <path d="M 500 100 L 600 320" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />

          {/* Majestic Burj Khalifa Spire Silhouette */}
          <path d="M 680 320 L 685 240 L 690 180 L 695 110 L 699 30 L 701 30 L 705 110 L 710 180 L 715 240 L 720 320 Z" fill="#141A2B" />
          {/* Burj Khalifa tiers & needle beacon */}
          <circle cx="700" cy="28" r="3" fill="#22D3EE" className="animate-pulse" />
          <line x1="700" y1="30" x2="700" y2="320" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />

          {/* Dubai Marina & West Bay Corporate Towers */}
          <rect x="800" y="150" width="45" height="170" fill="#0E1320" />
          <rect x="860" y="120" width="55" height="200" fill="#141A2B" />
          <polygon points="860,120 887,80 915,120" fill="#141A2B" />
          <rect x="930" y="170" width="50" height="150" fill="#0E1320" />
          <rect x="1000" y="135" width="60" height="185" fill="#141A2B" />

          {/* Twinkling skyline windows */}
          {[
            [150, 160], [250, 200], [520, 230], [530, 270],
            [698, 140], [702, 190], [700, 260],
            [875, 150], [890, 210], [950, 200], [1020, 170]
          ].map(([wx, wy], idx) => (
            <circle
              key={idx}
              cx={wx}
              cy={wy}
              r={1.5}
              fill={idx % 2 === 0 ? '#D4AF37' : '#22D3EE'}
              opacity="0.85"
            />
          ))}
        </svg>
      </div>

      {/* Layer 4: Front perspective 3D gold grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden pointer-events-none z-10">
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent z-10"
        />
        <div
          className="w-[200%] -left-1/2 h-full origin-bottom"
          style={{
            transform: `perspective(400px) rotateX(68deg) translateY(${mousePos.y * -8}px)`,
            backgroundImage:
              'linear-gradient(to right, rgba(212, 175, 55, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.18) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Top Bar Status Indicator */}
      <div className="relative z-20 px-6 pt-6 flex items-center justify-between text-xs font-mono text-[#9AA4BC]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-[#F4F6FB] font-semibold tracking-wider">
            SHAMSEER PC // INTERFACE READY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#9AA4BC]">
          <span className="text-[#D4AF37]">DOHA & DUBAI</span>
          <span>ENTERPRISE MERN & CREATIVE</span>
        </div>
      </div>

      {/* Center Hero: Title, Staggered Rise, & Press Start */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 my-auto space-y-6">
        {/* Name with Staggered Letter Rise & Glint */}
        <div className="relative">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight text-[#F4F6FB] flex items-center justify-center">
            {nameLetters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.5,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className={char === ' ' ? 'mr-3 sm:mr-6' : 'inline-block'}
                style={{
                  color: i >= 9 ? '#D4AF37' : '#F4F6FB',
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-lg text-[#9AA4BC] font-sans font-medium tracking-wide mt-3 max-w-2xl mx-auto"
          >
            Full-Stack Developer & Creative Director —{' '}
            <span className="text-[#F5E6A8] font-semibold">Building for Qatar · UAE · GCC</span>
          </motion.p>
        </div>

        {/* Glowing Pulsing "PRESS START" Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="pt-4 flex flex-col items-center gap-2.5"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePressStart();
            }}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-black text-sm sm:text-base tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3"
          >
            <span className="text-xs">▶</span>
            <span>PRESS START</span>
            <span className="text-xs">◀</span>
          </button>
          <span className="text-[11px] font-mono text-[#9AA4BC] tracking-wider animate-pulse">
            Press Enter / Tap anywhere
          </span>
        </motion.div>
      </div>

      {/* Bottom HUD: Language, Audio, Skip Intro, GCC Badge */}
      <div className="relative z-20 px-6 pb-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9AA4BC] border-t border-white/5 pt-4">
        {/* Controls: Audio & Language */}
        <div className="flex items-center gap-3">
          {/* Audio toggle */}
          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-full bg-[#0E1320] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#D4AF37] transition-all flex items-center gap-1.5 px-3"
            title={audioMuted ? 'Turn Sound ON' : 'Turn Sound OFF'}
          >
            {!audioMuted ? <FiVolume2 className="text-sm" /> : <FiVolumeX className="text-sm" />}
            <span className="text-[10px] uppercase font-bold">{audioMuted ? 'SFX: OFF' : 'SFX: ON'}</span>
          </button>

          {/* Language Switch */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleLang();
            }}
            className="px-3 py-1.5 rounded-full bg-[#0E1320] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all text-xs font-bold"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
        </div>

        {/* Center Tag */}
        <div className="hidden md:inline-block text-[#F4F6FB] font-medium tracking-wide">
          Available for projects in Qatar & UAE
        </div>

        {/* Skip Intro Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSkip();
          }}
          className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] hover:text-[#F5E6A8] hover:underline tracking-wider px-2 py-1"
        >
          <span>Skip intro</span>
          <FiFastForward className="text-xs" />
        </button>
      </div>

      {/* Trigger Screen Light Burst Flash */}
      {isTriggering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-white pointer-events-none z-30"
        />
      )}
    </div>
  );
}

export default TitleScreen;
