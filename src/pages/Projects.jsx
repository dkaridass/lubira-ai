import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Projects() {
  return (
    <div className="w-full bg-white pb-0">
      <SEO 
        title="Réalisations — Études de Cas IA au Congo"
        description="Découvrez comment LUBIRA AI a transformé les opérations de Hong Ning Mining SARL à Lubumbashi. Conformité OCDE automatisée, génération de documents en 10 secondes. Études de cas IA en RDC."
        path="/realisations"
        keywords="étude de cas IA Congo, réalisation intelligence artificielle RDC, Hong Ning Mining, conformité OCDE automatisée, IA secteur minier Lubumbashi, transformation digitale Congo"
      />
      
      {/* PAGE HEADER */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <p className="eyebrow text-gray-body mb-6">NOS RÉALISATIONS</p>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold mb-6">
              Des solutions réelles.<br/>
              Des résultats mesurables.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection borderLeft>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-accent text-white text-[11px] font-medium uppercase tracking-[0.12em]">
                Secteur Minier
              </span>
            </div>
            
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-black-strong leading-[1.2] mb-4 max-w-4xl">
              Comment LUBIRA AI a transformé les opérations de Hong Ning Mining
            </h2>
            
            <p className="font-inter text-[13px] text-gray-body uppercase tracking-[0.1em] font-semibold mb-8">
              Lubumbashi, DRC · 2026
            </p>
            
            <hr className="border-gray-border mb-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column - Article style */}
              <div className="lg:col-span-7 prose prose-lg prose-p:text-gray-body prose-p:text-[15px] prose-p:leading-[1.8] max-w-none">
                <h3 className="font-playfair text-[22px] font-bold text-black-strong mb-4">Le Problème</h3>
                <p className="mb-6">
                  Hong Ning Mining SARL, acteur majeur de l'extraction minière au Katanga, faisait face à un goulot d'étranglement critique dans sa chaîne logistique. Chaque expédition de minerais nécessitait la génération manuelle de dizaines de documents de conformité complexes pour répondre aux exigences strictes de l'OCDE et du Ministère des Mines.
                </p>
                <p className="mb-8">
                  Ce processus manuel prenait en moyenne trois jours par expédition, mobilisant une équipe entière et introduisant des risques d'erreurs humaines de saisie de données qui pouvaient bloquer les camions à la frontière pendant des semaines, causant des pertes financières substantielles.
                </p>

                <h3 className="font-playfair text-[22px] font-bold text-black-strong mb-4">Notre Solution</h3>
                <p className="mb-6">
                  En moins de 48 heures, LUBIRA AI a déployé un panneau d'administration sur mesure sécurisé. Plutôt que de remplacer leur base de données existante, nous avons construit une interface d'intelligence artificielle légère qui s'y connecte directement.
                </p>
                <p>
                  Désormais, lorsqu'un responsable logistique entre les données de pesée et d'analyse d'un lot, l'IA génère instantanément l'ensemble du dossier documentaire (PDFs sécurisés, rapports formatés, attestations de traçabilité). Le système intègre des contrôles croisés automatisés pour garantir zéro erreur avant l'impression finale.
                </p>
              </div>

              {/* Right Column - Metrics */}
              <div className="lg:col-span-5">
                <div className="bg-off-white border-thin border-gray-border p-8 mb-8">
                  <h4 className="font-inter font-bold text-[13px] uppercase tracking-[0.12em] text-black-strong mb-8">Impact Opérationnel</h4>
                  
                  <div className="space-y-8">
                    <div>
                      <p className="font-playfair text-red-accent font-bold text-[42px] leading-none mb-2">10 sec</p>
                      <p className="text-[14px] font-medium text-black-strong">Temps de génération par dossier (contre 3 jours)</p>
                    </div>
                    <div>
                      <p className="font-playfair text-red-accent font-bold text-[42px] leading-none mb-2">100%</p>
                      <p className="text-[14px] font-medium text-black-strong">Conformité OCDE garantie sans intervention humaine</p>
                    </div>
                    <div>
                      <p className="font-playfair text-red-accent font-bold text-[42px] leading-none mb-2">0</p>
                      <p className="text-[14px] font-medium text-black-strong">Erreur de saisie depuis le déploiement</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-inter font-bold text-[13px] uppercase tracking-[0.12em] text-black-strong mb-4">Technologies Déployées</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Supabase', 'Claude 3.5 Sonnet', 'jsPDF', 'Node.js'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-white border border-gray-border text-gray-body text-[13px] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section className="py-24 border-t border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-[28px] font-bold text-black-strong">Projets en cours de déploiement</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Secteur Bancaire', 'Secteur Agricole', 'ONG Internationale'].map((sector, i) => (
                <AnimatedCard key={sector} index={i} hoverEffect={false} className="bg-off-white border-2 border-dashed border-gray-border p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <span className="inline-block px-3 py-1 bg-white border border-red-accent text-red-accent text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
                    Bientôt disponible
                  </span>
                  <h3 className="font-playfair text-[20px] font-bold text-black-strong text-center">{sector}</h3>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white border-t-[3px] border-red-accent py-24 text-center">
        <AnimatedSection className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-[32px] md:text-[42px] font-bold text-black-strong mb-10">
            Votre entreprise pourrait être la prochaine.
          </h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-accent text-white font-bold text-[15px] hover:bg-[#a62b15] rounded-btn transition-colors">
            Commencer Maintenant
          </Link>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
