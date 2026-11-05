import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function Projects() {
  return (
    <>
      <SEO title="Réalisations — Études de cas IA au Congo"
        description="Découvrez comment LUBIRA AI a transformé les opérations de Hong Ning Mining SARL à Lubumbashi."
        path="/realisations" />

      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Nos réalisations</span>
            <h1>Des solutions <span className="acc">réelles</span>. Des résultats <span className="acc">mesurables</span>.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: 'var(--s-8)' }} aria-labelledby="featured-case">
        <div className="container">
          <Reveal>
            <span className="chip chip--accent">Secteur minier</span>
            <h2 id="featured-case" className="heading-3" style={{ margin: '16px 0 8px', maxWidth: '24ch' }}>
              Comment LUBIRA AI a transformé les opérations de Hong Ning Mining
            </h2>
            <p className="caption" style={{ marginBottom: 48 }}>Lubumbashi, RDC · 2026</p>

            <div className="split">
              <div className="prose">
                <h3 style={{ marginTop: 0 }}>Le problème</h3>
                <p>Hong Ning Mining SARL, acteur majeur de l&apos;extraction minière au Katanga, faisait face à un goulot d&apos;étranglement critique dans sa chaîne logistique. Chaque expédition de minerais nécessitait la génération manuelle de dizaines de documents de conformité complexes pour répondre aux exigences strictes de l&apos;OCDE et du Ministère des Mines.</p>
                <p>Ce processus manuel prenait en moyenne trois jours par expédition, mobilisant une équipe entière et introduisant des risques d&apos;erreurs humaines de saisie qui pouvaient bloquer les camions à la frontière pendant des semaines.</p>
                <h3>Notre solution</h3>
                <p>En moins de 48 heures, LUBIRA AI a déployé un panneau d&apos;administration sur mesure sécurisé. Plutôt que de remplacer leur base de données existante, nous avons construit une interface d&apos;intelligence artificielle légère qui s&apos;y connecte directement.</p>
                <p>Désormais, lorsqu&apos;un responsable logistique entre les données de pesée et d&apos;analyse d&apos;un lot, l&apos;IA génère instantanément l&apos;ensemble du dossier documentaire (PDFs sécurisés, rapports formatés, attestations de traçabilité). Le système intègre des contrôles croisés automatisés pour garantir zéro erreur avant l&apos;impression finale.</p>
              </div>

              <aside>
                <div className="card">
                  <h3 className="body-4" style={{ color: 'var(--text-2)', marginBottom: 24 }}>Impact opérationnel</h3>
                  <dl>
                    {[
                      { v: '10 sec', l: 'Temps de génération par dossier (contre 3 jours)' },
                      { v: '100%', l: 'Conformité OCDE garantie sans intervention humaine' },
                      { v: '0', l: 'Erreur de saisie depuis le déploiement' },
                    ].map((s) => (
                      <div key={s.l} className="stat-block">
                        <dd className="v">{s.v}</dd>
                        <dt className="l">{s.l}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
                <h3 className="body-4" style={{ color: 'var(--text-2)', margin: '32px 0 12px' }}>Technologies déployées</h3>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['React', 'Supabase', 'Claude 3.5 Sonnet', 'jsPDF', 'Node.js'].map((t) => <li key={t} className="chip">{t}</li>)}
                </ul>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="upcoming">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="upcoming" className="heading-6">Projets en cours de déploiement</h2>
          </Reveal>
          <div className="grid grid--3">
            {['Secteur bancaire', 'Secteur agricole', 'ONG internationale'].map((sector, i) => (
              <Reveal key={sector} delay={i * 0.06} className="card placeholder-card">
                <span className="chip chip--accent">Bientôt disponible</span>
                <h3>{sector}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="proj-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 id="proj-cta" style={{ marginBottom: 32 }}>Votre entreprise pourrait être <span className="acc">la prochaine</span>.</h2>
            <Link to="/contact" className="btn btn--on-dark">
              Commencer maintenant <ArrowRight size={18} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
