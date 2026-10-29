import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiSend, 
  FiLinkedin, 
  FiGithub, 
  FiMessageSquare, 
  FiShield, 
  FiCheckCircle, 
  FiRadio, 
  FiClock, 
  FiMapPin 
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const scopeOptions = [
  'Enterprise SaaS Web App',
  'Dubai Luxury Campaign & Posters',
  'Multi-Division Corporate Portal',
  'Meta Paid Ads & Motion Video',
  'Full-Stack Hybrid Retainer',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Enterprise SaaS Web App',
    budget: '$5,000 - $15,000',
    message: '',
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    cyberAudio.playTargetLock();
    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
      cyberAudio.playScanToggle();
    }, 1800);
  };

  const selectScope = (scope) => {
    cyberAudio.playHover();
    setFormData((prev) => ({ ...prev, scope }));
  };

  return (
    <section className="relative py-24 bg-[#080d1a] border-t border-[#00f0ff]/15 overflow-hidden" id="contact">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#040711] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiRadio className="text-xs text-[#00ff66] animate-pulse" />
            <span>COMMUNICATION FREQUENCY // SECURE HANDSHAKE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            TRANSMIT <span className="gradient-text-cyan">PROJECT BRIEF</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            Available for enterprise contracts, agency partnerships, and luxury campaign engagements in Dubai, Qatar, and internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels & Telemetry (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Direct Channel Cards */}
            <div className="hud-frame p-6 sm:p-7 rounded-lg bg-[#040711]/90 border-[#00f0ff]/30 space-y-6">
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              <div className="border-b border-white/10 pb-4 text-xs font-mono text-[#00f0ff] flex items-center justify-between">
                <span className="font-bold">// DIRECT TRANSMISSION CHANNELS</span>
                <span className="text-[#00ff66]">24/7 MONITORING</span>
              </div>

              {/* Channel List */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:shamseerpcshan@gmail.com"
                  onClick={() => cyberAudio.playCyberClick()}
                  className="p-4 bg-[#080d1a] border border-white/10 hover:border-[#00f0ff] rounded flex items-center gap-4 transition-all group block"
                >
                  <div className="p-3 bg-[#00f0ff]/10 text-[#00f0ff] rounded border border-[#00f0ff]/30 group-hover:scale-110 transition-transform">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">OFFICIAL INBOX</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00f0ff] transition-colors break-all">
                      shamseerpcshan@gmail.com
                    </div>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/917012819002?text=Hello%20Shamseer,%20I%20am%20interested%20in%20collaborating%20with%20you%20on%20an%20enterprise%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberAudio.playCyberClick()}
                  className="p-4 bg-[#080d1a] border border-[#00ff66]/20 hover:border-[#00ff66] rounded flex items-center gap-4 transition-all group block shadow-[0_0_15px_rgba(0,255,102,0.08)]"
                >
                  <div className="p-3 bg-[#00ff66]/10 text-[#00ff66] rounded border border-[#00ff66]/30 group-hover:scale-110 transition-transform">
                    <FiMessageSquare className="text-xl" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#00ff66] uppercase tracking-wider font-bold">WHATSAPP DIRECT DISPATCH</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00ff66] transition-colors">
                      +91 7012819002 <span className="text-xs text-[#00ff66] ml-1">(Instant Chat)</span>
                    </div>
                  </div>
                </a>

                {/* Regional Coordinates */}
                <div className="p-4 bg-[#080d1a] border border-white/5 rounded flex items-center gap-4">
                  <div className="p-3 bg-[#ffb703]/10 text-[#ffb703] rounded border border-[#ffb703]/30">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">GEOGRAPHIC ENGAGEMENT</div>
                    <div className="text-sm font-semibold text-white">
                      Dubai // Qatar // Global Remote Ready
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Matrix */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748b]">NETWORKS:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/shamseer-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => cyberAudio.playCyberClick()}
                    className="p-2.5 bg-[#080d1a] border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded transition-all text-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="https://github.com/shameerpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => cyberAudio.playCyberClick()}
                    className="p-2.5 bg-[#080d1a] border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] rounded transition-all text-sm"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee Box */}
            <div className="hud-frame p-5 rounded-lg bg-[#040711]/80 border-white/10 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-[#ffb703]">
                <FiClock className="text-sm" />
                <span className="font-bold">RESPONSE GUARANTEE</span>
              </div>
              <p className="text-[#94a3b8] font-rajdhani text-sm">
                All enterprise inquiries from Dubai, Qatar, and international markets receive direct technical responses within <strong>12 business hours</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Project Transmission Console (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="hud-frame p-6 sm:p-8 rounded-lg bg-[#040711]/90 border-[#00f0ff]/30">
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#00f0ff]">
                  <FiShield className="text-sm" />
                  <span className="font-bold">TACTICAL BRIEF TRANSMITTER</span>
                </div>
                <span className="text-[#64748b]">SYS.PROTOCOL 4.2</span>
              </div>

              {transmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00ff66]/10 border-2 border-[#00ff66] text-[#00ff66] flex items-center justify-center text-3xl mx-auto shadow-[0_0_30px_rgba(0,255,102,0.4)]">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold font-orbitron text-white">
                    TRANSMISSION DISPATCHED // SUCCESS
                  </h3>
                  <p className="text-sm text-[#94a3b8] font-rajdhani max-w-md mx-auto">
                    Your project telemetry has been securely logged. I will analyze the requirements and transmit our architecture proposal shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setTransmitted(false)}
                      className="btn-cyber-secondary text-xs"
                    >
                      TRANSMIT ANOTHER MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-rajdhani">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                        OPERATIVE / COMPANY NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor // Dubai Holding"
                        className="w-full px-4 py-2.5 bg-[#080d1a] border border-white/10 focus:border-[#00f0ff] text-white rounded text-sm font-sans focus:outline-none focus:shadow-neon-cyan-sm transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                        ELECTRONIC MAIL FREQUENCY *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@holding.ae"
                        className="w-full px-4 py-2.5 bg-[#080d1a] border border-white/10 focus:border-[#00f0ff] text-white rounded text-sm font-sans focus:outline-none focus:shadow-neon-cyan-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Scope Chips Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                      SELECT PROJECT MISSION SCOPE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {scopeOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => selectScope(opt)}
                          className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all border ${
                            formData.scope === opt
                              ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff] shadow-neon-cyan-sm'
                              : 'bg-[#080d1a] border-white/10 text-[#94a3b8] hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Allocation Range */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                      ESTIMATED CAPITAL ALLOCATION (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#080d1a] border border-white/10 focus:border-[#00f0ff] text-white rounded text-sm focus:outline-none"
                    >
                      <option value="< $5,000">&lt; $5,000 (Targeted Module / Poster Suite)</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000 (Full Production Web App / Portal)</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000 (Enterprise Multi-Platform + Ad Campaign)</option>
                      <option value="$35,000+">$35,000+ (Comprehensive Holding Group Ecosystem)</option>
                    </select>
                  </div>

                  {/* Mission Details Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider block">
                      PROJECT SPECIFICATIONS & TIMELINE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target platform goals, technical requirements, deliverables, or desired launch deadlines..."
                      className="w-full px-4 py-2.5 bg-[#080d1a] border border-white/10 focus:border-[#00f0ff] text-white rounded text-sm font-sans focus:outline-none focus:shadow-neon-cyan-sm transition-all"
                    />
                  </div>

                  {/* Dispatch Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={transmitting}
                      className="btn-cyber-primary w-full justify-center py-3 text-sm font-bold tracking-widest disabled:opacity-50"
                    >
                      {transmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          ENCRYPTING & DISPATCHING TRANSMISSION...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <FiSend className="text-base" />
                          DISPATCH ENCRYPTED BRIEF TO SHAMSEER
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
