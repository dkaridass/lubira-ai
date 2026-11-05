import Reveal from '../Reveal';
import SectionHead from '../SectionHead';

export default function CaseStudy() {
  return (
    <section className="section section--alt" id="realisations" aria-labelledby="case-title">
      <div className="container">
        <SectionHead
          id="case-title"
          eyebrow="Étude de cas"
          title={<><span className="nb">HNM Mining&nbsp;:</span> −70&nbsp;% sur le <span className="acc">reporting opérationnel</span>.</>}
          lead="PME minière de 45 employés, opérations dans le Katanga. Reporting hebdomadaire qui mobilisait 2 personnes pendant 3 jours."
        />
        <div className="case-grid">
          {/* Decorative dashboard illustration */}
          <Reveal className="dashboard" aria-hidden="true">
            <div className="frame">
              <div className="topbar">
                <div className="title"><span className="pulse"></span>HNM · Tableau de bord opérationnel</div>
                <div className="dots"><span></span><span></span><span></span></div>
              </div>
              <div className="body">
                <div className="sidebar"><div></div><div></div><div></div><div></div><div></div></div>
                <div className="main-area">
                  <div className="kpis">
                    <div className="kpi"><div className="v">347t</div><div className="l">Tonnage</div></div>
                    <div className="kpi"><div className="v">94%</div><div className="l">Conformité</div></div>
                    <div className="kpi"><div className="v">12</div><div className="l">Alertes</div></div>
                  </div>
                  <div className="chart">
                    <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path d="M0,80 L40,72 L80,68 L120,55 L160,50 L200,32 L240,28 L300,18 L300,100 L0,100 Z" fill="rgba(232,162,124,0.16)" />
                      <path d="M0,80 L40,72 L80,68 L120,55 L160,50 L200,32 L240,28 L300,18" stroke="#E8A27C" strokeWidth="2.5" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="case-content">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="chip chip--accent">Secteur minier</span>
              <span className="chip">Katanga · 2024</span>
              <span className="chip chip--success">Conforme OCDE</span>
            </div>
            <h3>De 3 jours à 4 heures par semaine.</h3>
            <div className="block"><h4>Le défi</h4><p>Consolidation manuelle de 6 sources (chantiers, comptabilité, RH, équipements, sécurité, conformité OCDE) dans des fichiers Excel. 24h+ par semaine. Erreurs récurrentes sur les rapports investisseurs.</p></div>
            <div className="block"><h4>La solution</h4><p>Pipeline d&apos;ingestion automatique + dashboard temps réel + génération PDF mensuelle pour les investisseurs et la conformité OCDE. Livré en 8 jours.</p></div>
            <dl className="results">
              <div className="result"><dd className="v">−70%</dd><dt className="l">Temps de reporting</dt></div>
              <div className="result"><dd className="v">×4</dd><dt className="l">Fréquence des MAJ</dt></div>
              <div className="result"><dd className="v">14j</dd><dt className="l">Retour sur invest.</dt></div>
            </dl>
            <figure className="case-quote">
              <blockquote><p>« On a récupéré 20h par semaine. Notre comptable peut enfin se concentrer sur l&apos;analyse, pas la saisie. »</p></blockquote>
              <figcaption className="author">— Directeur Général, HNM Mining</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
