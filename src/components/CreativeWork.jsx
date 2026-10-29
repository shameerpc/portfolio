import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMaximize2, 
  FiX, 
  FiLayers, 
  FiExternalLink, 
  FiEye,
  FiAward
} from 'react-icons/fi';
import { cyberAudio } from '../utils/cyberAudio';

const posters = [
  {
    id: 1,
    title: 'Neo Dubai 2050 Luxury Travel Campaign',
    category: 'Dubai Campaigns',
    client: 'Dubai Future Tourism & Aviation Initiative',
    resolution: '4K Ultra HD (Print & Billboard)',
    software: 'Photoshop, Illustrator, Generative AI Concepting',
    desc: 'Cinematic visionary poster depicting a cybernetic Burj Khalifa, elevated hypercar skyways, Arabic typography calligraphy, and high-prestige golden lighting tailored for VIP international travel campaigns.',
    image: '/images/creative/posters/dubai_neo_2050.jpg',
    badge: 'FLAGSHIP ASSET',
    tags: ['Cyber Dubai', 'Luxury Travel', 'Arabic Calligraphy', 'Key Visual'],
  },
  {
    id: 2,
    title: 'Dubai Travel Agency Campaign Series',
    category: 'Dubai Campaigns',
    client: 'Al Safar Travel & Tourism Dubai',
    resolution: '2160 x 2700 (Instagram Ad & Transit)',
    software: 'Photoshop, Canva Pro, Typography Grid',
    desc: 'High-conversion commercial travel campaign poster designed to drive seasonal vacation package bookings across UAE and GCC expatriates.',
    image: '/images/creative/posters/FE536D96-D242-4733-8E9D-540C4C441F94.png',
    badge: 'HIGH ROAS',
    tags: ['Dubai Tourism', 'Meta Ad Creative', 'Commercial Poster'],
  },
  {
    id: 3,
    title: 'Dubai Luxury Cyber Salon Brand',
    category: 'Salon & Beauty',
    client: 'Élégance Royale Salon Dubai',
    resolution: '1080 x 1350 (Social Media & Display)',
    software: 'Photoshop, Color Grading Suite',
    desc: 'Radiant cosmetic glow visual branding highlighting premium facial rejuvenation and aesthetic treatments for high-net-worth clientele in Downtown Dubai.',
    image: '/images/creative/posters/D3FAF897-3B8D-43B9-BA7D-ACF1F8F9635F.png',
    badge: 'LUXURY BEAUTY',
    tags: ['Salon Brand', 'Cosmetic Glow', 'Social Media', 'Dubai Market'],
  },
  {
    id: 4,
    title: 'Radiant Cosmetic Glow Advertising',
    category: 'Salon & Beauty',
    client: 'Glow Aesthetics UAE',
    resolution: '1080 x 1350 (Paid Ad Creative)',
    software: 'Photoshop, Layout Studio',
    desc: 'High-engagement promotional creative engineered for Meta paid ad traffic with clear value propositions, radiant beauty lighting, and localized offers.',
    image: '/images/creative/posters/95EFD5C6-AA2E-4AD2-A08B-EFAE7C0DB40C.png',
    badge: 'CONVERSION ASSET',
    tags: ['Beauty Creative', 'Paid Meta Ads', 'Aesthetics'],
  },
  {
    id: 5,
    title: 'Prestige Beauty Promotional Creative',
    category: 'Salon & Beauty',
    client: 'Velvet Hair & Skin Studio Dubai',
    resolution: '1080 x 1350 (Instagram Feed & Stories)',
    software: 'Photoshop, Vector Accents',
    desc: 'Minimalist luxury aesthetic poster highlighting specialized salon treatments with high-contrast typography and elegant cosmetic composition.',
    image: '/images/creative/posters/73940DB6-7A23-4D70-9230-C755272D7D66.png',
    badge: 'EDITORIAL GLAMOUR',
    tags: ['Social Branding', 'Editorial Glamour', 'Salon'],
  },
  {
    id: 6,
    title: 'Luxury Salon Brand Identity Poster',
    category: 'Salon & Beauty',
    client: 'Aura Hair Lounge UAE',
    resolution: '1080 x 1350 (Brand Portfolio & Print)',
    software: 'Photoshop, Brand Identity System',
    desc: 'Sophisticated typography pairing with high-fashion salon visuals crafted to elevate brand authority across digital and retail touchpoints.',
    image: '/images/creative/posters/73136C6D-2129-45B4-8AE0-F31C2417B22B.png',
    badge: 'BRAND ASSET',
    tags: ['Brand Identity', 'Hairstyling', 'Dubai Elite'],
  },
  {
    id: 7,
    title: 'VIP Hair & Aesthetics Creative',
    category: 'Salon & Beauty',
    client: 'Monarch Beauty Bar',
    resolution: '1080 x 1350 (Social Ad Series)',
    software: 'Photoshop, Retouching Engine',
    desc: 'High-gloss salon creative highlighting specialty beauty packages with seamless typography and conversion-optimized callouts.',
    image: '/images/creative/posters/35B60031-43B5-47D4-8864-34B97575C3E4.png',
    badge: 'VIP SERIES',
    tags: ['VIP Beauty', 'Social Ad', 'Visual Campaign'],
  },
  {
    id: 8,
    title: 'Logistics & Truck Driver Recruitment Brochure',
    category: 'Commercial & Recruitment',
    client: 'TransGulf Logistics Fleet',
    resolution: 'A4 Multi-Page Print & Digital Vector PDF',
    software: 'Illustrator, InDesign, Photoshop',
    desc: 'High-visibility corporate driver recruitment brochure engineered with bold industrial typography, route maps, and structured benefits table.',
    image: '/images/creative/posters/FE536D96-D242-4733-8E9D-540C4C441F94.png',
    badge: 'FLEET RECRUITMENT',
    tags: ['Brochure Design', 'Logistics', 'Print Design', 'Fleet Growth'],
  },
  {
    id: 9,
    title: 'Performance Video & Ad Reels Suite',
    category: 'Commercial & Recruitment',
    client: 'Cross-Industry Clients // GCC',
    resolution: '1080 x 1920 (9:16 Vertical High-Bitrate Reel)',
    software: 'Premiere Pro, CapCut Pro, After Effects',
    desc: 'Dynamic pacing, energetic sound design, kinetic captions, and strategic hooks crafted to boost video completion rate and CTR on Meta and TikTok ads.',
    image: '/images/creative/posters/dubai_neo_2050.jpg',
    badge: 'MOTION SUITE',
    tags: ['CapCut', 'Premiere Pro', 'Ad Reels', 'Short-Form Video'],
  },
];

const filterTabs = [
  'All Assets',
  'Dubai Campaigns',
  'Salon & Beauty',
  'Commercial & Recruitment',
];

export default function CreativeWork() {
  const [activeTab, setActiveTab] = useState('All Assets');
  const [lightboxPoster, setLightboxPoster] = useState(null);

  const filtered = activeTab === 'All Assets'
    ? posters
    : posters.filter((p) => p.category === activeTab);

  const handleTabChange = (tab) => {
    cyberAudio.playCyberClick();
    setActiveTab(tab);
  };

  const openLightbox = (poster) => {
    cyberAudio.playTargetLock();
    setLightboxPoster(poster);
  };

  const closeLightbox = () => {
    cyberAudio.playCyberClick();
    setLightboxPoster(null);
  };

  return (
    <section className="relative py-24 bg-[#040711] overflow-hidden" id="creative">
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff007f]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ffb703]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d1527] border border-[#ff007f]/30 text-[#ff007f] font-mono text-xs uppercase tracking-widest rounded-sm">
            <FiLayers className="text-xs" />
            <span>COMMERCIAL CREATIVE DIRECTION // HIGH-CONVERTING DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-orbitron tracking-tight text-white">
            COMMERCIAL <span className="text-[#ff007f] drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]">POSTERS</span> & CAMPAIGNS
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-rajdhani">
            High-converting luxury brand assets, Dubai key visuals, beauty salon creatives, and recruitment campaigns built for commercial performance.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeTab === tab
                  ? 'bg-[#ff007f]/15 border-[#ff007f] text-[#ff007f] shadow-[0_0_15px_rgba(255,0,127,0.3)]'
                  : 'bg-[#080d1a] border-white/10 text-[#94a3b8] hover:text-white hover:border-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Poster Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((poster) => (
              <motion.div
                key={poster.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="hud-frame hud-frame-purple group rounded-lg overflow-hidden bg-[#080d1a] border-[#b026ff]/30 hover:border-[#ff007f] transition-all flex flex-col justify-between"
              >
                <div className="hud-bracket-tr" />
                <div className="hud-bracket-bl" />

                {/* Poster Image Viewport */}
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-[#030610] cursor-pointer"
                  onClick={() => openLightbox(poster)}
                >
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/creative/posters/dubai_neo_2050.jpg';
                    }}
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#040711]/85 border border-white/15 text-[10px] font-mono font-bold text-white uppercase rounded backdrop-blur-sm">
                    {poster.badge}
                  </div>

                  {/* Quick Expand Button Hover */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(poster);
                    }}
                    className="absolute top-3 right-3 p-2 bg-[#040711]/80 hover:bg-[#ff007f] text-white rounded opacity-0 group-hover:opacity-100 transition-all border border-white/10"
                    aria-label="Inspect Full Image"
                  >
                    <FiMaximize2 size={16} />
                  </button>

                  {/* Category Pill at bottom of image */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-[#00f0ff] bg-black/70 px-2 py-0.5 rounded">
                    {poster.category}
                  </div>
                </div>

                {/* Poster Meta Box */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold font-orbitron text-white leading-snug group-hover:text-[#ff007f] transition-colors">
                    {poster.title}
                  </h3>

                  <p className="text-xs text-[#94a3b8] font-rajdhani line-clamp-2">
                    {poster.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {poster.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#040711] border border-white/10 text-[10px] font-mono text-[#94a3b8] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => openLightbox(poster)}
                      className="text-xs font-mono text-[#00f0ff] hover:text-white flex items-center gap-1.5 font-bold"
                    >
                      <FiEye className="text-xs" />
                      <span>INSPECT BRIEF & SPECS</span>
                    </button>
                    <span className="text-[10px] font-mono text-[#64748b]">HD PRINT READY</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#040711]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hud-frame max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-lg bg-[#080d1a] border-[#00f0ff]/40 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hud-bracket-tr" />
              <div className="hud-bracket-bl" />

              {/* Lightbox Head Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#00f0ff]">
                  <FiAward className="text-base" />
                  <span className="font-bold tracking-wider">CREATIVE ARTIFACT DOSSIER</span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 bg-[#040711] border border-white/10 hover:border-[#ff007f] hover:text-[#ff007f] text-white rounded transition-colors"
                  aria-label="Close Lightbox"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Poster Display (6 cols) */}
                <div className="lg:col-span-6 rounded-lg overflow-hidden border border-[#00f0ff]/30 bg-[#030610] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <img
                    src={lightboxPoster.image}
                    alt={lightboxPoster.title}
                    className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                  />
                </div>

                {/* Poster Brief & Specifications (6 cols) */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <span className="px-2.5 py-1 bg-[#ff007f]/10 text-[#ff007f] border border-[#ff007f]/30 rounded text-xs font-mono font-bold uppercase">
                      {lightboxPoster.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-white mt-3 leading-snug">
                      {lightboxPoster.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#cbd5e1] font-rajdhani leading-relaxed">
                    {lightboxPoster.desc}
                  </p>

                  {/* Technical Specifications Box */}
                  <div className="p-4 bg-[#040711] border border-white/10 rounded-sm space-y-2.5 text-xs font-mono">
                    <div className="text-[10px] text-[#64748b] uppercase tracking-wider mb-1">
                      // ARTIFACT SPECIFICATIONS
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#64748b]">CLIENT / TARGET:</span>
                      <span className="text-white font-medium">{lightboxPoster.client}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#64748b]">RESOLUTION:</span>
                      <span className="text-[#00f0ff] font-medium">{lightboxPoster.resolution}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#64748b]">SOFTWARE SUITE:</span>
                      <span className="text-[#ffb703] font-medium">{lightboxPoster.software}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">STATUS:</span>
                      <span className="text-[#00ff66] font-medium">COMMERCIAL PRODUCTION APPROVED</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                      // RELEVANT DISCIPLINES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {lightboxPoster.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-[#080d1a] border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="#contact"
                      onClick={() => {
                        cyberAudio.playCyberClick();
                        closeLightbox();
                      }}
                      className="btn-cyber-primary text-xs"
                    >
                      <span>COMMISSION CAMPAIGN ASSETS</span>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
