import { useState, FormEvent } from 'react';
import { Send, Mail, User, MessageSquare, Briefcase } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactProps {
  lang: Language;
}

// Replace with your n8n webhook URL when ready
const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

async function sendToN8nWebhook(data: FormData): Promise<void> {
  if (N8N_WEBHOOK_URL === 'YOUR_N8N_WEBHOOK_URL_HERE') {
    // Webhook not configured yet — simulate success in dev
    await new Promise((r) => setTimeout(r, 800));
    return;
  }
  const res = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Webhook request failed');
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const [form, setForm] = useState<FormData>({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendToN8nWebhook(form);
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full bg-[#0f1629] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200';

  return (
    <section id="contact" className="py-28 bg-[#080d1a] relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Copy */}
        <div className="lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              {lang === 'en' ? 'Contact' : 'Contact'}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{t.heading}</h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">{t.subheading}</p>

          {/* Contact info */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                label: lang === 'en' ? 'Email Us' : 'Envoyez-nous un Email',
                value: 'contact@adsdo.agency',
              },
              {
                icon: Briefcase,
                label: lang === 'en' ? 'Business Hours' : 'Heures d\'Ouverture',
                value: lang === 'en' ? 'Mon – Fri, 9am – 6pm' : 'Lun – Ven, 9h – 18h',
              },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-wide">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-[#0f1629] border border-white/8 rounded-3xl p-8 lg:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center">
                <Send size={28} className="text-[#c9a84c]" />
              </div>
              <p className="text-white font-semibold text-lg">{t.success}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-[#c9a84c] text-sm underline underline-offset-2 hover:text-[#e0be6a] transition-colors"
              >
                {lang === 'en' ? 'Send another message' : 'Envoyer un autre message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white/60 text-xs font-medium tracking-wide mb-2 uppercase">
                  <User size={12} className="inline mr-1.5 opacity-60" />
                  {t.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.fields.placeholder_name}
                  className={inputBase}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-xs font-medium tracking-wide mb-2 uppercase">
                  <Mail size={12} className="inline mr-1.5 opacity-60" />
                  {t.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.fields.placeholder_email}
                  className={inputBase}
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-white/60 text-xs font-medium tracking-wide mb-2 uppercase">
                  <Briefcase size={12} className="inline mr-1.5 opacity-60" />
                  {t.fields.service}
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputBase} cursor-pointer`}
                >
                  <option value="" disabled>{t.fields.service_default}</option>
                  {t.fields.services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 text-xs font-medium tracking-wide mb-2 uppercase">
                  <MessageSquare size={12} className="inline mr-1.5 opacity-60" />
                  {t.fields.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.fields.placeholder_message}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-red-400 text-sm">{t.error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#c9a84c] text-[#0a0f1e] font-semibold text-sm tracking-wide hover:bg-[#e0be6a] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/20"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0a0f1e]/30 border-t-[#0a0f1e] rounded-full animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t.submit}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
