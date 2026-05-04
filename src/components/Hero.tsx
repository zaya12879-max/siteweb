import { ArrowRight, Star, Award } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1a2a5e]/40 blur-3xl" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 mb-8">
            <Award size={14} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.15em] uppercase">
              {t.badge}
            </span>
          </div>

          {/* Greeting */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8">
            {t.greeting}
            <span className="inline-block ml-2 animate-wave origin-[70%_70%]">👋</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#e0be6a] to-[#c9a84c]">
              ADSDO
            </span>
            <br />
            <span className="text-white">Agency</span>
          </h1>

          {/* Intro text */}
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
            {t.intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a84c] text-[#0a0f1e] font-semibold text-sm tracking-wide hover:bg-[#e0be6a] transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
            >
              {t.cta}
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wide hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-200 hover:-translate-y-0.5"
            >
              {t.secondary}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-[#c9a84c]">{stat.value}</div>
                <div className="text-white/50 text-sm mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Card */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#c9a84c]/10 rounded-3xl blur-2xl scale-110" />
            {/* Card */}
            <div className="relative bg-[#111827]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              {/* Photo placeholder */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a2a5e] to-[#0a0f1e] border border-[#c9a84c]/20 flex items-center justify-center overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="ADSDO Agency founder"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Cert badges */}
              <div className="flex gap-3">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                  <Star size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
                  <span className="text-white/80 text-xs font-semibold">Meta Certified</span>
                </div>
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                  <Star size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
                  <span className="text-white/80 text-xs font-semibold">Google Certified</span>
                </div>
              </div>

              {/* Floating tag */}
              <div className="absolute -top-4 -right-4 bg-[#c9a84c] text-[#0a0f1e] text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wide">
                9+ Years
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/60" />
      </div>
    </section>
  );
}
