import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  // Smooth springs for trailing outer ring
  const ringX = useSpring(0, { stiffness: 450, damping: 30 });
  const ringY = useSpring(0, { stiffness: 450, damping: 30 });

  // Direct dot coordinates
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices that don't prefer reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e) => {
      setVisible(true);
      setDotPos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = e.target;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer'))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ringX, ringY]);

  if (!enabled || !visible) return null;

  return (
    <>
      {/* Center sharp gold dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full bg-[#D4AF37] transition-all duration-150 ${
            hovered ? 'w-2 h-2 opacity-90' : 'w-1.5 h-1.5 opacity-100 shadow-[0_0_8px_#D4AF37]'
          }`}
        />
      </div>

      {/* Trailing gold aura ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
        }}
      >
        <motion.div
          animate={{
            width: hovered ? 46 : 26,
            height: hovered ? 46 : 26,
            borderColor: hovered ? 'rgba(212, 175, 55, 0.7)' : 'rgba(212, 175, 55, 0.35)',
            backgroundColor: hovered ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="rounded-full border -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
}
