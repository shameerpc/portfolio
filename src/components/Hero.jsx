import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiPenTool } from 'react-icons/fi';
import { FaWhatsapp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMeta } from 'react-icons/si';
import { cyberAudio } from '../utils/cyberAudio';
import { Button } from './ui/Button';

// Verified real clients and metrics (unconfirmed stats marked with [CONFIRM])
const clientLogos = [
  { name: 'Value FM', domain: 'Facility Management · Qatar & Dubai' },
  { name: 'Al Shareef Holding', domain: 'Multi-Division Group · Qatar' },
  { name: 'Moestay', domain: 'Travel & Booking Platform' },
  { name: 'MyThoughtsHub', domain: 'Digital Editorial Platform' },
];

const stats = [
  { value: '4+', label: 'Production Platforms' },
  { value: '99.8%', label: 'Uptime SLA Delivered' },
  { value: '[CONFIRM: 100+]', label: 'Commercial Creatives' },
  { value: '[CONFIRM: 3+ Yrs]', label: 'Professional Track Record' },
];

const floatingChips = [
  { name: 'React 19', icon: <FaReact className="text-[#22D3EE]" />, pos: 'top-2 -left-6 sm:-left-8' },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#10B981]" />, pos: 'top-1/3 -right-6 sm:-right-8' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#10B981]" />, pos: 'bottom-24 -left-6 sm:-left-8' },
  { name: 'Photoshop', icon: <FiPenTool className="text-[#22D3EE]" />, pos: '-bottom-3 right-8' },
  { name: 'Meta Ads', icon: <SiMeta className="text-[#3b82f6]" />, pos: 'bottom-8 -right-4 sm:-right-6' },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isEasterEgg, setIsEasterEgg] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    });
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#070A12]"
    >
      {/* Soft Ambient Radial Halos */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#22D3EE]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Gold Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1320] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] shadow-[0_2px_12px_rgba(212,175,55,0.12)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Open for projects · Qatar · UAE · Worldwide</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-heading tracking-tight text-[#F4F6FB] leading-[1.12]">
                I build digital products that look{' '}
                <span className="gold-gradient-text">premium and perform.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9AA4BC] font-sans font-normal leading-relaxed max-w-2xl">
                Full-stack MERN development and commercial creative direction for growing businesses
                and enterprise holding groups in Qatar, UAE, and beyond.
              </p>
            </motion.div>

            {/* Primary Action Button Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Button
                as="a"
                href="#webdev"
                variant="primary"
                size="md"
                onClick={() => cyberAudio.playSoftClick()}
                iconRight={<FiArrowRight className="text-xs" />}
              >
                View my work
              </Button>

              <Button
                as="a"
                href="/cv/Shamseer-PC-CV.pdf"
                download="Shamseer-PC-CV.pdf"
                variant="glass"
                size="md"
                onClick={() => cyberAudio.playCoin()}
                icon={<FiDownload className="text-sm text-[#D4AF37]" />}
              >
                <span>Download CV</span>
                <span className="text-[10px] font-mono px-1 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37]">
                  PDF
                </span>
              </Button>

              <Button
                as="a"
                href="https://wa.me/917012819002?text=Hello%20Shamseer,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                onClick={() => cyberAudio.playSoftClick()}
                icon={<FaWhatsapp className="text-base" />}
              >
                WhatsApp me
              </Button>
            </motion.div>

            {/* Trust Row: Real Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="pt-6 border-t border-white/10 space-y-4"
            >
              <div className="text-[11px] font-mono text-[#9AA4BC] uppercase tracking-wider flex items-center gap-2">
                <span>TRUSTED BY REAL PLATFORMS IN THE GCC</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-heading font-semibold text-[#F4F6FB]/85">
                {clientLogos.map((client) => (
                  <div
                    key={client.name}
                    className="px-3 py-1.5 rounded-lg bg-[#0E1320]/80 border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
                  >
                    <span className="text-[#F5E6A8]">{client.name}</span>
                  </div>
                ))}
              </div>

              {/* Verified Count-up Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3 rounded-xl bg-[#0E1320]/60 border border-white/5"
                  >
                    <div className="text-xl sm:text-2xl font-black font-heading text-[#D4AF37]">
                      {st.value}
                    </div>
                    <div className="text-[11px] font-sans text-[#9AA4BC] leading-tight mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real Photo with Gold Ring & Orbiting Chips (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Soft Rotating Halo Behind Frame */}
            <div
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#D4AF37]/15 via-[#22D3EE]/10 to-transparent blur-2xl pointer-events-none transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              }}
            />

            {/* Photo Container Frame with Gold Ring */}
            <div
              className="relative w-64 h-80 sm:w-80 sm:h-[420px] rounded-3xl p-2 bg-gradient-to-b from-[#D4AF37]/40 via-[#F5E6A8]/10 to-[#D4AF37]/20 shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(212,175,55,0.18)] transition-transform duration-300 ease-out group"
              style={{
                transform: `perspective(800px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#070A12] border border-white/10">
                {/* Photo with Picture Tag and Fallback */}
                <picture>
                  <source srcSet="/images/about/shamseer-photo.webp" type="image/webp" />
                  <img
                    src={isEasterEgg ? '/images/about/avatar_cyber.jpg' : '/images/about/shamseer-photo.jpg'}
                    alt="Shamseer PC — Full-Stack Developer and Creative Director"
                    loading="eager"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-all duration-500"
                    onError={(e) => {
                      // TODO: Ensure shamseer-photo.jpg exists in public/images/about/
                      console.warn('Could not load shamseer-photo.jpg, falling back to profile.jpg');
                      e.currentTarget.src = '/images/about/profile.jpg';
                    }}
                  />
                </picture>

                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070A12] via-[#070A12]/40 to-transparent" />

                {/* Real Executive Badge & Easter Egg Swap on Hover */}
                <div
                  onMouseEnter={() => setIsEasterEgg(true)}
                  onMouseLeave={() => setIsEasterEgg(false)}
                  className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-[#0E1320]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between text-xs font-sans shadow-md"
                >
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-[#F4F6FB] text-xs">
                      Shamseer PC
                    </span>
                    <span className="text-[10px] font-mono text-[#D4AF37]">
                      {isEasterEgg ? 'Game Mode Avatar' : 'Executive Portrait · Verified'}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                </div>
              </div>

              {/* Gently Orbiting Floating Glass Chips */}
              {floatingChips.map((chip, idx) => (
                <motion.div
                  key={chip.name}
                  animate={{
                    y: [0, idx % 2 === 0 ? -6 : 6, 0],
                  }}
                  transition={{
                    duration: 3.5 + idx * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute ${chip.pos} z-20 px-3 py-1.5 rounded-full bg-[#0E1320]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.12)] flex items-center gap-1.5 text-xs font-heading font-semibold text-[#F4F6FB] pointer-events-none`}
                >
                  {chip.icon}
                  <span className="text-[11px]">{chip.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
