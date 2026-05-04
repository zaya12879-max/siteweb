import { Code2, TrendingUp, Megaphone, FileText, Search, Users } from 'lucide-react';
import { Language, translations } from '../translations';

interface ServicesProps {
  lang: Language;
}

const icons = [Code2, TrendingUp, Megaphone, FileText, Search, Users];

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;

  return (
    <section id="services" className="py-28 bg-[#080d1a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#c9a84c]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              {t.heading}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.heading}</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">{t.subheading}</p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative bg-[#0f1629] border border-white/8 rounded-2xl p-8 hover:border-[#c9a84c]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c9a84c]/5 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-6 group-hover:bg-[#c9a84c]/15 transition-colors duration-300">
                  <Icon size={22} className="text-[#c9a84c]" />
                </div>

                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-white/3 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#c9a84c] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#c9a84c]/40 to-transparent transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
