import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container-x grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Conseil IA · Lubumbashi · RDC</span>
          <h1>Vos processus,<br/>automatisés en <em className="acc">48 heures</em>.</h1>
          <p className="lead">LUBIRA AI conçoit des automatisations, des agents IA et des tableaux de bord sur mesure pour les PME, mines et institutions financières congolaises. Code livré, équipe formée, propriété 100&nbsp;% à vous.</p>
          <div className="ctas">
            <a href="#contact" className="btn btn--primary">Réserver un audit gratuit <span className="arrow">→</span></a>
            <a href="#realisations" className="btn btn--ghost">Voir nos réalisations</a>
          </div>
          <div className="meta">
            <span><span className="dot"></span>NDA signé avant échange</span>
            <span><span className="dot"></span>Livraison 48h</span>
            <span><span className="dot"></span>Code 100% à vous</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-art"
        >
          <div className="top">
            <span className="badge">// LIVE · v1.0</span>
            <span className="badge">HNM Mining</span>
          </div>
          <div className="stat">
            <div className="stat-num"><em>−70</em>%</div>
            <div className="stat-label">Temps de reporting · Cas HNM</div>
          </div>
          <div className="ticker">
            <span>OCDE · COMPLIANT</span>
            <span>SUPABASE · ISOLÉE</span>
            <span>FR · 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
