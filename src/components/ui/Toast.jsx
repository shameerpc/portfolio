import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiInfo, FiAlertCircle, FiX } from 'react-icons/fi';

const toastStyles = {
  gold: {
    border: 'border-[#D4AF37]/40',
    icon: <FiCheckCircle className="text-[#D4AF37] text-lg" />,
    glow: 'shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.15)]',
  },
  success: {
    border: 'border-[#10B981]/40',
    icon: <FiCheckCircle className="text-[#10B981] text-lg" />,
    glow: 'shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.15)]',
  },
  cyan: {
    border: 'border-[#22D3EE]/40',
    icon: <FiInfo className="text-[#22D3EE] text-lg" />,
    glow: 'shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(34,211,238,0.15)]',
  },
  error: {
    border: 'border-[#FF3D8B]/40',
    icon: <FiAlertCircle className="text-[#FF3D8B] text-lg" />,
    glow: 'shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,61,139,0.15)]',
  },
};

export function Toast({
  isOpen = false,
  message = '',
  type = 'gold',
  duration = 3500,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen || !duration || !onClose) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  const config = toastStyles[type] || toastStyles.gold;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
        >
          <div
            className={`p-4 rounded-xl bg-[#0E1320]/95 backdrop-blur-xl border ${config.border} ${config.glow} flex items-center justify-between gap-3 text-sm font-sans text-[#F4F6FB]`}
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0">{config.icon}</span>
              <span className="leading-snug">{message}</span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1 text-[#9AA4BC] hover:text-[#F4F6FB] rounded transition-colors"
                aria-label="Close notification"
              >
                <FiX size={16} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
