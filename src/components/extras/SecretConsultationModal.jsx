import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAward, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useGame } from '../../context';
import { useLanguage } from '../../i18n';

export default function SecretConsultationModal() {
  const { secretModalOpen, setSecretModalOpen } = useGame();
  const { t } = useLanguage();

  if (!secretModalOpen) return null;

  const whatsappClaimUrl = `https://wa.me/917012819002?text=${encodeURIComponent(
    "Hello Shamseer, I found all 3 hidden gold coins on your portfolio! I'd like to claim the complimentary 10-minute technical/creative consultation."
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-md w-full p-6 sm:p-8 rounded-2xl bg-[#0E1320] border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.3)] text-center space-y-5"
        >
          {/* Close button */}
          <button
            onClick={() => setSecretModalOpen(false)}
            className="absolute top-4 end-4 p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={18} />
          </button>

          {/* Trophy badge */}
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-3xl mx-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <FiAward />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#F5E6A8] font-mono text-[11px] uppercase tracking-wider border border-[#D4AF37]/30">
              Easter Egg Unlocked
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-sora text-white">
              {t('coins.secretUnlocked', 'Secret Unlocked: Free 10-Minute Consultation')}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              {t('coins.secretDesc', 'Congratulations! You discovered all 3 hidden gold coins across the portfolio.')}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappClaimUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSecretModalOpen(false)}
              className="py-3 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] text-[#070A12] font-sora font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <FaWhatsapp className="text-base" />
              <span>{t('coins.claimBtn', 'Claim on WhatsApp')}</span>
              <FiArrowUpRight />
            </a>
            <button
              onClick={() => setSecretModalOpen(false)}
              className="py-3 px-4 rounded-xl border border-white/10 hover:border-white/20 text-[#cbd5e1] text-xs font-mono transition-all"
            >
              Keep Exploring
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
