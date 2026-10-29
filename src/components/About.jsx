import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiMapPin, 
  FiCpu, 
  FiShield,
  FiExternalLink
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const capabilities = [
  { title: 'Enterprise MERN Stack Architecture', category: 'DEV' },
  { title: 'Redis Caching & Real-Time WebSockets', category: 'PERF' },
  { title: 'Multi-Division RBAC Access Systems', category: 'SECURITY' },
  { title: 'Dubai Luxury Brand & Poster Design', category: 'CREATIVE' },
  { title: 'High-Converting Meta Ad Creative Suites', category: 'GROWTH' },
  { title: 'Commercial Video Reels & Motion Direction', category: 'MEDIA' },
];

const telemetryCards = [
  { label: 'PRIMARY DOMAINS', val: 'DUBAI // QATAR // GLOBAL REMOTE', color: '#00f0ff' },
  { label: 'EXPERIENCE LEVEL', val: 'FULL-STACK + CREATIVE LEAD', color: '#b026ff' },
  { label: 'DEPLOYMENT RECORD', val: 'PRODUCTION SAAS & GCC PORTALS', color: '#00ff66' },
  { label: 'COMMERCIAL REACH', val: 'ENTERPRISE & LUXURY BRANDS', color: '#ffb703' },
];

export default function About() {
  return (
    <section className="relative py-24 bg-[#080d1a] border-t border-b border-[#00f0ff]/15 overflow-hidden" id="about">
      {/* Background cyber pattern */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#040711] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiCpu className="text-xs" />
            <span>EXECUTIVE DOSSIER // CLASSIFIED INTEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            ARCHITECTING DIGITAL <span className="gradient-text-cyan">SUPREMACY</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            Uniting hard-nosed enterprise software engineering with aesthetic luxury brand advertising for global visionaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Holographic Executive Identity Card (5 cols) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="hud-frame p-6 h-full flex flex-col justify-between rounded-lg bg-[#040711]/90 border-[#00f0ff]/30">
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              <div>
                {/* ID Card Top Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <FiShield className="text-sm" />
                    <span className="font-bold tracking-wider">GCC ENTERPRISE CLEARANCE</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30 rounded text-[10px]">
                    VERIFIED
                  </span>
                </div>

                {/* Identity Snapshot */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden border border-[#00f0ff]/50 bg-[#080d1a] shrink-0">
                    <img
                      src="/images/about/avatar_cyber.jpg"
                      alt="Shamseer PC"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-orbitron text-white">SHAMSEER PC</h3>
                    <div className="text-sm text-[#00f0ff] font-mono">FULL-STACK MECHA ARCHITECT</div>
                    <div className="text-xs text-[#64748b] flex items-center gap-1 mt-1 font-mono">
                      <FiMapPin className="text-[#ffb703]" />
                      <span>DUBAI / QATAR / GLOBAL REMOTE</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry Matrix Rows */}
                <div className="space-y-3 font-mono text-xs">
                  {telemetryCards.map((c) => (
                    <div key={c.label} className="p-2.5 rounded bg-[#080d1a] border border-white/5 flex flex-col gap-0.5">
                      <span className="text-[10px] text-[#64748b] tracking-wider">{c.label}</span>
                      <span className="font-bold text-white tracking-wide" style={{ color: c.color }}>
                        {c.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Target Signature */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span>ENCRYPTION: SHAMSEER-2026-X</span>
                <span className="text-[#00f0ff]">AUTHENTICATED</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strategic Narrative & Weaponized Capabilities (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="hud-frame p-6 sm:p-8 rounded-lg bg-[#040711]/90 space-y-5">
              <div className="text-xs font-mono text-[#00f0ff] tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-ping" />
                // OPERATIONAL OVERVIEW
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white leading-snug">
                Where Military-Grade Code Meets <span className="text-[#ffb703]">High-Converting Luxury Brand Power</span>.
              </h3>

              <div className="space-y-4 text-base text-[#94a3b8] font-rajdhani leading-relaxed">
                <p>
                  As an engineering and creative powerhouse, I do not just build web apps or make pretty posters — I construct entire digital ecosystems that command market authority and convert visitors into long-term enterprise contracts.
                </p>
                <p>
                  My engineering background centers on the <strong className="text-white font-semibold">MERN ecosystem</strong>, high-performance caching via Redis, role-based access authorization (RBAC) for complex multi-division holding corporations, and mission-critical cloud deployments across GCC regions including Qatar and Dubai.
                </p>
                <p>
                  Simultaneously, I spearhead commercial poster direction, luxury branding visuals, high-converting social ad campaigns, and video storytelling. This hybrid duality eliminates the gap between design and engineering, allowing companies to execute complete go-to-market strategies with zero friction.
                </p>
              </div>

              {/* Glowing Tactical Highlights Matrix */}
              <div className="pt-3">
                <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-3">
                  // DEPLOYED COMBAT CAPABILITIES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap, i) => (
                    <motion.div
                      key={cap.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="p-3 bg-[#080d1a] border border-[#00f0ff]/20 rounded-sm flex items-start gap-2.5 hover:border-[#00f0ff] transition-all group"
                      onMouseEnter={() => cyberAudio.playHover()}
                    >
                      <FiCheckCircle className="text-[#00f0ff] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                          {cap.title}
                        </div>
                        <div className="text-[10px] font-mono text-[#64748b] tracking-wider mt-0.5">
                          SYS.CLASS // {cap.category}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Link to Contact */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playCyberClick()}
                  className="btn-cyber-primary text-xs"
                >
                  <span>REQUEST CONSULTATION // GCC & GLOBAL</span>
                  <FiExternalLink />
                </a>
                <a
                  href="#services"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playCyberClick()}
                  className="text-xs font-mono text-[#00f0ff] hover:underline tracking-wider"
                >
                  VIEW TECHNICAL SERVICES →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
