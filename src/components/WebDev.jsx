import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiExternalLink, 
  FiArrowRight, 
  FiChevronLeft, 
  FiChevronRight, 
  FiServer, 
  FiActivity
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const projects = [
  {
    id: 'DEPLOY-01',
    title: 'Value FM Platform',
    category: 'Enterprise SaaS // GCC Facility Management',
    region: 'QATAR & DUBAI',
    uptime: '99.9%',
    desc: 'High-availability enterprise facility operations platform built for commercial facility maintenance across Qatar and Dubai. Features automated work-order dispatching, real-time maintenance telemetry, Redis caching for high-speed reporting, and automated SLA tracking.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redis Caching', 'Tailwind CSS', 'REST API'],
    images: ['/images/webdev/valufm1.png', '/images/webdev/valuefm2.png'],
    live: 'https://valuefm.com.qa',
    status: 'ACTIVE PRODUCTION',
  },
  {
    id: 'DEPLOY-02',
    title: 'Al Shareef Holding Portal',
    category: 'Enterprise Group Portal // Multi-Division RBAC',
    region: 'QATAR CORP HQ',
    uptime: '99.8%',
    desc: 'Comprehensive enterprise portal for a prominent Qatar holding conglomerate overseeing Facility Management, Real Estate, International Trading, and F&B hospitality divisions. Built with multi-level role-based access control (RBAC), executive audit logging, and automated reporting.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'RBAC Authorization', 'Webhooks', 'JWT Authentication'],
    images: ['/images/webdev/alshareefholding.png', '/images/webdev/alshareef2.png'],
    live: 'https://alshareef.com.qa',
    status: 'ENTERPRISE LIVE',
  },
  {
    id: 'DEPLOY-03',
    title: 'Moestay Travel Admin',
    category: 'Analytics Dashboard // Booking Engine',
    region: 'INTERNATIONAL',
    uptime: '99.95%',
    desc: 'Ultra-modern travel booking administration console with real-time room inventory management, dynamic pricing engines, revenue tracking charts, and granular customer access management powered by Redux Toolkit and optimized React pipelines.',
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Data Viz'],
    images: ['/images/webdev/moestay.png', '/images/webdev/moestay2.png', '/images/webdev/moestay3.png'],
    live: 'https://moestay-admin.netlify.app/dashboard',
    status: 'CLOUD ACTIVE',
  },
  {
    id: 'DEPLOY-04',
    title: 'MyThoughtsHub',
    category: 'Full-Stack Editorial // Publishing CMS',
    region: 'GLOBAL CLOUD',
    uptime: '99.7%',
    desc: 'High-performance digital publication platform featuring markdown rich-text authoring, robust JWT authentication, threaded discussion engines, and automated SEO schema indexing for superior organic search discoverability.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'REST APIs', 'SEO Engine'],
    images: ['/images/webdev/mythoughts.png', '/images/webdev/mythoughtshub2.png'],
    live: 'https://mythoughtshub.eu.cc/',
    status: 'PRODUCTION DEPLOYED',
  },
];

function ShowcaseCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = useCallback(() => {
    cyberAudio.playHover();
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    cyberAudio.playHover();
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#030611] select-none group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full relative"
        >
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Buttons */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#040711]/80 hover:bg-[#00f0ff]/20 border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded-sm text-xs opacity-0 group-hover:opacity-100 transition-all z-20"
            aria-label="Previous Image"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#040711]/80 hover:bg-[#00f0ff]/20 border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded-sm text-xs opacity-0 group-hover:opacity-100 transition-all z-20"
            aria-label="Next Image"
          >
            <FiChevronRight size={16} />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  cyberAudio.playHover();
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? 'w-5 bg-[#00f0ff]' : 'w-1.5 bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 border border-white/10 text-[10px] font-mono text-[#00f0ff] rounded z-20">
            FRAME {current + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

export default function WebDev() {
  return (
    <section className="relative py-24 bg-[#080d1a] border-t border-b border-[#00f0ff]/15 overflow-hidden" id="webdev">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#040711] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiServer className="text-xs" />
            <span>ENTERPRISE ARCHITECTURE // PRODUCTION DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            MISSION-CRITICAL <span className="gradient-text-cyan">DEPLOYMENTS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            Live enterprise platforms actively serving businesses across Dubai, Qatar, and international markets.
          </p>
        </div>

        {/* Deployments List */}
        <div className="space-y-12">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="hud-frame p-6 sm:p-8 rounded-lg bg-[#040711]/90 border-[#00f0ff]/25 hover:border-[#00f0ff]/50 transition-all duration-300"
            >
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Side: Simulated Cyber Browser Chrome (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="rounded-lg overflow-hidden border border-[#00f0ff]/30 bg-[#030611] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    {/* Simulated Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-[#080d1a] border-b border-[#00f0ff]/20 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff007f]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffb703]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" />
                        <span className="ml-2 px-2.5 py-0.5 bg-[#040711] text-[#94a3b8] rounded border border-white/5 text-[11px] truncate max-w-[200px] sm:max-w-[300px]">
                          https://{new URL(p.live).hostname}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-[#00ff66]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                        <span>SSL SECURED</span>
                      </div>
                    </div>

                    {/* Screenshot Carousel */}
                    <ShowcaseCarousel images={p.images} title={p.title} />

                    {/* Browser Footer Telemetry */}
                    <div className="px-4 py-2 bg-[#080d1a] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                      <span>SYSTEM ID: {p.id}</span>
                      <span className="text-[#00f0ff]">UPTIME SLA: {p.uptime}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side: Specs & Actions (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 rounded text-[11px] font-bold">
                      {p.category}
                    </span>
                    <span className="px-2 py-1 bg-[#ffb703]/10 text-[#ffb703] border border-[#ffb703]/30 rounded text-[10px] font-bold">
                      {p.region}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-white leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-sm text-[#94a3b8] font-rajdhani leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Tech Stack Pills with Neon Accents */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                      // ARCHITECTURE COMPONENT MATRIX
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#080d1a] border border-[#00f0ff]/20 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded-sm text-xs font-mono transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status & Live CTA Button */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cyberAudio.playHover()}
                      onClick={() => cyberAudio.playCyberClick()}
                      className="btn-cyber-primary text-xs"
                    >
                      <span>LAUNCH LIVE PLATFORM</span>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Consultation Dispatcher */}
        <div className="mt-16 hud-frame p-8 rounded-lg bg-[#040711]/90 text-center space-y-4 max-w-2xl mx-auto border-[#00f0ff]/30">
          <div className="text-xs font-mono text-[#00ff66] flex items-center justify-center gap-2">
            <FiActivity className="text-sm" />
            <span>CAPACITY AVAILABLE FOR GCC ENTERPRISE PROJECTS</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-orbitron text-white">
            Need a High-Concurrency Platform Built for Scale?
          </h4>
          <p className="text-sm text-[#94a3b8] font-rajdhani">
            From automated holding portals in Doha to facility management SaaS in Dubai, let's architect your platform with military precision.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => cyberAudio.playCyberClick()}
              className="btn-cyber-primary text-xs"
            >
              <span>DISPATCH ENTERPRISE PROPOSAL</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
