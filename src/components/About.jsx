import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const highlights = [
  'React.js & Node.js Development',
  'MongoDB & REST API Architecture',
  'Digital Marketing & Ad Campaigns',
  'Poster & Social Media Design',
  'Video Editing & Content Creation',
  'SEO/SEM & Analytics',
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="about-image">
              <img
                src="/images/about/IMG_3144.PNG"
                alt="Shamseer PC"
                className="about-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-image-placeholder" style={{ display: 'none' }}>
                <div className="about-placeholder-initials">SP</div>
                <span>Add your photo to<br/>public/images/about/profile.jpg</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              I craft digital products that <span className="gradient-text">drive results</span>
            </h2>
            <p>
              I'm Shamseer PC — a full-stack developer and creative professional who thrives at the intersection of code and design. I specialize in the MERN stack, building scalable web applications with React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              Beyond development, I create high-impact marketing materials — from ad creatives and social media campaigns to poster designs and video content. This dual expertise lets me deliver end-to-end digital solutions that perform as good as they look.
            </p>

            <div className="about-highlights">
              {highlights.map((item, i) => (
                <motion.div
                  className="about-highlight-item"
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <span className="check"><FiCheck /></span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
