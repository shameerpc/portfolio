import { useState, useRef } from 'react';
import { FiPlay, FiPause, FiMaximize, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { cyberAudio } from '../utils/cyberAudio';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  // TODO: Reference optimized /videos/showreel.mp4 when compressed in Prompt 6.
  // Fall back to current showreel file for now.
  const videoSrc = '/videos/copy_8F66225F-B2F5-4B63-8D6C-3FE20851FF28.mov';

  const togglePlay = () => {
    cyberAudio.playSoftClick();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="video">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Motion & Video Editing"
            title={
              <>
                Commercial Video Editing &{' '}
                <span className="gold-gradient-text">Short-Form Motion</span>
              </>
            }
            subtitle="Engaging video cuts crafted with CapCut Pro and Premiere Pro for social ad campaigns and brand reels."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <GlassCard className="p-4 sm:p-5 rounded-3xl overflow-hidden shadow-2xl" glow="gold">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black group">
              {/* Lazy-mounted video with preload="none" and no autoplay with sound */}
              <video
                ref={videoRef}
                src={videoSrc}
                preload="none"
                playsInline
                muted={isMuted}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Play / Pause Large Center Button Overlay */}
              <div
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isPlaying
                    ? 'bg-transparent opacity-0 group-hover:opacity-100 hover:bg-black/30'
                    : 'bg-black/40 opacity-100'
                }`}
              >
                <button
                  type="button"
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F5E6A8] via-[#D4AF37] to-[#C59B27] text-[#070A12] flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-110 active:scale-95 transition-transform"
                  aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
                >
                  {isPlaying ? <FiPause /> : <FiPlay className="ml-1" />}
                </button>
              </div>

              {/* Poster Placeholder Title until started */}
              {!hasStarted && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070A12]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#D4AF37] pointer-events-none">
                  COMMERCIAL SHOWREEL · CAPCUT & PREMIERE
                </div>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="mt-4 px-3 py-2 rounded-xl bg-[#070A12] border border-white/5 flex items-center justify-between text-xs font-sans text-[#9AA4BC]">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="px-3 py-1 rounded-lg bg-[#141A2B] text-white hover:text-[#D4AF37] font-heading font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  {isPlaying ? <FiPause size={13} /> : <FiPlay size={13} />}
                  <span>{isPlaying ? 'Pause' : 'Play showreel'}</span>
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-[#141A2B] text-[#9AA4BC] hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isMuted ? <FiVolumeX size={15} /> : <FiVolume2 size={15} />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono hidden sm:inline text-[#D4AF37]">
                  1080P MASTER CUT
                </span>
                <button
                  onClick={handleFullscreen}
                  className="p-1.5 rounded-lg bg-[#141A2B] text-[#9AA4BC] hover:text-white transition-colors"
                  aria-label="Fullscreen"
                >
                  <FiMaximize size={15} />
                </button>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
