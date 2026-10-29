import { FiLinkedin, FiGithub, FiArrowUp } from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

export default function Footer() {
  const scrollToTop = () => {
    cyberAudio.playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030610] border-t border-[#00f0ff]/20 py-12 overflow-hidden text-xs font-mono">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#00f0ff]/5 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          {/* Brand Telemetry */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-[#0d1527] border border-[#00f0ff]/40 rounded-sm shadow-neon-cyan-sm">
              <span className="text-[#00f0ff] font-orbitron font-bold text-xs">SP</span>
            </div>
            <div>
              <div className="font-orbitron font-black text-sm tracking-widest text-white">
                SHAMSEER PC // MECHA CORE
              </div>
              <div className="text-[10px] text-[#64748b]">
                GCC ENTERPRISE MERN ARCHITECT & CREATIVE LEAD
              </div>
            </div>
          </div>

          {/* Timezone & Orbit Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#94a3b8]">
            <span className="px-2.5 py-1 bg-[#080d1a] border border-white/10 rounded flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
              <span>DUBAI DXB [UTC+4]</span>
            </span>
            <span className="px-2.5 py-1 bg-[#080d1a] border border-white/10 rounded flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>DOHA DOH [UTC+3]</span>
            </span>
            <span className="px-2.5 py-1 bg-[#080d1a] border border-white/10 rounded text-[#ffb703]">
              STATUS: READY FOR ENTERPRISE DEPLOYMENT
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/shamseer-tech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberAudio.playCyberClick()}
              className="p-2 bg-[#080d1a] border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="https://github.com/shameerpc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cyberAudio.playCyberClick()}
              className="p-2 bg-[#080d1a] border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#040711] rounded transition-all ml-2"
              title="Return to Command Apex"
              aria-label="Scroll to Top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Legal & System Footnote */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748b] gap-3">
          <div>
            © {new Date().getFullYear()} Shamseer PC. All rights reserved. Engineered with React 19 & High-End Mecha HUD Architecture.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00f0ff]">ENTERPRISE GCC ED.</span>
            <span>BUILD 2026.10</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
