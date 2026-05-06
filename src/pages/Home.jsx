import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <AnimatedSection borderLeft className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-red-accent mb-6">INTELLIGENCE ARTIFICIELLE · LUBUMBASHI · 2026</p>
          <h1 className="text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold mb-8">
            <span className="block">L'IA qui</span>
            <span className="inline-block bg-red-accent text-white px-2 mt-1 mb-1">répare</span>
            <span className="block">le Congo.</span>
          </h1>
          <p className="text-[17px] text-gray-body leading-[1.7] max-w-2xl mb-10">
            Des solutions d'IA construites ici, pour ici.<br/>
            Livrées en 48 heures. Résultats garantis.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-16">
            <Link to="/contact" className="px-6 py-3 bg-red-accent text-white font-medium text-[15px] rounded-btn hover:bg-[#a62b15] transition-colors">
              Démo Gratuite
            </Link>
            <Link to="/services" className="text-black-strong font-medium text-[15px] hover:text-red-accent flex items-center group transition-colors">
              <span className="border-b border-black-strong group-hover:border-red-accent">Nos Services</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <hr className="border-gray-border mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-border">
            <div className="md:pr-8 py-4 md:py-0">
              <p className="font-playfair text-red-accent font-bold text-[32px] leading-none mb-2">48h</p>
              <p className="text-[13px] font-medium text-black-strong">Délai de livraison moyen</p>
            </div>
            <div className="md:px-8 py-4 md:py-0">
              <p className="font-playfair text-red-accent font-bold text-[32px] leading-none mb-2">100%</p>
              <p className="text-[13px] font-medium text-black-strong">Fait en Afrique</p>
            </div>
            <div className="md:pl-8 py-4 md:py-0">
              <p className="font-playfair text-red-accent font-bold text-[32px] leading-none mb-2">0</p>
              <p className="text-[13px] font-medium text-black-strong">Paperasse inutile</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* PROBLEM SECTION */}
      <section className="bg-off-white border-t-[3px] border-red-accent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mb-16">
              <p className="eyebrow text-gray-body mb-4">LES PROBLÈMES QUE NOUS RÉSOLVONS</p>
              <h2 className="text-[32px] md:text-[42px] leading-[1.2] tracking-[-0.02em] font-bold">
                Chaque semaine, ces problèmes<br className="hidden md:block"/>
                coûtent des milliers de dollars<br className="hidden md:block"/>
                à votre entreprise.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { n: "01", t: "Paperasse Sans Fin", d: "Des heures perdues sur des documents manuels chaque semaine." },
                { n: "02", t: "Processus Trop Lents", d: "Des opérations qui prennent des jours au lieu de minutes." },
                { n: "03", t: "Erreurs Humaines", d: "Des erreurs coûteuses causées par la saisie manuelle répétitive." },
                { n: "04", t: "Conformité Difficile", d: "Des rapports complexes qui épuisent vos équipes chaque mois." },
                { n: "05", t: "Service Client Lent", d: "Des clients qui attendent des heures pour des réponses simples." },
                { n: "06", t: "Données Inexploitées", d: "Des données précieuses bloquées dans des fichiers Excel illisibles." }
              ].map((prob, i) => (
                <AnimatedCard key={prob.n} index={i} className="bg-white border border-gray-border p-6 hover:border-l-[3px] hover:border-l-red-accent transition-all duration-300">
                  <p className="font-playfair text-red-accent font-bold text-[20px] mb-4">{prob.n}</p>
                  <h3 className="font-inter font-bold text-black-strong text-[15px] mb-2">{prob.t}</h3>
                  <p className="text-gray-body text-[13px] leading-relaxed">{prob.d}</p>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-red-accent mb-4">NOS SERVICES</p>
                <h2 className="text-[32px] md:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold mb-6">
                  Huit façons dont LUBIRA AI transforme votre entreprise.
                </h2>
                <p className="text-gray-body text-[14px] leading-relaxed mb-8">
                  Nous ne vendons pas des logiciels génériques. Nous développons des agents intelligents, des automatisations précises et des outils de conformité qui s'intègrent directement dans vos opérations existantes. Notre approche est clinique : nous identifions le goulot d'étranglement et nous le détruisons.
                </p>
                <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 bg-red-accent text-white font-medium text-[14px] rounded-btn hover:bg-[#a62b15] transition-colors">
                  Voir tous les services
                </Link>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex flex-col border-t border-gray-border">
                  {[
                    { n: "01", t: "Automatisation des Processus", d: "Éliminez la saisie de données et les tâches répétitives." },
                    { n: "02", t: "Agents IA sur Mesure", d: "Des assistants virtuels formés sur vos procédures." },
                    { n: "03", t: "Intelligence Documentaire", d: "Extraction automatique de données depuis vos factures et contrats." },
                    { n: "04", t: "Bots WhatsApp Business", d: "Service client et opérations internes automatisés sur WhatsApp." },
                    { n: "05", t: "Tableaux de Bord Intelligents", d: "Vos données Excel transformées en insights en temps réel." },
                    { n: "06", t: "Conformité et Traçabilité", d: "Génération automatique de rapports OCDE et gouvernementaux." },
                    { n: "07", t: "Formation en IA", d: "Montée en compétence de vos équipes sur les outils d'IA." },
                    { n: "08", t: "Conseil Stratégique IA", d: "Audit complet et feuille de route d'intégration." }
                  ].map((srv, i) => (
                    <AnimatedCard key={srv.n} index={i} hoverEffect={false} className="group border-b border-gray-border">
                      <Link to="/services" className="flex items-center justify-between py-5">
                        <div className="flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-6">
                          <span className="font-playfair text-red-accent font-bold text-[16px]">{srv.n}</span>
                          <div>
                            <span className="font-inter font-bold text-black-strong text-[16px] block md:inline md:mr-3">{srv.t}</span>
                            <span className="text-gray-body text-[14px] hidden md:inline">· {srv.d}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-border group-hover:text-red-accent transform group-hover:translate-x-1 transition-all" />
                      </Link>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-off-white border-t-[3px] border-red-accent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="eyebrow text-gray-body mb-4">COMMENT ÇA MARCHE</p>
              <h2 className="text-[32px] md:text-[42px] leading-[1.2] tracking-[-0.02em] font-bold">
                Simple. Rapide. Efficace.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-border border border-gray-border bg-white">
              {[
                { n: "01", t: "Écouter", d: "Nous analysons vos opérations et identifions votre plus grand problème." },
                { n: "02", t: "Concevoir", d: "Nous construisons une solution IA sur mesure en moins de 48 heures." },
                { n: "03", t: "Livrer", d: "Vous recevez un outil fonctionnel, testé et documenté." },
                { n: "04", t: "Évoluer", d: "Nous maintenons et améliorons votre solution dans le temps." }
              ].map((step, i) => (
                <AnimatedCard key={step.n} index={i} hoverEffect={false} className="p-8">
                  <p className="font-playfair text-red-accent font-bold text-[48px] leading-none mb-6">{step.n}</p>
                  <h3 className="font-inter font-bold text-black-strong text-[16px] mb-3">{step.t}</h3>
                  <p className="text-gray-body text-[13px] leading-relaxed">{step.d}</p>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection borderLeft>
            <p className="eyebrow text-red-accent mb-6">PREMIÈRE RÉALISATION</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <h3 className="font-inter font-bold text-black-strong text-[24px] mb-1">Hong Ning Mining SARL</h3>
                  <span className="inline-block px-2 py-1 bg-off-white border border-gray-border text-[11px] font-medium text-gray-body uppercase tracking-wider">
                    Lubumbashi, Katanga, DRC
                  </span>
                </div>
                
                <p className="font-playfair text-[20px] text-gray-body italic leading-relaxed mb-6">
                  "Gestion manuelle des expéditions de minerais et génération lente de documents de conformité OCDE."
                </p>
                
                <p className="font-inter text-[16px] text-black-strong leading-relaxed mb-10">
                  Panneau d'administration IA avec génération automatique de documents conformes en moins de 10 secondes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <p className="font-playfair text-red-accent font-bold text-[32px] leading-none mb-2">10 sec</p>
                    <p className="text-[13px] font-medium text-black-strong">Génération de documents</p>
                  </div>
                  <div>
                    <p className="font-playfair text-red-accent font-bold text-[32px] leading-none mb-2">100%</p>
                    <p className="text-[13px] font-medium text-black-strong">Conformité OCDE</p>
                  </div>
                  <div>
                    <p className="font-playfair text-red-accent font-bold text-[32px] leading-none mb-2">3 jours</p>
                    <p className="text-[13px] font-medium text-black-strong">Délai de livraison</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {['React', 'Supabase', 'Claude AI', 'jsPDF'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-off-white border border-gray-border text-gray-body text-[12px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to="/realisations" className="mt-8 text-[14px] font-medium text-red-accent hover:text-black-strong transition-colors flex items-center gap-1 group lg:justify-end">
                  Lire l'étude de cas complète
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FULL WIDTH CTA BANNER */}
      <section className="bg-red-accent py-20 text-center">
        <AnimatedSection className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-[32px] md:text-[42px] font-bold text-white mb-4">
            Prêt à transformer votre entreprise?
          </h2>
          <p className="font-inter text-[16px] md:text-[18px] text-white/90 mb-10">
            Premier audit gratuit. Réponse en 2 heures.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-[15px] hover:bg-white hover:text-red-accent rounded-btn transition-colors">
            Parler à un Expert
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
