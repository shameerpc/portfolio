import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Value FM Platform',
    category: 'SaaS Platform',
    desc: 'Enterprise facility management platform serving clients in Qatar & Dubai. Automated work-order dispatching, predictive maintenance tracking, and asset management analytics. Built with Redis caching and Tailwind CSS.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS'],
    images: ['/images/webdev/valufm1.png', '/images/webdev/valuefm2.png'],
    live: 'https://valuefm.com.qa',
  },
  {
    id: 2,
    title: 'Al Shareef Holding Portal',
    category: 'Enterprise Portal',
    desc: 'Multi-division enterprise portal for a Qatar-based holding group — spanning Facility Management, Real Estate, Trading, and F&B. Role-based access control with custom RBAC authorization across divisions.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'RBAC', 'Webhooks'],
    images: ['/images/webdev/alshareefholding.png', '/images/webdev/alshareef2.png'],
    live: 'https://alshareef.com.qa',
  },
  {
    id: 3,
    title: 'MyThoughtsHub',
    category: 'Blog Platform',
    desc: 'A full-stack blog platform with user authentication, rich content creation, commenting system, and a clean editorial interface. Built for performance and readability.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    images: ['/images/webdev/mythoughts.png', '/images/webdev/mythoughtshub2.png'],
    live: 'https://mythoughtshub.eu.cc/',
  },
  {
    id: 4,
    title: 'Moestay Admin',
    category: 'Dashboard',
    desc: 'A modern admin dashboard for travel platform management — featuring booking analytics, user oversight, and real-time data visualization. Built with Redux Toolkit for seamless state management.',
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    images: ['/images/webdev/moestay.png', '/images/webdev/moestay2.png', '/images/webdev/moestay3.png'],
    live: 'https://moestay-admin.netlify.app/dashboard',
  },
];

function ShowcaseCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = images.length;

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [total, next]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="showcase-carousel">
      <div className="showcase-carousel-viewport">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            className="showcase-carousel-slide"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src={images[current]} alt={`${title} screenshot ${current + 1}`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {total > 1 && (
        <>
          <button className="showcase-carousel-btn prev" onClick={prev} aria-label="Previous image">
            <FiChevronLeft />
          </button>
          <button className="showcase-carousel-btn next" onClick={next} aria-label="Next image">
            <FiChevronRight />
          </button>
          <div className="showcase-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`showcase-carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <div className="showcase-carousel-counter">
            {current + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

export default function WebDev() {
  return (
    <section className="section" id="webdev">
      <div className="container">
        <div className="services-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Web Development</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production-grade applications built with modern technologies. Each project is designed for real-world performance and exceptional user experience.
          </p>
        </div>

        <div className="webdev-showcase">
          {projects.map((p, i) => (
            <motion.div
              className="showcase-card"
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="showcase-card-visual">
                <div className="showcase-browser">
                  <div className="showcase-browser-bar">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="showcase-browser-url">{new URL(p.live).hostname}</span>
                  </div>
                  <ShowcaseCarousel images={p.images} title={p.title} />
                </div>
                <div className="showcase-card-glow" />
              </div>

              <div className="showcase-card-content">
                <div className="showcase-card-meta">
                  <span className="showcase-card-category">{p.category}</span>
                </div>
                <h3 className="showcase-card-title">{p.title}</h3>
                <p className="showcase-card-desc">{p.desc}</p>
                <div className="showcase-card-stack">
                  {p.stack.map((s) => (
                    <span className="showcase-stack-tag" key={s}>{s}</span>
                  ))}
                </div>
                <a
                  href={p.live}
                  className="showcase-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Live Project</span>
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="webdev-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p>Interested in working together?</p>
          <a href="#contact" className="btn-primary">
            Start a Project <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
