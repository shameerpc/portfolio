import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiPenTool, FiTrendingUp, FiCompass } from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { cyberAudio } from '../utils/cyberAudio';
import { useLanguage } from '../i18n';
import HiddenCoin from './extras/HiddenCoin';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: <FiCode className="text-[#22D3EE]" />,
    accent: '#22D3EE',
    skills: [
      { name: 'React.js 19', level: 'Expert', note: 'Core framework for Value FM & Al Shareef' },
      { name: 'Tailwind CSS', level: 'Expert', note: 'Fast, responsive design systems' },
      { name: 'Redux Toolkit', level: 'Advanced', note: 'State management in Moestay Admin' },
      { name: 'Framer Motion', level: 'Advanced', note: 'Fluid 60fps animations' },
      { name: 'JavaScript (ES6+)', level: 'Expert', note: 'Modern asynchronous programming' },
      { name: 'Responsive & Accessible UI', level: 'Expert', note: 'Cross-browser WCAG standards' },
    ],
  },
  {
    title: 'Backend & Systems',
    icon: <FiServer className="text-[#D4AF37]" />,
    accent: '#D4AF37',
    skills: [
      { name: 'Node.js & Express', level: 'Expert', note: 'High-throughput RESTful servers' },
      { name: 'MongoDB & Mongoose', level: 'Expert', note: 'Complex aggregation pipelines' },
      { name: 'Redis In-Memory Caching', level: 'Advanced', note: 'Sub-millisecond data retrieval' },
      { name: 'RESTful API Architecture', level: 'Expert', note: 'Clean contracts and documentation' },
      { name: 'RBAC & JWT Security', level: 'Expert', note: 'Multi-division access security' },
      { name: 'WebSockets & Webhooks', level: 'Proficient', note: 'Real-time dispatch synchronization' },
    ],
  },
  {
    title: 'Creative & Brand Direction',
    icon: <FiPenTool className="text-[#F5E6A8]" />,
    accent: '#F5E6A8',
    skills: [
      { name: 'Adobe Photoshop', level: 'Expert', note: 'Commercial photo retouching & composites' },
      { name: 'Commercial Poster Design', level: 'Expert', note: 'Dubai travel & salon campaigns' },
      { name: 'Recruitment Brochures', level: 'Expert', note: 'Multi-page logistics fleet print' },
      { name: 'Brand Identity Systems', level: 'Advanced', note: 'Color palettes & typography grids' },
      { name: 'Canva Pro Enterprise', level: 'Expert', note: 'Rapid social creative production' },
      { name: 'Typography & Layout', level: 'Expert', note: 'Bilingual English & Arabic composition' },
    ],
  },
  {
    title: 'Growth & Motion Media',
    icon: <FiTrendingUp className="text-[#FF3D8B]" />,
    accent: '#FF3D8B',
    skills: [
      { name: 'Meta Ads Manager', level: 'Advanced', note: 'Targeted campaign budget optimization' },
      { name: 'CapCut Pro Video Editing', level: 'Expert', note: 'Kinetic typography & social reels' },
      { name: 'Premiere Pro Motion Cutting', level: 'Advanced', note: 'Commercial pacing and transitions' },
      { name: 'Technical SEO & Indexing', level: 'Advanced', note: 'Schema markup & performance' },
      { name: 'Google Analytics 4 (GA4)', level: 'Proficient', note: 'Conversion tracking & event auditing' },
    ],
  },
];

const currentlyExploring = [
  'Docker & Containerized Microservices',
  'Next.js 15 App Router & Server Actions',
  'AI Agentic Coding Workflows & LLM Tooling',
  'PostgreSQL & Prisma ORM',
];

const levelColors = {
  Expert: 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30',
  Advanced: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/30',
  Proficient: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30',
};

export default function Skills() {
  const { t } = useLanguage();
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="skills">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow={t('skills.badge', 'Technical Matrix')}
            title={
              <>
                Skills &amp; Capabilities{' '}
                <span className="gold-gradient-text">Matrix</span>
              </>
            }
            subtitle={t('skills.subtitle', 'Verified competencies across modern web engineering and visual media.')}
          />
        </Reveal>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.1}>
              <GlassCard className="p-6 sm:p-7 space-y-5" glow="gold">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-start">
                  <div
                    className="p-2.5 rounded-xl border"
                    style={{
                      borderColor: `${cat.accent}40`,
                      backgroundColor: `${cat.accent}15`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {cat.title}
                    </h3>
                    <div className="text-[11px] font-mono text-[#9AA4BC]">
                      {cat.skills.length} core competencies
                    </div>
                  </div>
                </div>

                {/* Skill Chips with Level Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      onMouseEnter={() => {
                        cyberAudio.playHover?.();
                        setActiveTooltip(s.name);
                      }}
                      onMouseLeave={() => setActiveTooltip(null)}
                      className="relative p-3 rounded-xl bg-[#070A12]/80 border border-white/5 hover:border-[#D4AF37]/40 transition-colors group cursor-default text-start"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-heading font-semibold text-white">
                          {s.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase shrink-0 ${
                            levelColors[s.level]
                          }`}
                        >
                          {s.level}
                        </span>
                      </div>

                      {/* Tooltip / Note */}
                      <p className="text-[11px] font-sans text-[#9AA4BC] leading-tight">
                        {s.note}
                      </p>

                      {/* Floating Tooltip Indicator */}
                      {activeTooltip === s.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-7 start-2 z-20 px-2 py-0.5 rounded bg-[#141A2B] border border-[#D4AF37]/50 text-[10px] font-mono text-[#F5E6A8] shadow-lg pointer-events-none whitespace-nowrap"
                        >
                          built with this ✓
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* Currently Exploring / Learning Row */}
        <Reveal delay={0.2}>
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1320]/60 border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-start">
              <div className="p-2.5 rounded-xl bg-[#070A12] border border-white/10 text-[#D4AF37]">
                <FiCompass size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold font-heading text-white">
                  {t('skills.learning', 'Currently Exploring & Deepening')}
                </h4>
                <p className="text-xs text-[#9AA4BC]">
                  Active technical research and modern architecture evolution.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {currentlyExploring.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#141A2B] border border-white/10 text-xs font-mono text-[#F5E6A8]"
                >
                  {tech}
                </span>
              ))}

              {/* Hidden Coin 2 */}
              <HiddenCoin id="coin-skills" className="ms-1" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
