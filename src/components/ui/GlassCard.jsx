import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const GlassCard = forwardRef(function GlassCard(
  {
    children,
    className = '',
    variant = 'surface', // 'surface' | 'elevated' | 'subtle'
    glow = 'gold', // 'gold' | 'cyan' | 'magenta' | 'none'
    hover = true,
    rounded = '2xl', // 'xl' (16px) | '2xl' (20px) | '3xl' (24px)
    onClick,
    ...props
  },
  ref
) {
  const bgStyles = {
    surface: 'bg-[#0E1320]/75 backdrop-blur-xl',
    elevated: 'bg-[#141A2B]/85 backdrop-blur-xl',
    subtle: 'bg-[#070A12]/60 backdrop-blur-md',
  };

  const roundedStyles = {
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };

  const glowHoverStyles = {
    gold: 'hover:border-[#D4AF37]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_25px_-5px_rgba(212,175,55,0.18)]',
    cyan: 'hover:border-[#22D3EE]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_25px_-5px_rgba(34,211,238,0.18)]',
    magenta: 'hover:border-[#FF3D8B]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_25px_-5px_rgba(255,61,139,0.18)]',
    none: 'hover:border-white/20',
  };

  const baseClasses = `relative border border-[#F4F6FB]/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.36)] transition-all duration-300 ${
    bgStyles[variant] || bgStyles.surface
  } ${roundedStyles[rounded] || roundedStyles['2xl']} ${
    hover ? `${glowHoverStyles[glow] || glowHoverStyles.gold} hover:-translate-y-1` : ''
  } ${className}`;

  return (
    <motion.div
      ref={ref}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default GlassCard;
