import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const steps = [
  { day: 'Jour 0',    title: 'Audit gratuit',           desc: "Visite ou visio d'1 heure. Nous identifions votre problème principal et proposons une solution concrète. Sans engagement." },
  { day: 'Jour 0+',   title: 'NDA + cahier des charges', desc: 'Accord de confidentialité signé. Spécifications validées ensemble. 50% de l\'investissement à la commande.' },
  { day: 'Jours 1-2', title: 'Construction du prototype', desc: 'Nous construisons votre solution fonctionnelle. Vous suivez l\'avancement en temps réel.' },
  { day: 'Jour 2',    title: 'Livraison & transfert',    desc: 'Démonstration en direct, formation de votre équipe, transfert complet du code et de la base de données. 100% à vous.' },
];

export default function Process() {
  return (
    <section className="bg-ink text-cream section-y on-dark border-b border-ink-soft">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow on-dark">// 03 — Méthode</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-md text-cream max-w-3xl">
              De l'audit à la livraison&nbsp;:{' '}
              <em className="accent-italic">4 étapes, 48 heures</em>.
            </h2>
          </div>
        </div>

        {/* Timeline desktop */}
        <div className="hidden md:block relative mb-20">
          <div className="absolute top-3 left-3 right-3 h-px bg-mist/20 z-0"></div>
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-6 h-6 rounded-full bg-copper flex items-center justify-center mb-6 ring-4 ring-ink">
                  <span className="font-mono font-bold text-cream text-[11px]">{i + 1}</span>
                </div>
                <p className="num-tag on-dark mb-3">// {step.day}</p>
                <h3 className="font-serif text-[24px] leading-[1.1] text-cream mb-3">{step.title}</h3>
                <p className="body-sm text-mist/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline mobile */}
        <div className="md:hidden relative mb-16 pl-6 border-l border-mist/20 space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-copper flex items-center justify-center ring-4 ring-ink">
                <span className="font-mono font-bold text-cream text-[11px]">{i + 1}</span>
              </div>
              <p className="num-tag on-dark mb-3">// {step.day}</p>
              <h3 className="font-serif text-[24px] leading-[1.1] text-cream mb-3">{step.title}</h3>
              <p className="body-sm text-mist/80">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-copper/15 border border-copper/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="font-serif text-[22px] md:text-[26px] text-cream leading-snug max-w-2xl">
            « Votre concurrent découvrira l'IA dans 2 ans. Vous pouvez avoir l'<em className="accent-italic">avantage dès cette semaine</em>. »
          </p>
          <a href="#contact" className="btn-on-dark flex-shrink-0">
            Réserver mon audit <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
