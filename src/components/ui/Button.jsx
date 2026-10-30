import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-bold shadow-[0_4px_20px_rgba(212,175,55,0.28)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.45)] border border-[#F5E6A8]/40',
  glass: 'bg-[#0E1320]/80 backdrop-blur-md text-[#F4F6FB] hover:text-[#F5E6A8] font-heading font-semibold border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#D4AF37]/10',
  whatsapp: 'bg-gradient-to-r from-[#2ee672] via-[#25D366] to-[#1eb757] text-[#070A12] font-heading font-bold shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] border border-[#2ee672]/40',
  cyan: 'bg-[#22D3EE]/10 text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#070A12] font-heading font-semibold border border-[#22D3EE]/30 hover:border-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.2)]',
  ghost: 'bg-transparent text-[#9AA4BC] hover:text-[#F4F6FB] hover:bg-white/5 font-heading font-medium',
};

const sizes = {
  sm: 'px-3.5 py-1.5 text-xs rounded-full gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-full gap-2',
  lg: 'px-7 py-3.5 text-base rounded-full gap-2.5',
};

export const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    as = 'button',
    href,
    icon,
    iconRight,
    children,
    className = '',
    disabled = false,
    onClick,
    ...props
  },
  ref
) {
  const baseClasses = `relative inline-flex items-center justify-center font-heading tracking-wide transition-all duration-200 select-none overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] disabled:opacity-50 disabled:pointer-events-none ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  // Interior shine sweep effect on hover
  const shineSweep = (
    <span
      className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
      aria-hidden="true"
    />
  );

  const content = (
    <>
      {shineSweep}
      {icon && <span className="shrink-0 transition-transform group-hover:scale-105">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
    </>
  );

  if (as === 'a' || href) {
    return (
      <a
        ref={ref}
        href={href}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      whileHover={{ y: -1.5 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.15 }}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
});

export default Button;
