import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [hours, setHours] = useState(15);
  const [people, setPeople] = useState(3);
  const [rate, setRate] = useState(25);

  const hSaved = hours * people * 52 * 0.7;
  const errCost = hours * people * 52 * rate * 0.12;
  const savings = hSaved * rate + errCost;
  const invest = Math.max(2500, hours * people * 100);
  
  const roi = (savings / invest).toFixed(1).replace('.', ',');

  const fmt = (n) => Math.round(n).toLocaleString('fr-FR').replace(/,/g, ' ');

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
          <span className="eyebrow">Calculez votre ROI</span>
          <h2>Combien d'heures votre équipe<br/>perd-elle <em className="acc">chaque mois</em> ?</h2>
          <p className="lead">Ajustez les paramètres ci-dessous. Le calcul se met à jour en temps réel.</p>
        </motion.div>
        
        <div className="roi-grid">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="roi-input">
              <div className="row"><label>Heures perdues par semaine</label><span className="val">{hours}h</span></div>
              <input type="range" min="2" max="60" step="1" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
            </div>
            <div className="roi-input">
              <div className="row"><label>Personnes concernées</label><span className="val">{people}</span></div>
              <input type="range" min="1" max="20" step="1" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
            </div>
            <div className="roi-input">
              <div className="row"><label>Coût horaire moyen ($)</label><span className="val">{rate} $</span></div>
              <input type="range" min="5" max="120" step="5" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
            </div>
            <p style={{ fontSize: '13px', color: 'var(--slate)', marginTop: '24px', lineHeight: '1.6' }}>
              → Sur la base des cas clients HNM Mining, FundEspoir et Cabinet Kalala. Hypothèse : 70&nbsp;% du temps automatisable, 90&nbsp;% de réduction des erreurs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="roi-results"
          >
            <div className="roi-row">
              <div className="lbl">Heures économisées / an</div>
              <div className="num">{fmt(hSaved)} h</div>
              <div className="sub">≈ 1 emploi à plein temps libéré</div>
            </div>
            <div className="roi-row savings">
              <div className="lbl">Économies annuelles</div>
              <div className="num">{fmt(savings)} $</div>
              <div className="sub">Coût RH + erreurs évitées</div>
            </div>
            <div className="roi-row">
              <div className="lbl">ROI sur 12 mois</div>
              <div className="num">×&nbsp;{roi}</div>
              <div className="sub">Investissement remboursé en moins de 30 jours</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
