import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiVolume2, FiVolumeX, FiTv, FiMenu, FiX, FiRadio, FiArrowRight } from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const navLinks = [
  { label: 'IDENTITY', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'DEPLOYMENTS', href: '#webdev' },
  { label: 'CREATIVE LAB', href: '#creative' },
  { label: 'TERMINAL', href: '#terminal' },
  { label: 'TECH MATRIX', href: '#skills' },
  { label: 'COMMUNICATIONS', href: '#contact' },
];

export default function Navbar({ scanlinesActive, onToggleScanlines }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audioMuted, setAudioMuted] = useState(cyberAudio.isMuted());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAudioToggle = () => {
    const isNowMuted = cyberAudio.toggleMute();
    setAudioMuted(isNowMuted);
    if (!isNowMuted) {
      cyberAudio.playCyberClick();
    }
  };

  const handleScanlineToggle = () => {
    cyberAudio.playScanToggle();
    onToggleScanlines();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-rajdhani ${
          scrolled
            ? 'bg-[#040711]/90 backdrop-blur-md border-b border-[#00f0ff]/20 shadow-[0_4px_30px_rgba(0,240,255,0.08)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Telemetry Branding */}
          <a
            href="#"
            onClick={() => cyberAudio.playCyberClick()}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 bg-[#0d1527] border border-[#00f0ff]/40 rounded-sm shadow-neon-cyan-sm group-hover:border-[#00f0ff] transition-all">
              <span className="text-[#00f0ff] font-orbitron font-bold text-sm tracking-wider">SP</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-base tracking-widest text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                SPC://PORTAL
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono tracking-normal bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 rounded">
                  SYS.ONLINE
                </span>
              </span>
              <span className="text-[11px] text-[#64748b] tracking-wider uppercase font-semibold">
                GCC // GLOBAL MECHA ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playCyberClick()}
                className="text-xs font-semibold tracking-widest text-[#94a3b8] hover:text-[#00f0ff] hover:drop-shadow-[0_0_8px_#00f0ff] transition-all relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#b026ff] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Tactical HUD Controls (Audio, CRT, Hire CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              title={audioMuted ? 'Unmute SFX' : 'Mute SFX'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border text-xs font-mono tracking-wider transition-all ${
                !audioMuted
                  ? 'border-[#00f0ff]/50 bg-[#00f0ff]/10 text-[#00f0ff] shadow-neon-cyan-sm'
                  : 'border-white/10 bg-[#0d1527] text-[#64748b] hover:text-white'
              }`}
            >
              {!audioMuted ? <FiVolume2 className="text-sm" /> : <FiVolumeX className="text-sm" />}
              <span className="text-[10px] uppercase font-bold">{!audioMuted ? 'SFX: ON' : 'SFX: OFF'}</span>
            </button>

            {/* CRT Scanline Toggle */}
            <button
              onClick={handleScanlineToggle}
              title={scanlinesActive ? 'Disable CRT Scanlines' : 'Enable CRT Scanlines'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border text-xs font-mono tracking-wider transition-all ${
                scanlinesActive
                  ? 'border-[#ff007f]/50 bg-[#ff007f]/10 text-[#ff007f] shadow-[0_0_10px_rgba(255,0,127,0.3)]'
                  : 'border-white/10 bg-[#0d1527] text-[#64748b] hover:text-white'
              }`}
            >
              <FiTv className="text-sm" />
              <span className="text-[10px] uppercase font-bold">{scanlinesActive ? 'CRT: ON' : 'CRT: OFF'}</span>
            </button>

            {/* High-visibility CTA */}
            <a
              href="#contact"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playCyberClick()}
              className="btn-cyber-primary text-xs py-2 px-4 ml-1"
            >
              <span>CONNECT // HIRE</span>
              <FiArrowRight className="text-xs" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleAudioToggle}
              className="p-2 bg-[#0d1527] border border-white/10 text-white rounded text-xs"
              aria-label="Toggle Audio"
            >
              {!audioMuted ? <FiVolume2 className="text-[#00f0ff]" /> : <FiVolumeX className="text-[#64748b]" />}
            </button>
            <button
              onClick={() => {
                cyberAudio.playCyberClick();
                setMobileOpen(!mobileOpen);
              }}
              className="p-2 bg-[#0d1527] border border-[#00f0ff]/30 text-[#00f0ff] rounded"
              aria-label="Open Navigation Menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-50 bg-[#040711]/95 backdrop-blur-xl border-b border-[#00f0ff]/30 p-6 md:hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="hud-frame p-5 space-y-4">
              <div className="text-[11px] font-mono text-[#00f0ff] flex items-center justify-between border-b border-white/10 pb-2">
                <span>// TACTICAL NAVIGATION</span>
                <span className="flex items-center gap-1">
                  <FiRadio className="text-[#00ff66] animate-pulse" /> GCC SECURE
                </span>
              </div>

              <div className="flex flex-col space-y-3 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      cyberAudio.playCyberClick();
                      setMobileOpen(false);
                    }}
                    className="text-sm font-semibold tracking-wider text-[#cbd5e1] hover:text-[#00f0ff] flex items-center justify-between py-1 border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#00f0ff]/50 font-mono text-xs">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={handleScanlineToggle}
                  className="w-full py-2 bg-[#0d1527] border border-[#ff007f]/40 text-[#ff007f] text-xs font-mono flex items-center justify-center gap-2 rounded"
                >
                  <FiTv /> {scanlinesActive ? 'DISABLE CRT SCANLINES' : 'ENABLE CRT SCANLINES'}
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    cyberAudio.playCyberClick();
                    setMobileOpen(false);
                  }}
                  className="btn-cyber-primary w-full justify-center text-xs py-2.5"
                >
                  CONNECT // HIRE NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
