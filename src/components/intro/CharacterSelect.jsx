import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPenTool, FiZap, FiCheck, FiArrowRight } from 'react-icons/fi';
import { cyberAudio } from '../../utils/cyberAudio';
import { Toast } from '../ui/Toast';

const characterClasses = [
  {
    id: 'developer',
    name: 'The Developer',
    role: 'Full-Stack Software Engineer',
    accent: '#22D3EE',
    borderClass: 'border-[#22D3EE]/30 hover:border-[#22D3EE]',
    bgGlow: 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(34,211,238,0.25)]',
    badge: 'SYSTEM ARCHITECT',
    icon: <FiCode className="text-3xl text-[#22D3EE]" />,
    desc: 'Web apps, SaaS & enterprise holding portals built with high concurrency, Redis caching, and robust security.',
    skills: ['MERN Ecosystem', 'Redis In-Memory', 'RBAC Multi-Division', 'REST APIs & Webhooks'],
  },
  {
    id: 'full_package',
    name: 'The Full Package',
    role: 'Full-Stack & Creative Lead',
    accent: '#D4AF37',
    borderClass: 'border-[#D4AF37]/50 hover:border-[#D4AF37]',
    bgGlow: 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_35px_rgba(212,175,55,0.3)]',
    badge: 'HYBRID COMMANDER',
    isDefault: true,
    icon: <FiZap className="text-3xl text-[#D4AF37]" />,
    desc: 'Build it AND brand it. Enterprise software engineering coupled with prestige commercial ad design for maximum market impact.',
    skills: ['End-to-End Web Apps', 'Luxury Brand Campaigns', 'Enterprise Portals', 'Performance Video'],
  },
  {
    id: 'creative',
    name: 'The Creative Director',
    role: 'Commercial Visual Director',
    accent: '#FF3D8B',
    borderClass: 'border-[#FF3D8B]/30 hover:border-[#FF3D8B]',
    bgGlow: 'hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(255,61,139,0.25)]',
    badge: 'VISUAL MAESTRO',
    icon: <FiPenTool className="text-3xl text-[#FF3D8B]" />,
    desc: 'Posters, social media ads, brochures & video motion designed for luxury brands and corporate recruitment in Dubai & Qatar.',
    skills: ['Commercial Key Visuals', 'Social Ad Suites', 'Recruitment Brochures', 'CapCut & Premiere Video'],
  },
];

export function CharacterSelect({ onSelect, onSkip }) {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default to "The Full Package" (index 1)
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const confirmChoice = useCallback(
    (cls) => {
      cyberAudio.playLevelUp();
      if (typeof window !== 'undefined') {
        localStorage.setItem('player_class', cls.id);
      }
      setToastMessage(`Player class: ${cls.name} — profile optimized`);
      setToastOpen(true);
      setTimeout(() => {
        onSelect(cls);
      }, 700);
    },
    [onSelect]
  );

  // Keyboard controls: Left/Right arrows navigate, Enter confirms, Esc skips
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        cyberAudio.playHover();
        setSelectedIdx((prev) => (prev + 1) % characterClasses.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        cyberAudio.playHover();
        setSelectedIdx((prev) => (prev - 1 + characterClasses.length) % characterClasses.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        confirmChoice(characterClasses[selectedIdx]);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, confirmChoice, onSkip]);

  return (
    <div className="relative w-full min-h-full py-12 px-4 sm:px-6 flex flex-col justify-between bg-[#070A12] text-[#F4F6FB] overflow-y-auto select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E1320] border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-xs uppercase tracking-widest rounded-full">
          <span>OPERATIVE CLASS SELECT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#F4F6FB] tracking-tight">
          Who are you looking for?
        </h2>
        <p className="text-sm sm:text-base text-[#9AA4BC] font-sans">
          Tailor your portfolio journey to match your immediate project requirements.
        </p>
      </div>

      {/* Three Character Select Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch my-auto">
        {characterClasses.map((cls, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <motion.div
              key={cls.id}
              onClick={() => {
                cyberAudio.playSoftClick();
                setSelectedIdx(idx);
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#0E1320]/85 backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'border-[#D4AF37] shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.28)] ring-1 ring-[#D4AF37]'
                  : 'border-[#F4F6FB]/10 hover:border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
              }`}
            >
              {/* Default Highlight Badge */}
              {cls.isDefault && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] text-[10px] font-mono font-black tracking-widest uppercase shadow-md">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Card Head */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="p-3 bg-[#070A12] rounded-xl border border-white/10">
                    {cls.icon}
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase"
                    style={{
                      color: cls.accent,
                      backgroundColor: `${cls.accent}15`,
                      border: `1px solid ${cls.accent}40`,
                    }}
                  >
                    {cls.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold font-heading text-[#F4F6FB] mb-1">
                  {cls.name}
                </h3>
                <div className="text-xs font-mono font-semibold text-[#D4AF37] mb-3">
                  {cls.role}
                </div>

                <p className="text-sm text-[#9AA4BC] font-sans leading-relaxed mb-6">
                  {cls.desc}
                </p>

                {/* Core Capabilities */}
                <div className="space-y-2 mb-6">
                  {cls.skills.map((sk) => (
                    <div key={sk} className="flex items-center gap-2 text-xs font-sans text-[#F4F6FB]">
                      <FiCheck className="text-xs shrink-0" style={{ color: cls.accent }} />
                      <span>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  confirmChoice(cls);
                }}
                className={`w-full py-3 px-4 rounded-full text-xs font-heading font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] shadow-lg'
                    : 'bg-[#141A2B] border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                <span>SELECT & LOCK IN</span>
                <FiArrowRight className="text-xs" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Footer Action Controls */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-[#9AA4BC] gap-3">
        <span className="hidden sm:inline">Use Arrow keys ← → and Enter to select</span>
        <button
          onClick={() => {
            cyberAudio.playSoftClick();
            confirmChoice(characterClasses[1]); // Default to "The Full Package"
          }}
          className="text-[#D4AF37] hover:text-[#F5E6A8] hover:underline font-bold ml-auto flex items-center gap-1"
        >
          <span>Skip with Full Package ›</span>
        </button>
      </div>

      {/* Optimization Toast Notification */}
      <Toast
        isOpen={toastOpen}
        message={toastMessage}
        type="gold"
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
}

export default CharacterSelect;
