import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "L'IA fonctionne-t-elle vraiment en RDC avec nos contraintes de connexion ?", a: "Oui. Nos solutions fonctionnent avec une connexion internet standard. Les données sont traitées sur des serveurs internationaux rapides. Pour les zones à faible connectivité, nous optimisons les interfaces pour fonctionner même avec une connexion 3G." },
  { q: "Que se passe-t-il si je veux arrêter le projet à mi-chemin ?", a: "Vous récupérez tout le travail réalisé jusqu'à ce point. La partie du paiement correspondant aux livrables non complétés vous est remboursée. Nous documentons tout pour qu'un autre développeur puisse reprendre si nécessaire." },
  { q: "Comment garantissez-vous la confidentialité de mes données ?", a: "Un NDA juridiquement contraignant est signé avant tout échange. Vos données sont stockées dans votre propre instance Supabase isolée. Nous n'avons accès à vos données que pendant la phase de construction, et uniquement avec votre autorisation." },
  { q: "Travaillez-vous avec mes concurrents directs ?", a: "Non. Nous nous engageons contractuellement à ne pas travailler avec vos concurrents directs dans votre secteur à Lubumbashi. Cet engagement est inclus dans chaque contrat." },
  { q: "Combien coûte la maintenance après la livraison ?", a: "La maintenance est optionnelle. Elle coûte entre 100 et 200 USD par mois selon la complexité de votre solution. Elle inclut les mises à jour, le support technique et les améliorations mineures. Vous pouvez aussi gérer vous-même après livraison — le code vous appartient." },
  { q: "En quelle langue est livrée la solution ?", a: "En français par défaut. Sur demande, nous pouvons intégrer le swahili, le lingala ou l'anglais dans la même solution. Toute la documentation est en français." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-paper section-y border-b border-ink/8 scroll-mt-20">
      <div className="max-w-[860px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <span className="eyebrow">// 07 — FAQ</span>
          <h2 className="display-md mt-6">Questions fréquentes.</h2>
        </div>

        <div className="border-t border-ink/15">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink/15">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-6 flex items-start justify-between text-left group focus:outline-none"
              >
                <span className="font-serif text-[20px] md:text-[22px] text-ink pr-8 group-hover:text-copper-deep transition-colors">
                  {faq.q}
                </span>
                <span className="text-copper-deep mt-1 flex-shrink-0">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="body-md text-slate pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
