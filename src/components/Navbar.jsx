import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  FiVolume2, 
  FiVolumeX, 
  FiMenu, 
  FiX, 
  FiDownload, 
  FiChevronDown, 
  FiAward, 
  FiCheck,
  FiCode,
  FiPenTool,
  FiZap 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { cyberAudio } from '../utils/cyberAudio';
import { useLanguage } from '../i18n';
import { useGame, ACHIEVEMENTS_LIST } from '../context';
import { trackEvent } from '../utils/analytics';

const classMeta = {
  full_package: { label: 'Full Package', icon: <FiZap className="text-[#D4AF37]" /> },
  developer: { label: 'Developer', icon: <FiCode className="text-[#22D3EE]" /> },
  creative: { label: 'Creative Lead', icon: <FiPenTool className="text-[#FF3D8B]" /> },
};

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const { 
    playerClass, 
    setPlayerClass, 
    unlockedAchievements, 
    achievementsEnabled, 
    toggleAchievementsEnabled,
    unlockAchievement 
  } = useGame();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [audioMuted, setAudioMuted] = useState(cyberAudio.isMuted());
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [achieveMenuOpen, setAchieveMenuOpen] = useState(false);

  const roleMenuRef = useRef(null);
  const achieveMenuRef = useRef(null);

  // Close popovers when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (roleMenuRef.current && !roleMenuRef.current.contains(e.target)) {
        setRoleMenuOpen(false);
      }
      if (achieveMenuRef.current && !achieveMenuRef.current.contains(e.target)) {
        setAchieveMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: t('nav.home', 'Home'), href: '#hero', id: 'hero' },
    { label: t('nav.about', 'About'), href: '#about', id: 'about' },
    { label: t('nav.services', 'Services'), href: '#services', id: 'services' },
    { label: t('nav.work', 'Work'), href: '#webdev', id: 'webdev' },
    { label: t('nav.creative', 'Creative'), href: '#creative', id: 'creative' },
    { label: t('nav.skills', 'Skills'), href: '#skills', id: 'skills' },
    { label: t('nav.contact', 'Contact'), href: '#contact', id: 'contact' },
  ];

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'webdev', 'creative', 'skills', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleAudioToggle = () => {
    const isNowMuted = cyberAudio.toggleMute();
    setAudioMuted(isNowMuted);
    if (!isNowMuted) {
      cyberAudio.playCoin();
    }
  };

  const handleCvDownload = () => {
    cyberAudio.playCoin();
    trackEvent('cv_download', { source: 'navbar' });
    unlockAchievement('recruiter');
  };

  const handleWhatsAppClick = () => {
    cyberAudio.playSoftClick();
    trackEvent('whatsapp_click', { source: 'navbar' });
    unlockAchievement('connected');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${
          scrolled
            ? 'bg-[#070A12]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo "SP" */}
          <a
            href="#hero"
            onClick={() => cyberAudio.playSoftClick()}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Shamseer PC Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#0E1320] border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-[#D4AF37] transition-all duration-200">
              <span className="text-[#D4AF37] font-orbitron font-black text-sm tracking-wider">
                SP
              </span>
              <span className="absolute -top-1 -end-1 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wide text-[#F4F6FB] group-hover:text-[#F5E6A8] transition-colors">
                Shamseer PC
              </span>
              <span className="text-[10px] font-mono text-[#9AA4BC] tracking-wider uppercase">
                {t('hero.role', 'MERN & Creative Lead')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#0E1320]/70 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => cyberAudio.playHover?.()}
                  onClick={() => cyberAudio.playSoftClick?.()}
                  className={`text-xs font-heading font-medium tracking-wide px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#070A12] bg-[#D4AF37] font-bold shadow-[0_2px_10px_rgba(212,175,55,0.3)]'
                      : 'text-[#9AA4BC] hover:text-[#F4F6FB] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-2">
            {/* Player Class Personalization Selector */}
            <div className="relative" ref={roleMenuRef}>
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="px-2.5 py-1.5 rounded-full bg-[#0E1320] border border-white/10 hover:border-[#D4AF37]/50 text-xs font-mono text-[#cbd5e1] hover:text-white flex items-center gap-1.5 transition-all"
                title="Change playing role"
              >
                {classMeta[playerClass]?.icon}
                <span className="hidden xl:inline text-[11px] text-[#94a3b8]">Role:</span>
                <span className="text-[11px] font-semibold text-white">
                  {classMeta[playerClass]?.label}
                </span>
                <FiChevronDown className="text-xs text-[#94a3b8]" />
              </button>

              <AnimatePresence>
                {roleMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    className="absolute end-0 mt-2 w-48 p-1.5 rounded-xl bg-[#0E1320] border border-[#D4AF37]/30 shadow-2xl backdrop-blur-xl z-50 text-xs"
                  >
                    <div className="px-2.5 py-1.5 text-[10px] font-mono text-[#64748b] uppercase tracking-wider border-b border-white/10">
                      Personalize Portfolio
                    </div>
                    {Object.entries(classMeta).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setPlayerClass(key);
                          setRoleMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-all text-left rtl:text-right ${
                          playerClass === key
                            ? 'bg-[#D4AF37]/15 text-[#F5E6A8] font-bold'
                            : 'text-[#cbd5e1] hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {val.icon}
                          <span>{val.label}</span>
                        </span>
                        {playerClass === key && <FiCheck className="text-[#D4AF37]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Achievements Popover Trigger */}
            <div className="relative" ref={achieveMenuRef}>
              <button
                onClick={() => setAchieveMenuOpen(!achieveMenuOpen)}
                className="px-2.5 py-1.5 rounded-full bg-[#0E1320] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs font-mono text-[#F5E6A8] flex items-center gap-1.5 transition-all"
                title="View Achievements"
              >
                <FiAward className="text-xs text-[#D4AF37]" />
                <span className="text-[11px] font-bold">
                  {unlockedAchievements.length}/{ACHIEVEMENTS_LIST.length}
                </span>
              </button>

              <AnimatePresence>
                {achieveMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    className="absolute end-0 mt-2 w-72 p-3 rounded-2xl bg-[#0E1320] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl z-50 text-xs space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="font-sora font-bold text-white flex items-center gap-1.5">
                        <FiAward className="text-[#D4AF37]" />
                        <span>Achievements ({unlockedAchievements.length}/{ACHIEVEMENTS_LIST.length})</span>
                      </div>
                      <button
                        onClick={toggleAchievementsEnabled}
                        className="text-[10px] font-mono text-[#94a3b8] hover:text-white"
                        title="Toggle popups"
                      >
                        {achievementsEnabled ? 'Alerts: ON' : 'Alerts: OFF'}
                      </button>
                    </div>

                    <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
                      {ACHIEVEMENTS_LIST.map((item) => {
                        const isUnlocked = unlockedAchievements.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            className={`p-2 rounded-xl border flex items-center gap-2.5 transition-all ${
                              isUnlocked
                                ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 text-white'
                                : 'bg-black/30 border-white/5 text-[#64748b] opacity-60'
                            }`}
                          >
                            <span className="text-lg shrink-0">{item.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-xs truncate">
                                {item.title} {isUnlocked && '✓'}
                              </div>
                              <div className="text-[10px] text-[#94a3b8] truncate">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher (EN | العربية) */}
            <button
              onClick={() => {
                cyberAudio.playSoftClick?.();
                toggleLang();
              }}
              className="px-3 py-1.5 rounded-full bg-[#0E1320] border border-white/10 hover:border-[#D4AF37]/50 text-[#F4F6FB] hover:text-[#D4AF37] text-xs font-heading font-bold transition-colors cursor-pointer"
              title="Toggle Language (EN / العربية)"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleAudioToggle}
              className={`p-2 rounded-full border text-xs transition-all cursor-pointer ${
                !audioMuted
                  ? 'border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                  : 'border-white/10 bg-[#0E1320] text-[#9AA4BC] hover:text-[#F4F6FB]'
              }`}
              title={audioMuted ? 'Turn Sound ON' : 'Turn Sound OFF'}
              aria-label="Toggle Audio SFX"
            >
              {!audioMuted ? <FiVolume2 size={15} /> : <FiVolumeX size={15} />}
            </button>

            {/* WhatsApp Green Icon Button */}
            <a
              href="https://wa.me/917012819002?text=Hello%20Shamseer,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="p-2 rounded-full bg-[#10B981]/15 hover:bg-[#10B981] text-[#10B981] hover:text-[#070A12] border border-[#10B981]/40 transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp (+91 7012819002)"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>

            {/* Gold Download CV Button */}
            <a
              href="/cv/Shamseer-PC-CV.pdf"
              download="Shamseer-PC-CV.pdf"
              onClick={handleCvDownload}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-bold text-xs shadow-[0_4px_18px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] transition-all overflow-hidden"
            >
              <FiDownload size={13} />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                cyberAudio.playSoftClick?.();
                toggleLang();
              }}
              className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#0E1320] border border-white/10 text-white"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a
              href="https://wa.me/917012819002"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="p-2 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 rounded-full"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={() => {
                cyberAudio.playSoftClick?.();
                setMobileOpen(!mobileOpen);
              }}
              className="p-2 bg-[#0E1320] border border-white/10 text-[#F4F6FB] rounded-full"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Animated Gold Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#D4AF37] origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#070A12]/95 border-b border-white/10 p-6 backdrop-blur-2xl md:hidden space-y-4"
          >
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 text-sm font-heading font-medium text-[#cbd5e1] hover:text-white hover:bg-[#D4AF37]/15"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Role Switcher */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono text-[#94a3b8] mb-2 uppercase">
                {t('nav.playingAs', 'Role Mode')}:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(classMeta).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setPlayerClass(key);
                      setMobileOpen(false);
                    }}
                    className={`p-2 rounded-xl border text-[11px] font-mono flex flex-col items-center gap-1 ${
                      playerClass === key
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F5E6A8]'
                        : 'bg-white/5 border-white/10 text-[#94a3b8]'
                    }`}
                  >
                    {val.icon}
                    <span className="truncate">{val.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CV Button */}
            <a
              href="/cv/Shamseer-PC-CV.pdf"
              download="Shamseer-PC-CV.pdf"
              onClick={() => {
                handleCvDownload();
                setMobileOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-bold text-xs flex items-center justify-center gap-2"
            >
              <FiDownload />
              <span>Download CV (PDF)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
