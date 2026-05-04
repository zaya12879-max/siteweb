import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: t.services },
    { href: '#about', label: t.about },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-widest text-white">
              ADS<span className="text-[#c9a84c]">DO</span>
            </span>
            <span className="text-xs text-[#c9a84c] font-medium tracking-[0.2em] uppercase opacity-80">Agency</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-[#c9a84c] tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-widest transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-[#c9a84c] text-[#0a0f1e]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-widest transition-all duration-200 ${
                  lang === 'fr'
                    ? 'bg-[#c9a84c] text-[#0a0f1e]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#c9a84c] text-[#0a0f1e] text-sm font-semibold tracking-wide hover:bg-[#e0be6a] transition-colors duration-200"
            >
              {t.cta}
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0f1e]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#c9a84c] font-medium tracking-wide transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#c9a84c] text-[#0a0f1e] text-sm font-semibold tracking-wide hover:bg-[#e0be6a] transition-colors mt-2"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
