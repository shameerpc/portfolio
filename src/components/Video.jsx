import { useState, useRef } from 'react';
import { FiPlay, FiPause, FiMaximize, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { cyberAudio } from '../utils/cyberAudio';
import { useLanguage } from '../i18n';
import { useGame } from '../context';

export default function Video() {
  const { t } = useLanguage();
  const { unlockAchievement } = useGame();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  // Reference optimized /videos/showreel.mp4 when compressed in Prompt 6.
  // Fall back to current showreel file for now.
  const videoSrc = '/videos/copy_8F66225F-B2F5-4B63-8D6C-3FE20851FF28.mov';

  const togglePlay = () => {
    cyberAudio.playSoftClick?.();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
      unlockAchievement('director');
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
            eyebrow={t('video.badge', 'Motion & Direction')}
            title={
              <>
                Commercial Video Editing &{' '}
                <span className="gold-gradient-text">Short-Form Motion</span>
              </>
            }
            subtitle={t('video.subtitle', 'Engaging video cuts crafted with CapCut Pro and Premiere Pro for social ad campaigns and brand reels.')}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <GlassCard className="p-3 sm:p-4 rounded-3xl overflow-hidden group" glow="gold">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              {/* HTML5 Native Video Tag with Lazy Mount and preload none */}
              <video
                ref={videoRef}
                src={videoSrc}
                preload="none"
                muted={isMuted}
                playsInline
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
                poster="/images/creative/posters/dubai_neo_2050.jpg"
              >
                <track kind="captions" />
              </video>

              {/* Big Initial Play Button Overlay */}
              {!hasStarted && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/40 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E6A8] text-[#070A12] flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
                    <FiPlay className="ms-1" />
                  </div>
                  <span className="mt-4 font-heading font-bold text-sm tracking-wide text-white">
                    {t('video.playVideo', 'Play Commercial Showreel')}
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37] mt-1">
                    (Sound initially muted · Tap to unmute)
                  </span>
                </div>
              )}

              {/* Custom Bottom Glass Player Bar */}
              {hasStarted && (
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-white text-sm opacity-90 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#070A12] transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#070A12] transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
                    </button>

                    <span className="text-xs font-mono text-[#9AA4BC]">
                      1080p Showreel
                    </span>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#070A12] transition-colors"
                    aria-label="Fullscreen"
                  >
                    <FiMaximize size={16} />
                  </button>
                </div>
              )}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
