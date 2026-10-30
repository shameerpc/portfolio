import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaWhatsapp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMeta, SiGooglegemini } from 'react-icons/si';
import { cyberAudio } from '../utils/cyberAudio';
import { Button } from './ui/Button';
import { useLanguage } from '../i18n';
import { useGame } from '../context';
import HiddenCoin from './extras/HiddenCoin';
import MagneticButton from './extras/MagneticButton';
import { trackEvent } from '../utils/analytics';

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
  { name: 'React 19', icon: <FaReact className="text-[#22D3EE]" />, pos: 'top-2 -start-6 sm:-start-8' },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#10B981]" />, pos: 'top-1/3 -end-6 sm:-end-8' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#10B981]" />, pos: 'bottom-24 -start-6 sm:-start-8' },
  { name: 'ChatGPT & Gemini AI', icon: <SiGooglegemini className="text-[#22D3EE]" />, pos: '-bottom-3 end-8' },
  { name: 'Meta Ads', icon: <SiMeta className="text-[#3b82f6]" />, pos: 'bottom-8 -end-4 sm:-end-6' },
];

export default function Hero() {
  const { t } = useLanguage();
  const { playerClass, unlockAchievement } = useGame();
  const [, setMousePos] = useState({ x: 0, y: 0 });
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

  // Class-based primary CTA target and text
  const primaryCta = {
    developer: {
      text: t('hero.ctaWorkDev', 'Inspect Web & SaaS Systems'),
      href: '#webdev',
    },
    creative: {
      text: t('hero.ctaWorkCreative', 'See My Creative Work'),
      href: '#creative',
    },
    full_package: {
      text: t('hero.ctaWorkDefault', 'View Selected Work'),
      href: '#webdev',
    },
  }[playerClass] || {
    text: t('hero.ctaWorkDefault', 'View Selected Work'),
    href: '#webdev',
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#070A12]"
    >
      {/* Soft Ambient Radial Halos */}
      <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-[450px] h-[450px] bg-[#22D3EE]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-start">
            {/* Gold Status Pill + Hidden Coin #1 */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1320] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] shadow-[0_2px_12px_rgba(212,175,55,0.12)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>{t('hero.status', 'Available for Select Projects · Qatar, UAE & Worldwide')}</span>
              </motion.div>

              {/* Hidden Coin 1 */}
              <HiddenCoin id="coin-hero" />
            </div>

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
                {t('hero.tagline', 'Engineering enterprise-grade web applications and high-impact luxury brand campaigns for industry leaders in Qatar, Dubai, and worldwide.')}
              </p>
            </motion.div>

            {/* Primary Action Button Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <MagneticButton>
                <Button
                  as="a"
                  href={primaryCta.href}
                  variant="primary"
                  size="md"
                  onClick={() => cyberAudio.playSoftClick?.()}
                  iconRight={<FiArrowRight className="text-xs rtl:rotate-180" />}
                >
                  {primaryCta.text}
                </Button>
              </MagneticButton>

              <Button
                as="a"
                href="/cv/Shamseer-PC-CV.pdf"
                download="Shamseer-PC-CV.pdf"
                variant="glass"
                size="md"
                onClick={() => {
                  cyberAudio.playCoin?.();
                  trackEvent('cv_download', { source: 'hero' });
                  unlockAchievement('recruiter');
                }}
                icon={<FiDownload className="text-sm text-[#D4AF37]" />}
              >
                <span>{t('cv.downloadPdf', 'Download CV')}</span>
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
                onClick={() => {
                  cyberAudio.playSoftClick?.();
                  trackEvent('whatsapp_click', { source: 'hero' });
                  unlockAchievement('connected');
                }}
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
                <span>{t('hero.trustedBy', 'TRUSTED BY REAL PLATFORMS IN THE GCC')}</span>
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
                    <div className="text-lg sm:text-xl font-black font-heading text-[#F4F6FB]">
                      {st.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#9AA4BC]">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Shamseer's Real Photo with Gold Glow Ring & Orbiting Tech Chips (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="relative w-[280px] sm:w-[340px] xl:w-[380px] aspect-square"
            >
              {/* Outer Golden Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 via-[#F5E6A8]/10 to-transparent blur-2xl pointer-events-none" />

              {/* Rotating Gold Accent Ring */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/25 animate-spin-slow pointer-events-none" />

              {/* Main Photo Container */}
              <div
                className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-b from-[#D4AF37]/40 via-white/5 to-[#0E1320] shadow-[0_0_50px_rgba(212,175,55,0.2)] group cursor-pointer"
                onClick={() => {
                  cyberAudio.playSoftClick?.();
                  setIsEasterEgg(!isEasterEgg);
                }}
                title="Click to toggle portrait style"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0D18] relative">
                  <picture>
                    <source srcSet="/images/about/shamseer-photo.webp" type="image/webp" />
                    <img
                      src={
                        isEasterEgg
                          ? '/images/about/avatar_cyber.jpg'
                          : '/images/about/shamseer-photo.jpg'
                      }
                      alt="Shamseer PC - Full-Stack Developer & Creative Director"
                      width="400"
                      height="400"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/images/about/profile.jpg';
                      }}
                    />
                  </picture>

                  {/* Dark Vignette Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Orbiting Tech Chips */}
              {floatingChips.map((chip, idx) => (
                <motion.div
                  key={chip.name}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + idx * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute ${chip.pos} z-20 px-3 py-1.5 rounded-full bg-[#0E1320]/90 border border-white/10 hover:border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2 text-xs font-mono text-[#F4F6FB] transition-colors`}
                >
                  <span className="text-sm">{chip.icon}</span>
                  <span className="hidden sm:inline font-semibold">{chip.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
