import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FiVolume2, FiVolumeX, FiMenu, FiX, FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { cyberAudio } from '../utils/cyberAudio';
import { useLanguage } from '../i18n';

const navLinks = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work', href: '#webdev', id: 'webdev' },
  { label: 'Creative', href: '#creative', id: 'creative' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [audioMuted, setAudioMuted] = useState(cyberAudio.isMuted());

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${
          scrolled
            ? 'bg-[#070A12]/85 backdrop-blur-xl border-b border-[#F4F6FB]/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo "SP" in Champagne Gold */}
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
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wide text-[#F4F6FB] group-hover:text-[#F5E6A8] transition-colors">
                Shamseer PC
              </span>
              <span className="text-[10px] font-mono text-[#9AA4BC] tracking-wider uppercase">
                MERN & Creative Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#0E1320]/60 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playSoftClick()}
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
            {/* Direct CV Download Link */}
            <a
              href="/cv/Shamseer-PC-CV.pdf"
              download="Shamseer-PC-CV.pdf"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playSoftClick()}
              className="text-xs font-heading font-semibold text-[#D4AF37] hover:text-[#F5E6A8] px-3 py-1.5 rounded-full hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-1"
            >
              <span>CV</span>
              <span className="text-[9px] font-mono px-1 py-0.2 bg-[#D4AF37]/15 rounded border border-[#D4AF37]/30">
                PDF
              </span>
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={() => {
                cyberAudio.playSoftClick();
                toggleLang();
              }}
              className="px-2.5 py-1.5 rounded-full bg-[#0E1320] border border-white/10 hover:border-[#D4AF37]/40 text-[#F4F6FB] hover:text-[#D4AF37] text-xs font-heading font-bold transition-colors"
              title="Toggle Language (EN / العربية)"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleAudioToggle}
              className={`p-2 rounded-full border text-xs transition-all ${
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
              onClick={() => cyberAudio.playSoftClick()}
              className="p-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#070A12] border border-[#25D366]/40 transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp (+91 7012819002)"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>

            {/* Gold Download CV Button */}
            <a
              href="/cv/Shamseer-PC-CV.pdf"
              download="Shamseer-PC-CV.pdf"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playCoin()}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-bold text-xs shadow-[0_4px_18px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all overflow-hidden group"
            >
              <FiDownload size={13} />
              <span>Download CV</span>
              <span className="text-[9px] font-mono font-bold bg-[#070A12]/20 px-1 py-0.5 rounded">
                PDF
              </span>
            </a>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/917012819002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 rounded-full"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={() => {
                cyberAudio.playSoftClick();
                setMobileOpen(!mobileOpen);
              }}
              className="p-2 bg-[#0E1320] border border-white/10 text-[#F4F6FB] rounded-full"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Gold Scroll Progress Bar under Navbar */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#22D3EE] origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Full-Screen Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#070A12]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#D4AF37] font-semibold tracking-wider">
                  NAVIGATION
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full bg-[#0E1320] text-white"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      cyberAudio.playSoftClick();
                      setMobileOpen(false);
                    }}
                    className={`text-lg font-heading font-semibold py-2 px-3 rounded-xl transition-all flex items-center justify-between ${
                      activeSection === link.id
                        ? 'text-[#070A12] bg-[#D4AF37] font-bold'
                        : 'text-[#F4F6FB] hover:text-[#D4AF37] bg-white/[0.03]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <FiArrowRight size={14} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={toggleLang}
                  className="flex-1 py-2 rounded-xl bg-[#0E1320] border border-white/10 text-xs font-heading font-bold text-center"
                >
                  {lang === 'en' ? 'Switch to العربية' : 'Switch to English'}
                </button>
                <button
                  onClick={handleAudioToggle}
                  className="p-2.5 rounded-xl bg-[#0E1320] border border-white/10 text-[#D4AF37]"
                >
                  {!audioMuted ? <FiVolume2 size={16} /> : <FiVolumeX size={16} />}
                </button>
              </div>

              <a
                href="/cv/Shamseer-PC-CV.pdf"
                download="Shamseer-PC-CV.pdf"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-bold text-xs flex items-center justify-center gap-2"
              >
                <FiDownload size={15} />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="https://wa.me/917012819002"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-heading font-bold text-xs flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={16} />
                <span>Chat on WhatsApp (+91 7012819002)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
