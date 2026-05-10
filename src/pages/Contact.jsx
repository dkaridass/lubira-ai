import { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact — Demandez votre audit IA gratuit"
        description="Contactez LUBIRA AI à Lubumbashi, RDC. Premier audit gratuit, réponse en 2 heures."
        path="/contact" />
      <ContactForm />
    </>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '', email: '', entreprise: '', secteur: '', service: '', description: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.nom.trim()) e.nom = 'Le nom est requis';
    if (!formData.email.trim()) e.email = "L'email est requis";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = 'Email invalide';
    if (!formData.entreprise.trim()) e.entreprise = "L'entreprise est requise";
    if (!formData.secteur) e.secteur = 'Veuillez sélectionner un secteur';
    if (!formData.service) e.service = 'Veuillez sélectionner un service';
    if (!formData.description.trim()) e.description = 'Veuillez décrire votre besoin';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch('https://formsubmit.co/ajax/dariustshibang53@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.nom, email: formData.email, company: formData.entreprise,
          sector: formData.secteur, service: formData.service, message: formData.description,
          _subject: `[LUBIRA AI] Nouvelle demande de ${formData.nom} — ${formData.entreprise}`,
          _template: 'table',
        }),
      });
      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({ nom: '', email: '', entreprise: '', secteur: '', service: '', description: '' });
      } else { setSubmitError(true); }
    } catch { setSubmitError(true); } finally { setIsSubmitting(false); }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: null }));
  };

  return (
    <div className="w-full bg-paper pb-24">
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container-x">
          <AnimatedSection borderLeft className="max-w-3xl">
            <span className="eyebrow">// Contact</span>
            <h1 className="display-lg mt-6 mb-6">
              Parlons de<br/>
              <em className="accent-italic">votre projet</em>.
            </h1>
            <p className="body-lg text-slate">
              Premier audit gratuit et sans engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two-column layout */}
      <section>
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-copper"></span>
                  </span>
                  <span className="num-tag text-success">// Disponible maintenant</span>
                </div>

                <div className="space-y-6 mb-16">
                  <div className="pl-6 border-l-[3px] border-copper">
                    <p className="font-serif text-[20px] text-ink mb-1">Lubumbashi, RDC</p>
                    <p className="body-sm text-slate">Siège social</p>
                  </div>

                  <div className="pl-6 border-l-[3px] border-copper">
                    <a href="mailto:contact@lubira.ai" className="font-serif text-[20px] text-ink hover:text-copper-deep transition-colors block mb-1">
                      contact@lubira.ai
                    </a>
                    <p className="body-sm text-slate">Réponse en moins de 2 heures</p>
                  </div>

                  <div className="pl-6 border-l-[3px] border-copper pt-2">
                    <a href="https://wa.me/243995974770" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-success text-paper font-sans font-medium text-[14px] rounded-md hover:opacity-90 transition-opacity">
                      <MessageCircle className="w-4 h-4" /> Discuter sur WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <p className="num-tag mb-6 text-slate">// Notre processus</p>
                  <div className="space-y-6">
                    {[
                      { n: '01', t: 'Vous nous contactez',     d: 'Remplissez le formulaire ou envoyez un message.' },
                      { n: '02', t: 'Audit gratuit sous 24h',  d: 'Un expert analyse votre problème spécifique.' },
                      { n: '03', t: 'Solution livrée en 48h',  d: 'Déploiement et intégration dans vos opérations.' },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-5">
                        <span className="font-serif text-copper-deep text-[24px] leading-none">{s.n}</span>
                        <div>
                          <h4 className="font-sans font-semibold text-ink text-[15px] mb-1">{s.t}</h4>
                          <p className="body-sm text-slate">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - form */}
            <div className="lg:col-span-7">
              <AnimatedCard hoverEffect={false}
                className="bg-paper border border-ink/10 border-t-[3px] border-t-copper rounded-2xl p-8 md:p-10">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-cream border border-ink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-copper-deep font-serif text-[32px]">✓</span>
                    </div>
                    <h3 className="font-serif text-[28px] text-ink mb-4">Demande envoyée</h3>
                    <p className="body-md text-slate mb-8">
                      Nous avons bien reçu votre demande. Un expert LUBIRA AI vous contactera sous 2 heures.
                    </p>
                    <button onClick={() => setSubmitSuccess(false)} className="btn-secondary">
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <CField label="Nom complet" name="nom" placeholder="Jean Dupont"
                        value={formData.nom} error={errors.nom} onChange={handleChange} />
                      <CField label="Email professionnel" name="email" type="email" placeholder="jean@entreprise.cd"
                        value={formData.email} error={errors.email} onChange={handleChange} />
                    </div>

                    <CField label="Nom de l'entreprise" name="entreprise" placeholder="Votre Entreprise SARL"
                      value={formData.entreprise} error={errors.entreprise} onChange={handleChange} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <CSelect label="Secteur d'activité" name="secteur"
                        value={formData.secteur} error={errors.secteur} onChange={handleChange}
                        options={[
                          ['', 'Sélectionner…'], ['Mines', 'Secteur minier'], ['Logistique', 'Logistique & Transport'],
                          ['Banque', 'Banque & Finance'], ['ONG', 'ONG & Institutions'], ['Autre', 'Autre'],
                        ]} />
                      <CSelect label="Service souhaité" name="service"
                        value={formData.service} error={errors.service} onChange={handleChange}
                        options={[
                          ['', 'Sélectionner…'],
                          ['Automatisation', 'Automatisation des processus'],
                          ['Agents IA', 'Agents IA sur mesure'],
                          ['Doc Intelligence', 'Intelligence documentaire'],
                          ['WhatsApp', 'Bots WhatsApp Business'],
                          ['Dashboard', 'Tableaux de bord'],
                          ['Conformité', 'Conformité & traçabilité'],
                          ['Audit', 'Audit stratégique'],
                          ['Autre', "Je ne suis pas sûr"],
                        ]} />
                    </div>

                    <div>
                      <label className="block font-sans font-semibold text-[13px] text-ink mb-2">Décrivez votre besoin</label>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows="5"
                        placeholder="Expliquez-nous brièvement le processus qui vous fait perdre du temps ou de l'argent…"
                        className={`w-full bg-cream border ${errors.description ? 'border-error' : 'border-ink/15'} rounded-md px-4 py-3 text-[14px] focus:outline-none focus:border-copper transition-colors resize-none`} />
                      {errors.description && <p className="text-error text-[12px] mt-1">{errors.description}</p>}
                    </div>

                    {submitError && (
                      <div className="p-4 bg-cream border border-error rounded-md text-error text-[14px] text-center">
                        Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.
                      </div>
                    )}

                    <button type="submit" disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-copper text-paper font-sans font-medium text-[15px] rounded-md hover:bg-copper-deep transition-colors disabled:opacity-70">
                      {isSubmitting ? 'Envoi en cours…' : <>Envoyer ma demande <ArrowUpRight className="w-4 h-4" /></>}
                    </button>
                    <p className="text-center body-sm text-slate">
                      Audit gratuit garanti. Réponse sous 2 heures.
                    </p>
                  </form>
                )}
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CField({ label, name, type = 'text', placeholder, value, error, onChange }) {
  return (
    <div>
      <label className="block font-sans font-semibold text-[13px] text-ink mb-2">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className={`w-full bg-cream border ${error ? 'border-error' : 'border-ink/15'} rounded-md px-4 py-3 text-[14px] focus:outline-none focus:border-copper transition-colors`} />
      {error && <p className="text-error text-[12px] mt-1">{error}</p>}
    </div>
  );
}

function CSelect({ label, name, value, error, onChange, options }) {
  return (
    <div>
      <label className="block font-sans font-semibold text-[13px] text-ink mb-2">{label}</label>
      <select name={name} value={value} onChange={onChange}
        className={`w-full bg-cream border ${error ? 'border-error' : 'border-ink/15'} rounded-md px-4 py-3 text-[14px] focus:outline-none focus:border-copper transition-colors appearance-none`}>
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      {error && <p className="text-error text-[12px] mt-1">{error}</p>}
    </div>
  );
}
