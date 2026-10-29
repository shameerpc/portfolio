import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiCornerDownLeft, FiPlay, FiWifi } from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const COMMANDS = {
  help: [
    '══════════════════════════════════════════════════════════════',
    'SPC TACTICAL MECHA OS // AVAILABLE COMMANDS:',
    '══════════════════════════════════════════════════════════════',
    '  help       - Display this command matrix',
    '  skills     - Query full weaponized tech matrix (MERN + Tools)',
    '  projects   - Inspect live GCC production platforms & URLs',
    '  dubai      - Read briefing on Dubai & Qatar enterprise engagement',
    '  contact    - Access secure communications channels & WhatsApp',
    '  hire       - Fast-track executive client onboarding briefing',
    '  status     - Show mecha system telemetry & server ping',
    '  clear      - Purge terminal buffer screen',
    '══════════════════════════════════════════════════════════════',
  ],
  skills: [
    '[MERN CORE]   : React 19, Node.js, Express.js, MongoDB, RESTful APIs',
    '[SYSTEM]      : Redis In-Memory Caching, Socket.io, JWT, RBAC, Webhooks',
    '[CREATIVE]    : Luxury Poster Design, Social Ad Creatives, Photoshop, Illustrator',
    '[GROWTH/MEDIA]: Meta Ads Manager, Premiere Pro, CapCut Pro, SEO/SEM, GA4',
    'Proficiency   : Enterprise-grade architecture with 99.8% SLA uptime record.',
  ],
  projects: [
    '1. VALUE FM (https://valuefm.com.qa)',
    '   - Enterprise Qatar & Dubai Facility SaaS with Redis caching & SLA tracking',
    '2. AL SHAREEF HOLDING (https://alshareef.com.qa)',
    '   - Multi-division holding conglomerate portal with custom RBAC permissions',
    '3. MOESTAY TRAVEL ADMIN (https://moestay-admin.netlify.app/dashboard)',
    '   - Analytics booking engine with Redux Toolkit state architecture',
    '4. MYTHOUGHTSHUB (https://mythoughtshub.eu.cc/)',
    '   - Production publishing editorial platform with JWT auth',
  ],
  dubai: [
    'REGIONAL TARGET: UAE (Dubai/Abu Dhabi) & QATAR (Doha) & GCC',
    'EXPERTISE      : Scalable enterprise applications, multi-division corporate portals,',
    '                 and ultra-prestige luxury visual brand assets designed for high-net-worth markets.',
    'AVAILABILITY   : Remote enterprise contracts, agency retained partnerships, and selective on-site consultations.',
  ],
  contact: [
    'COMMUNICATION FREQUENCIES:',
    '  - Email    : shamseerpcshan@gmail.com',
    '  - WhatsApp : +91 7012819002 (Direct Link: https://wa.me/917012819002)',
    '  - LinkedIn : https://linkedin.com/in/shamseer-tech',
    '  - GitHub   : https://github.com/shameerpc',
    'Status: Accepting incoming enterprise inquiries.',
  ],
  hire: [
    '══════════════════════════════════════════════════════════════',
    'EXECUTIVE ONBOARDING PROTOCOL INITIATED',
    '══════════════════════════════════════════════════════════════',
    '1. Architecture & Technical Scoping : Within 24 Hours',
    '2. High-Fidelity UI/UX & Prototypes : 3-5 Business Days',
    '3. Full-Stack Production Deployment : MERN + Cloud + Testing',
    '4. Luxury Ad Creative Assets        : Multi-channel ready',
    'Action: Transmit your project details below or email directly to shamseerpcshan@gmail.com',
  ],
  status: [
    'SYSTEM TELEMETRY:',
    '  - Architecture : Mecha HUD v2.5 // React 19 + Tailwind',
    '  - Latency      : 14ms (Dubai Edge Node)',
    '  - Memory Cache : Redis L1 Active',
    '  - Security     : TLS 1.3 // End-to-End Handshake',
    '  - Status       : ALL SYSTEMS 100% COMBAT READY',
  ],
};

const quickChips = ['help', 'skills', 'projects', 'dubai', 'hire', 'contact', 'clear'];

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'SPC TACTICAL MECHA OS [Version 4.2.0-GCC]' },
    { type: 'output', text: 'Connected to Edge Node: DUBAI-DXB-01 // PING: 14ms' },
    { type: 'output', text: 'Type "help" or click a command below to initialize queries.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    cyberAudio.playCyberClick();

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const newHistory = [...history, { type: 'input', text: cmdText }];

    if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((line) => {
        newHistory.push({ type: 'output', text: line });
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleChipClick = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <section className="relative py-24 bg-[#080d1a] border-t border-b border-[#00f0ff]/15 overflow-hidden" id="terminal">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00ff66]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#040711] border border-[#00ff66]/30 text-[#00ff66] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiTerminal className="text-xs" />
            <span>INTERACTIVE COMMAND CONSOLE // MECHA CLI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            OPERATIVE <span className="text-[#00ff66] drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]">COMMAND TERMINAL</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            Execute direct terminal commands to audit technical specs, regional focus, and enterprise credentials.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-[#64748b] mr-2 flex items-center gap-1">
            <FiPlay className="text-[10px] text-[#00ff66]" /> QUICK CMDS:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              onMouseEnter={() => cyberAudio.playHover()}
              className="px-3 py-1 bg-[#040711] border border-[#00ff66]/30 hover:border-[#00ff66] hover:bg-[#00ff66]/10 text-[#00ff66] text-xs font-mono uppercase tracking-wider rounded transition-all shadow-sm"
            >
              $ {chip}
            </button>
          ))}
        </div>

        {/* Terminal Window Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hud-frame p-1 rounded-xl bg-[#030712] border-[#00ff66]/40 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,255,102,0.15)]"
        >
          {/* Terminal Window Title Bar */}
          <div className="px-4 py-3 bg-[#080d1a] border-b border-[#00ff66]/20 flex items-center justify-between text-xs font-mono rounded-t-lg">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff007f] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffb703] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#00ff66] inline-block" />
              <span className="ml-2 text-[#cbd5e1] font-bold">spc-mecha-console // bash 5.2</span>
            </div>
            <div className="flex items-center gap-4 text-[#64748b]">
              <span className="flex items-center gap-1 text-[#00ff66]">
                <FiWifi className="text-xs" /> 14ms
              </span>
              <span className="hidden sm:inline">DUBAI EDGE NODE</span>
            </div>
          </div>

          {/* Terminal Log Output Body */}
          <div
            className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm text-[#00ff66] space-y-1.5 bg-[#02050c]/90 select-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, idx) => (
              <div key={idx} className="leading-relaxed">
                {line.type === 'input' ? (
                  <div className="text-white flex items-center gap-2">
                    <span className="text-[#00f0ff]">guest@spc-hud:~$</span>
                    <span className="font-semibold text-[#00f0ff]">{line.text}</span>
                  </div>
                ) : line.type === 'error' ? (
                  <div className="text-[#ff007f]">{line.text}</div>
                ) : (
                  <div className="text-[#a7f3d0]">{line.text}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Interactive Input Prompt Bar */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 bg-[#080d1a] border-t border-[#00ff66]/20 flex items-center gap-2 rounded-b-lg"
          >
            <span className="text-xs sm:text-sm font-mono font-bold text-[#00f0ff] whitespace-nowrap">
              guest@spc-hud:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'projects', 'dubai', 'hire'..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-[#475569]"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-[#00ff66]/15 hover:bg-[#00ff66] text-[#00ff66] hover:text-[#040711] border border-[#00ff66]/40 rounded text-xs font-mono font-bold flex items-center gap-1 transition-all"
            >
              <span>RUN</span>
              <FiCornerDownLeft className="text-xs" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
