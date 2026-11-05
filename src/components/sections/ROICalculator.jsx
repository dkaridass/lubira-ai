import { useState, useId } from 'react';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';

function Slider({ label, value, min, max, step, unit, onChange }) {
  const id = useId();
  return (
    <div className="roi-input">
      <div className="row">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id} className="val">{value}{unit}</output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        aria-valuetext={`${value}${unit}`} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

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
    <section className="section" aria-labelledby="roi-title">
      <div className="container">
        <SectionHead
          id="roi-title"
          eyebrow="Calculez votre ROI"
          title={<>Combien d&apos;heures votre équipe perd-elle <span className="nb"><span className="acc">chaque mois</span>&nbsp;?</span></>}
          lead="Ajustez les paramètres ci-dessous. Le calcul se met à jour en temps réel."
        />
        <div className="roi-grid">
          <Reveal>
            <Slider label="Heures perdues par semaine" value={hours} min={2} max={60} step={1} unit="h" onChange={setHours} />
            <Slider label="Personnes concernées" value={people} min={1} max={20} step={1} unit="" onChange={setPeople} />
            <Slider label="Coût horaire moyen ($)" value={rate} min={5} max={120} step={5} unit=" $" onChange={setRate} />
            <p className="caption">
              Sur la base des cas clients HNM Mining, FundEspoir et Cabinet Kalala. Hypothèse : 70&nbsp;% du temps automatisable, 90&nbsp;% de réduction des erreurs.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="roi-results" role="group" aria-label="Résultats estimés">
            <div className="roi-row">
              <div className="lbl">Heures économisées / an</div>
              <div className="num">{fmt(hSaved)} h</div>
              <div className="sub">≈ 1 emploi à plein temps libéré</div>
            </div>
            <div className="roi-row accent">
              <div className="lbl">Économies annuelles</div>
              <div className="num">{fmt(savings)} $</div>
              <div className="sub">Coût RH + erreurs évitées</div>
            </div>
            <div className="roi-row">
              <div className="lbl">ROI sur 12 mois</div>
              <div className="num">×&nbsp;{roi}</div>
              <div className="sub">Investissement remboursé en moins de 30 jours</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
