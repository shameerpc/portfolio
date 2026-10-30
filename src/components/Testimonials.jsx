import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { FaQuoteLeft } from 'react-icons/fa';

const clients = [
  { name: 'Value FM', tag: 'Facility Management SaaS · Qatar & Dubai' },
  { name: 'Al Shareef Holding', tag: 'Multi-Division Conglomerate · Qatar' },
  { name: 'Moestay', tag: 'Travel Booking Administration Dashboard' },
  { name: 'MyThoughtsHub', tag: 'Digital Editorial & Publishing Web App' },
];

const testimonials = [
  {
    id: 1,
    client: 'Value FM Platform',
    location: 'Qatar & Dubai',
    role: 'Operations & Maintenance Management',
    quote: '[CONFIRM — Add verified client testimonial from Value FM regarding the facility management SaaS dispatch system, Redis caching, and operational speed across commercial properties]',
  },
  {
    id: 2,
    client: 'Al Shareef Holding Group',
    location: 'Doha, Qatar',
    role: 'Corporate Technology & Operations',
    quote: '[CONFIRM — Add verified client testimonial from Al Shareef Holding regarding the multi-division enterprise portal, custom RBAC authorization, and executive reporting workflows]',
  },
  {
    id: 3,
    client: 'Moestay Platform',
    location: 'International / Remote',
    role: 'Product Management',
    quote: '[CONFIRM — Add verified client testimonial from Moestay regarding the travel booking admin dashboard, real-time inventory oversight, and Redux Toolkit state architecture]',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="testimonials">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Client Trust & Collaboration"
            title={
              <>
                Client Partnerships &{' '}
                <span className="gold-gradient-text">Verified Feedback</span>
              </>
            }
            subtitle="Real business relationships built on engineering reliability and commercial visual excellence."
          />
        </Reveal>

        {/* Client Logo Strip */}
        <Reveal delay={0.1}>
          <div className="p-6 rounded-2xl bg-[#0E1320]/70 border border-white/5 mb-14">
            <div className="text-[10px] font-mono text-[#9AA4BC] uppercase tracking-widest text-center mb-5">
              ORGANIZATIONS & PLATFORMS SERVED IN THE GCC & GLOBALLY
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {clients.map((c) => (
                <div key={c.name} className="p-3.5 rounded-xl bg-[#070A12]/80 border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="text-sm font-heading font-bold text-[#F4F6FB]">{c.name}</div>
                  <div className="text-[10px] font-sans text-[#9AA4BC] mt-0.5">{c.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonials Grid with [CONFIRM] placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={t.id} delay={0.15 + idx * 0.1}>
              <GlassCard className="p-6 sm:p-7 flex flex-col justify-between h-full" glow="gold">
                <div className="space-y-4">
                  <FaQuoteLeft className="text-[#D4AF37]/50 text-xl" />
                  <p className="text-xs sm:text-sm text-[#F4F6FB]/85 font-sans italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                  <div>
                    <h5 className="font-heading font-bold text-white text-sm">
                      {t.client}
                    </h5>
                    <span className="text-[11px] text-[#9AA4BC] block">{t.role}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    {t.location}
                  </span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
