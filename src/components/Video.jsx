import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause } from 'react-icons/fi';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = { current: null };

  const togglePlay = () => {
    const v = document.querySelector('.showcase-video-player');
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section className="section video-section" id="video">
      <div className="container">
        <div className="services-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Video Editing</div>
          <h2 className="section-title">
            Work in <span className="gradient-text">motion</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into my video editing capabilities — from ad campaigns to promotional content.
          </p>
        </div>

        <motion.div
          className="video-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <video
            className="showcase-video-player"
            src="/videos/copy_8F66225F-B2F5-4B63-8D6C-3FE20851FF28.mov"
            controls
            preload="metadata"
          />
          <button className="video-overlay-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            <div className="video-play-btn">
              {playing ? <FiPause /> : <FiPlay style={{ marginLeft: 3 }} />}
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
