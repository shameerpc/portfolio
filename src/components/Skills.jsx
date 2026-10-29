import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiPenTool, 
  FiTrendingUp, 
  FiCpu
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const weaponMatrices = [
  {
    category: 'MERN Core',
    icon: <FiCode className="text-xl" />,
    color: '#00f0ff',
    borderClass: 'border-[#00f0ff]/30 hover:border-[#00f0ff]',
    skills: [
      { name: 'React.js 19 & Architecture', level: 96 },
      { name: 'Node.js & Express.js Engines', level: 94 },
      { name: 'MongoDB & Aggregation Pipelines', level: 92 },
      { name: 'RESTful API Engineering', level: 98 },
      { name: 'Redux Toolkit & State Systems', level: 90 },
    ],
  },
  {
    category: 'System Tools & Security',
    icon: <FiServer className="text-xl" />,
    color: '#b026ff',
    borderClass: 'border-[#b026ff]/30 hover:border-[#b026ff]',
    skills: [
      { name: 'Redis In-Memory Caching', level: 90 },
      { name: 'Role-Based Access Control (RBAC)', level: 95 },
      { name: 'WebSockets & Real-Time Events', level: 88 },
      { name: 'JWT Auth & Security Handshakes', level: 94 },
      { name: 'Git, CI/CD & Cloud Pipelines', level: 91 },
    ],
  },
  {
    category: 'Creative Design & Key Visuals',
    icon: <FiPenTool className="text-xl" />,
    color: '#ff007f',
    borderClass: 'border-[#ff007f]/30 hover:border-[#ff007f]',
    skills: [
      { name: 'Luxury Poster & Key Visual Design', level: 96 },
      { name: 'Adobe Photoshop Retouching & Compositing', level: 95 },
      { name: 'Commercial Advertising Layouts', level: 93 },
      { name: 'Corporate Recruitment Brochures', level: 90 },
      { name: 'Canva Pro Enterprise Suites', level: 98 },
    ],
  },
  {
    category: 'Growth & Motion Media',
    icon: <FiTrendingUp className="text-xl" />,
    color: '#ffb703',
    borderClass: 'border-[#ffb703]/30 hover:border-[#ffb703]',
    skills: [
      { name: 'Meta / Facebook Ads Manager', level: 92 },
      { name: 'CapCut Pro Commercial Video Editing', level: 94 },
      { name: 'Premiere Pro Motion Cutting', level: 88 },
      { name: 'Technical SEO & Search Authority', level: 90 },
      { name: 'Google Analytics 4 & Conversion Tracking', level: 89 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div className="space-y-1.5" ref={ref}>
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#cbd5e1] font-semibold">{name}</span>
        <span className="font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 w-full bg-[#040711] rounded-full overflow-hidden border border-white/10 p-[1px]">
        <motion.div
          className="h-full rounded-full relative"
          style={{ 
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative py-24 bg-[#040711] overflow-hidden" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d1527] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiCpu className="text-xs" />
            <span>WEAPONIZED TECHNICAL CAPABILITIES // MATRICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            WEAPON <span className="gradient-text-cyan">MATRICES</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            Combat-proven proficiencies with precise telemetry readouts across development, systems, luxury design, and paid growth.
          </p>
        </div>

        {/* 4 Weapon Matrices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weaponMatrices.map((mat, mi) => (
            <motion.div
              key={mat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: mi * 0.1, duration: 0.7 }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`hud-frame p-6 sm:p-8 rounded-lg bg-[#080d1a]/90 transition-all duration-300 ${mat.borderClass}`}
            >
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              {/* Matrix Head */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded border border-white/10"
                    style={{ backgroundColor: `${mat.color}15`, color: mat.color }}
                  >
                    {mat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-orbitron text-white">
                      {mat.category}
                    </h3>
                    <div className="text-[10px] font-mono text-[#64748b]">
                      SYSTEM DISCIPLINE 0{mi + 1}
                    </div>
                  </div>
                </div>

                <span
                  className="px-2.5 py-1 text-[11px] font-mono font-bold rounded border uppercase"
                  style={{
                    color: mat.color,
                    borderColor: `${mat.color}40`,
                    backgroundColor: `${mat.color}10`,
                  }}
                >
                  CALIBRATED
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {mat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={mat.color}
                    delay={mi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
