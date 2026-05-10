import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Trust() {
  const commitments = [
    {
      title: "NDA signé avant tout échange",
      desc: "Vos données, votre projet et vos idées restent strictement confidentiels avant même que nous commencions à travailler."
    },
    {
      title: "Propriété complète du système",
      desc: "À la livraison, le code source, la base de données et l'agent IA vous appartiennent à 100%. Aucun droit retenu par LUBIRA AI."
    },
    {
      title: "Exclusivité sectorielle",
      desc: "Nous ne travaillons pas avec vos concurrents directs dans votre secteur à Lubumbashi. Votre avantage est protégé."
    },
    {
      title: "Infrastructure dédiée",
      desc: "Chaque client dispose de sa propre instance Supabase isolée. Vos données ne sont jamais partagées ou mélangées."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-6">NOS ENGAGEMENTS</p>
          <h2 className="h2-fluid max-w-3xl">
            Quatre engagements signés<br/>avec chaque client.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {commitments.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-red-accent" strokeWidth={2.5} />
              </div>
              <div className="pl-4 border-l-[3px] border-red-accent">
                <h3 className="font-inter font-bold text-[16px] text-black-strong mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-[14px] text-gray-body leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
