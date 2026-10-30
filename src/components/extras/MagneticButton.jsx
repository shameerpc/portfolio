import { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MagneticButton({ children, className = '', strength = 0.25 }) {
  const ref = useRef(null);
  const [canMagnetic, setCanMagnetic] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setCanMagnetic(fine && !reduced);
  }, []);

  const x = useSpring(0, { stiffness: 350, damping: 20 });
  const y = useSpring(0, { stiffness: 350, damping: 20 });

  const onMouseMove = (e) => {
    if (!canMagnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const onMouseLeave = () => {
    if (!canMagnetic) return;
    x.set(0);
    y.set(0);
  };

  if (!canMagnetic) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
