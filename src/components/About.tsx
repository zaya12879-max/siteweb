import { CheckCircle, Award } from 'lucide-react';
import { Language, translations } from '../translations';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#c9a84c]/10 rounded-3xl blur-xl scale-105" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="ADSDO Agency team at work"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />

            {/* Cert badges overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1e]/80 backdrop-blur-sm border border-[#c9a84c]/30">
                <Award size={16} className="text-[#c9a84c]" />
                <span className="text-white text-sm font-semibold">{t.certBadge1}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1e]/80 backdrop-blur-sm border border-[#c9a84c]/30">
                <Award size={16} className="text-[#c9a84c]" />
                <span className="text-white text-sm font-semibold">{t.certBadge2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              {lang === 'en' ? 'About Us' : 'À Propos'}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            {t.heading}
          </h2>
          <p className="text-[#c9a84c] font-medium text-lg mb-6">{t.subheading}</p>

          <p className="text-white/60 leading-relaxed mb-5">{t.body}</p>
          <p className="text-white/60 leading-relaxed mb-8">{t.body2}</p>

          {/* Highlights */}
          <div className="space-y-3">
            {[
              lang === 'en' ? 'Meta & Google Certified Expert' : 'Experte Certifiée Meta & Google',
              lang === 'en' ? '9+ Years of Digital Marketing Experience' : "9+ Ans d'Expérience en Marketing Digital",
              lang === 'en' ? 'Full-Service Digital Agency' : 'Agence Digitale Full-Service',
              lang === 'en' ? 'Data-Driven Strategy & Execution' : 'Stratégie & Exécution Basées sur les Données',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#c9a84c] shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
