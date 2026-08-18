import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Let's build something <span className="gradient-text">remarkable</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 64px', textAlign: 'center' }}>
          Have a project in mind? Whether it's a web application, brand design, or digital campaign — I'd love to hear about it.
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h3>Contact Information</h3>
            <p>
              I'm available for freelance projects, full-time remote roles, and creative collaborations worldwide. Let's discuss how I can help bring your vision to life.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon"><FiMail /></div>
                <div className="contact-method-text">
                  <div className="label">Email</div>
                  <div className="value">shamseerpcshan@gmail.com</div>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon"><FiPhone /></div>
                <div className="contact-method-text">
                  <div className="label">Phone</div>
                  <div className="value">+91 7012819002</div>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon"><FiMapPin /></div>
                <div className="contact-method-text">
                  <div className="label">Location</div>
                  <div className="value">Available Worldwide (Remote)</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com/in/shamseer-tech" className="contact-social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://github.com/shameerpc" className="contact-social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Web Development</option>
                <option>Creative Design</option>
                <option>Digital Marketing</option>
                <option>Full Package</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" placeholder="Tell me about your project, goals, and timeline..." rows="5" />
            </div>
            <button type="submit" className="form-submit">
              Send Message <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
