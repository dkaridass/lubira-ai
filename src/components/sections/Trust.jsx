import { ShieldCheck, KeyRound, Swords, DatabaseZap } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHead from '../SectionHead';

const items = [
  { Icon: ShieldCheck, h: 'NDA signé avant tout échange', p: "Vos données, votre projet et vos idées restent strictement confidentiels avant même que nous commencions à travailler." },
  { Icon: KeyRound, h: 'Propriété complète du système', p: "À la livraison, le code source, la base de données et l'agent IA vous appartiennent à 100%. Aucun droit retenu." },
  { Icon: Swords, h: 'Exclusivité sectorielle', p: "Nous ne travaillons pas avec vos concurrents directs dans votre secteur à Lubumbashi. Votre avantage est protégé." },
  { Icon: DatabaseZap, h: 'Infrastructure dédiée', p: "Chaque client dispose de sa propre instance Supabase isolée. Vos données ne sont jamais partagées." },
];

export default function Trust() {
  return (
    <section className="section section--alt" aria-labelledby="trust-title">
      <div className="container">
        <SectionHead
          id="trust-title"
          eyebrow="Nos engagements"
          title={<>Quatre engagements signés avec <span className="acc">chaque client</span>.</>}
        />
        <div className="grid grid--2">
          {items.map(({ Icon, h, p }, i) => (
            <Reveal key={h} delay={i * 0.06} className="card">
              <div className="icon-chip"><Icon size={22} aria-hidden="true" /></div>
              <h3>{h}</h3>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
