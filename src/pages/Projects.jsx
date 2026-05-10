import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function Projects() {
  return (
    <div className="w-full bg-paper">
      <SEO title="Réalisations — Études de cas IA au Congo"
        description="Découvrez comment LUBIRA AI a transformé les opérations de Hong Ning Mining SARL à Lubumbashi."
        path="/realisations" />

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container-x">
          <AnimatedSection className="max-w-3xl">
            <span className="eyebrow">// Nos réalisations</span>
            <h1 className="display-lg mt-6 mb-6">
              Des solutions <em className="accent-italic">réelles</em>.<br/>
              Des résultats <em className="accent-italic">mesurables</em>.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured case study */}
      <section className="pb-24">
        <div className="container-x">
          <AnimatedSection borderLeft>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-copper text-paper font-mono text-[10px] uppercase tracking-[0.16em] rounded-full">
                Secteur minier
              </span>
            </div>

            <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] text-ink mb-4 max-w-4xl">
              Comment LUBIRA AI a transformé les opérations de Hong Ning Mining
            </h2>

            <p className="num-tag mb-8">// Lubumbashi, RDC · 2026</p>

            <hr className="border-ink/15 mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-serif text-[24px] text-ink">Le problème</h3>
                <p className="body-md text-slate">
                  Hong Ning Mining SARL, acteur majeur de l'extraction minière au Katanga, faisait face à un goulot d'étranglement critique dans sa chaîne logistique. Chaque expédition de minerais nécessitait la génération manuelle de dizaines de documents de conformité complexes pour répondre aux exigences strictes de l'OCDE et du Ministère des Mines.
                </p>
                <p className="body-md text-slate">
                  Ce processus manuel prenait en moyenne trois jours par expédition, mobilisant une équipe entière et introduisant des risques d'erreurs humaines de saisie qui pouvaient bloquer les camions à la frontière pendant des semaines.
                </p>

                <h3 className="font-serif text-[24px] text-ink pt-6">Notre solution</h3>
                <p className="body-md text-slate">
                  En moins de 48 heures, LUBIRA AI a déployé un panneau d'administration sur mesure sécurisé. Plutôt que de remplacer leur base de données existante, nous avons construit une interface d'intelligence artificielle légère qui s'y connecte directement.
                </p>
                <p className="body-md text-slate">
                  Désormais, lorsqu'un responsable logistique entre les données de pesée et d'analyse d'un lot, l'IA génère instantanément l'ensemble du dossier documentaire (PDFs sécurisés, rapports formatés, attestations de traçabilité). Le système intègre des contrôles croisés automatisés pour garantir zéro erreur avant l'impression finale.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-cream border border-ink/10 rounded-2xl p-8 mb-8">
                  <p className="num-tag mb-8 text-slate">// Impact opérationnel</p>
                  <div className="space-y-8">
                    {[
                      { v: '10 sec', l: 'Temps de génération par dossier (contre 3 jours)' },
                      { v: '100%',   l: 'Conformité OCDE garantie sans intervention humaine' },
                      { v: '0',      l: 'Erreur de saisie depuis le déploiement' },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="font-serif text-[42px] text-copper-deep leading-none mb-2">{s.v}</p>
                        <p className="body-sm text-ink">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="num-tag mb-4 text-slate">// Technologies déployées</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Supabase', 'Claude 3.5 Sonnet', 'jsPDF', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-paper border border-ink/15 rounded-full text-slate body-sm">
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

      {/* Coming soon */}
      <section className="py-24 border-t border-ink/8">
        <div className="container-x">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="eyebrow no-line">// Projets en cours de déploiement</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {['Secteur bancaire', 'Secteur agricole', 'ONG internationale'].map((sector, i) => (
                <AnimatedCard key={sector} index={i} hoverEffect={false}
                  className="bg-cream border-2 border-dashed border-ink/15 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <span className="inline-block px-3 py-1 bg-paper border border-copper text-copper-deep font-mono text-[10px] uppercase tracking-[0.14em] rounded-full mb-4">
                    Bientôt disponible
                  </span>
                  <h3 className="font-serif text-[22px] text-ink text-center">{sector}</h3>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-paper border-t-[3px] border-copper py-24 text-center">
        <AnimatedSection className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-[36px] md:text-[48px] text-ink mb-10">
            Votre entreprise pourrait être <em className="accent-italic">la prochaine</em>.
          </h2>
          <Link to="/contact" className="btn-primary">
            Commencer maintenant <ArrowUpRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
