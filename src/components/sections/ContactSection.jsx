import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

/* ── Data ────────────────────────────────────────────────── */
const SECTEURS = [
  'Mines et Ressources', 'Construction et BTP', 'Banque et Finance',
  'Assurance et Courtage', 'Agriculture et Agro-industrie',
  'ONG et Organisations', 'Commerce et Distribution',
  'Cabinet Professionnel', 'Autre',
];

const SERVICES = [
  { id: 'automatisation', label: 'Automatisation', icon: '⚡' },
  { id: 'agents-ia',      label: 'Agent IA',       icon: '🤖' },
  { id: 'whatsapp',       label: 'Bot WhatsApp',   icon: '💬' },
  { id: 'dashboard',      label: 'Dashboard',      icon: '📊' },
  { id: 'conformite',     label: 'Conformité',      icon: '📋' },
  { id: 'formation',      label: 'Formation',       icon: '🎓' },
  { id: 'conseil',        label: 'Conseil',         icon: '🧭' },
  { id: 'ia-ml',          label: 'IA & Machine Learning', icon: '🧠' },
  { id: 'web-mobile-saas', label: 'Web/Mobile/SaaS', icon: '📱' },
  { id: 'ecommerce',      label: 'E-commerce',     icon: '🛒' },
  { id: 'cloud',          label: 'Cloud & DevOps', icon: '☁️' },
  { id: 'autre',          label: 'Autre',           icon: '→'  },
];

const BUDGETS = [
  { id: 'b1', label: '< 2 000 $' },
  { id: 'b2', label: '2 000 – 5 000 $' },
  { id: 'b3', label: '5 000 – 15 000 $' },
  { id: 'b4', label: '> 15 000 $' },
];

/* ── Inline field validation ─────────────────────────────── */
function Field({ label, required, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        fontSize: '12px', fontWeight: 600, letterSpacing: '.06em',
        textTransform: 'uppercase', color: 'var(--slate)',
      }}>
        {label}{required && <span style={{ color: 'var(--copper-glow)', marginLeft: '4px' }}>*</span>}
      </label>
      {children}
      {error && (
        <span style={{ fontSize: '12px', color: 'var(--error)' }}>{error}</span>
      )}
    </div>
  );
}

/* ── Pill selector ───────────────────────────────────────── */
function PillGroup({ options, value, onChange, multi = false }) {
  const toggle = (id) => {
    if (!multi) { onChange(id); return; }
    const arr = Array.isArray(value) ? value : [];
    onChange(arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id]);
  };
  const isActive = (id) => multi ? (Array.isArray(value) && value.includes(id)) : value === id;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {options.map(opt => (
        <button
          key={opt.id}
          type="button"
          onClick={() => toggle(opt.id)}
          style={{
            padding: '8px 14px', borderRadius: '999px', fontSize: '13px',
            fontWeight: 500, cursor: 'pointer', transition: 'all .15s',
            border: `1.5px solid ${isActive(opt.id) ? 'var(--copper)' : 'rgba(14,15,18,.15)'}`,
            background: isActive(opt.id) ? 'var(--copper)' : 'var(--paper)',
            color: isActive(opt.id) ? 'var(--paper)' : 'var(--slate)',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
        >
          {opt.icon && <span>{opt.icon}</span>}
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/* ── Input / Textarea shared style ──────────────────────── */
const inputStyle = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid var(--sand)',
  borderRadius: '8px', background: 'var(--paper)',
  fontSize: '14px', outline: 'none',
  transition: 'border-color .2s',
  fontFamily: '"Geist", sans-serif',
  color: 'var(--ink)',
};

/* ── Main component ─────────────────────────────────────── */
export default function ContactSection() {
  const [step, setStep] = useState(1); // 2-step form
  const [formData, setFormData] = useState({
    nom: '', entreprise: '', telephone: '', email: '',
    secteur: 'Mines et Ressources', besoin: '',
    services: [], budget: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (name, val) => setFormData(p => ({ ...p, [name]: val }));
  const handle = (e) => set(e.target.name, e.target.value);

  /* ── Step 1 validation ── */
  const validateStep1 = () => {
    const e = {};
    if (!formData.nom.trim())        e.nom        = 'Requis';
    if (!formData.entreprise.trim()) e.entreprise = 'Requis';
    if (!formData.telephone.trim())  e.telephone  = 'Requis';
    if (!formData.email.trim())      e.email      = 'Requis';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => { if (validateStep1()) setStep(2); };

  /* ── Submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        await new Promise(r => setTimeout(r, 1200));
      }
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="section dark on-dark" id="contact">
      <div className="container-x">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span className="eyebrow">Contact</span>
            {/* Urgency badge */}
            <span style={{
              background: 'rgba(184,99,58,.18)', border: '1px solid var(--copper)',
              color: 'var(--copper-glow)', padding: '4px 12px',
              borderRadius: '999px', fontSize: '11px', fontFamily: '"Geist Mono", monospace',
              letterSpacing: '.14em', textTransform: 'uppercase',
            }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--copper-glow)', marginRight: '6px', verticalAlign: 'middle', animation: 'pulse 1.6s ease-in-out infinite' }}></span>
              3 créneaux disponibles
            </span>
          </div>
          <h2>Démarrons par un <em className="acc">audit gratuit</em>.</h2>
          <p className="lead">Darius vous répond personnellement sous 24 heures. Premier audit gratuit, NDA signé avant tout échange.</p>
        </motion.div>

        <div className="contact-grid">

          {/* ── Left: Founder + Trust ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="founder"
          >
            {/* Portrait card — editorial style */}
            <div style={{
              position: 'relative', width: '100%', maxWidth: '320px',
              aspectRatio: '4/5', borderRadius: '16px', overflow: 'hidden',
              marginBottom: '24px',
              boxShadow: '0 24px 56px -16px rgba(14,15,18,.5)',
              border: '1px solid rgba(214,207,195,.12)',
            }}>
              <img
                src="/founder.jpg"
                alt="Darius Tshibangu, Fondateur LUBIRA AI"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                onError={e => { e.target.parentElement.style.background = 'var(--ink-soft)'; e.target.style.display = 'none'; }}
              />
              {/* Gradient overlay with name */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(14,15,18,.92) 0%, transparent 100%)',
                padding: '40px 20px 20px',
              }}>
                <div style={{
                  fontFamily: '"Geist Mono", monospace', fontSize: '10px',
                  letterSpacing: '.16em', textTransform: 'uppercase',
                  color: 'var(--copper-glow)', marginBottom: '4px',
                }}>Fondateur & CEO</div>
                <div style={{
                  fontFamily: '"Instrument Serif", serif', fontSize: '22px',
                  color: 'var(--cream)', lineHeight: 1.1,
                }}>Darius Tshibangu</div>
              </div>
              {/* Copper accent bar */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '3px', background: 'var(--copper)',
              }} />
            </div>
            <div className="role" style={{ color: 'var(--copper-glow)', display: 'none' }}>Fondateur & CEO, LUBIRA AI</div>
            <p style={{ color: 'var(--mist)' }}>
              Congolais. Bâtisseur de solutions IA pour les PME de Lubumbashi et de toute la RDC. Il vous répond personnellement.
            </p>

            {/* Direct contact links */}
            <div className="links" style={{ marginBottom: '28px' }}>
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#25D366', color: '#fff',
                  padding: '10px 18px', borderRadius: '999px',
                  fontSize: '13px', fontWeight: 600, marginBottom: '10px',
                }}
              >
                <span style={{ fontSize: '16px' }}>💬</span> Écrire sur WhatsApp
              </a>
              <a href="mailto:contact@lubira.ai" style={{ color: 'var(--mist)', display: 'block', fontSize: '13px' }}>
                → contact@lubira.ai
              </a>
            </div>

            {/* Steps */}
            <div className="steps-mini" style={{ borderColor: 'rgba(214,207,195,.18)' }}>
              {[
                { n: '01', t: 'Vous soumettez le formulaire' },
                { n: '02', t: 'Audit gratuit planifié sous 24h' },
                { n: '03', t: 'Solution prototype livrée en 48h' },
              ].map(s => (
                <div key={s.n} className="step">
                  <span style={{
                    width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
                    background: 'var(--copper)', color: 'var(--paper)',
                    display: 'grid', placeItems: 'center',
                    fontFamily: '"Geist Mono", monospace', fontSize: '10px', fontWeight: 600,
                  }}>{s.n}</span>
                  <span style={{ color: 'var(--mist)', fontSize: '14px' }}>{s.t}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{
              marginTop: '28px', paddingTop: '20px',
              borderTop: '1px solid rgba(214,207,195,.12)',
              display: 'flex', flexWrap: 'wrap', gap: '16px',
            }}>
              {[
                { v: '12+', l: 'entreprises' },
                { v: 'NDA', l: 'systématique' },
                { v: '48h', l: 'livraison' },
              ].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: '22px',
                    color: 'var(--copper-glow)', lineHeight: 1,
                  }}>{s.v}</div>
                  <div style={{
                    fontFamily: '"Geist Mono", monospace', fontSize: '10px',
                    letterSpacing: '.14em', textTransform: 'uppercase',
                    color: 'var(--stone)', marginTop: '4px',
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">

              {/* ── Success ── */}
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: .95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="form-card success-card"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{
                      width: '72px', height: '72px', borderRadius: '50%',
                      background: 'var(--signal)', display: 'grid',
                      placeItems: 'center', margin: '0 auto 24px',
                      fontSize: '32px',
                    }}
                  >✓</motion.div>
                  <h3 style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: '30px',
                    color: 'var(--ink)', marginBottom: '12px',
                  }}>
                    Merci {formData.nom.split(' ')[0]} !
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--slate)', marginBottom: '8px' }}>
                    Votre demande a bien été enregistrée.
                  </p>
                  <p style={{ fontSize: '15px', color: 'var(--slate)', marginBottom: '32px' }}>
                    Darius vous contacte sous <strong>24h</strong> sur WhatsApp.
                  </p>
                  <div style={{
                    background: 'var(--cream)', borderRadius: '12px',
                    padding: '20px', textAlign: 'left',
                  }}>
                    <p style={{ fontSize: '12px', fontFamily: '"Geist Mono", monospace', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '12px' }}>
                      Prochaines étapes
                    </p>
                    {['Confirmation WhatsApp sous 24h', 'Appel de cadrage (30 min)', 'Prototype livré sous 48h'].map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '6px 0', fontSize: '14px', color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--copper)', fontFamily: '"Geist Mono", monospace' }}>0{i + 1}</span>
                        {s}
                      </div>
                    ))}
                  </div>
                </motion.div>

              ) : (
                <div className="form-card">

                  {/* Step indicator */}
                  <div style={{
                    display: 'flex', gap: '8px', alignItems: 'center',
                    marginBottom: '28px',
                  }}>
                    {[1, 2].map(n => (
                      <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          background: step >= n ? 'var(--copper)' : 'var(--sand)',
                          color: step >= n ? 'var(--paper)' : 'var(--slate)',
                          display: 'grid', placeItems: 'center',
                          fontSize: '12px', fontWeight: 600,
                          fontFamily: '"Geist Mono", monospace',
                          transition: 'all .3s',
                        }}>{n}</div>
                        <span style={{ fontSize: '13px', color: step === n ? 'var(--ink)' : 'var(--slate)', fontWeight: step === n ? 600 : 400 }}>
                          {n === 1 ? 'Vos coordonnées' : 'Votre projet'}
                        </span>
                        {n < 2 && <div style={{ width: '32px', height: '1px', background: 'var(--sand)' }} />}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">

                    {/* ── Step 1: Contact info ── */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: .2 }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                          <Field label="Nom complet" required error={errors.nom}>
                            <input
                              style={{ ...inputStyle, borderColor: errors.nom ? 'var(--error)' : formData.nom ? 'var(--signal)' : undefined }}
                              name="nom" value={formData.nom} onChange={handle}
                              placeholder="Jean Mutombo"
                            />
                          </Field>
                          <Field label="Entreprise" required error={errors.entreprise}>
                            <input
                              style={{ ...inputStyle, borderColor: errors.entreprise ? 'var(--error)' : formData.entreprise ? 'var(--signal)' : undefined }}
                              name="entreprise" value={formData.entreprise} onChange={handle}
                              placeholder="HNM Mining SARL"
                            />
                          </Field>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                          <Field label="WhatsApp" required error={errors.telephone}>
                            <input
                              style={{ ...inputStyle, borderColor: errors.telephone ? 'var(--error)' : formData.telephone ? 'var(--signal)' : undefined }}
                              type="tel" name="telephone" value={formData.telephone}
                              onChange={handle} placeholder="+243 99 597 47 70"
                            />
                          </Field>
                          <Field label="Email professionnel" required error={errors.email}>
                            <input
                              style={{ ...inputStyle, borderColor: errors.email ? 'var(--error)' : formData.email ? 'var(--signal)' : undefined }}
                              type="email" name="email" value={formData.email}
                              onChange={handle} placeholder="jean@entreprise.cd"
                            />
                          </Field>
                        </div>
                        <Field label="Secteur d'activité" required>
                          <select
                            style={{ ...inputStyle }}
                            name="secteur" value={formData.secteur} onChange={handle}
                          >
                            {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </Field>
                        <button
                          type="button"
                          onClick={nextStep}
                          style={{
                            marginTop: '24px', width: '100%', padding: '15px',
                            background: 'var(--ink)', color: 'var(--cream)',
                            fontSize: '15px', fontWeight: 500, borderRadius: '999px',
                            cursor: 'pointer', transition: 'background .2s',
                            fontFamily: '"Geist", sans-serif',
                          }}
                          onMouseOver={e => e.currentTarget.style.background = 'var(--copper-deep)'}
                          onMouseOut={e => e.currentTarget.style.background = 'var(--ink)'}
                        >
                          Continuer → Décrire mon projet
                        </button>
                      </motion.div>
                    )}

                    {/* ── Step 2: Project details ── */}
                    {step === 2 && (
                      <motion.form
                        key="step2"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: .2 }}
                      >
                        {/* Service selector */}
                        <div style={{ marginBottom: '24px' }}>
                          <label style={{
                            display: 'block', fontSize: '12px', fontWeight: 600,
                            letterSpacing: '.06em', textTransform: 'uppercase',
                            color: 'var(--slate)', marginBottom: '10px',
                          }}>
                            Service(s) souhaité(s)
                          </label>
                          <PillGroup
                            options={SERVICES}
                            value={formData.services}
                            onChange={v => set('services', v)}
                            multi={true}
                          />
                        </div>

                        {/* Budget selector */}
                        <div style={{ marginBottom: '24px' }}>
                          <label style={{
                            display: 'block', fontSize: '12px', fontWeight: 600,
                            letterSpacing: '.06em', textTransform: 'uppercase',
                            color: 'var(--slate)', marginBottom: '10px',
                          }}>
                            Budget approximatif
                          </label>
                          <PillGroup
                            options={BUDGETS}
                            value={formData.budget}
                            onChange={v => set('budget', v)}
                            multi={false}
                          />
                        </div>

                        {/* Describe need */}
                        <Field label="Décrivez votre défi principal">
                          <textarea
                            style={{ ...inputStyle, resize: 'none', minHeight: '100px' }}
                            name="besoin" rows={4} value={formData.besoin} onChange={handle}
                            placeholder="Ex: Notre équipe passe 5 heures par semaine à rédiger des rapports manuellement…"
                          />
                        </Field>

                        {status === 'error' && (
                          <p style={{ fontSize: '13px', color: 'var(--error)', margin: '12px 0' }}>
                            Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.
                          </p>
                        )}

                        {/* Social proof */}
                        <div style={{
                          display: 'flex', gap: '16px', alignItems: 'center',
                          padding: '12px 0', margin: '16px 0',
                          borderTop: '1px solid var(--sand)', borderBottom: '1px solid var(--sand)',
                          fontSize: '12px', color: 'var(--slate)',
                        }}>
                          <span>🔒 NDA signé avant tout échange</span>
                          <span>·</span>
                          <span>⚡ Réponse sous 24h</span>
                          <span>·</span>
                          <span>🎯 12 entreprises confiantes</span>
                        </div>

                        <div className="step2-buttons" style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            style={{
                              padding: '15px 20px', borderRadius: '999px',
                              background: 'transparent', border: '1.5px solid var(--sand)',
                              color: 'var(--slate)', fontSize: '14px', cursor: 'pointer',
                              fontFamily: '"Geist", sans-serif',
                            }}
                          >
                            ← Retour
                          </button>
                          <button
                            type="submit"
                            disabled={status === 'submitting'}
                            style={{
                              flex: 1, padding: '15px',
                              background: 'var(--copper)', color: 'var(--paper)',
                              fontSize: '15px', fontWeight: 600, borderRadius: '999px',
                              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                              opacity: status === 'submitting' ? .7 : 1,
                              transition: 'background .2s',
                              fontFamily: '"Geist", sans-serif',
                            }}
                            onMouseOver={e => { if (status !== 'submitting') e.currentTarget.style.background = 'var(--copper-deep)'; }}
                            onMouseOut={e => e.currentTarget.style.background = 'var(--copper)'}
                          >
                            {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer ma demande d\'audit →'}
                          </button>
                        </div>
                      </motion.form>
                    )}

                  </AnimatePresence>
                </div>
              )}

            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
