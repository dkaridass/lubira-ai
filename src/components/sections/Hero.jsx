import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

const WA = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}?text=${encodeURIComponent('Bonjour Darius, je souhaite un audit gratuit pour mon entreprise.')}`;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Conseil IA · Lubumbashi · RDC</span>
          <h1 id="hero-title">Vos processus, automatisés en <span className="acc">48&nbsp;heures</span>.</h1>
          <p className="lead">
            LUBIRA AI conçoit des automatisations, des agents IA et des tableaux de bord sur mesure pour les PME,
            mines et institutions financières congolaises. Code livré, équipe formée, propriété 100&nbsp;% à vous.
          </p>
          <div className="ctas">
            <Link to="/#contact" className="btn btn--primary">
              Réserver un audit gratuit <ArrowRight size={18} className="arrow" aria-hidden="true" />
            </Link>
            <a href={WA} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Écrire sur WhatsApp
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
          <ul className="assurances">
            <li><Check size={16} aria-hidden="true" />NDA signé avant échange</li>
            <li><Check size={16} aria-hidden="true" />Livraison 48h</li>
            <li><Check size={16} aria-hidden="true" />Code 100&nbsp;% à vous</li>
          </ul>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="kicker">Cas client · HNM Mining</p>
            <p className="big" aria-label="Moins 70 pour cent">−70<span>%</span></p>
            <p className="caption-on-dark">Temps de reporting</p>
          </div>
          <ul aria-label="Garanties techniques">
            <li>OCDE · conforme</li>
            <li>Supabase · instance isolée</li>
            <li>Support en français · 24h</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
