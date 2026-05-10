import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const secteurs = [
  'Mines et Ressources', 'Construction et BTP', 'Banque et Finance',
  'Assurance et Courtage', 'Agriculture et Agro-industrie', 'ONG et Organisations',
  'Commerce et Distribution', 'Cabinet Professionnel', 'Autre',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '', entreprise: '', telephone: '', email: '', secteur: 'Mines et Ressources', besoin: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      if (supabase) {
        const { error } = await supabase.from('leads').insert([{
          ...formData, status: 'nouveau', source: 'website',
        }]);
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 1500));
      }
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage("Une erreur est survenue. Réessayez ou contactez-nous via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="bg-paper section-y scroll-mt-20">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">// 08 — Contact</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-md max-w-2xl">
              Parlons de votre projet.{' '}
              <em className="accent-italic">Premier audit gratuit</em>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Founder column */}
          <div className="lg:col-span-5">
            <p className="body-md text-slate mb-12 max-w-md">
              Décrivez-nous votre défi opérationnel en quelques lignes. Darius vous répond personnellement sous 24 heures sur WhatsApp.
            </p>

            <div className="flex flex-col items-center sm:items-start mb-12">
              <div className="w-[180px] h-[180px] rounded-full border-[3px] border-copper bg-cream mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src="/founder.jpg"
                  alt="Darius Tshibangu, fondateur LUBIRA AI"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-sans font-semibold text-[18px] text-ink">Darius Tshibangu</h3>
                <p className="num-tag mb-4">// Fondateur & CEO</p>
                <p className="body-sm text-slate max-w-sm mb-6">
                  Congolais. Bâtisseur de solutions IA pour les entreprises de Lubumbashi et de toute la RDC.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 body-sm text-ink hover:text-copper-deep transition-colors"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href="mailto:contact@lubira.ai" className="body-sm text-ink hover:text-copper-deep transition-colors">
                    contact@lubira.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {['Vous soumettez le formulaire', 'Audit gratuit planifié sous 24h', 'Solution livrée en 48h'].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="num-tag">// 0{i + 1}</span>
                  <span className="body-sm text-ink">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="bg-paper border border-ink/10 border-t-[3px] border-t-copper rounded-2xl p-8 md:p-10 shadow-sm">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-success mb-6" />
                  <h3 className="font-serif text-[28px] text-ink mb-2">
                    Merci {formData.nom.split(' ')[0]}.
                  </h3>
                  <p className="body-md text-slate mb-1">Votre demande a été enregistrée.</p>
                  <p className="body-md text-slate">Darius vous répond sous 24h sur WhatsApp.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Nom complet *" name="nom" value={formData.nom} onChange={handleChange} required />
                    <Field label="Entreprise *" name="entreprise" value={formData.entreprise} onChange={handleChange} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Téléphone WhatsApp *" name="telephone" type="tel" placeholder="+243 XXX XXX XXX" value={formData.telephone} onChange={handleChange} required />
                    <Field label="Email professionnel *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="secteur" className="block font-sans font-semibold text-[13px] text-ink">Secteur d'activité *</label>
                    <select
                      required id="secteur" name="secteur" value={formData.secteur} onChange={handleChange}
                      className="w-full p-3 border border-ink/15 rounded-md focus:border-copper outline-none font-sans text-[14px] bg-paper"
                    >
                      {secteurs.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="besoin" className="block font-sans font-semibold text-[13px] text-ink">Décrivez votre besoin principal</label>
                    <textarea
                      id="besoin" name="besoin" rows={4}
                      placeholder="Notre équipe passe 5h/semaine à rédiger des rapports manuellement…"
                      value={formData.besoin} onChange={handleChange}
                      className="w-full p-3 border border-ink/15 rounded-md focus:border-copper outline-none font-sans text-[14px] resize-none"
                    />
                  </div>

                  {status === 'error' && <p className="text-error font-sans text-[13px]">{errorMessage}</p>}

                  <button
                    type="submit" disabled={status === 'submitting'}
                    className="w-full py-4 rounded-md bg-copper text-paper font-sans font-medium text-[15px] hover:bg-copper-deep transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours…</>
                    ) : (
                      <>Envoyer ma demande d'audit gratuit <ArrowUpRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-sans font-semibold text-[13px] text-ink">{label}</label>
      <input
        required={required} type={type} id={name} name={name}
        placeholder={placeholder} value={value} onChange={onChange}
        className="w-full p-3 border border-ink/15 rounded-md focus:border-copper outline-none font-sans text-[14px] bg-paper transition-colors"
      />
    </div>
  );
}
