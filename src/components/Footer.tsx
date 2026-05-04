import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#060b17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-widest text-white">
              ADS<span className="text-[#c9a84c]">DO</span>
            </span>
            <span className="block text-xs text-[#c9a84c]/70 font-medium tracking-[0.2em] uppercase mt-0.5 mb-4">
              Agency
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">{t.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              {lang === 'en' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#services', label: t.links.services },
                { href: '#about', label: t.links.about },
                { href: '#contact', label: t.links.contact },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-[#c9a84c] text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              {lang === 'en' ? 'Certifications' : 'Certifications'}
            </h4>
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#c9a84c]/20 bg-[#c9a84c]/5 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <span className="text-white/70 text-xs font-semibold">Meta Certified</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#c9a84c]/20 bg-[#c9a84c]/5 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <span className="text-white/70 text-xs font-semibold">Google Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{t.rights}</p>
          <a href="#" className="text-white/30 hover:text-[#c9a84c] text-xs transition-colors duration-200">
            {t.links.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
