import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, WhatsappLogo } from '@phosphor-icons/react';
import HeroScene from '../HeroScene';

const WA = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}?text=${encodeURIComponent('Bonjour Darius, je souhaite un audit gratuit pour mon entreprise.')}`;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Conseil IA · Lubumbashi · RDC</span>
          <h1 id="hero-title">Vos processus,<br />automatisés<br />en <span className="acc">48&nbsp;heures</span>.</h1>
          <p className="lead">
            LUBIRA AI conçoit des automatisations, des agents IA et des tableaux de bord sur mesure pour les PME,
            mines et institutions financières congolaises. Code livré, équipe formée, propriété 100&nbsp;% à vous.
          </p>
          <div className="ctas">
            <Link to="/#contact" className="btn btn--primary">
              Réserver un audit gratuit <ArrowRight size={18} className="arrow" aria-hidden="true" />
            </Link>
            <a href={WA} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={18} aria-hidden="true" /> Écrire sur WhatsApp
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
          <ul className="assurances">
            <li><Check size={16} aria-hidden="true" />NDA signé avant échange</li>
            <li><Check size={16} aria-hidden="true" />Livraison 48h</li>
            <li><Check size={16} aria-hidden="true" />Code 100&nbsp;% à vous</li>
          </ul>
        </motion.div>

        <HeroScene />
      </div>
    </section>
  );
}
