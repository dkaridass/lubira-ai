import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="section cream" id="tarifs">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="eyebrow">Tarifs</span>
          <h2>Quatre formules.<br/><em className="acc">Tout est inclus</em>.</h2>
          <p className="lead">Audit gratuit, NDA signé, code livré, équipe formée. Pas d'abonnement caché, pas de licence retenue.</p>
        </motion.div>
        <div className="pricing-grid">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="plan">
            <div className="label">// Audit</div>
            <div className="price">Gratuit</div>
            <div className="subprice">1h · sans engagement</div>
            <p className="desc">Diagnostic de votre problème principal et estimation chiffrée. Repartez avec un plan d'action concret.</p>
            <a href="#contact" className="cta outline">Réserver →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="plan featured">
            <div className="badge">Plus demandé</div>
            <div className="label">// Sprint 48h</div>
            <div className="price">à partir de 2 500 $</div>
            <div className="subprice">Livré en 2 jours ouvrés</div>
            <p className="desc">Une automatisation ciblée, livrée et déployée en 48h. Idéal pour démarrer rapidement avec un cas concret.</p>
            <a href="#contact" className="cta solid">Démarrer →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="plan">
            <div className="label">// Sprint Agent IA</div>
            <div className="price">à partir de 4 500 $</div>
            <div className="subprice">Livré en 5 jours</div>
            <p className="desc">Assistant IA conversationnel sur mesure, entraîné sur vos données, intégré à vos canaux (web, WhatsApp, Teams).</p>
            <a href="#contact" className="cta outline">Démarrer →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="plan">
            <div className="label">// Sur mesure</div>
            <div className="price">Sur devis</div>
            <div className="subprice">Projets complexes · multi-modules</div>
            <p className="desc">Transformation complète d'un département ou processus métier. Audit approfondi inclus.</p>
            <a href="#contact" className="cta outline">Discuter →</a>
          </motion.div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--slate)', maxWidth: '680px', margin: '0 auto' }}>
          Modalités&nbsp;: 50&nbsp;% à la commande · 50&nbsp;% à la livraison · Maintenance optionnelle à 250&nbsp;$ / mois.
        </p>
      </div>
    </section>
  );
}
