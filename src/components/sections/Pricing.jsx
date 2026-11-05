import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';

const plans = [
  { label: 'Audit', price: 'Gratuit', sub: '1h · sans engagement', desc: 'Diagnostic de votre problème principal et estimation chiffrée. Repartez avec un plan d\'action concret.', cta: 'Réserver' },
  { label: 'Sprint 48h', price: 'Sur consultation', sub: 'Livré en 2 jours ouvrés', desc: 'Une automatisation ciblée, livrée et déployée en 48h. Idéal pour démarrer rapidement avec un cas concret.', cta: 'Démarrer', featured: true },
  { label: 'Sprint Agent IA', price: 'Sur consultation', sub: 'Livré en 5 jours', desc: 'Assistant IA conversationnel sur mesure, entraîné sur vos données, intégré à vos canaux (web, WhatsApp, Teams).', cta: 'Démarrer' },
  { label: 'Sur mesure', price: 'Sur devis', sub: 'Projets complexes · multi-modules', desc: "Transformation complète d'un département ou processus métier. Audit approfondi inclus.", cta: 'Discuter' },
];

export default function Pricing() {
  return (
    <section className="section" id="tarifs" aria-labelledby="plans-title">
      <div className="container">
        <SectionHead
          id="plans-title"
          eyebrow="Formules"
          title={<>Quatre formules. <span className="acc">Tout est inclus</span>.</>}
          lead="Audit gratuit, NDA signé, code livré, équipe formée. Pas d'abonnement caché, pas de licence retenue."
        />
        <div className="grid grid--4">
          {plans.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06} className={`card plan${p.featured ? ' plan--featured' : ''}`}>
              {p.featured && <span className="badge">Plus demandé</span>}
              <p className="label">{p.label}</p>
              <p className="price">{p.price}</p>
              <p className="subprice">{p.sub}</p>
              <p className="desc">{p.desc}</p>
              <Link to="/#contact" className={`btn btn--block ${p.featured ? 'btn--primary' : 'btn--secondary'}`}>
                {p.cta}<span className="sr-only"> — {p.label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="terms">Modalités&nbsp;: 50&nbsp;% à la commande · 50&nbsp;% à la livraison · Maintenance optionnelle.</p>
      </div>
    </section>
  );
}
