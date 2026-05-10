import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      label: "POUR COMMENCER",
      price: "Gratuit",
      subprice: null,
      desc: "Visite ou visio d'1 heure. Diagnostic complet. Recommandation concrète. Sans engagement d'aucune sorte.",
      cta: "Réserver maintenant",
      ctaType: "outline",
      featured: false
    },
    {
      label: "LE PLUS POPULAIRE",
      price: "800 USD",
      subprice: "à partir de — solutions simples dès 500 USD",
      desc: "Une automatisation, un agent IA, ou un dashboard sur mesure. Livré en 48 heures. Code 100% à vous.",
      cta: "Démarrer ce projet",
      ctaType: "solid",
      featured: true
    },
    {
      label: "POUR SCALER",
      price: "1 200 USD",
      subprice: "à partir de",
      desc: "Plusieurs modules IA intégrés. Formation équipe incluse. Maintenance optionnelle: 100-200 USD/mois.",
      cta: "Nous contacter",
      ctaType: "outline",
      featured: false
    },
    {
      label: "GRANDS COMPTES",
      price: "Sur devis",
      subprice: null,
      desc: "Grandes entreprises, sociétés minières, organisations internationales. Architecture sur mesure. Intégration système. Équipe dédiée.",
      cta: "Prendre contact",
      ctaType: "outline",
      featured: false
    }
  ];

  return (
    <section id="tarifs" className="bg-white py-24 md:py-32 border-b border-gray-border scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-6">TARIFICATION</p>
          <h2 className="h2-fluid max-w-2xl mb-6">
            Une tarification claire,<br/>pensée pour les PME congolaises.
          </h2>
          <p className="font-inter text-[16px] text-gray-body max-w-2xl">
            Premier audit toujours gratuit. Propriété totale du code à la livraison. NDA signé avant le démarrage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col border border-gray-border ${plan.featured ? 'border-t-[3px] border-t-red-accent relative' : ''}`}
            >
              {plan.featured && (
                <div className="bg-red-accent text-white font-inter font-bold text-[10px] uppercase tracking-wider py-1.5 px-4 text-center absolute -top-[13px] left-1/2 transform -translate-x-1/2">
                  {plan.label}
                </div>
              )}
              
              <div className="p-8 flex flex-col h-full">
                {!plan.featured && (
                  <p className="font-inter font-bold text-[11px] uppercase tracking-wider text-gray-body mb-6">
                    {plan.label}
                  </p>
                )}
                {plan.featured && <div className="h-4"></div>}
                
                <div className="mb-6">
                  <p className={`font-playfair font-bold leading-none mb-2 ${plan.price === 'Gratuit' || plan.price === '1 200 USD' ? 'text-[48px] text-black-strong' : plan.price === 'Sur devis' ? 'text-[36px] text-black-strong' : 'text-[48px] text-red-accent'}`}>
                    {plan.price}
                  </p>
                  {plan.subprice && (
                    <p className="font-inter text-[12px] text-gray-body h-4">
                      {plan.subprice}
                    </p>
                  )}
                  {!plan.subprice && <div className="h-4"></div>}
                </div>

                <p className="font-inter text-[14px] text-gray-body leading-relaxed flex-grow mb-8">
                  {plan.desc}
                </p>

                <a 
                  href="#contact"
                  className={`block w-full py-3 text-center font-semibold text-[14px] transition-colors ${
                    plan.ctaType === 'solid' 
                    ? 'bg-red-accent text-white hover:bg-black-strong' 
                    : 'bg-white border border-black-strong text-black-strong hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-border">
          <p className="font-inter text-[13px] text-gray-body">
            50% à la commande · 50% à la livraison · Contrat signé · NDA garanti · Code transféré
          </p>
          <p className="font-inter text-[13px] text-gray-body font-medium">
            Paiements: Mobile Money · Virement bancaire
          </p>
        </div>

      </div>
    </section>
  );
}
