import { Bank, Briefcase, Mountains } from '@phosphor-icons/react';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';

const cards = [
  { Icon: Mountains, title: 'Industrie Minière & BTP', desc: 'Rapports de chantier manuels, documents de conformité OCDE en retard, données éparpillées dans des fichiers Excel.', tag: 'Mines · Katanga' },
  { Icon: Bank, title: 'Services Financiers & Assurances', desc: "Polices d'assurance traitées à la main, échéances manquées, reporting investisseurs qui prend des jours à préparer.", tag: 'Finance · Kinshasa' },
  { Icon: Briefcase, title: 'Cabinets Professionnels & ONG', desc: 'Processus administratifs chronophages qui mobilisent vos équipes sur des tâches sans valeur ajoutée.', tag: 'Conseil · ONG' },
];

export default function Audience() {
  return (
    <section className="section" aria-labelledby="audience-title">
      <div className="container">
        <SectionHead
          id="audience-title"
          eyebrow="Nos clients"
          title={<>Conçu pour les entreprises qui n&apos;ont pas le temps <span className="acc">d&apos;attendre</span>.</>}
        />
        <div className="grid grid--3">
          {cards.map(({ Icon, title, desc, tag }, i) => (
            <Reveal key={title} delay={i * 0.08} className="card card--lift audience-card">
              <div className="icon-chip"><Icon size={22} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="chip chip--accent">{tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
