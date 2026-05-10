import { motion } from 'framer-motion';
import { HardHat, BarChart2, Briefcase } from 'lucide-react';

const audiences = [
  { num: '01', icon: HardHat, title: 'Industrie minière & BTP', desc: "Rapports de chantier manuels, documents de conformité OCDE en retard, données éparpillées dans des fichiers Excel." },
  { num: '02', icon: BarChart2, title: 'Services financiers & assurances', desc: "Polices traitées à la main, échéances manquées, reporting investisseurs qui prend des jours à préparer." },
  { num: '03', icon: Briefcase, title: 'Cabinets professionnels & ONG', desc: "Processus administratifs chronophages qui mobilisent vos équipes sur des tâches sans valeur ajoutée." },
];

export default function Audience() {
  return (
    <section className="bg-paper section-y border-b border-ink/8">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">// 01 — Nos clients</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-md max-w-3xl">
              Conçu pour les entreprises{' '}
              <em className="accent-italic">qui n'ont pas le temps d'attendre</em>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-20">
          {audiences.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="num-tag">// {item.num}</span>
                <div className="flex-1 h-px bg-ink/15"></div>
                <item.icon className="w-5 h-5 text-copper-deep" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[26px] leading-[1.1] text-ink mb-4">
                {item.title}
              </h3>
              <p className="body-sm text-slate">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-y border-ink/15 py-12 text-center"
        >
          <p className="font-serif italic text-[24px] md:text-[32px] text-ink leading-snug max-w-4xl mx-auto">
            « Si votre équipe passe plus de 2 heures par semaine sur une tâche répétitive — nous pouvons l'<span className="accent-italic">automatiser</span>. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
