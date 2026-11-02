import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';

const steps = [
  { day: 'Jour 0', h: 'Audit gratuit', p: "Visite ou visio d'1 heure. Nous identifions votre problème principal et proposons une solution concrète. Sans engagement." },
  { day: 'Jour 0+', h: 'NDA + cahier des charges', p: 'Accord de confidentialité signé. Spécifications validées ensemble. 50% à la commande.' },
  { day: 'Jours 1–2', h: 'Construction du prototype', p: 'Nous construisons votre solution fonctionnelle. Vous suivez l\'avancement en temps réel.' },
  { day: 'Jour 2', h: 'Livraison & transfert', p: 'Démo en direct. Formation de votre équipe. Transfert complet du code. Propriété à 100%.' },
];

export default function Process() {
  return (
    <section className="section" id="processus" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          id="process-title"
          eyebrow="Le processus"
          title={<>De l&apos;audit à la livraison&nbsp;: <span className="acc">4 étapes, 48 heures</span>.</>}
        />
        <ol className="grid grid--4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.h} delay={i * 0.08} className="card">
              <div className="step-num" aria-hidden="true">{i + 1}</div>
              <p className="step-day">{s.day}</p>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="cta-band">
          <p>« Votre concurrent découvrira l&apos;IA dans 2 ans. Vous pouvez avoir l&apos;avantage <span className="acc">dès cette semaine</span>. »</p>
          <Link to="/#contact" className="btn btn--on-dark">Réserver mon audit <ArrowRight size={18} className="arrow" aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
