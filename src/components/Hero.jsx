import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiTerminal, 
  FiImage, 
  FiShield, 
  FiCpu, 
  FiTarget, 
  FiCrosshair,
  FiActivity,
  FiCheckCircle
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

export default function Hero() {
  const [viewMode, setViewMode] = useState('cyber'); // 'cyber' | 'real'

  const toggleViewMode = (mode) => {
    if (viewMode !== mode) {
      cyberAudio.playTargetLock();
      setViewMode(mode);
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#040711]" id="hero">
      {/* 3D Cyber Grid Floor Perspective */}
      <div className="cyber-grid-perspective">
        <div className="cyber-grid-floor" />
      </div>

      {/* Ambient Mecha Neon Halos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b026ff]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#ffb703]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-[#00f0ff]/15 pb-4 text-[11px] font-mono text-[#64748b]">
          <div className="flex items-center gap-2">
            <span className="cyber-beacon" />
            <span className="text-[#00f0ff] font-bold tracking-wider">
              SYSTEM STATUS: ONLINE // GCC & GLOBAL REMOTE READY
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-right text-[#94a3b8]">
            <span>LOC: DUBAI [25.20°N, 55.27°E] // DOHA [25.28°N, 51.53°E]</span>
            <span className="text-[#00f0ff]">PING: 14MS</span>
            <span className="text-[#ffb703]">ENCRYPTION: AES-256</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Command & Identity Briefing (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Tactical Division Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d1527] border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono tracking-widest uppercase rounded-sm shadow-neon-cyan-sm">
              <FiShield className="text-[#00f0ff]" />
              <span>FULL-STACK MERN ARCHITECTURE & COMMERCIAL CREATIVE DIRECTION</span>
            </div>

            {/* Main Glitch Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-orbitron tracking-tight text-white leading-none">
                <span className="cyber-glitch-text block" data-text="SHAMSEER PC">
                  SHAMSEER <span className="text-[#00f0ff]">PC</span>
                </span>
              </h1>
              <div className="text-xl sm:text-2xl xl:text-3xl font-rajdhani font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#b026ff] to-[#ff007f]">
                Full-Stack MERN & High-Impact Creative Technologist
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani font-medium leading-relaxed max-w-2xl">
              Engineering high-concurrency SaaS applications, enterprise holding portals, and automated architectures for top-tier enterprises in Dubai, Qatar, and international markets — coupled with viral luxury commercial ad creatives that scale revenue.
            </p>

            {/* Quick Tactical Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="hud-frame p-3 rounded-sm border-[#00f0ff]/30 bg-[#080d1a]/80">
                <div className="text-xl sm:text-2xl font-black font-orbitron text-[#00f0ff]">99.8%</div>
                <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">UPTIME SLA</div>
              </div>
              <div className="hud-frame p-3 rounded-sm border-[#b026ff]/30 bg-[#080d1a]/80">
                <div className="text-xl sm:text-2xl font-black font-orbitron text-[#b026ff]">15+</div>
                <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">PLATFORMS</div>
              </div>
              <div className="hud-frame p-3 rounded-sm border-[#ff007f]/30 bg-[#080d1a]/80">
                <div className="text-xl sm:text-2xl font-black font-orbitron text-[#ff007f]">100+</div>
                <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">CREATIVES</div>
              </div>
              <div className="hud-frame p-3 rounded-sm border-[#ffb703]/30 bg-[#080d1a]/80">
                <div className="text-xl sm:text-2xl font-black font-orbitron text-[#ffb703]">GCC</div>
                <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">ENTERPRISE READY</div>
              </div>
            </div>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#webdev"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playCyberClick()}
                className="btn-cyber-primary"
              >
                <span>EXPLORE DEPLOYMENTS</span>
                <FiArrowRight className="text-sm" />
              </a>

              <a
                href="#creative"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playCyberClick()}
                className="btn-cyber-secondary"
              >
                <FiImage className="text-[#00f0ff]" />
                <span>CREATIVE POSTERS</span>
              </a>

              <a
                href="#terminal"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playCyberClick()}
                className="inline-flex items-center gap-2 px-4 py-3 bg-[#0d1527] border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs uppercase tracking-wider hover:bg-[#00ff66]/10 hover:border-[#00ff66] transition-all rounded-sm shadow-[0_0_15px_rgba(0,255,102,0.15)]"
              >
                <FiTerminal className="text-sm" />
                <span>OPEN TERMINAL</span>
              </a>
            </div>

            {/* Tech Matrix Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-[#64748b]">
              <span className="text-[#94a3b8] font-bold">CORE ARSENAL:</span>
              <span className="px-2 py-0.5 bg-[#0d1527] border border-white/10 rounded text-[#00f0ff]">React 19</span>
              <span className="px-2 py-0.5 bg-[#0d1527] border border-white/10 rounded text-[#00f0ff]">Node.js</span>
              <span className="px-2 py-0.5 bg-[#0d1527] border border-white/10 rounded text-[#00f0ff]">MongoDB</span>
              <span className="px-2 py-0.5 bg-[#0d1527] border border-white/10 rounded text-[#b026ff]">Redis Caching</span>
              <span className="px-2 py-0.5 bg-[#0d1527] border border-white/10 rounded text-[#ffb703]">Meta Ads</span>
              <span className="px-2 py-0.5 bg-[#0d1527] border border-white/10 rounded text-[#ff007f]">Luxury Design</span>
            </div>
          </motion.div>

          {/* Right Column: Dual-View Mecha Character Deck (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hud-frame p-3 relative rounded-lg bg-[#080d1a]/90 shadow-[0_0_40px_rgba(0,240,255,0.15)]">
              {/* Corner HUD Brackets */}
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              {/* Character Deck Top HUD Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#00f0ff]/20 mb-3 bg-[#040711]/60 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <FiCrosshair className="text-[#00f0ff] animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="text-[#00f0ff] font-bold">OPERATIVE PROFILE</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#00ff66] text-[10px]">SYNCED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-ping" />
                </div>
              </div>

              {/* Interactive Viewport with Targeting Overlay */}
              <div className="relative aspect-square overflow-hidden rounded border border-[#00f0ff]/25 bg-[#030610] group">
                {/* Crosshair Target Reticles */}
                <div className="reticle-crosshair top-4 left-4" />
                <div className="reticle-crosshair top-4 right-4" />
                <div className="reticle-crosshair bottom-4 left-4" />
                <div className="reticle-crosshair bottom-4 right-4" />

                {/* Animated Scanner Bar Line */}
                <motion.div
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent z-20 pointer-events-none"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* The Character Image Deck */}
                <AnimatePresence mode="wait">
                  {viewMode === 'cyber' ? (
                    <motion.div
                      key="cyber-avatar"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src="/images/about/avatar_cyber.jpg"
                        alt="Shamseer PC - 3D Mecha Cyber Avatar"
                        className="w-full h-full object-cover object-center filter contrast-105"
                      />
                      <div className="absolute bottom-3 left-3 bg-[#040711]/85 border border-[#00f0ff]/50 px-2.5 py-1 rounded text-[11px] font-mono text-[#00f0ff] flex items-center gap-1.5 shadow-neon-cyan-sm">
                        <FiCpu className="text-xs" />
                        <span>TACTICAL MECHA AVATAR // ACTIVE</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="real-avatar"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src="/images/about/profile.jpg"
                        alt="Shamseer PC - Executive Portrait"
                        className="w-full h-full object-cover object-top filter brightness-105"
                        onError={(e) => {
                          e.target.src = '/images/about/IMG_3144.PNG';
                        }}
                      />
                      <div className="absolute bottom-3 left-3 bg-[#040711]/85 border border-[#ffb703]/50 px-2.5 py-1 rounded text-[11px] font-mono text-[#ffb703] flex items-center gap-1.5 shadow-[0_0_10px_rgba(255,183,3,0.3)]">
                        <FiCheckCircle className="text-xs" />
                        <span>EXECUTIVE PORTRAIT // VERIFIED</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Telemetry Corner Coordinates */}
                <div className="absolute top-2 right-2 text-[9px] font-mono text-[#00f0ff]/60 bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
                  REC: 60FPS // ISO-100
                </div>
              </div>

              {/* View Switcher Toggle Deck */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => toggleViewMode('cyber')}
                  className={`py-2 px-3 rounded text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 border ${
                    viewMode === 'cyber'
                      ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff] shadow-neon-cyan-sm'
                      : 'bg-[#040711] border-white/10 text-[#64748b] hover:text-white'
                  }`}
                >
                  <FiCpu />
                  <span>3D MECHA AVATAR</span>
                </button>
                <button
                  onClick={() => toggleViewMode('real')}
                  className={`py-2 px-3 rounded text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 border ${
                    viewMode === 'real'
                      ? 'bg-[#ffb703]/15 border-[#ffb703] text-[#ffb703] shadow-[0_0_12px_rgba(255,183,3,0.3)]'
                      : 'bg-[#040711] border-white/10 text-[#64748b] hover:text-white'
                  }`}
                >
                  <FiTarget />
                  <span>EXECUTIVE PORTRAIT</span>
                </button>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                <span className="flex items-center gap-1 text-[#00ff66]">
                  <FiActivity className="text-xs" /> 100% OPERATIONAL
                </span>
                <span>SYS.ID: SPC-MECHA-01</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
