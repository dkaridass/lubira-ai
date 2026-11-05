import { Plus } from '@phosphor-icons/react';
import SectionHead from '../SectionHead';

const faqs = [
  { q: 'Pourquoi un audit gratuit ?', a: "Parce que nous ne vendons pas du temps, nous vendons des résultats. Si nous ne pouvons pas vous faire gagner significativement de temps ou d'argent, nous vous le dirons honnêtement." },
  { q: 'Comment garantissez-vous la confidentialité ?', a: "NDA signé avant tout échange technique. Vos données sont hébergées sur une instance Supabase dédiée — jamais partagée. Nous n'utilisons jamais vos données pour entraîner des modèles tiers." },
  { q: 'Que se passe-t-il si je veux changer de prestataire ?', a: "Le code source vous appartient à 100\u00a0%. La base de données est sur votre infrastructure. Vous pouvez à tout moment changer de prestataire ou reprendre en interne. Aucun lock-in technique." },
  { q: 'Travaillez-vous avec mes concurrents ?', a: "Non. Une fois engagés avec vous, nous refusons les missions de vos concurrents directs sur Lubumbashi pendant toute la durée de la collaboration et 12 mois après." },
  { q: 'Avez-vous des références vérifiables ?', a: "Oui. Sur demande lors de l'audit, et après signature d'un NDA mutuel, nous pouvons organiser un appel avec un de nos clients référents (HNM Mining, FundEspoir ou Cabinet Kalala)." },
];

export default function FAQ() {
  return (
    <section className="section section--alt" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHead id="faq-title" eyebrow="FAQ" title={<>Questions <span className="acc">fréquentes</span>.</>} />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary>
                <span>{faq.q}</span>
                <Plus size={22} aria-hidden="true" />
              </summary>
              <p className="answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
