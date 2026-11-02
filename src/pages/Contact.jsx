import { useState } from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import Field from '../components/Field';
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
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Parlons de <span className="acc">votre projet</span>.</h1>
            <p className="lead">Premier audit gratuit et sans engagement.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: 'var(--s-8)' }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <ul className="value-list" style={{ marginTop: -16 }}>
                <li>
                  <p style={{ fontWeight: 600 }}>Lubumbashi, RDC</p>
                  <p className="muted small">Siège social</p>
                </li>
                <li>
                  <a href="mailto:contact@lubira.ai" style={{ fontWeight: 600, color: 'var(--accent)' }}>contact@lubira.ai</a>
                  <p className="muted small">Réponse en moins de 2 heures</p>
                </li>
                <li>
                  <a href="https://wa.me/243995974770" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--sm">
                    <MessageCircle size={18} aria-hidden="true" /> Discuter sur WhatsApp
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              </ul>
              <h2 style={{ fontSize: 'var(--fs-h3)', margin: '40px 0 16px' }}>Notre processus</h2>
              <ol className="contact-steps" style={{ gap: 20 }}>
                {[
                  { n: 1, t: 'Vous nous contactez', d: 'Remplissez le formulaire ou envoyez un message.' },
                  { n: 2, t: 'Audit gratuit sous 24h', d: 'Un expert analyse votre problème spécifique.' },
                  { n: 3, t: 'Solution livrée en 48h', d: 'Déploiement et intégration dans vos opérations.' },
                ].map((s) => (
                  <li key={s.n} style={{ alignItems: 'flex-start' }}>
                    <span className="n" aria-hidden="true">{s.n}</span>
                    <div><p style={{ fontWeight: 600 }}>{s.t}</p><p className="muted small">{s.d}</p></div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="form-card">
                {submitSuccess ? (
                  <div className="success-card" role="status">
                    <div className="success-icon"><Check size={30} aria-hidden="true" /></div>
                    <h2 style={{ fontSize: '1.75rem' }}>Demande envoyée</h2>
                    <p className="muted" style={{ margin: '12px 0 28px' }}>
                      Nous avons bien reçu votre demande. Un expert LUBIRA AI vous contactera sous 2 heures.
                    </p>
                    <button type="button" onClick={() => setSubmitSuccess(false)} className="btn btn--secondary">
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Demande de contact">
                    <div className="form-row">
                      <Field label="Nom complet" required error={errors.nom}>
                        {(p) => <input {...p} name="nom" value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" autoComplete="name" />}
                      </Field>
                      <Field label="Email professionnel" required error={errors.email}>
                        {(p) => <input {...p} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jean@entreprise.cd" autoComplete="email" />}
                      </Field>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <Field label="Nom de l'entreprise" required error={errors.entreprise}>
                        {(p) => <input {...p} name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Votre Entreprise SARL" autoComplete="organization" />}
                      </Field>
                    </div>
                    <div className="form-row">
                      <Field label="Secteur d'activité" required error={errors.secteur}>
                        {(p) => (
                          <select {...p} name="secteur" value={formData.secteur} onChange={handleChange}>
                            {[['', 'Sélectionner…'], ['Mines', 'Secteur minier'], ['Logistique', 'Logistique & Transport'],
                              ['Banque', 'Banque & Finance'], ['ONG', 'ONG & Institutions'], ['Autre', 'Autre']]
                              .map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                          </select>
                        )}
                      </Field>
                      <Field label="Service souhaité" required error={errors.service}>
                        {(p) => (
                          <select {...p} name="service" value={formData.service} onChange={handleChange}>
                            {[['', 'Sélectionner…'], ['Automatisation', 'Automatisation des processus'], ['Agents IA', 'Agents IA sur mesure'],
                              ['Doc Intelligence', 'Intelligence documentaire'], ['WhatsApp', 'Bots WhatsApp Business'],
                              ['Dashboard', 'Tableaux de bord'], ['Conformité', 'Conformité & traçabilité'],
                              ['Audit', 'Audit stratégique'], ['Autre', 'Je ne suis pas sûr']]
                              .map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                          </select>
                        )}
                      </Field>
                    </div>
                    <Field label="Décrivez votre besoin" required error={errors.description}>
                      {(p) => (
                        <textarea {...p} name="description" rows={5} value={formData.description} onChange={handleChange}
                          placeholder="Expliquez-nous brièvement le processus qui vous fait perdre du temps ou de l'argent…" />
                      )}
                    </Field>

                    {submitError && (
                      <p className="form-alert" role="alert">Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.</p>
                    )}

                    <div className="form-actions">
                      <button type="submit" className="btn btn--primary" disabled={isSubmitting} aria-disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi en cours…' : <>Envoyer ma demande <ArrowRight size={18} className="arrow" aria-hidden="true" /></>}
                      </button>
                    </div>
                    <p className="caption" style={{ textAlign: 'center', marginTop: 16 }}>Audit gratuit garanti. Réponse sous 2 heures.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
