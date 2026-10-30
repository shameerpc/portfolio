import { FiLinkedin, FiGithub, FiArrowUp, FiMail, FiTv } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { cyberAudio } from '../utils/cyberAudio';
import { useLanguage } from '../i18n';
import { useGame } from '../context';

export default function Footer() {
  const { t } = useLanguage();
  const { retroMode, toggleRetroMode } = useGame();

  const scrollToTop = () => {
    cyberAudio.playSoftClick?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070D] border-t border-white/5 py-12 overflow-hidden text-xs text-[#94a3b8]">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/40 text-[#F5E6A8] font-sora font-black text-sm">
              SP
            </div>
            <div>
              <div className="font-sora font-bold text-sm tracking-wide text-white">
                Shamseer PC
              </div>
              <div className="text-[11px] text-[#64748b]">
                Full-Stack MERN Developer · Creative Director
              </div>
            </div>
          </div>

          {/* Regional note & Retro Mode Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#94a3b8] px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Serving Qatar · UAE · GCC · India · Worldwide</span>
            </div>

            {/* Optional Retro Mode Toggle */}
            <button
              onClick={toggleRetroMode}
              className={`px-3 py-1.5 rounded-full border text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                retroMode
                  ? 'bg-[#10B981]/15 border-[#10B981]/50 text-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                  : 'bg-white/5 border-white/10 text-[#94a3b8] hover:text-white'
              }`}
              title="Toggle Retro CRT Scanlines overlay"
            >
              <FiTv size={13} />
              <span>{t('footer.retroMode', 'Retro CRT')}: {retroMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com/in/shamseer-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-[#cbd5e1] hover:text-[#D4AF37] transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href="https://github.com/shameerpc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-[#cbd5e1] hover:text-[#D4AF37] transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </a>
            <a
              href="https://wa.me/917012819002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#10B981] text-[#cbd5e1] hover:text-[#10B981] transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a>
            <a
              href="mailto:shamseerpcshan@gmail.com"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-[#cbd5e1] hover:text-[#D4AF37] transition-all"
              aria-label="Email"
            >
              <FiMail size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#070A12] transition-all ml-1 cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <FiArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748b] gap-3">
          <div>
            {t('footer.attribution', 'Built with React · Designed & developed by Shamseer PC')}
          </div>
          <div>
            © {new Date().getFullYear()} {t('footer.rights', 'All rights reserved.')}
          </div>
        </div>
      </div>
    </footer>
  );
}
