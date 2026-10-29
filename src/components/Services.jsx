import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiPenTool, 
  FiTrendingUp, 
  FiZap, 
  FiCheck
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const serviceModules = [
  {
    id: 'MOD-01',
    icon: <FiCode className="text-2xl text-[#00f0ff]" />,
    accent: '#00f0ff',
    borderClass: 'border-[#00f0ff]/30 hover:border-[#00f0ff]',
    shadowClass: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]',
    tag: 'ARCHITECTURE // DEV',
    title: 'Web Development & SaaS Engines',
    desc: 'High-performance MERN architecture built for heavy concurrency and enterprise reliability. Custom REST APIs, sub-millisecond Redis caching, WebSocket events, and bulletproof RBAC security.',
    specs: [
      { k: 'TECH STACK', v: 'React 19, Node.js, Express, MongoDB' },
      { k: 'CACHING & SYNC', v: 'Redis In-Memory, WebSockets' },
      { k: 'SECURITY', v: 'JWT, OAuth2, RBAC, Rate Limiting' },
      { k: 'LATENCY SLA', v: '< 120ms P99 API Response Time' },
    ],
    features: [
      'Multi-tenant SaaS Architecture',
      'Automated Facility & Logistics Systems',
      'Scalable Database Modeling & Aggregations',
      'Custom Webhook Integrations',
    ],
  },
  {
    id: 'MOD-02',
    icon: <FiPenTool className="text-2xl text-[#ff007f]" />,
    accent: '#ff007f',
    borderClass: 'border-[#ff007f]/30 hover:border-[#ff007f]',
    shadowClass: 'hover:shadow-[0_0_30px_rgba(255,0,127,0.25)]',
    tag: 'AESTHETICS // BRAND',
    title: 'Creative & Commercial Poster Design',
    desc: 'Ultra-luxury visual communication crafted for the prestige markets of Dubai, Qatar, and international capitals. Commercial advertising posters, social media ad creatives, corporate brochures, and brand identity systems.',
    specs: [
      { k: 'PRIMARY TOOLS', v: 'Photoshop, Illustrator, Canva Pro' },
      { k: 'REGIONAL FOCUS', v: 'Dubai Luxury, GCC Enterprise, Hospitality' },
      { k: 'DELIVERABLES', v: 'Ultra HD Print & Digital Vectors' },
      { k: 'CONVERSION FOCUS', v: 'Click-Through & Brand Recall Max' },
    ],
    features: [
      'Dubai Luxury Travel & Salon Campaigns',
      'Recruitment & Fleet Logistics Brochures',
      'High-Impact Social Ad Creatives',
      'Complete Corporate Brand Guideline Systems',
    ],
  },
  {
    id: 'MOD-03',
    icon: <FiTrendingUp className="text-2xl text-[#ffb703]" />,
    accent: '#ffb703',
    borderClass: 'border-[#ffb703]/30 hover:border-[#ffb703]',
    shadowClass: 'hover:shadow-[0_0_30px_rgba(255,183,3,0.25)]',
    tag: 'ACQUISITION // GROWTH',
    title: 'Digital Marketing & Motion Video',
    desc: 'End-to-end user acquisition pipelines combining data-driven paid advertising on Meta/Facebook with punchy, high-retention video reels edited in Premiere and CapCut for maximum ROAS.',
    specs: [
      { k: 'AD CHANNELS', v: 'Meta Ads Manager, Instagram, TikTok' },
      { k: 'VIDEO SUITE', v: 'Premiere Pro, CapCut Pro, After Effects' },
      { k: 'ANALYTICS', v: 'Google Analytics 4, Meta Pixel, GTM' },
      { k: 'OPTIMIZATION', v: 'A/B Creative Testing & Funnel Tuning' },
    ],
    features: [
      'Meta Ad Campaign Strategy & Execution',
      'Commercial Reels & Short-Form Video',
      'Technical SEO & Search Console Authority',
      'Real-Time Attribution & ROAS Dashboards',
    ],
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-[#040711] overflow-hidden" id="services">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00f0ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d1527] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiZap className="text-xs" />
            <span>TACTICAL ARSENAL // CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            MISSION-CRITICAL <span className="gradient-text-cyan">SERVICES</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            Engineered to deploy enterprise platforms with extreme uptime and launch advertising campaigns with unmatched prestige.
          </p>
        </div>

        {/* 3 Tactical Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceModules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`hud-frame p-6 sm:p-7 rounded-lg bg-[#080d1a]/90 flex flex-col justify-between transition-all duration-300 ${mod.borderClass} ${mod.shadowClass}`}
            >
              {/* Corner brackets */}
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              <div>
                {/* Module Head Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#040711] rounded border border-white/10">
                      {mod.icon}
                    </div>
                    <span className="font-bold tracking-wider" style={{ color: mod.accent }}>
                      {mod.tag}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#64748b] bg-[#040711] px-2 py-0.5 rounded border border-white/5">
                    {mod.id}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold font-orbitron text-white mb-3 leading-snug">
                  {mod.title}
                </h3>
                <p className="text-sm text-[#94a3b8] font-rajdhani leading-relaxed mb-6">
                  {mod.desc}
                </p>

                {/* System Specifications Box */}
                <div className="p-4 bg-[#040711] border border-white/10 rounded-sm mb-6 space-y-2">
                  <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>// SYSTEM SPECIFICATION</span>
                    <span className="text-[#00ff66]">OPTIMIZED</span>
                  </div>
                  {mod.specs.map((sp) => (
                    <div key={sp.k} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#64748b] text-[11px]">{sp.k}:</span>
                      <span className="text-white font-medium text-[11px] text-right">{sp.v}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Bullet Matrix */}
                <div className="space-y-2 mb-6">
                  {mod.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-rajdhani font-semibold text-[#cbd5e1]">
                      <FiCheck className="text-xs shrink-0" style={{ color: mod.accent }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => cyberAudio.playCyberClick()}
                  className="w-full py-2.5 px-4 bg-[#0d1527] border border-white/15 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 text-white hover:text-[#00f0ff] text-xs font-mono font-bold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>ENGAGE SPECIFICATION</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
