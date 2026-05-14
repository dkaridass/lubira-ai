import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'Pourquoi un audit gratuit ?', a: "Parce que nous ne vendons pas du temps, nous vendons des résultats. Si nous ne pouvons pas vous faire gagner significativement de temps ou d'argent, nous vous le dirons honnêtement." },
  { q: 'Comment garantissez-vous la confidentialité ?', a: "NDA signé avant tout échange technique. Vos données sont hébergées sur une instance Supabase dédiée — jamais partagée. Nous n'utilisons jamais vos données pour entraîner des modèles tiers." },
  { q: 'Que se passe-t-il si je veux changer de prestataire ?', a: "Le code source vous appartient à 100\u00a0%. La base de données est sur votre infrastructure. Vous pouvez à tout moment changer de prestataire ou reprendre en interne. Aucun lock-in technique." },
  { q: 'Travaillez-vous avec mes concurrents ?', a: "Non. Une fois engagés avec vous, nous refusons les missions de vos concurrents directs sur Lubumbashi pendant toute la durée de la collaboration et 12 mois après." },
  { q: 'Avez-vous des références vérifiables ?', a: "Oui. Sur demande lors de l'audit, et après signature d'un NDA mutuel, nous pouvons organiser un appel avec un de nos clients référents (HNM Mining, FundEspoir ou Cabinet Kalala)." },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (i) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="section" id="faq">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
          style={{ textAlign: 'center', margin: '0 auto 56px' }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</span>
          <h2>Questions <em className="acc">fréquentes</em>.</h2>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openItems.has(i) ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span className="text">{faq.q}</span>
                <span className="icon">{openItems.has(i) ? '−' : '+'}</span>
              </button>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
