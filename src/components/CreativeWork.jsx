import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { cyberAudio } from '../utils/cyberAudio';

const galleryItems = [
  {
    id: 1,
    title: 'Neo Dubai 2050 Luxury Travel Campaign',
    category: 'Dubai Campaigns',
    client: 'Tourism & Aviation Key Visual Concept',
    desc: 'High-concept commercial campaign poster pairing futuristic skyline architecture with elegant Arabic typography.',
    image: '/images/creative/posters/dubai_neo_2050.jpg',
    tags: ['Key Visual', 'Arabic Calligraphy', 'Luxury Travel'],
  },
  {
    id: 2,
    title: 'Dubai Travel Agency Campaign Series',
    category: 'Dubai Campaigns',
    client: 'Al Safar Travel & Tourism Dubai',
    desc: 'Ad creative series designed to drive holiday booking inquiries across UAE and GCC expatriate communities.',
    image: '/images/creative/posters/FE536D96-D242-4733-8E9D-540C4C441F94.png',
    tags: ['Travel Ads', 'Commercial Posters', 'Meta Creative'],
  },
  {
    id: 3,
    title: 'Dubai Luxury Salon Brand Campaign',
    category: 'Salon & Beauty',
    client: 'Dubai Elite Beauty Lounge',
    desc: 'Visual branding and promotional advertising highlighting premium aesthetic treatments in Downtown Dubai.',
    image: '/images/creative/posters/D3FAF897-3B8D-43B9-BA7D-ACF1F8F9635F.png',
    tags: ['Salon Branding', 'Cosmetic Glow', 'Social Media'],
  },
  {
    id: 4,
    title: 'Radiant Aesthetics Paid Ad Creative',
    category: 'Salon & Beauty',
    client: 'Aesthetic Wellness Clinic UAE',
    desc: 'Conversion-engineered creative layout with clear value proposition tailored for Meta paid ads traffic.',
    image: '/images/creative/posters/95EFD5C6-AA2E-4AD2-A08B-EFAE7C0DB40C.png',
    tags: ['Paid Ads', 'Beauty Creative', 'High ROAS'],
  },
  {
    id: 5,
    title: 'Prestige Beauty Studio Showcase',
    category: 'Salon & Beauty',
    client: 'Velvet Hair & Skin Studio Dubai',
    desc: 'High-contrast typography and minimalist luxury composition crafted for social feed advertising.',
    image: '/images/creative/posters/73940DB6-7A23-4D70-9230-C755272D7D66.png',
    tags: ['Editorial Glamour', 'Social Branding'],
  },
  {
    id: 6,
    title: 'Luxury Hair Lounge Brand Visual',
    category: 'Salon & Beauty',
    client: 'Aura Hair Lounge UAE',
    desc: 'Refined brand identity collateral designed to enhance prestige across digital and print touchpoints.',
    image: '/images/creative/posters/73136C6D-2129-45B4-8AE0-F31C2417B22B.png',
    tags: ['Brand Identity', 'Hairstyling'],
  },
  {
    id: 7,
    title: 'VIP Aesthetics Promotional Suite',
    category: 'Salon & Beauty',
    client: 'Monarch Beauty Bar',
    desc: 'Polished salon marketing creative highlighting specialty hair and aesthetics packages.',
    image: '/images/creative/posters/35B60031-43B5-47D4-8864-34B97575C3E4.png',
    tags: ['VIP Beauty', 'Social Ad Suite'],
  },
  {
    id: 8,
    title: 'Fleet Driver Recruitment Brochure',
    category: 'Brochures & Commercial',
    client: 'TransGulf Logistics Fleet',
    desc: 'Corporate multi-page driver recruitment collateral with clear route information and structured compensation tables.',
    image: '/images/creative/posters/FE536D96-D242-4733-8E9D-540C4C441F94.png',
    tags: ['Brochure Design', 'Fleet Recruitment', 'Print Collateral'],
  },
];

const categories = ['All', 'Dubai Campaigns', 'Salon & Beauty', 'Brochures & Commercial'];

export default function CreativeWork() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);

  const filtered = filter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (index) => {
    cyberAudio.playCoin();
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    cyberAudio.playSoftClick();
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    cyberAudio.playHover();
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    cyberAudio.playHover();
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Touch swipe support
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart - e.changedTouches[0].clientX > 60) nextImage();
    if (e.changedTouches[0].clientX - touchStart > 60) prevImage();
  };

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="creative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Creative Direction"
            title={
              <>
                Commercial Posters, Campaigns &{' '}
                <span className="gold-gradient-text">Brand Collateral</span>
              </>
            }
            subtitle="High-impact visuals designed to capture customer attention and elevate brand prestige."
          />
        </Reveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                cyberAudio.playSoftClick();
                setFilter(cat);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 border ${
                filter === cat
                  ? 'bg-[#D4AF37] text-[#070A12] border-[#D4AF37] shadow-sm'
                  : 'bg-[#0E1320] border-white/10 text-[#9AA4BC] hover:text-[#F4F6FB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  onClick={() => openLightbox(idx)}
                  className="overflow-hidden group cursor-pointer p-0"
                  glow="gold"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#0E1320]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    <button
                      className="absolute top-3 right-3 p-2 rounded-full bg-[#070A12]/80 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all border border-white/10"
                      aria-label="Inspect Full Poster"
                    >
                      <FiMaximize2 size={15} />
                    </button>
                    <div className="absolute bottom-3 left-3 right-3 space-y-1">
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold font-heading text-white truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 bg-[#070A12]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl bg-[#0E1320] border border-[#D4AF37]/30 p-5 sm:p-7 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#141A2B] text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Close Lightbox"
              >
                <FiX size={18} />
              </button>

              {/* Poster View */}
              <div className="md:w-1/2 rounded-2xl overflow-hidden bg-[#070A12] border border-white/10 flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[60vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption & Specs */}
              <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold uppercase">
                    {activeItem.category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-[#9AA4BC] font-sans leading-relaxed">
                    {activeItem.desc}
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#070A12] border border-white/5 space-y-1 text-xs font-sans">
                    <div className="text-[10px] font-mono text-[#D4AF37] uppercase">CLIENT / PROJECT</div>
                    <div className="text-white font-medium">{activeItem.client}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeItem.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full bg-[#141A2B] border border-white/5 text-[11px] font-mono text-[#9AA4BC]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lightbox Prev / Next Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                  <button
                    onClick={prevImage}
                    className="flex items-center gap-1 text-[#D4AF37] hover:underline"
                  >
                    <FiChevronLeft /> Previous
                  </button>
                  <span className="text-[#9AA4BC]">
                    {lightboxIndex + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="flex items-center gap-1 text-[#D4AF37] hover:underline"
                  >
                    Next <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
