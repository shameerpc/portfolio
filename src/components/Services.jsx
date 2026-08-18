import { motion } from 'framer-motion';
import { FiPenTool, FiCode, FiTrendingUp } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode />,
    color: 'development',
    title: 'Web Development',
    desc: 'Full-stack web applications built with the MERN stack — React.js, Node.js, Express.js, and MongoDB. Scalable APIs, real-time features, and production-ready deployments.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Socket.io'],
  },
  {
    icon: <FiPenTool />,
    color: 'creative',
    title: 'Creative Design',
    desc: 'Eye-catching poster designs, social media creatives, advertising materials, and brand visuals crafted for maximum engagement and visual impact.',
    tags: ['Poster Design', 'Social Media', 'Ad Creatives', 'Brand Identity'],
  },
  {
    icon: <FiTrendingUp />,
    color: 'marketing',
    title: 'Digital Marketing',
    desc: 'Strategic ad campaigns, video editing, SEO/SEM optimization, and analytics-driven social media management to amplify your digital presence.',
    tags: ['Facebook Ads', 'Video Editing', 'SEO/SEM', 'Google Analytics'],
  },
];

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="services-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>What I Do</div>
          <h2 className="section-title">
            Services that drive <span className="gradient-text">real results</span>
          </h2>
          <p className="section-subtitle">
            A full spectrum of creative and technical services — designed to elevate your brand and accelerate your digital growth, no matter where you are.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              className="service-card"
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={`service-icon ${s.color}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="service-tag" key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
