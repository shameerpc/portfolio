export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-14 space-y-3 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 bg-[#0E1320] border border-[#D4AF37]/25 text-[#D4AF37] font-mono text-xs uppercase tracking-widest rounded-full shadow-sm ${
            isCenter ? 'justify-center' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-[#F4F6FB] leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-base sm:text-lg text-[#9AA4BC] font-sans leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
