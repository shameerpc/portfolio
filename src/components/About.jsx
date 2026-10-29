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

// Fact cards data (clean business attributes)
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
    icon: <FiBriefcase className="text-[#10B981]" />,
    label: 'Engagement Model',
    value: 'Full-Stack Contracts, Fixed-Price Projects & Retainers',
  },
  {
    icon: <FiClock className="text-[#F5E6A8]" />,
    label: 'Time Zones Covered',
    value: 'GCC (GMT+3 / GMT+4), IST (GMT+5:30) & Worldwide',
  },
];

// "Quest Log" Vertical Timeline with [CONFIRM] placeholders
const questTimeline = [
  {
    id: 1,
    period: '[CONFIRM: 2023 – Present]',
    role: 'Full-Stack Developer & Creative Lead',
    company: 'Independent Practice · Qatar & UAE Enterprise Projects',
    desc: 'Delivered mission-critical web platforms including Value FM (SaaS with Redis caching), Al Shareef Holding (multi-division RBAC portal), and Moestay travel admin dashboard, while directing commercial poster campaigns.',
    tags: ['React 19', 'Node.js', 'MongoDB', 'Redis', 'Luxury Posters'],
  },
  {
    id: 2,
    period: '[CONFIRM: 2021 – 2023]',
    role: 'MERN Stack Web Developer',
    company: '[CONFIRM: Company or Agency Name / Remote Clients]',
    desc: 'Engineered RESTful APIs, scalable database schemas, authentication handshakes, and responsive user interfaces for modern web applications.',
    tags: ['React.js', 'Express', 'JWT Auth', 'Tailwind CSS'],
  },
  {
    id: 3,
    period: '[CONFIRM: 2020 – 2022]',
    role: 'Commercial Creative & Marketing Specialist',
    company: '[CONFIRM: Brand / Agency Practice]',
    desc: 'Created social media ad creative suites, commercial posters for Dubai salon brands and tourism agencies, and directed high-converting video reels.',
    tags: ['Photoshop', 'Canva Pro', 'Meta Ads', 'CapCut Pro'],
  },
  {
    id: 4,
    period: '[CONFIRM: Year of Graduation]',
    role: 'Education / Degree in Computer Science',
    company: '[CONFIRM: University / Institute Name]',
    desc: 'Core grounding in software engineering principles, algorithms, web technologies, and database design.',
    tags: ['Computer Science', 'Software Engineering'],
  },
];

export default function About() {
  return (
    <section className="relative py-28 bg-[#070A12] border-t border-white/5 overflow-hidden" id="about">
      {/* Background Soft Lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <Reveal>
          <SectionTitle
            eyebrow="Profile Overview"
            title={
              <>
                Bridging Enterprise Engineering with{' '}
                <span className="gold-gradient-text">Commercial Creative Direction</span>
              </>
            }
            subtitle="I help enterprises and agencies launch web platforms that scale reliably and visual campaigns that capture luxury market attention."
          />
        </Reveal>

        {/* Narrative & Fact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left: Second Crop of Real Photo in Glass Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <GlassCard className="p-4 sm:p-5" glow="gold">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0B0F1C] border border-white/10 mb-5">
                  <picture>
                    <source srcSet="/images/about/shamseer-about.webp" type="image/webp" />
                    <img
                      src="/images/about/shamseer-about.jpg"
                      alt="Shamseer PC in executive attire"
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter brightness-105"
                      onError={(e) => {
                        // Fallback to profile.jpg if shamseer-about.jpg is not found
                        e.currentTarget.src = '/images/about/profile.jpg';
                      }}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1320] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-base font-heading font-bold text-white">
                      Shamseer PC
                    </div>
                    <div className="text-xs font-mono text-[#D4AF37]">
                      Full-Stack MERN Architect & Creative Director
                    </div>
                  </div>
                </div>

                {/* Quick Fact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div className="lg:col-span-7 space-y-6">
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
                    I am a full-stack developer and commercial creative director. Over the past several
                    years, I have worked with businesses in Qatar, the UAE, and globally to build clean,
                    reliable web applications and high-impact visual campaigns.
                  </p>
                  <p>
                    On the technical side, my core focus is the <strong className="text-[#F4F6FB] font-semibold">MERN stack</strong> (React,
                    Node.js, Express, MongoDB), bolstered by Redis in-memory caching and custom role-based
                    access control (RBAC). I built the operations platform for <strong className="text-[#F5E6A8]">Value FM</strong> in Qatar
                    and Dubai, and architected the multi-division corporate portal for <strong className="text-[#F5E6A8]">Al Shareef Holding</strong>.
                  </p>
                  <p>
                    On the creative side, I design commercial advertising posters, social media ad
                    creatives, and recruitment materials tailored to the high expectations of Gulf
                    audiences. Having both technical and design competencies under one roof ensures your
                    product looks distinguished and performs without compromise.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        {/* "Quest Log" Vertical Timeline Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E1320] border border-[#D4AF37]/25 text-[#D4AF37] font-mono text-xs uppercase tracking-widest rounded-full">
                <FiAward size={12} />
                <span>EXPERIENCE & MILESTONES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F6FB]">
                Career Timeline & Selected Milestones
              </h3>
            </div>
          </Reveal>

          {/* Vertical Timeline Tree */}
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
            {questTimeline.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div className="relative group">
                  {/* Timeline Glowing Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0E1320] border-2 border-[#D4AF37] group-hover:scale-125 transition-transform" />

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
