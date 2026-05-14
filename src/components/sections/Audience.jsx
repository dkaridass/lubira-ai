import { motion } from 'framer-motion';

export default function Audience() {
  const cards = [
    { n: '01', icon: '⛏', color: 'var(--copper)', title: 'Industrie Minière & BTP', desc: 'Rapports de chantier manuels, documents de conformité OCDE en retard, données éparpillées dans des fichiers Excel.', tag: 'Mines · Katanga' },
    { n: '02', icon: '◇', color: 'var(--copper-glow)', title: 'Services Financiers & Assurances', desc: 'Polices d\'assurance traitées à la main, échéances manquées, reporting investisseurs qui prend des jours à préparer.', tag: 'Finance · Kinshasa' },
    { n: '03', icon: '◧', color: 'var(--copper-deep)', title: 'Cabinets Professionnels & ONG', desc: 'Processus administratifs chronophages qui mobilisent vos équipes sur des tâches sans valeur ajoutée.', tag: 'Conseil · ONG' },
  ];

  return (
    <section className="section" style={{ background: 'var(--paper)' }}>
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="eyebrow">Nos clients</span>
          <h2>Conçu pour les entreprises<br/>qui n'ont pas le temps <em className="acc">d'attendre</em>.</h2>
        </motion.div>

        <div className="audience-grid">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="audience-card"
              style={{ borderLeftColor: c.color }}
            >
              <div className="head">
                <span className="num-tag">{`// ${c.n}`}</span>
                <span className="line"></span>
                <span className="icon" style={{ color: c.color }}>{c.icon}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div style={{ marginTop: '16px' }}>
                <span className="chip sand">{c.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="audience-quote"
        >
          <p>« Si votre équipe passe plus de <em className="acc">2 heures par semaine</em> sur une tâche répétitive — nous pouvons l'automatiser. »</p>
        </motion.div>
      </div>
    </section>
  );
}
