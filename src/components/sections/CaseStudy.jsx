import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <section id="realisations" className="bg-paper section-y border-b border-ink/8 scroll-mt-20">
      <div className="container-x">
        <div className="mb-12">
          <span className="eyebrow">// 04 — Étude de cas</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Mockup */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-ink p-4 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="w-full aspect-video bg-ink-soft rounded-lg border border-ink/40 flex flex-col">
                <div className="h-10 border-b border-ink/40 flex items-center px-4 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-copper"></div>
                    <span className="font-mono font-medium text-cream text-[11px]">HNM Mining SARL</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-mist/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-mist/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-mist/30"></div>
                  </div>
                </div>
                <div className="flex flex-grow p-4 gap-4">
                  <div className="w-1/4 space-y-3">
                    <div className="h-6 w-full bg-mist/15 rounded-sm"></div>
                    <div className="h-6 w-3/4 bg-mist/15 rounded-sm"></div>
                    <div className="h-6 w-5/6 bg-mist/15 rounded-sm"></div>
                  </div>
                  <div className="w-3/4 space-y-4">
                    <div className="flex gap-4">
                      <div className="h-20 w-1/3 bg-mist/15 rounded-sm flex items-end p-2 border-b-2 border-copper">
                        <span className="text-cream font-serif text-[18px]">147 T</span>
                      </div>
                      <div className="h-20 w-1/3 bg-mist/15 rounded-sm"></div>
                      <div className="h-20 w-1/3 bg-mist/15 rounded-sm"></div>
                    </div>
                    <div className="h-8 w-full bg-mist/10 rounded-sm"></div>
                    <div className="h-8 w-full bg-mist/10 rounded-sm"></div>
                    <div className="h-8 w-full bg-mist/10 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="num-tag mb-4">// Secteur minier · Lubumbashi</p>

              <h3 className="font-serif text-[28px] md:text-[34px] leading-[1.1] text-ink mb-8">
                HNM Mining — tableau de bord opérationnel livré en{' '}
                <em className="accent-italic">48 heures</em>.
              </h3>

              <hr className="border-ink/15 mb-8" />

              <div className="space-y-8">
                <div>
                  <p className="num-tag mb-2 text-slate">// Le défi</p>
                  <p className="body-md text-ink">
                    HNM gérait manuellement toutes ses expéditions de minerais. La génération de documents de conformité OCDE prenait plusieurs heures par expédition et exposait l'entreprise à des erreurs coûteuses.
                  </p>
                </div>

                <div>
                  <p className="num-tag mb-2 text-slate">// La solution</p>
                  <p className="body-md text-ink">
                    LUBIRA AI a construit un panneau d'administration complet avec agent IA intégré. Le système enregistre chaque expédition et génère automatiquement les documents OCDE conformes en français, en moins de 10 secondes.
                  </p>
                </div>

                <div>
                  <p className="num-tag mb-4 text-slate">// Les résultats</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { v: '−70%', l: 'Temps de reporting' },
                      { v: '100%', l: 'Conformité OCDE' },
                      { v: '48h',  l: 'Délai de livraison' },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="font-serif text-[36px] text-copper-deep leading-none mb-1">{s.v}</p>
                        <p className="body-sm text-slate">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-dashed border-ink/15 rounded-xl p-5 mt-6 bg-cream">
                  <p className="font-serif italic text-[16px] text-ink mb-2">« Témoignage client à venir. »</p>
                  <p className="body-sm text-slate">— Prénom Nom, Titre, HNM Mining SARL</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
