import { motion } from 'framer-motion';
import { HardHat, BarChart2, Briefcase } from 'lucide-react';

export default function Audience() {
  const audiences = [
    {
      num: "01",
      icon: HardHat,
      title: "Industrie Minière & BTP",
      desc: "Des rapports de chantier manuels, des documents de conformité OCDE en retard, des données éparpillées dans des fichiers Excel."
    },
    {
      num: "02",
      icon: BarChart2,
      title: "Services Financiers & Assurances",
      desc: "Des polices d'assurance traitées à la main, des échéances manquées, des reporting investisseurs qui prennent des jours à préparer."
    },
    {
      num: "03",
      icon: Briefcase,
      title: "Cabinets Professionnels & ONG",
      desc: "Des processus administratifs chronophages qui mobilisent vos équipes sur des tâches sans valeur ajoutée."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-6">NOS CLIENTS</p>
          <h2 className="h2-fluid max-w-3xl">
            Conçu pour les entreprises<br/>qui n'ont pas le temps d'attendre.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">
          {audiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-inter font-bold text-red-accent text-[14px]">{item.num}</span>
                <div className="w-12 h-px bg-gray-border"></div>
                <item.icon className="w-6 h-6 text-black-strong" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair font-bold text-[20px] text-black-strong mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="font-inter text-[14px] text-gray-body leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-b border-gray-border py-12 text-center"
        >
          <p className="font-playfair italic text-[24px] md:text-[28px] text-black-strong leading-relaxed max-w-4xl mx-auto">
            "Si votre équipe passe plus de 2 heures par semaine sur une tâche répétitive — nous pouvons l'automatiser."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
