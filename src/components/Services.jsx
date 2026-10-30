import { motion } from 'framer-motion';
import { FiCode, FiPenTool, FiTrendingUp, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { cyberAudio } from '../utils/cyberAudio';

const services = [
  {
    id: 'web-dev',
    icon: <FiCode className="text-2xl text-[#22D3EE]" />,
    accent: '#22D3EE',
    title: 'Web & SaaS Development',
    outcome: 'High-concurrency full-stack platforms engineered for uptime, speed, and real enterprise business workflows.',
    bullets: [
      'Production MERN Architecture (React 19, Node.js, Express, MongoDB)',
      'Sub-millisecond Redis Caching & State Management',
      'Role-Based Access Control (RBAC) & Secure JWT Authentication',
      'Scalable RESTful APIs, WebSockets & Automated Webhooks',
    ],
    whatsappMsg: 'Hello Shamseer, I am interested in a quote for Web & SaaS Development.',
  },
  {
    id: 'creative',
    icon: <FiPenTool className="text-2xl text-[#D4AF37]" />,
    accent: '#D4AF37',
    title: 'Creative Design',
    outcome: 'Luxury visual assets crafted to establish immediate brand authority across Dubai, Qatar, and international markets.',
    bullets: [
      'High-Converting Commercial Poster Design',
      'Corporate Fleet & Recruitment Brochure Collateral',
      'Luxury Salon & Hospitality Brand Identity Systems',
      'Social Media Creative Suites & Display Assets',
    ],
    whatsappMsg: 'Hello Shamseer, I am interested in a quote for Creative Design (posters, brochures, brand).',
  },
  {
    id: 'marketing-video',
    icon: <FiTrendingUp className="text-2xl text-[#FF3D8B]" />,
    accent: '#FF3D8B',
    title: 'Marketing & Video',
    outcome: 'Data-driven growth campaigns paired with kinetic short-form video that drive real customer acquisition.',
    bullets: [
      'Meta / Facebook Ads Management & Funnel Architecture',
      'CapCut & VN Editor Commercial Video Reels',
      'Technical SEO & Search Console Optimization',
      'Google Analytics 4 (GA4) Tracking & ROAS Attribution',
    ],
    whatsappMsg: 'Hello Shamseer, I am interested in a quote for Digital Marketing & Video editing.',
  },
];

const workflowSteps = [
  { step: '01', title: 'Discover', desc: 'Deep dive into your business goals, technical requirements, and target GCC audience.' },
  { step: '02', title: 'Design', desc: 'Craft clean UI architectures, wireframes, and high-impact visual prototypes.' },
  { step: '03', title: 'Build', desc: 'Write scalable MERN code, optimize database schemas, and create print/ad assets.' },
  { step: '04', title: 'Launch & Support', desc: 'Deploy with zero downtime, conduct testing, and provide ongoing iteration support.' },
];

export default function Services() {
  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="services">
      {/* Background Soft Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <SectionTitle
            eyebrow="Capabilities & Solutions"
            title={
              <>
                Specialized Services That{' '}
                <span className="gold-gradient-text">Drive Measurable Growth</span>
              </>
            }
            subtitle="Bridging technical engineering with commercial design to deliver end-to-end digital solutions."
          />
        </Reveal>

        {/* 3 Clean Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((s, idx) => (
            <Reveal key={s.id} delay={idx * 0.12}>
              <GlassCard
                glow={s.id === 'creative' ? 'gold' : s.id === 'web-dev' ? 'cyan' : 'magenta'}
                className="p-7 sm:p-8 h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="p-3.5 rounded-2xl bg-[#070A12] border border-white/10 shadow-sm"
                    >
                      {s.icon}
                    </motion.div>
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{
                        color: s.accent,
                        backgroundColor: `${s.accent}12`,
                        border: `1px solid ${s.accent}30`,
                      }}
                    >
                      SERVICE 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Outcome Sentence */}
                  <h3 className="text-2xl font-bold font-heading text-[#F4F6FB] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#9AA4BC] font-sans leading-relaxed mb-6">
                    {s.outcome}
                  </p>

                  {/* 4 Bullets */}
                  <div className="space-y-2.5 mb-8">
                    {s.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2.5 text-xs font-sans text-[#F4F6FB]/90 leading-snug">
                        <FiCheck className="text-xs shrink-0 mt-0.5" style={{ color: s.accent }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp "Get a Quote" Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/917012819002?text=${encodeURIComponent(s.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => cyberAudio.playSoftClick()}
                    className="w-full py-2.5 px-4 rounded-full bg-[#141A2B] hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#F5E6A8] text-xs font-heading font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <FaWhatsapp className="text-[#25D366] text-sm" />
                    <span>Get a quote on WhatsApp</span>
                    <FiArrowRight className="text-xs opacity-60" />
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* 4-Step "How I Work" Process Flow */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl p-8 sm:p-10 bg-[#0E1320]/60 border border-white/5 backdrop-blur-md">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
              <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                THE METHODOLOGY
              </span>
              <h4 className="text-2xl font-bold font-heading text-[#F4F6FB]">
                How I Work With Clients
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {workflowSteps.map((ws, i) => (
                <div key={ws.step} className="relative space-y-2.5 group">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/25">
                      {ws.step}
                    </span>
                    <h5 className="text-base font-bold font-heading text-white">
                      {ws.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#9AA4BC] font-sans leading-relaxed">
                    {ws.desc}
                  </p>
                  {i < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-3.5 -right-3 text-[#D4AF37]/30 text-xs font-mono">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
