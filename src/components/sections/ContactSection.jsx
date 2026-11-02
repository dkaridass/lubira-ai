import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, ChartBar, Check, ClipboardText, Clock, Cloud, Compass, DeviceMobile, GraduationCap, Lightning, Lock, Robot, ShoppingCart, Users, WhatsappLogo } from '@phosphor-icons/react';
import { supabase } from '../../lib/supabase';
import Field from '../Field';
import Reveal from '../Reveal';

/* ── Data ─────────────────────────────────────────────── */
const SECTEURS = [
  'Mines et Ressources', 'Construction et BTP', 'Banque et Finance',
  'Assurance et Courtage', 'Agriculture et Agro-industrie',
  'ONG et Organisations', 'Commerce et Distribution',
  'Cabinet Professionnel', 'Autre',
];

const SERVICES = [
  { id: 'automatisation', label: 'Automatisation', Icon: Lightning },
  { id: 'agents-ia', label: 'Agent IA', Icon: Robot },
  { id: 'whatsapp', label: 'Bot WhatsApp', Icon: WhatsappLogo },
  { id: 'dashboard', label: 'Dashboard', Icon: ChartBar },
  { id: 'conformite', label: 'Conformité', Icon: ClipboardText },
  { id: 'formation', label: 'Formation', Icon: GraduationCap },
  { id: 'conseil', label: 'Conseil', Icon: Compass },
  { id: 'ia-ml', label: 'IA & Machine Learning', Icon: Brain },
  { id: 'web-mobile-saas', label: 'Web/Mobile/SaaS', Icon: DeviceMobile },
  { id: 'ecommerce', label: 'E-commerce', Icon: ShoppingCart },
  { id: 'cloud', label: 'Cloud & DevOps', Icon: Cloud },
  { id: 'autre', label: 'Autre', Icon: ArrowRight },
];

const BUDGETS = [
  { id: 'b1', label: '< 2 000 $' },
  { id: 'b2', label: '2 000 – 5 000 $' },
  { id: 'b3', label: '5 000 – 15 000 $' },
  { id: 'b4', label: '> 15 000 $' },
];

/* ── Toggle pills (aria-pressed) ──────────────────────── */
function PillGroup({ legend, options, value, onChange, multi = false }) {
  const isOn = (id) => (multi ? Array.isArray(value) && value.includes(id) : value === id);
  const toggle = (id) => {
    if (!multi) { onChange(value === id ? '' : id); return; }
    const arr = Array.isArray(value) ? value : [];
    onChange(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]);
  };
  return (
    <fieldset className="form-group">
      <legend>{legend}</legend>
      <div className="pills">
        {options.map(({ id, label, Icon }) => (
          <button key={id} type="button" className="pill" aria-pressed={isOn(id)} onClick={() => toggle(id)}>
            {Icon && <Icon size={16} aria-hidden="true" />}
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

const WA_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770';

/* ── Main component ───────────────────────────────────── */
export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '', entreprise: '', telephone: '', email: '',
    secteur: 'Mines et Ressources', besoin: '',
    services: [], budget: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);
  const stepHeading = useRef(null);
  const successHeading = useRef(null);
  const firstRender = useRef(true);

  // Move focus to the new step heading / success message (WCAG 2.4.3)
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    (status === 'success' ? successHeading : stepHeading).current?.focus();
  }, [step, status]);

  const set = (name, val) => setFormData((p) => ({ ...p, [name]: val }));
  const handle = (e) => {
    set(e.target.name, e.target.value);
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: undefined }));
  };

  const validateStep1 = () => {
    const e = {};
    if (!formData.nom.trim()) e.nom = 'Veuillez indiquer votre nom';
    if (!formData.entreprise.trim()) e.entreprise = 'Veuillez indiquer votre entreprise';
    if (!formData.telephone.trim()) e.telephone = 'Veuillez indiquer votre numéro WhatsApp';
    if (!formData.email.trim()) e.email = 'Veuillez indiquer votre email';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = 'Adresse email invalide';
    setErrors(e);
    const names = Object.keys(e);
    // Move focus to the first invalid field so keyboard and screen reader users land on it
    if (names.length) setTimeout(() => formRef.current?.querySelector(`[name="${names[0]}"]`)?.focus(), 0);
    return names.length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (step === 1) { if (validateStep1()) setStep(2); return; }
    setStatus('submitting');
    try {
      const payload = {
        nom: formData.nom,
        entreprise: formData.entreprise,
        telephone: formData.telephone,
        email: formData.email,
        secteur: formData.secteur,
        besoin: formData.besoin,
        services_demandes: formData.services.join(', '),
        budget: formData.budget,
        status: 'nouveau',
        source: 'website',
      };
      if (supabase) {
        const { error } = await supabase.from('leads').insert([payload]);
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 1200));
      }
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const busy = status === 'submitting';

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 id="contact-title">Démarrons par un <span className="acc">audit gratuit</span>.</h2>
          <p className="lead">Darius vous répond personnellement sous 24 heures. Premier audit gratuit, NDA signé avant tout échange.</p>
        </Reveal>

        <div className="contact-grid">
          {/* ── Left: founder + reassurance ── */}
          <Reveal>
            <div className="founder-photo">
              <img src="/founder.jpg" alt="Darius Tshibangu, fondateur de LUBIRA AI" width="280" height="350" loading="lazy" decoding="async" />
            </div>
            <h3 style={{ marginTop: 24 }}>Darius Tshibangu</h3>
            <p className="muted small">Fondateur &amp; CEO</p>
            <p className="muted" style={{ marginTop: 12, maxWidth: 380 }}>
              Congolais. Bâtisseur de solutions IA pour les PME de Lubumbashi et de toute la RDC. Il vous répond personnellement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--sm">
                <WhatsappLogo size={18} aria-hidden="true" /> Écrire sur WhatsApp
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
              <a href="mailto:contact@lubira.ai" className="btn btn--secondary btn--sm">contact@lubira.ai</a>
            </div>
            <ol className="contact-steps" aria-label="Déroulement">
              {['Vous soumettez le formulaire', 'Audit gratuit planifié sous 24h', 'Solution prototype livrée en 48h'].map((t, i) => (
                <li key={t}><span className="n" aria-hidden="true">{i + 1}</span>{t}</li>
              ))}
            </ol>
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ? (
                <motion.div key="success" className="form-card success-card"
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="success-icon"><Check size={30} aria-hidden="true" /></div>
                  <h3 ref={successHeading} tabIndex={-1}>Merci {formData.nom.split(' ')[0]}.</h3>
                  <p className="muted" style={{ marginTop: 8 }}>Votre demande a bien été enregistrée.</p>
                  <p className="muted">Darius vous contacte sous <strong>24h</strong> sur WhatsApp.</p>
                  <div className="next-steps">
                    <h4 style={{ marginBottom: 8 }}>Prochaines étapes</h4>
                    <ol>
                      {['Confirmation WhatsApp sous 24h', 'Appel de cadrage (30 min)', 'Prototype livré sous 48h'].map((s, i) => (
                        <li key={s}><span className="n">0{i + 1}</span>{s}</li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} className="form-card" onSubmit={submit} noValidate
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} aria-label="Demande d'audit gratuit">
                  <ol className="stepper" aria-label={`Étape ${step} sur 2`}>
                    <li className={step >= 1 ? 'on' : ''} aria-current={step === 1 ? 'step' : undefined}><span className="dot">1</span>Vos coordonnées</li>
                    <li className="bar" aria-hidden="true" />
                    <li className={step >= 2 ? 'on' : ''} aria-current={step === 2 ? 'step' : undefined}><span className="dot">2</span>Votre projet</li>
                  </ol>

                  {step === 1 && (
                    <div>
                      <h3 ref={stepHeading} tabIndex={-1} className="sr-only">Vos coordonnées</h3>
                      <div className="form-row">
                        <Field label="Nom complet" required error={errors.nom}>
                          {(p) => <input {...p} name="nom" value={formData.nom} onChange={handle} placeholder="Jean Mutombo" autoComplete="name" />}
                        </Field>
                        <Field label="Entreprise" required error={errors.entreprise}>
                          {(p) => <input {...p} name="entreprise" value={formData.entreprise} onChange={handle} placeholder="HNM Mining SARL" autoComplete="organization" />}
                        </Field>
                      </div>
                      <div className="form-row">
                        <Field label="WhatsApp" required error={errors.telephone}>
                          {(p) => <input {...p} type="tel" name="telephone" value={formData.telephone} onChange={handle} placeholder="+243 99 597 47 70" autoComplete="tel" inputMode="tel" />}
                        </Field>
                        <Field label="Email professionnel" required error={errors.email}>
                          {(p) => <input {...p} type="email" name="email" value={formData.email} onChange={handle} placeholder="jean@entreprise.cd" autoComplete="email" />}
                        </Field>
                      </div>
                      <Field label="Secteur d'activité" required>
                        {(p) => (
                          <select {...p} name="secteur" value={formData.secteur} onChange={handle}>
                            {SECTEURS.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        )}
                      </Field>
                      <div className="form-actions">
                        <button type="submit" className="btn btn--dark btn--block">
                          Continuer <ArrowRight size={18} className="arrow" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 ref={stepHeading} tabIndex={-1} className="sr-only">Votre projet</h3>
                      <PillGroup legend="Service(s) souhaité(s)" options={SERVICES} value={formData.services} onChange={(v) => set('services', v)} multi />
                      <PillGroup legend="Budget approximatif" options={BUDGETS} value={formData.budget} onChange={(v) => set('budget', v)} />
                      <Field label="Décrivez votre défi principal">
                        {(p) => (
                          <textarea {...p} name="besoin" rows={4} value={formData.besoin} onChange={handle}
                            placeholder="Ex : notre équipe passe 5 heures par semaine à rédiger des rapports manuellement…" />
                        )}
                      </Field>

                      {status === 'error' && (
                        <p className="form-alert" role="alert">
                          Une erreur est survenue. Réessayez ou écrivez-nous sur{' '}
                          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>WhatsApp</a>.
                        </p>
                      )}

                      <ul className="form-assurance">
                        <li><Lock size={14} aria-hidden="true" />NDA signé avant tout échange</li>
                        <li><Clock size={14} aria-hidden="true" />Réponse sous 24h</li>
                        <li><Users size={14} aria-hidden="true" />12 entreprises confiantes</li>
                      </ul>

                      <div className="form-actions">
                        <button type="button" className="btn btn--secondary" onClick={() => setStep(1)}>
                          <ArrowLeft size={18} aria-hidden="true" /> Retour
                        </button>
                        <button type="submit" className="btn btn--primary" disabled={busy} aria-disabled={busy}>
                          {busy ? 'Envoi en cours…' : <>Envoyer ma demande d&apos;audit <ArrowRight size={18} className="arrow" aria-hidden="true" /></>}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
