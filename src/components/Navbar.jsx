import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Creative Work', href: '#creative' },
  { label: 'Web Dev', href: '#webdev' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <span className="dot" />
            SPC
          </a>
          <div className="navbar-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="#contact" className="navbar-cta">Let's Talk</a>
          </div>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar-cta"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
