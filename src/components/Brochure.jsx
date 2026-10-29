import { motion } from 'framer-motion';
import { FiFileText, FiDownload } from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const brochures = [
  {
    id: 1,
    title: 'Commercial Truck Driver Recruitment Brochure',
    desc: 'Precision print and digital recruitment collateral created for heavy logistics and transport fleet operations in the GCC. Engineered with high-contrast typography, route diagrams, and structured compensation tables to drive qualified applicant volume.',
    specs: 'A4 Multi-Page Layout // 300 DPI Vector PDF // Print & Digital Ready',
    tags: ['Fleet Recruitment', 'Logistics', 'Print Typography', 'GCC Transport'],
    file: '#contact',
  },
];

export default function Brochure() {
  return (
    <section className="relative py-20 bg-[#080d1a] border-t border-b border-[#00f0ff]/15 overflow-hidden" id="brochure">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#040711] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiFileText className="text-xs" />
            <span>EDITORIAL & PRINT SYSTEMS // COLLATERAL DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-orbitron tracking-tight text-white">
            CORPORATE <span className="gradient-text-gold">BROCHURES</span> & PRINT
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] font-rajdhani">
            Clean typographic hierarchy, structured data visualization, and commercial brand storytelling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {brochures.map((b) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hud-frame hud-frame-gold p-6 sm:p-8 rounded-lg bg-[#040711]/90 border-[#ffb703]/30 hover:border-[#ffb703] transition-all"
            >
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[#ffb703]/10 border border-[#ffb703]/30 rounded-lg text-[#ffb703] text-3xl shrink-0">
                    <FiFileText />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#ffb703] tracking-widest uppercase bg-[#ffb703]/10 px-2 py-0.5 rounded border border-[#ffb703]/20">
                      PRINT & DIGITAL SPECIFICATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-orbitron text-white">
                      {b.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] font-rajdhani leading-relaxed max-w-xl">
                      {b.desc}
                    </p>
                    <div className="text-xs font-mono text-[#00f0ff]">
                      {b.specs}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {b.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-[#080d1a] border border-white/10 text-[10px] font-mono text-[#94a3b8] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={b.file}
                  onClick={() => cyberAudio.playCyberClick()}
                  className="btn-cyber-primary shrink-0 text-xs py-3 px-5"
                >
                  <FiDownload className="text-sm" />
                  <span>REQUEST BROCHURE FILE</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
