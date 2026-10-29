import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { cyberAudio } from '../utils/cyberAudio';
import { useLanguage } from '../i18n';
import { useGame } from '../context';
import TiltCard from './extras/TiltCard';

const projects = [
  {
    id: 'value-fm',
    title: 'Value FM Operations Platform',
    category: 'Enterprise SaaS',
    filterTag: 'Qatar',
    region: '🇶🇦 Qatar & Dubai',
    live: 'https://valuefm.com.qa',
    problem: 'Facility maintenance operations struggled with dispatch bottlenecks, manual paperwork, and delayed SLA reporting across commercial sites.',
    solution: 'Architected an automated MERN platform with Redis in-memory caching, real-time ticket dispatching, and predictive maintenance tracking.',
    result: '[CONFIRM: 40% faster dispatch times and automated SLA compliance across commercial properties]',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS'],
    images: ['/images/webdev/valufm1.png', '/images/webdev/valuefm2.png'],
  },
  {
    id: 'al-shareef',
    title: 'Al Shareef Holding Group Portal',
    category: 'Corporate Portal',
    filterTag: 'Qatar',
    region: '🇶🇦 Qatar',
    live: 'https://alshareef.com.qa',
    problem: 'Multi-division conglomerate needed a unified executive interface to manage real estate, trading, hospitality, and facility units securely.',
    solution: 'Engineered a high-security holding group portal with granular Role-Based Access Control (RBAC), multi-tenant division routing, and audit logs.',
    result: '[CONFIRM: Unified executive oversight across 4 commercial subsidiaries with zero permission conflicts]',
    stack: ['React.js', 'Node.js', 'MongoDB', 'RBAC Security', 'Webhooks'],
    images: ['/images/webdev/alshareefholding.png', '/images/webdev/alshareef2.png'],
  },
  {
    id: 'moestay',
    title: 'Moestay Travel Admin Dashboard',
    category: 'Web apps',
    filterTag: 'Web apps',
    region: '🌍 International',
    live: 'https://moestay-admin.netlify.app/dashboard',
    problem: 'Travel managers needed a streamlined dashboard to monitor room inventory, track bookings, and evaluate revenue trends without UI lag.',
    solution: 'Built a responsive admin analytics suite powered by Redux Toolkit for seamless client-side state caching and fast data visualization.',
    result: '[CONFIRM: Instant multi-room scheduling and transparent booking revenue tracking]',
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    images: ['/images/webdev/moestay.png', '/images/webdev/moestay2.png', '/images/webdev/moestay3.png'],
  },
  {
    id: 'my-thoughts-hub',
    title: 'MyThoughtsHub Editorial Platform',
    category: 'Web apps',
    filterTag: 'Web apps',
    region: '🌍 International',
    live: 'https://mythoughtshub.eu.cc/',
    problem: 'Content creators needed a lightweight, high-performance editorial publishing platform with clean reading experiences and user discussion.',
    solution: 'Engineered a full-stack publishing web app with JWT authentication, rich-text markdown rendering, threaded comments, and SEO optimization.',
    result: '[CONFIRM: Fast page loads and structured organic search indexing for all published essays]',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    images: ['/images/webdev/mythoughts.png', '/images/webdev/mythoughtshub2.png'],
  },
];

const filterOptions = ['All', 'Qatar', 'Web apps'];

function ProjectCarousel({ images, title, onInteract }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    cyberAudio.playSoftClick?.();
    onInteract?.();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length, onInteract]);

  const prev = useCallback(() => {
    cyberAudio.playSoftClick?.();
    onInteract?.();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length, onInteract]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D18] group">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.src = '/images/webdev/valufm1.png';
          }}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute start-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#070A12]/80 hover:bg-[#D4AF37] text-white hover:text-[#070A12] border border-white/10 opacity-0 group-hover:opacity-100 transition-all z-20 cursor-pointer"
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={16} className="rtl:rotate-180" />
          </button>
          <button
            onClick={next}
            className="absolute end-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#070A12]/80 hover:bg-[#D4AF37] text-white hover:text-[#070A12] border border-white/10 opacity-0 group-hover:opacity-100 transition-all z-20 cursor-pointer"
            aria-label="Next Slide"
          >
            <FiChevronRight size={16} className="rtl:rotate-180" />
          </button>
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 px-2.5 py-1 rounded-full">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? 'w-4 bg-[#D4AF37]' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function WebDev() {
  const { t } = useLanguage();
  const { playerClass, unlockAchievement } = useGame();
  const [activeFilter, setActiveFilter] = useState('All');

  const isDevClass = playerClass === 'developer';

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterTag === activeFilter);

  const handleInteraction = () => {
    unlockAchievement('explorer');
  };

  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="webdev">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow={t('work.badge', 'Selected Work')}
            title={
              <>
                Production Web Platforms &{' '}
                <span className={isDevClass ? 'cyan-gradient-text' : 'gold-gradient-text'}>
                  Enterprise Solutions
                </span>
              </>
            }
            subtitle={t('work.subtitle', 'Real case studies deployed for commercial organizations in Qatar, the UAE, and global markets.')}
          />
        </Reveal>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => {
                cyberAudio.playSoftClick?.();
                setActiveFilter(f);
                handleInteraction();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 border cursor-pointer ${
                activeFilter === f
                  ? isDevClass
                    ? 'bg-[#22D3EE] text-[#070A12] border-[#22D3EE] shadow-sm font-bold'
                    : 'bg-[#D4AF37] text-[#070A12] border-[#D4AF37] shadow-sm'
                  : 'bg-[#0E1320] border-white/10 text-[#9AA4BC] hover:text-[#F4F6FB]'
              }`}
            >
              {f === 'All' ? t('work.filterAll', 'All Deployments') : f === 'Qatar' ? t('work.filterQatar', 'Qatar 🇶🇦') : t('work.filterWebApps', 'Web Apps')}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {filteredProjects.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 0.1}>
              <TiltCard maxTilt={5}>
                <GlassCard 
                  className={`p-6 sm:p-8 rounded-3xl group relative overflow-hidden transition-all duration-300 ${
                    isDevClass 
                      ? 'border-[#22D3EE]/50 shadow-[0_0_35px_rgba(34,211,238,0.2)]' 
                      : 'border-white/10'
                  }`} 
                  glow={isDevClass ? 'cyan' : 'gold'}
                >
                  {/* Hover Stamp: "Mission complete ✓" */}
                  <div className="absolute top-4 end-4 z-20 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-[11px] font-mono font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 shadow-sm">
                    <FiCheckCircle size={12} />
                    <span>{t('work.missionComplete', 'Mission complete ✓')}</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Browser Mockup Visual (6 cols) */}
                    <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-[#0E1320] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      {/* Simulated Browser Chrome Bar */}
                      <div className="px-4 py-2.5 bg-[#141A2B] border-b border-white/10 flex items-center justify-between text-xs font-mono text-[#9AA4BC]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF3D8B]/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                          <span className="ms-2 text-[11px] text-[#9AA4BC] truncate max-w-[200px]">
                            https://{new URL(p.live).hostname}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#D4AF37] font-semibold">{p.region}</span>
                      </div>

                      <ProjectCarousel images={p.images} title={p.title} onInteract={handleInteraction} />
                    </div>

                    {/* Case Study Details (6 cols) */}
                    <div className="lg:col-span-6 space-y-4 text-start">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDevClass ? 'text-[#22D3EE]' : 'text-[#D4AF37]'}`}>
                          {p.category}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-xs font-mono text-[#9AA4BC]">{p.region}</span>
                      </div>

                      <h3 className="text-2xl font-bold font-heading text-white">
                        {p.title}
                      </h3>

                      {/* Problem -> Solution -> Result */}
                      <div className="space-y-2.5 text-xs sm:text-sm font-sans pt-1">
                        <div className="p-3 rounded-xl bg-[#070A12]/80 border border-white/5 space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase text-[#FF3D8B] tracking-wider block">
                            {t('work.problem', 'Challenge')}
                          </span>
                          <p className="text-[#9AA4BC] leading-relaxed">{p.problem}</p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#070A12]/80 border border-white/5 space-y-1">
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${isDevClass ? 'text-[#22D3EE]' : 'text-[#D4AF37]'}`}>
                            {t('work.solution', 'Architecture')}
                          </span>
                          <p className="text-[#9AA4BC] leading-relaxed">{p.solution}</p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#10B981]/5 border border-[#10B981]/20 space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase text-[#10B981] tracking-wider block">
                            {t('work.outcome', 'Impact')}
                          </span>
                          <p className="text-[#cbd5e1] leading-relaxed">{p.result}</p>
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {p.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#141A2B] border border-white/10 text-[11px] font-mono text-[#F4F6FB]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Direct Live Site Button */}
                      <div className="pt-2">
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            cyberAudio.playSoftClick?.();
                            handleInteraction();
                          }}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-xs transition-all ${
                            isDevClass
                              ? 'bg-[#22D3EE] text-[#070A12] hover:bg-[#67E8F9] shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                              : 'bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-[#070A12] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                          }`}
                        >
                          <span>{t('work.visitSite', 'Visit live site')}</span>
                          <FiExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
