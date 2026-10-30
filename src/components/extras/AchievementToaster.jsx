import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useGame } from '../../context';

export default function AchievementToaster() {
  const { toasts, dismissToast, achievementsEnabled } = useGame();

  if (!achievementsEnabled || toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-5 start-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto p-4 rounded-xl bg-[#0E1320]/95 border border-[#D4AF37]/50 shadow-[0_12px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-xl shrink-0 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
              {toast.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold">
                Achievement Unlocked
              </div>
              <div className="text-sm font-sora font-semibold text-white truncate">
                {toast.title}
              </div>
              <div className="text-xs text-[#94a3b8] truncate">
                {toast.desc}
              </div>
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-[#64748b] hover:text-white p-1 rounded transition-colors"
              aria-label="Dismiss toast"
            >
              <FiX size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
