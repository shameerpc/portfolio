import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
  ═══════════════════════════════════════════════════════════
  HOW TO ADD YOUR CREATIVE WORK
  ═══════════════════════════════════════════════════════════

  1. Place your images in:
       public/images/creative/posters/
       public/images/creative/social-media/
       public/images/creative/advertising/
       public/images/creative/brochures/

  2. Add an entry to the `projects` array below for each piece.
     - id:       unique number
     - title:    your project title
     - category: must match one of the filter labels exactly
     - desc:     short description shown on hover
     - image:    path relative to public/ (e.g. "/images/creative/posters/poster-01.jpg")

  3. Categories auto-generate from the data — just keep them consistent.
*/

const projects = [
  { id: 1, title: 'Travel Company Poster', category: 'Posters', desc: 'Ad creative poster for a Dubai-based travel company', image: '/images/creative/posters/FE536D96-D242-4733-8E9D-540C4C441F94.png' },
  { id: 2, title: 'Salon Brand Poster 1', category: 'Posters', desc: 'Social media poster design for a Dubai-based salon', image: '/images/creative/posters/D3FAF897-3B8D-43B9-BA7D-ACF1F8F9635F.png' },
  { id: 3, title: 'Salon Brand Poster 2', category: 'Posters', desc: 'Advertising creative for salon services', image: '/images/creative/posters/95EFD5C6-AA2E-4AD2-A08B-EFAE7C0DB40C.png' },
  { id: 4, title: 'Salon Brand Poster 3', category: 'Posters', desc: 'Promotional poster design for beauty services', image: '/images/creative/posters/73940DB6-7A23-4D70-9230-C755272D7D66.png' },
  { id: 5, title: 'Salon Brand Poster 4', category: 'Posters', desc: 'Social media creative for salon marketing', image: '/images/creative/posters/73136C6D-2129-45B4-8AE0-F31C2417B22B.png' },
  { id: 6, title: 'Salon Brand Poster 5', category: 'Posters', desc: 'Brand visual for Dubai salon company', image: '/images/creative/posters/35B60031-43B5-47D4-8864-34B97575C3E4.png' },
];

const allCategories = [...new Set(projects.map((p) => p.category))];
const categories = ['All', ...allCategories];

export default function CreativeWork() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="creative">
      <div className="container">
        <div className="portfolio-header">
          <div className="section-label">Creative Work</div>
          <h2 className="section-title">
            Designs that <span className="gradient-text">speak volumes</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of creative projects — posters, social media campaigns, advertising creatives, and brochure designs.
          </p>
          {categories.length > 1 && (
            <div className="portfolio-filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter-btn ${filter === c ? 'active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <motion.div
            className="portfolio-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="portfolio-empty-inner">
              <span className="portfolio-empty-icon">🎨</span>
              <h3>Work coming soon</h3>
              <p>Add your creative projects to the data array in <code>CreativeWork.jsx</code> and place images in <code>public/images/creative/</code></p>
            </div>
          </motion.div>
        ) : (
          <motion.div className="portfolio-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  className="portfolio-item"
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="portfolio-item-image">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="portfolio-item-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="portfolio-placeholder" style={{ display: 'none' }}>
                      <span className="placeholder-icon">🖼️</span>
                      <span>Add: {p.image}</span>
                    </div>
                    <div className="portfolio-item-overlay">
                      <div className="portfolio-item-info">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <span className="portfolio-item-tag">{p.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
