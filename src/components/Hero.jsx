import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-grid-pattern" />
      </div>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="pulse" />
            Available for freelance & remote projects worldwide
          </motion.div>

          <h1 className="hero-title">
            <motion.span
              className="line"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Shamseer PC
            </motion.span>
            <motion.span
              className="line line-accent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Full-Stack Developer & Creative
            </motion.span>
          </h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            I design and build high-performance web applications with React, Node.js, and MongoDB — and create visual identities that make brands stand out. Always remote-ready.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <a href="#webdev" className="btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Collaborate <FiMessageCircle />
            </a>
          </motion.div>

          <motion.div
            className="hero-services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <span className="hero-service-tag">React.js & Node.js</span>
            <span className="hero-service-dot" />
            <span className="hero-service-tag">UI/UX & Creative Design</span>
            <span className="hero-service-dot" />
            <span className="hero-service-tag">Digital Marketing</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
