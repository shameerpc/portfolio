import { motion } from 'framer-motion';
import { FiFileText, FiDownload } from 'react-icons/fi';

const brochures = [
  {
    id: 1,
    title: 'Truck Driver Recruitment Brochure',
    desc: 'Professional brochure design for a truck driver recruitment campaign — clean layout, bold typography, and clear visual hierarchy.',
    file: '#', // Replace with your Google Drive / external link
  },
];

export default function Brochure() {
  return (
    <section className="section" id="brochure">
      <div className="container">
        <div className="services-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Brochure Design</div>
          <h2 className="section-title">
            Print & digital <span className="gradient-text">brochures</span>
          </h2>
          <p className="section-subtitle">
            Professionally designed brochures that communicate brand stories with clarity and visual impact.
          </p>
        </div>

        <div className="brochure-showcase">
          {brochures.map((b, i) => (
            <motion.div
              className="brochure-showcase-card"
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="brochure-showcase-preview">
                <div className="brochure-showcase-icon">
                  <FiFileText />
                </div>
                <div className="brochure-showcase-info">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
              <a
                href={b.file}
                className="brochure-showcase-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload /> View Brochure
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
