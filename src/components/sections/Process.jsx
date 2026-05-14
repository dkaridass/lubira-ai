import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section className="section dark on-dark" id="processus">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="eyebrow">Le processus</span>
          <h2>De l'audit à la livraison :<br/><em className="acc">4 étapes, 48 heures</em>.</h2>
        </motion.div>
        <div className="process-timeline">
          <div className="process-line"></div>
          <div className="process-grid">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="process-step">
              <div className="dot">1</div><div className="day">Jour 0</div><h3>Audit gratuit</h3><p>Visite ou visio d'1 heure. Nous identifions votre problème principal et proposons une solution concrète. Sans engagement.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="process-step">
              <div className="dot">2</div><div className="day">Jour 0+</div><h3>NDA + cahier des charges</h3><p>Accord de confidentialité signé. Spécifications validées ensemble. 50% à la commande.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="process-step">
              <div className="dot">3</div><div className="day">Jours 1–2</div><h3>Construction du prototype</h3><p>Nous construisons votre solution fonctionnelle. Vous suivez l'avancement en temps réel.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="process-step">
              <div className="dot">4</div><div className="day">Jour 2</div><h3>Livraison &amp; transfert</h3><p>Démo en direct. Formation de votre équipe. Transfert complet du code. Propriété à 100%.</p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="process-cta"
        >
          <p>« Votre concurrent découvrira l'IA dans 2 ans. Vous pouvez avoir l'avantage <em className="acc" style={{color: '#FBF8F2', textDecoration: 'underline', textUnderlineOffset: '6px'}}>dès cette semaine</em>. »</p>
          <a href="#contact" className="btn btn--primary">Réserver mon audit <span className="arrow">→</span></a>
        </motion.div>
      </div>
    </section>
  );
}
