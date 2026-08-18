import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPenTool, FiCode, FiVideo, FiLayout } from 'react-icons/fi';

const categories = [
  {
    title: 'MERN Stack',
    icon: <FiCode />,
    color: 'var(--accent-secondary)',
    skills: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FiLayout />,
    color: 'var(--accent)',
    skills: ['Redis', 'Socket.io', 'JWT Auth', 'Razorpay', 'Git & GitHub', 'Tailwind CSS'],
  },
  {
    title: 'Creative Design',
    icon: <FiPenTool />,
    color: 'var(--accent-light)',
    skills: ['Canva Pro', 'Poster Design', 'Social Media Design', 'Ad Creatives', 'Brand Identity'],
  },
  {
    title: 'Digital Marketing',
    icon: <FiVideo />,
    color: 'var(--accent-warm)',
    skills: ['Facebook Ads Manager', 'Google Analytics', 'CapCut', 'Video Editing', 'SEO/SEM'],
  },
];

function SkillItem({ name, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="skill-item" ref={ref}>
      <motion.div
        className="skill-item-pill"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay, duration: 0.4 }}
      >
        <span className="skill-item-dot" />
        <span className="skill-item-name">{name}</span>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Skills & Expertise</div>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning full-stack development, creative design, and digital marketing — ready for any project scale.
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <motion.div
              className="skill-category"
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: ci * 0.1, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3>
                <span className="cat-icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                  {cat.icon}
                </span>
                {cat.title}
              </h3>
              {cat.skills.map((s, si) => (
                <SkillItem
                  key={s}
                  name={s}
                  delay={ci * 0.1 + si * 0.06}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
