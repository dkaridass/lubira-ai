import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const commitments = [
  { title: 'NDA signé avant tout échange', desc: 'Vos données, votre projet et vos idées restent strictement confidentiels avant même que nous commencions à travailler.' },
  { title: 'Propriété complète du système', desc: 'À la livraison, le code source, la base de données et l\'agent IA vous appartiennent à 100%. Aucun droit retenu par LUBIRA AI.' },
  { title: 'Exclusivité sectorielle', desc: 'Nous ne travaillons pas avec vos concurrents directs dans votre secteur à Lubumbashi. Votre avantage est protégé.' },
  { title: 'Infrastructure dédiée', desc: 'Chaque client dispose de sa propre instance Supabase isolée. Vos données ne sont jamais partagées ni mélangées.' },
];

export default function Trust() {
  return (
    <section className="bg-paper section-y border-b border-ink/8">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">// 05 — Engagements</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-md max-w-3xl">
              Quatre engagements{' '}
              <em className="accent-italic">signés avec chaque client</em>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-5"
            >
              <CheckCircle2 className="w-6 h-6 text-copper-deep mt-1 flex-shrink-0" strokeWidth={1.8} />
              <div className="pl-5 border-l-[3px] border-copper">
                <h3 className="font-sans font-semibold text-[16px] text-ink mb-2">{item.title}</h3>
                <p className="body-sm text-slate max-w-md">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
