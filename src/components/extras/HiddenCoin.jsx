import { motion } from 'framer-motion';
import { useGame } from '../../context';

export default function HiddenCoin({ id, className = '' }) {
  const { collectedCoins, collectCoin } = useGame();
  const isCollected = collectedCoins.includes(id);

  if (isCollected) {
    return (
      <span
        className={`inline-flex items-center justify-center opacity-30 cursor-default select-none ${className}`}
        title="Coin already collected ✓"
      >
        <span className="w-5 h-5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[10px] text-[#D4AF37] flex items-center justify-center">
          ✓
        </span>
      </span>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => collectCoin(id)}
      whileHover={{ scale: 1.25, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          '0 0 8px rgba(212,175,55,0.3)',
          '0 0 16px rgba(212,175,55,0.7)',
          '0 0 8px rgba(212,175,55,0.3)',
        ],
      }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-[#997D20] via-[#D4AF37] to-[#F5E6A8] border border-[#F5E6A8] text-[11px] font-bold text-[#070A12] cursor-pointer shadow-md select-none ${className}`}
      title="Found a secret gold coin! Click to collect."
      aria-label="Collect secret gold coin"
    >
      🪙
    </motion.button>
  );
}
