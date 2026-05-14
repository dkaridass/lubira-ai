import { motion } from 'framer-motion';

export default function CaseStudy() {
  return (
    <section className="section" id="realisations" style={{ background: 'var(--paper)' }}>
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="eyebrow">Étude de cas</span>
          <h2>HNM Mining :<br/>−70&nbsp;% sur le <em className="acc">reporting opérationnel</em>.</h2>
          <p className="lead">PME minière de 45 employés, opérations dans le Katanga. Reporting hebdomadaire qui mobilisait 2 personnes pendant 3 jours.</p>
        </motion.div>

        <div className="case-grid">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="dashboard"
          >
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
                    <div className="kpi active"><div className="v">94%</div><div className="l">Conformité</div></div>
                    <div className="kpi"><div className="v">12</div><div className="l">Alertes</div></div>
                  </div>
                  <div className="chart">
                    <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path d="M0,80 L40,72 L80,68 L120,55 L160,50 L200,32 L240,28 L300,18" stroke="#D88A5E" strokeWidth="2" fill="none"/>
                      <path d="M0,80 L40,72 L80,68 L120,55 L160,50 L200,32 L240,28 L300,18 L300,100 L0,100 Z" fill="rgba(216,138,94,0.12)"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="case-content"
          >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
              <span className="chip copper">Secteur minier</span>
              <span className="chip sand">Katanga · 2024</span>
              <span className="chip signal">Conforme OCDE</span>
            </div>
            <h3>De 3 jours à 4 heures par semaine.</h3>
            <div className="block"><h4>// Le défi</h4><p>Consolidation manuelle de 6 sources (chantiers, comptabilité, RH, équipements, sécurité, conformité OCDE) dans des fichiers Excel. 24h+ par semaine. Erreurs récurrentes sur les rapports investisseurs.</p></div>
            <div className="block"><h4>// La solution</h4><p>Pipeline d'ingestion automatique + dashboard temps réel + génération PDF mensuelle pour les investisseurs et la conformité OCDE. Livré en 8 jours.</p></div>
            <div className="results">
              <div className="result"><div className="v" style={{ color: 'var(--copper-deep)' }}>−70%</div><div className="l">Temps de reporting</div></div>
              <div className="result"><div className="v" style={{ color: 'var(--copper)' }}>×4</div><div className="l">Fréquence des MAJ</div></div>
              <div className="result"><div className="v" style={{ color: 'var(--signal)' }}>14j</div><div className="l">Retour sur invest.</div></div>
            </div>
            <div className="case-quote">
              <p>« On a récupéré 20h par semaine. Notre comptable peut enfin se concentrer sur l'analyse, pas la saisie. »</p>
              <div className="author">— Directeur Général, HNM Mining</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
