import { FiDownload, FiExternalLink, FiFileText, FiAward } from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { trackEvent } from '../utils/analytics';
import { cyberAudio } from '../utils/cyberAudio';

export default function CVSection() {
  const cvPath = '/cv/Shamseer-PC-CV.pdf';

  const handleDownload = () => {
    cyberAudio.playCoin();
    trackEvent('cv_download', { file: 'Shamseer-PC-CV.pdf', source: 'cv_section' });
  };

  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="cv">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Curriculum Vitae"
            title={
              <>
                Verified Professional Resume &{' '}
                <span className="gold-gradient-text">Qualifications</span>
              </>
            }
            subtitle="Complete technical background, production history, and verified engineering credentials."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Structured Resume Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal delay={0.1}>
              <GlassCard className="p-6 sm:p-8 space-y-6 h-full" glow="gold">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-[#070A12] text-[#D4AF37] border border-white/10">
                      <FiFileText size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-heading text-white">
                        Shamseer PC
                      </h4>
                      <span className="text-xs font-mono text-[#D4AF37]">
                        MERN Stack Developer & Creative Lead
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">
                    UPDATED 2026
                  </span>
                </div>

                {/* Summary Rows */}
                <div className="space-y-4 text-xs font-sans">
                  {/* Experience */}
                  <div className="p-3.5 rounded-xl bg-[#070A12] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#9AA4BC] uppercase tracking-wider block">
                      CORE SPECIALIZATION
                    </span>
                    <p className="text-[#F4F6FB] leading-relaxed">
                      Full-Stack MERN Architecture (React 19, Node.js, Express, MongoDB) with Redis in-memory caching and custom RBAC security systems.
                    </p>
                  </div>

                  {/* GCC Production Highlights */}
                  <div className="p-3.5 rounded-xl bg-[#070A12] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#9AA4BC] uppercase tracking-wider block">
                      CLIENT DEPLOYMENTS
                    </span>
                    <p className="text-[#F4F6FB] leading-relaxed">
                      Value FM Platform (Qatar & Dubai SaaS), Al Shareef Holding (Qatar Corporate Portal), Moestay Travel Admin, and MyThoughtsHub.
                    </p>
                  </div>

                  {/* Education & Languages */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#070A12] border border-white/5 space-y-0.5">
                      <span className="text-[10px] font-mono text-[#9AA4BC] uppercase block">EDUCATION</span>
                      <span className="text-[#F4F6FB] font-medium block">[CONFIRM: Computer Science Degree / Institute]</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#070A12] border border-white/5 space-y-0.5">
                      <span className="text-[10px] font-mono text-[#9AA4BC] uppercase block">LANGUAGES</span>
                      <span className="text-[#F4F6FB] font-medium block">English, Malayalam, [CONFIRM: Arabic / Hindi]</span>
                    </div>
                  </div>
                </div>

                {/* Download Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href={cvPath}
                    download="Shamseer-PC-CV.pdf"
                    onClick={handleDownload}
                    className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] font-heading font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <FiDownload size={14} />
                    <span>Download CV (PDF)</span>
                  </a>

                  <a
                    href={cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      cyberAudio.playSoftClick();
                      trackEvent('cv_view', { file: 'Shamseer-PC-CV.pdf' });
                    }}
                    className="p-3 rounded-full bg-[#141A2B] text-white hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37] transition-colors"
                    title="Open CV in new tab"
                    aria-label="Open CV in new tab"
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Right Column: Live Embedded PDF Viewer (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <GlassCard className="p-4 sm:p-5 h-full flex flex-col justify-between" glow="gold">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono text-[#9AA4BC]">
                  <span className="flex items-center gap-1.5 text-white">
                    <FiAward className="text-[#D4AF37]" />
                    <span>DOCUMENT PREVIEW // Shamseer-PC-CV.pdf</span>
                  </span>
                  <span className="text-[11px] text-[#10B981]">READY FOR DOWNLOAD</span>
                </div>

                {/* PDF Object Frame with Mobile Fallback */}
                <div className="relative w-full h-[420px] sm:h-[500px] rounded-2xl overflow-hidden bg-[#070A12] border border-white/10">
                  <object
                    data={`${cvPath}#toolbar=0&navpanes=0`}
                    type="application/pdf"
                    className="w-full h-full hidden sm:block"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                      <FiFileText size={40} className="text-[#D4AF37]" />
                      <p className="text-sm text-[#9AA4BC]">
                        PDF preview is best viewed on desktop or downloaded directly.
                      </p>
                      <a
                        href={cvPath}
                        download="Shamseer-PC-CV.pdf"
                        onClick={handleDownload}
                        className="btn-cyber-primary text-xs"
                      >
                        Download PDF Resume
                      </a>
                    </div>
                  </object>

                  {/* Graceful Mobile Preview Card */}
                  <div className="flex sm:hidden flex-col items-center justify-center h-full p-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#0E1320] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-2xl">
                      <FiFileText />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-white text-base">
                        Shamseer PC — Resume (PDF)
                      </h5>
                      <p className="text-xs text-[#9AA4BC] mt-1 max-w-xs">
                        Full-Stack MERN Developer & Commercial Creative Director
                      </p>
                    </div>
                    <div className="flex flex-col w-full gap-2 pt-2">
                      <a
                        href={cvPath}
                        download="Shamseer-PC-CV.pdf"
                        onClick={handleDownload}
                        className="w-full py-2.5 rounded-full bg-[#D4AF37] text-[#070A12] font-heading font-bold text-xs text-center"
                      >
                        Download PDF
                      </a>
                      <a
                        href={cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-full bg-[#141A2B] text-white border border-white/10 text-xs text-center"
                      >
                        Open in New Tab
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#9AA4BC]">
                  <span>FORMAT: PDF · PRINT & ATS OPTIMIZED</span>
                  <span>FILE SIZE: ~104 KB</span>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
