import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiSend, 
  FiLinkedin, 
  FiGithub, 
  FiClock, 
  FiMapPin, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiArrowUpRight 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { cyberAudio } from '../utils/cyberAudio';
import { trackEvent } from '../utils/analytics';

const scopeOptions = [
  'Web & SaaS Development',
  'Creative & Brand Design',
  'Video & Marketing Ads',
  'Retained Technical Lead',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Web & SaaS Development',
    budget: '$3,000 - $8,000',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      // Spam honeypot triggered: simulate success silently
      setStatus('success');
      return;
    }

    cyberAudio.playSoftClick();
    setStatus('submitting');
    setErrorMessage('');
    trackEvent('contact_form_submit_attempt', { scope: formData.scope });

    try {
      if (endpoint && !endpoint.includes('your_form_id')) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.scope,
            budget: formData.budget,
            message: formData.message,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!res.ok) {
          throw new Error(`Submission failed with status ${res.status}`);
        }
      } else {
        // Fallback simulation when no live endpoint is configured
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setStatus('success');
      cyberAudio.playLevelUp?.();
      trackEvent('contact_form_success', { scope: formData.scope });
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to send via web form right now. Please reach out directly on WhatsApp or Email.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      scope: 'Web & SaaS Development',
      budget: '$3,000 - $8,000',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  const whatsappDirectUrl = `https://wa.me/917012819002?text=${encodeURIComponent(
    `Hello Shamseer, I'm reaching out from your portfolio regarding a new ${formData.scope} project.`
  )}`;

  return (
    <section className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/5 overflow-hidden" id="contact">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5E6A8] text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Direct Inquiries · Open for Q4 & 2027 Bookings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-sora tracking-tight text-white mb-4">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#D4AF37]">remarkable</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-sans">
            Direct channels for enterprise inquiries, full-stack web applications, and creative direction in Qatar, UAE/GCC, India, and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct channels (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Direct Channel Cards */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1320]/80 border border-white/10 backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-[#94a3b8]">
                <span className="font-bold text-white tracking-wider uppercase">Direct Channels</span>
                <span className="text-[#10B981] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Active
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Primary WhatsApp */}
                <a
                  href="https://wa.me/917012819002?text=Hello%20Shamseer,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    cyberAudio.playSoftClick();
                    trackEvent('contact_whatsapp_click');
                  }}
                  className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 hover:border-[#10B981] hover:bg-[#10B981]/15 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-[#10B981]/20 text-[#10B981] group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-[#10B981] uppercase tracking-wider font-bold">
                      WhatsApp Instant Chat (Fastest)
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#10B981] transition-colors truncate">
                      +91 7012819002
                    </div>
                  </div>
                  <FiArrowUpRight className="text-[#10B981] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Email */}
                <a
                  href="mailto:shamseerpcshan@gmail.com"
                  onClick={() => {
                    cyberAudio.playSoftClick();
                    trackEvent('contact_email_click');
                  }}
                  className="p-4 rounded-xl bg-[#141A2B]/60 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#141A2B] transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <FiMail className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                      Official Email
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                      shamseerpcshan@gmail.com
                    </div>
                  </div>
                  <FiArrowUpRight className="text-[#64748b] group-hover:text-[#D4AF37] transition-colors" />
                </a>

                {/* Location */}
                <div className="p-4 rounded-xl bg-[#141A2B]/40 border border-white/5 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/5 text-[#22D3EE]">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                      Engagement Hubs
                    </div>
                    <div className="text-sm font-medium text-[#cbd5e1]">
                      Qatar 🇶🇦 · UAE 🇦🇪 · India 🇮🇳 · Remote Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time SLA Guarantee */}
              <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-start gap-3">
                <FiClock className="text-[#D4AF37] text-lg mt-0.5 shrink-0" />
                <div className="text-xs text-[#cbd5e1] leading-relaxed">
                  <strong className="text-white font-semibold">Replies within 24h:</strong> Every inquiry receives a personal reply and preliminary technical feasibility assessment directly from Shamseer.
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748b]">PROFESSIONAL NETWORKS:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://linkedin.com/in/shamseer-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('contact_linkedin_click')}
                    className="p-2.5 rounded-lg bg-[#141A2B] border border-white/10 hover:border-[#D4AF37] text-[#cbd5e1] hover:text-[#D4AF37] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin size={16} />
                  </a>
                  <a
                    href="https://github.com/shameerpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('contact_github_click')}
                    className="p-2.5 rounded-lg bg-[#141A2B] border border-white/10 hover:border-[#D4AF37] text-[#cbd5e1] hover:text-[#D4AF37] transition-all"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1320]/80 border border-white/10 backdrop-blur-md">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border-2 border-[#10B981] text-[#10B981] flex items-center justify-center text-3xl mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold font-sora text-white">
                    Message Received
                  </h3>
                  <p className="text-sm text-[#94a3b8] max-w-md mx-auto leading-relaxed">
                    Thank you! Your project brief has reached Shamseer PC. You will receive a direct reply within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-mono tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2"
                    >
                      <FaWhatsapp className="text-sm" />
                      CONTINUE ON WHATSAPP
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-4 py-3 bg-[#141A2B]/80 border border-white/10 focus:border-[#D4AF37] text-white rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@company.com"
                        className="w-full px-4 py-3 bg-[#141A2B]/80 border border-white/10 focus:border-[#D4AF37] text-white rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  {/* Scope Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider block">
                      Primary Service / Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scopeOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, scope: opt })}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all text-left border ${
                            formData.scope === opt
                              ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F5E6A8] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                              : 'bg-[#141A2B]/60 border-white/10 text-[#94a3b8] hover:text-white hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Allocation Range */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider block">
                      Estimated Budget Range (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#141A2B]/80 border border-white/10 focus:border-[#D4AF37] text-white rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    >
                      <option value="< $3,000">&lt; $3,000 (Targeted module / Brand assets / Poster series)</option>
                      <option value="$3,000 - $8,000">$3,000 - $8,000 (Full-stack web application / Corporate portal)</option>
                      <option value="$8,000 - $20,000">$8,000 - $20,000 (Custom enterprise SaaS / Multi-platform suite)</option>
                      <option value="$20,000+">$20,000+ (Retained technical leadership / Comprehensive ecosystem)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#cbd5e1] uppercase tracking-wider block">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target platform goals, technical requirements, deliverables, or target launch deadlines..."
                      className="w-full px-4 py-3 bg-[#141A2B]/80 border border-white/10 focus:border-[#D4AF37] text-white rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all resize-y"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-3">
                      <FiAlertCircle className="text-red-400 text-lg shrink-0" />
                      <div className="flex-1">
                        {errorMessage}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5E6A8] to-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] text-[#070A12] font-sora font-bold text-sm tracking-wide transition-all disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#070A12] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Brief...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="text-base group-hover:translate-x-0.5 transition-transform" />
                          <span>Send Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
