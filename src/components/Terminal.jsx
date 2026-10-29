import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiCornerDownLeft, FiPlay, FiWifi } from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const COMMANDS = {
  help: [
    '──────────────────────────────────────────────────────────────',
    'SHAMSEER PC // DEVELOPER TERMINAL v3.0',
    '──────────────────────────────────────────────────────────────',
    '  help       - Display available CLI commands',
    '  skills     - Inspect full-stack & creative capability matrix',
    '  projects   - View verified client platforms & production URLs',
    '  regions    - GCC (Qatar & UAE) & international coverage briefing',
    '  contact    - Direct communication channels & WhatsApp link',
    '  hire       - Client onboarding workflow & retainer availability',
    '  status     - Current engineering stack & availability status',
    '  clear      - Clear terminal screen buffer',
    '──────────────────────────────────────────────────────────────',
  ],
  skills: [
    '[MERN CORE]   : React 19, Node.js, Express.js, MongoDB, RESTful APIs',
    '[FULL STACK]  : Redux Toolkit, Context API, Tailwind CSS, Framer Motion',
    '[CREATIVE]    : Luxury Poster Design, Social Ad Creatives, Photoshop, Illustrator',
    '[VIDEO/MEDIA] : Meta Ads Manager, Premiere Pro, CapCut, Motion Design',
    'Competency    : Enterprise-grade architecture, scalable clean code, GCC deployment.',
  ],
  projects: [
    '1. VALUE FM (https://valuefm.com.qa)',
    '   - Enterprise Qatar Facility Management platform with SLA dispatch tracking',
    '2. AL SHAREEF HOLDING (https://alshareef.com.qa)',
    '   - Multi-division holding conglomerate corporate portal with custom architecture',
    '3. MOESTAY TRAVEL ADMIN (https://moestay-admin.netlify.app/dashboard)',
    '   - Property management & analytics booking engine with Redux Toolkit',
    '4. MYTHOUGHTSHUB (https://mythoughtshub.eu.cc/)',
    '   - Editorial publishing platform with authenticated author workflows',
  ],
  regions: [
    'PRIMARY HUBS : Qatar (Doha) & UAE (Dubai / Abu Dhabi) & India',
    'EXPERTISE    : Scalable SaaS platforms, multi-division corporate portals,',
    '               and premium visual brand assets designed for high-value GCC markets.',
    'AVAILABILITY : Remote enterprise contracts, agency partnerships, and selective retainers.',
  ],
  contact: [
    'DIRECT CHANNELS:',
    '  - Email    : shamseerpcshan@gmail.com',
    '  - WhatsApp : +91 7012819002 (https://wa.me/917012819002)',
    '  - LinkedIn : https://linkedin.com/in/shamseer-tech',
    '  - GitHub   : https://github.com/shameerpc',
    'Direct response guaranteed within 24 hours.',
  ],
  hire: [
    '──────────────────────────────────────────────────────────────',
    'CLIENT ONBOARDING WORKFLOW',
    '──────────────────────────────────────────────────────────────',
    '1. Discovery & Technical Scoping : Feasibility & requirements (Day 1)',
    '2. Design & Architecture          : Prototypes & data models',
    '3. Production Build              : Full-stack MERN with responsive testing',
    '4. Launch & Handover             : Deployment, documentation & post-launch support',
    'Next step: Send a project brief in the Contact section below.',
  ],
  status: [
    'ENVIRONMENT TELEMETRY:',
    '  - Stack      : React 19 · Vite · Tailwind CSS · Framer Motion',
    '  - Node/MERN  : Active',
    '  - Deployment : Production Build V2',
    '  - Location   : Qatar / UAE / India / Worldwide Remote',
    '  - Status     : OPEN FOR NEW ENTERPRISE ENGAGEMENTS',
  ],
};

const quickChips = ['help', 'skills', 'projects', 'regions', 'hire', 'contact', 'clear'];

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Shamseer PC Developer Console [v3.0.0-noir]' },
    { type: 'output', text: 'Connected to edge runtime · Doha / Dubai / Worldwide' },
    { type: 'output', text: 'Type "help" or click a command below to explore.' },
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

    cyberAudio.playSoftClick?.();

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
    <section className="relative py-24 sm:py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="terminal">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5E6A8] text-xs font-mono uppercase tracking-wider">
            <FiTerminal className="text-xs text-[#D4AF37]" />
            <span>Developer Terminal · CLI Interface</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-sora tracking-tight text-white">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#D4AF37]">Console</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] font-sans">
            Interactive command-line interface to inspect tech stack specs, project credentials, and workflow methodology.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-[#64748b] mr-1 flex items-center gap-1">
            <FiPlay className="text-[10px] text-[#D4AF37]" /> QUICK CMDS:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              className="px-3 py-1 bg-[#0E1320] border border-white/10 hover:border-[#D4AF37] hover:text-[#F5E6A8] text-[#cbd5e1] text-xs font-mono rounded-lg transition-all cursor-pointer"
            >
              $ {chip}
            </button>
          ))}
        </div>

        {/* Terminal Window Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#0A0E17] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Terminal Window Title Bar */}
          <div className="px-4 py-3 bg-[#0E1320] border-b border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
              <span className="ml-2 text-[#94a3b8]">shamseer@portfolio ~ zsh</span>
            </div>
            <div className="flex items-center gap-4 text-[#64748b]">
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <FiWifi className="text-xs" /> connected
              </span>
              <span className="hidden sm:inline text-xs font-mono text-[#94a3b8]">UTF-8</span>
            </div>
          </div>

          {/* Terminal Log Output Body */}
          <div
            className="p-4 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto font-mono text-xs sm:text-sm text-[#cbd5e1] space-y-1.5 bg-[#070A12]/95 select-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, idx) => (
              <div key={idx} className="leading-relaxed">
                {line.type === 'input' ? (
                  <div className="text-white flex items-center gap-2">
                    <span className="text-[#D4AF37]">shamseer:~$</span>
                    <span className="font-semibold text-white">{line.text}</span>
                  </div>
                ) : line.type === 'error' ? (
                  <div className="text-[#EF4444]">{line.text}</div>
                ) : (
                  <div className="text-[#94a3b8]">{line.text}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Interactive Input Prompt Bar */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 bg-[#0E1320] border-t border-white/10 flex items-center gap-2"
          >
            <span className="text-xs sm:text-sm font-mono font-bold text-[#D4AF37] whitespace-nowrap">
              shamseer:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'projects', 'skills', 'hire'..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-[#475569]"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F5E6A8] hover:text-[#070A12] border border-[#D4AF37]/30 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
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
