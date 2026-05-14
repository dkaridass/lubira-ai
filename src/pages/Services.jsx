import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const services = [
  {
    n: '01', t: 'Automatisation des Processus',
    d: "Nous remplaçons vos tâches manuelles répétitives par des scripts intelligents. Fini les copier-coller sans fin entre vos logiciels. Vos employés se concentrent enfin sur le travail qui a de la valeur.",
    deliv: ['Scripts d\'intégration API', 'Automatisation Excel/Google Sheets', 'Workflows Zapier/Make sur mesure'],
  },
  {
    n: '02', t: 'Agents IA sur Mesure',
    d: "Des assistants virtuels connectés à la base de connaissances de votre entreprise. Ils connaissent vos procédures, vos produits et peuvent assister vos employés 24/7 sans jamais se fatiguer.",
    deliv: ['Chatbot interne sécurisé', 'Intégration Slack/Teams', 'Entraînement sur vos documents'],
  },
  {
    n: '03', t: 'Intelligence Documentaire',
    d: "Extrayez automatiquement les informations cruciales de vos factures, contrats et formulaires scannés. Terminé la saisie manuelle et les erreurs de frappe qui coûtent cher.",
    deliv: ['OCR propulsé par l\'IA', 'Extraction de données structurées', 'Validation croisée automatique'],
  },
  {
    n: '04', t: 'Bots WhatsApp Business',
    d: "Interagissez avec vos clients et employés là où ils se trouvent déjà. Commandes, requêtes RH ou support client, tout est géré automatiquement sur WhatsApp.",
    deliv: ['Bot transactionnel complet', 'Escalade vers un agent humain', 'Analyses d\'engagement'],
  },
  {
    n: '05', t: 'Tableaux de Bord Intelligents',
    d: "Transformez vos montagnes de données brutes en informations exploitables. Nous connectons vos sources de données et construisons des visuels qui vous aident à décider vite.",
    deliv: ['Agrégation de données multi-sources', 'Visualisation en temps réel', 'Alertes intelligentes'],
  },
  {
    n: '06', t: 'Conformité et Traçabilité Minière',
    d: "Particulièrement vital pour le secteur minier. Nous générons automatiquement vos documents de conformité (OCDE, rapports gouvernementaux) sans erreur et en un temps record.",
    deliv: ['Génération de PDF automatisée', 'Piste d\'audit immuable', 'Mises à jour réglementaires'],
  },
  {
    n: '07', t: 'Formation en IA',
    d: "Nous ne vous laissons pas seuls avec la technologie. Nous formons vos équipes dirigeantes et opérationnelles à l'utilisation quotidienne de l'IA générative comme ChatGPT ou Claude.",
    deliv: ['Ateliers pratiques sur site', 'Création de guides d\'utilisation', 'Support post-formation'],
  },
  {
    n: '08', t: 'Conseil Stratégique IA',
    d: "Où l'IA aura-t-elle le plus d'impact pour vous ? Nous auditons vos opérations, chiffrons le ROI potentiel et établissons une feuille de route claire pour votre transformation.",
    deliv: ['Audit opérationnel sur site', 'Analyse de faisabilité technique', 'Roadmap d\'implémentation chiffrée'],
  },
];

export default function Services() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <SEO
        title="Services IA — Automatisation, Agents IA, WhatsApp Bots, Conformité OCDE"
        description="Découvrez les 8 services d'intelligence artificielle de LUBIRA AI à Lubumbashi, RDC : automatisation des processus, agents IA sur mesure, bots WhatsApp Business, conformité OCDE, tableaux de bord intelligents. Premier audit gratuit."
        path="/services"
        keywords="services IA Lubumbashi, automatisation processus Congo, agent IA sur mesure RDC, bot WhatsApp Business Congo, conformité OCDE IA, tableau de bord intelligent RDC, formation IA Congo, conseil stratégique IA Afrique"
      />

      {/* Header */}
      <section className="section">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-head"
          >
            <span className="eyebrow">Nos services détaillés</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.02, marginTop: '20px' }}>Des solutions IA pour chaque<br/><em className="acc">problème opérationnel</em>.</h1>
            <p className="lead">De l'extraction de données à l'automatisation de la conformité, nous concevons des systèmes sur mesure pour les entreprises de Lubumbashi. Premier audit gratuit et sans engagement.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ paddingBottom: '96px' }}>
        <div className="container-x">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '32px' }}>
            {services.map((srv, index) => (
              <motion.div
                key={srv.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="service-card"
                style={{ position: 'relative' }}
              >
                <span className="num-tag" style={{ position: 'absolute', top: '36px', right: '36px' }}>// {srv.n}</span>
                <h3 style={{ paddingRight: '64px' }}>{srv.t}</h3>
                <p className="desc">{srv.d}</p>
                <div style={{ marginBottom: '28px' }}>
                  <p style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '14px', fontWeight: 500 }}>Livrables typiques</p>
                  {srv.deliv.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0', fontSize: '14px', color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--copper)', fontFamily: '"Geist Mono", monospace' }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(14,15,18,.08)' }}>
                  <a
                    href={`/#contact?service=${encodeURIComponent(srv.t)}`}
                    className="btn btn--ghost btn--sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Demander ce service <span className="arrow">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section cream" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--ink)', lineHeight: 1.35, marginBottom: '32px' }}>
              « Chaque solution est tarifée selon vos besoins. Nous signons un NDA avant même de commencer à discuter des détails. »
            </p>
            <a href="/#contact" className="btn btn--primary">
              Obtenir mon audit gratuit <span className="arrow">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
