import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { num: "01", title: "Automatisation des Processus", desc: "Remplacez vos tâches répétitives par des agents IA opérationnels 24h/24." },
    { num: "02", title: "Agents IA sur Mesure", desc: "Des outils d'IA construits spécifiquement pour votre secteur et votre équipe." },
    { num: "03", title: "Intelligence Documentaire", desc: "Extraction, vérification et génération automatique de documents professionnels." },
    { num: "04", title: "Bots WhatsApp Business", desc: "Un service client IA disponible 24h/24 en français, swahili ou anglais." },
    { num: "05", title: "Tableaux de Bord Intelligents", desc: "Vos données brutes transformées en décisions claires, en temps réel." },
    { num: "06", title: "Conformité et Traçabilité Minière", desc: "Traçabilité OCDE, documentation ITSCI, registres immuables pour l'export." },
    { num: "07", title: "Formation en IA", desc: "Formez vos équipes à utiliser l'IA dans leur travail quotidien à Lubumbashi." },
    { num: "08", title: "Conseil Stratégique IA", desc: "Identifiez où l'IA vous fait gagner le plus de temps et d'argent." }
  ];

  return (
    <section id="services" className="bg-white py-24 md:py-32 border-b border-gray-border scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-6">NOS SERVICES</p>
          <h2 className="h2-fluid max-w-3xl">
            Huit façons dont LUBIRA AI<br/>transforme vos opérations.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col p-6 bg-white border border-gray-border border-t-[3px] border-t-red-accent hover:border-gray-300 transition-colors"
            >
              <span className="font-inter font-bold text-[14px] text-red-accent mb-4">{srv.num}</span>
              <h3 className="font-playfair font-bold text-[18px] text-black-strong mb-3 leading-tight">
                {srv.title}
              </h3>
              <p className="font-inter text-[13px] text-gray-body leading-relaxed flex-grow mb-6 line-clamp-3">
                {srv.desc}
              </p>
              <a href="#contact" className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">
                <span className="font-inter text-[12px] font-semibold text-red-accent hover:text-black-strong transition-colors">
                  En savoir plus →
                </span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
