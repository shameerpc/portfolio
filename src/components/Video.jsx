import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiVideo } from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    cyberAudio.playCyberClick();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#040711] overflow-hidden" id="video">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d1527] border border-[#ff007f]/30 text-[#ff007f] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiVideo className="text-xs" />
            <span>COMMERCIAL MOTION & EDITING // HIGH ROAS REELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            WORK IN <span className="text-[#ff007f] drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]">MOTION</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            High-energy commercial video editing and social ad reels crafted with CapCut Pro and Premiere Pro.
          </p>
        </div>

        {/* Tactical Video Player HUD Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hud-frame hud-frame-purple p-3 sm:p-4 rounded-xl bg-[#080d1a] border-[#b026ff]/35 shadow-[0_0_40px_rgba(176,38,255,0.15)]"
        >
          <div className="hud-bracket-tr" />
          <div className="hud-bracket-bl" />

          {/* Player Header Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#00f0ff]">
              <span className="w-2 h-2 rounded-full bg-[#ff007f] animate-ping" />
              <span className="font-bold">REEL STREAM // MASTER CODEC H.264</span>
            </div>
            <div className="flex items-center gap-3 text-[#64748b]">
              <span className="text-[#00ff66]">BUFFER: 100%</span>
              <span>AUDIO: STEREO 48KHZ</span>
            </div>
          </div>

          {/* Video Viewport */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-white/10 group">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src="/videos/copy_8F66225F-B2F5-4B63-8D6C-3FE20851FF28.mov"
              playsInline
              loop
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Big Interactive Play/Pause Button Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                playing ? 'bg-transparent hover:bg-black/40 opacity-0 hover:opacity-100' : 'bg-black/50 opacity-100'
              }`}
              onClick={togglePlay}
            >
              <button
                className="w-20 h-20 rounded-full bg-[#040711]/90 border-2 border-[#00f0ff] flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-110 transition-transform"
                aria-label={playing ? 'Pause Video' : 'Play Video'}
              >
                {playing ? <FiPause className="text-[#00f0ff]" /> : <FiPlay className="text-[#00f0ff] ml-1" />}
              </button>
            </div>

            {/* Corner Timecode Telemetry */}
            <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 border border-white/10 text-[10px] font-mono text-white rounded">
              CAM-01 // TC: 00:00:12:04
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-3 px-3 py-2 bg-[#040711] border border-white/5 rounded flex flex-wrap items-center justify-between text-xs font-mono text-[#94a3b8] gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="px-3 py-1 bg-[#0d1527] border border-[#00f0ff]/30 text-[#00f0ff] rounded hover:border-[#00f0ff] flex items-center gap-1.5 font-bold"
              >
                {playing ? <FiPause /> : <FiPlay />}
                <span>{playing ? 'PAUSE STREAM' : 'PLAY STREAM'}</span>
              </button>
              <span className="text-[11px] text-[#64748b]">FORMAT: 1080P PRORES MASTER</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-[#ffb703]">EDITED: CAPCUT PRO & PREMIERE</span>
              <span className="text-[#00ff66]">SYNC: LOCKED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
