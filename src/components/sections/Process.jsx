import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      day: "Jour 0",
      title: "Audit gratuit",
      desc: "Visite ou visio d'1 heure. Nous identifions votre problème principal et vous proposons une solution concrète. Sans engagement."
    },
    {
      day: "Jour 0+",
      title: "NDA + cahier des charges",
      desc: "Accord de confidentialité signé. Spécifications validées ensemble. 50% de l'investissement à la commande."
    },
    {
      day: "Jours 1-2",
      title: "Construction du prototype",
      desc: "Nous construisons votre solution fonctionnelle. Vous suivez l'avancement en temps réel."
    },
    {
      day: "Jour 2",
      title: "Livraison et transfert",
      desc: "Démonstration en direct. Formation de votre équipe. Transfert complet du code et de la base de données. Vous êtes propriétaire à 100%."
    }
  ];

  return (
    <section className="bg-off-white py-24 md:py-32 border-b border-gray-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <p className="eyebrow mb-6">LE PROCESSUS</p>
          <h2 className="h2-fluid max-w-3xl">
            De l'audit à la livraison :<br/>4 étapes, 48 heures.
          </h2>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block relative mb-24">
          {/* Connecting line */}
          <div className="absolute top-[11px] left-[15px] right-[15px] h-px bg-gray-border z-0"></div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="w-6 h-6 rounded-full bg-red-accent flex items-center justify-center mb-6 shadow-sm">
                  <span className="font-inter font-bold text-white text-[10px]">{index + 1}</span>
                </div>
                <p className="font-inter font-bold text-[12px] uppercase tracking-wider text-gray-body mb-2">
                  {step.day}
                </p>
                <h3 className="font-playfair font-bold text-[20px] text-black-strong mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-[14px] text-gray-body leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden relative mb-16 pl-4 border-l border-gray-border space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-red-accent flex items-center justify-center shadow-sm">
                <span className="font-inter font-bold text-white text-[10px]">{index + 1}</span>
              </div>
              <div className="pl-4">
                <p className="font-inter font-bold text-[12px] uppercase tracking-wider text-gray-body mb-2">
                  {step.day}
                </p>
                <h3 className="font-playfair font-bold text-[20px] text-black-strong mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-[14px] text-gray-body leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-accent p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="font-playfair font-bold text-[24px] md:text-[28px] text-white leading-tight max-w-2xl">
            "Votre concurrent découvrira l'IA dans 2 ans. Vous pouvez avoir l'avantage dès cette semaine."
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold text-[15px] hover:bg-white hover:text-red-accent transition-colors flex-shrink-0"
          >
            Réserver mon audit →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
