import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <section id="realisations" className="bg-white py-24 md:py-32 border-b border-gray-border scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <p className="eyebrow mb-6">ÉTUDE DE CAS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Mockup (55%) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black-strong p-4 overflow-hidden relative shadow-2xl"
            >
              {/* Dashboard mockup visual */}
              <div className="w-full aspect-video bg-[#1A1A1A] border border-[#333] relative flex flex-col">
                <div className="h-10 border-b border-[#333] flex items-center px-4 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-accent"></div>
                    <span className="font-inter font-medium text-white text-[12px]">HNM Mining SARL</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  </div>
                </div>
                <div className="flex flex-grow p-4 gap-4">
                  <div className="w-1/4 space-y-3">
                    <div className="h-6 w-full bg-[#333] rounded-sm opacity-50"></div>
                    <div className="h-6 w-3/4 bg-[#333] rounded-sm opacity-50"></div>
                    <div className="h-6 w-5/6 bg-[#333] rounded-sm opacity-50"></div>
                  </div>
                  <div className="w-3/4 space-y-4">
                    <div className="flex gap-4">
                      <div className="h-20 w-1/3 bg-[#333] rounded-sm flex items-end p-2 border-b-2 border-red-accent">
                        <span className="text-white font-playfair text-[18px]">147 T</span>
                      </div>
                      <div className="h-20 w-1/3 bg-[#333] rounded-sm opacity-50"></div>
                      <div className="h-20 w-1/3 bg-[#333] rounded-sm opacity-50"></div>
                    </div>
                    <div className="h-8 w-full bg-[#333] rounded-sm opacity-40"></div>
                    <div className="h-8 w-full bg-[#333] rounded-sm opacity-40"></div>
                    <div className="h-8 w-full bg-[#333] rounded-sm opacity-40"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content (45%) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-red-accent mb-4">
                SECTEUR MINIER · LUBUMBASHI
              </p>
              
              <h3 className="font-playfair font-bold text-[28px] text-black-strong leading-tight mb-8">
                HNM Mining — tableau de bord opérationnel livré en 48 heures.
              </h3>
              
              <hr className="border-gray-border mb-8" />

              <div className="space-y-8">
                <div>
                  <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-gray-body mb-2">
                    Le défi
                  </p>
                  <p className="font-inter text-[14px] text-black-strong leading-relaxed">
                    HNM gérait manuellement toutes ses expéditions de minerais. La génération de documents de conformité OCDE prenait plusieurs heures par expédition et exposait l'entreprise à des erreurs coûteuses.
                  </p>
                </div>

                <div>
                  <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-gray-body mb-2">
                    La solution
                  </p>
                  <p className="font-inter text-[14px] text-black-strong leading-relaxed">
                    LUBIRA AI a construit un panneau d'administration complet avec agent IA intégré. Le système enregistre chaque expédition et génère automatiquement des documents OCDE conformes en français en moins de 10 secondes.
                  </p>
                </div>

                <div>
                  <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-gray-body mb-4">
                    Les résultats
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-playfair font-bold text-[36px] text-red-accent leading-none mb-1">-70%</p>
                      <p className="font-inter text-[12px] text-gray-body">Temps de reporting</p>
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-[36px] text-red-accent leading-none mb-1">100%</p>
                      <p className="font-inter text-[12px] text-gray-body">Conformité OCDE</p>
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-[36px] text-red-accent leading-none mb-1">48h</p>
                      <p className="font-inter text-[12px] text-gray-body">Délai de livraison</p>
                    </div>
                  </div>
                </div>

                <div className="border border-dashed border-gray-border p-5 mt-6 bg-off-white">
                  <p className="font-playfair italic text-[16px] text-black-strong mb-3">
                    « Témoignage client à venir. »
                  </p>
                  <p className="font-inter text-[13px] text-gray-body">
                    — Prénom Nom, Titre, HNM Mining SARL
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
