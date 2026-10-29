import { 
  FiMapPin, 
  FiGlobe, 
  FiClock, 
  FiCalendar, 
  FiBriefcase, 
  FiAward 
} from 'react-icons/fi';
import { SectionTitle } from './ui/SectionTitle';
import { GlassCard } from './ui/GlassCard';
import { Reveal } from './ui/Reveal';
import { useLanguage } from '../i18n';
import HiddenCoin from './extras/HiddenCoin';

const factCards = [
  {
    icon: <FiMapPin className="text-[#D4AF37]" />,
    label: 'Primary Location',
    value: 'Kerala, India · Actively Serving Qatar, UAE & Remote',
  },
  {
    icon: <FiGlobe className="text-[#22D3EE]" />,
    label: 'Languages',
    value: 'English, Malayalam, [CONFIRM: Arabic / Hindi]',
  },
  {
    icon: <FiClock className="text-[#10B981]" />,
    label: 'Response SLA',
    value: 'Within 24 business hours',
  },
  {
    icon: <FiBriefcase className="text-[#FF3D8B]" />,
    label: 'Core Focus',
    value: 'Full-Stack MERN + Luxury Ad Creatives',
  },
];

const questTimeline = [
  {
    id: 'value-fm-exp',
    period: '2025 - Present',
    role: 'Lead Full-Stack Web Architect',
    company: 'Value FM (Facility Management · Qatar & Dubai)',
    desc: 'Architected the core enterprise operations portal handling automated scheduling, asset tracking, and SLA ticketing with Redis caching.',
    tags: ['MERN', 'Redis', 'SLA Tracking', 'Enterprise SaaS'],
  },
  {
    id: 'al-shareef-exp',
    period: '2024 - 2025',
    role: 'Full-Stack Developer & Corporate Portal Engineer',
    company: 'Al Shareef Holding Group (Qatar)',
    desc: 'Built the multi-division corporate umbrella system with RBAC security, corporate sub-tenant management, and brand visual design.',
    tags: ['React.js', 'RBAC', 'Multi-Division', 'Security'],
  },
  {
    id: 'creative-director-freelance',
    period: '2023 - Present',
    role: 'Commercial Creative Director & Performance Designer',
    company: 'GCC Luxury Brands & Agency Retainers',
    desc: 'Created over 100+ commercial key visuals, Meta paid social ad assets, and corporate brochures tailored for Gulf business aesthetics.',
    tags: ['Photoshop', 'Illustrator', 'CapCut Pro', 'Meta Ads'],
  },
  {
    id: 'foundations',
    period: '2022 - 2023',
    role: 'Full-Stack Web Developer',
    company: 'Freelance & Independent SaaS',
    desc: 'Engineered production applications including Moestay Travel Admin and MyThoughtsHub publishing engine with modern JavaScript tooling.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux Toolkit'],
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="about">
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow={t('about.badge', 'Executive Profile')}
            title={
              <>
                Bridging Enterprise Engineering with{' '}
                <span className="gold-gradient-text">Commercial Creative Power</span>
              </>
            }
            subtitle={t('about.subtitle', 'Full-stack engineering paired with commercial advertising design.')}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Professional Portrait Crop & Fact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <GlassCard className="p-6 sm:p-7" glow="gold">
                {/* Clean Professional Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0B0F1C] border border-white/10 mb-5">
                  <picture>
                    <source srcSet="/images/about/shamseer-about.webp" type="image/webp" />
                    <img
                      src="/images/about/shamseer-about.jpg"
                      alt="Shamseer PC in executive attire"
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter brightness-105"
                      onError={(e) => {
                        e.currentTarget.src = '/images/about/profile.jpg';
                      }}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1320] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 start-4 end-4 text-start">
                    <div className="text-base font-heading font-bold text-white">
                      Shamseer PC
                    </div>
                    <div className="text-xs font-mono text-[#D4AF37]">
                      Full-Stack MERN Architect &amp; Creative Director
                    </div>
                  </div>
                </div>

                {/* Quick Fact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-start">
                  {factCards.map((fact) => (
                    <div
                      key={fact.label}
                      className="p-3 rounded-xl bg-[#070A12]/80 border border-white/5 space-y-1"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-[#9AA4BC]">
                        <span>{fact.icon}</span>
                        <span className="font-mono text-[10px] uppercase">{fact.label}</span>
                      </div>
                      <div className="text-xs font-sans font-medium text-[#F4F6FB] leading-snug">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Right: Authentic Narrative in Shamseer's Voice (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <Reveal delay={0.2}>
              <GlassCard className="p-7 sm:p-8 space-y-5" glow="gold">
                <div className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>THE BACKGROUND</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-snug">
                  Software that solves enterprise problems, visuals that convert high-value clients.
                </h3>

                <div className="space-y-4 text-base text-[#9AA4BC] font-sans leading-relaxed">
                  <p>
                    I operate at the intersection of engineering discipline and commercial creative direction.
                    Most companies face a disconnect: software developers rarely grasp brand positioning, while
                    graphic designers don&apos;t know how to deploy a scalable Node.js backend.
                  </p>
                  <p>
                    I bridge this gap. For enterprise clients like <strong className="text-[#F4F6FB]">Value FM</strong> and{' '}
                    <strong className="text-[#F4F6FB]">Al Shareef Holding Group</strong> in Qatar and Dubai, I design
                    robust software architectures with role-based permissions and high uptime—while simultaneously
                    producing high-end commercial visual assets, posters, and Meta ad suites that drive brand prestige.
                  </p>
                  <p>
                    Whether engineering a custom React 19 portal, deploying Redis caching, or art-directing a
                    commercial campaign, I build with business outcomes at the center.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        {/* Quest Log Career Milestones Tree */}
        <div className="mt-20 space-y-8">
          <Reveal>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#0E1320] border border-[#D4AF37]/25 text-[#D4AF37] font-mono text-xs uppercase tracking-widest rounded-full">
                <FiAward size={12} />
                <span>EXPERIENCE &amp; MILESTONES</span>
                {/* Hidden Coin 3 */}
                <HiddenCoin id="coin-about" className="ms-1" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F6FB]">
                Career Timeline &amp; Selected Milestones
              </h3>
            </div>
          </Reveal>

          {/* Vertical Timeline Tree */}
          <div className="relative border-s border-white/10 ms-4 sm:ms-8 ps-6 sm:ps-8 space-y-8 text-start">
            {questTimeline.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div className="relative group">
                  {/* Timeline Glowing Dot */}
                  <div className="absolute -start-[31px] sm:-start-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0E1320] border-2 border-[#D4AF37] group-hover:scale-125 transition-transform" />

                  <GlassCard className="p-5 sm:p-6 space-y-3" glow="gold">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] flex items-center gap-1.5">
                        <FiCalendar size={13} />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-[#9AA4BC]">
                        {item.company}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-[#F4F6FB]">
                      {item.role}
                    </h4>

                    <p className="text-sm text-[#9AA4BC] font-sans leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#070A12] border border-white/5 text-[11px] font-mono text-[#9AA4BC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
