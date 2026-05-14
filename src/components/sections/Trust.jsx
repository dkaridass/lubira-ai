import { motion } from 'framer-motion';

export default function Trust() {
  return (
    <section className="section cream">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="eyebrow">Nos engagements</span>
          <h2>Quatre engagements signés<br/>avec <em className="acc">chaque client</em>.</h2>
        </motion.div>
        <div className="trust-grid">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="trust-item"
          >
            <div className="check">✓</div>
            <div><h3>NDA signé avant tout échange</h3><p>Vos données, votre projet et vos idées restent strictement confidentiels avant même que nous commencions à travailler.</p></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="trust-item"
          >
            <div className="check">✓</div>
            <div><h3>Propriété complète du système</h3><p>À la livraison, le code source, la base de données et l'agent IA vous appartiennent à 100%. Aucun droit retenu.</p></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="trust-item"
          >
            <div className="check">✓</div>
            <div><h3>Exclusivité sectorielle</h3><p>Nous ne travaillons pas avec vos concurrents directs dans votre secteur à Lubumbashi. Votre avantage est protégé.</p></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="trust-item"
          >
            <div className="check">✓</div>
            <div><h3>Infrastructure dédiée</h3><p>Chaque client dispose de sa propre instance Supabase isolée. Vos données ne sont jamais partagées.</p></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
