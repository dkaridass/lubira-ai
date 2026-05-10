import { motion } from 'framer-motion';

const plans = [
  { label: 'POUR COMMENCER',  price: 'Gratuit',   subprice: null,                                               desc: "Visite ou visio d'1 heure. Diagnostic complet. Recommandation concrète. Sans engagement d'aucune sorte.", cta: 'Réserver maintenant', ctaType: 'outline', featured: false },
  { label: 'LE PLUS POPULAIRE', price: '800 USD',  subprice: 'à partir de — solutions simples dès 500 USD',     desc: 'Une automatisation, un agent IA, ou un dashboard sur mesure. Livré en 48 heures. Code 100% à vous.',     cta: 'Démarrer ce projet', ctaType: 'solid',   featured: true  },
  { label: 'POUR SCALER',     price: '1 200 USD', subprice: 'à partir de',                                      desc: 'Plusieurs modules IA intégrés. Formation équipe incluse. Maintenance optionnelle : 100-200 USD/mois.', cta: 'Nous contacter',     ctaType: 'outline', featured: false },
  { label: 'GRANDS COMPTES',  price: 'Sur devis', subprice: null,                                               desc: 'Grandes entreprises, sociétés minières, organisations internationales. Architecture sur mesure.',       cta: 'Prendre contact',    ctaType: 'outline', featured: false },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-cream section-y border-y border-ink/8 scroll-mt-20">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">// 06 — Tarification</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-md max-w-2xl mb-6">
              Une tarification claire,{' '}
              <em className="accent-italic">pensée pour les PME congolaises</em>.
            </h2>
            <p className="body-md text-slate max-w-2xl">
              Premier audit toujours gratuit. Propriété totale du code à la livraison. NDA signé avant le démarrage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex flex-col rounded-2xl bg-paper border ${plan.featured ? 'border-copper border-t-[3px] relative shadow-md' : 'border-ink/10'}`}
            >
              {plan.featured && (
                <div className="bg-copper text-paper font-mono text-[10px] uppercase tracking-[0.16em] py-1.5 px-4 text-center absolute -top-[13px] left-1/2 -translate-x-1/2 rounded-full">
                  {plan.label}
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {!plan.featured && <p className="num-tag mb-6">// {plan.label}</p>}
                {plan.featured && <div className="h-4"></div>}

                <div className="mb-6">
                  <p className={`font-serif leading-none mb-2 ${plan.price === 'Sur devis' ? 'text-[36px] text-ink' : plan.featured ? 'text-[48px] text-copper-deep' : 'text-[48px] text-ink'}`}>
                    {plan.price}
                  </p>
                  {plan.subprice ? (
                    <p className="body-sm text-slate h-4">{plan.subprice}</p>
                  ) : (
                    <div className="h-4"></div>
                  )}
                </div>

                <p className="body-sm text-slate flex-grow mb-8">{plan.desc}</p>

                <a
                  href="#contact"
                  className={`block w-full py-3 rounded-md text-center font-sans font-medium text-[14px] transition-colors ${
                    plan.ctaType === 'solid'
                      ? 'bg-copper text-paper hover:bg-copper-deep'
                      : 'bg-paper border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-ink/10">
          <p className="body-sm text-slate">
            50% à la commande · 50% à la livraison · Contrat signé · NDA garanti · Code transféré
          </p>
          <p className="body-sm text-slate font-medium">
            Paiements : Mobile Money · Virement bancaire
          </p>
        </div>
      </div>
    </section>
  );
}
