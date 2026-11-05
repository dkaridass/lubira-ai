import { Link } from 'react-router-dom';
import { ArrowRight, Check } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

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
    <>
      <SEO
        title="Services IA — Automatisation, Agents IA, WhatsApp Bots, Conformité OCDE"
        description="Découvrez les 8 services d'intelligence artificielle de LUBIRA AI à Lubumbashi, RDC : automatisation des processus, agents IA sur mesure, bots WhatsApp Business, conformité OCDE, tableaux de bord intelligents. Premier audit gratuit."
        path="/services"
        keywords="services IA Lubumbashi, automatisation processus Congo, agent IA sur mesure RDC, bot WhatsApp Business Congo, conformité OCDE IA, tableau de bord intelligent RDC, formation IA Congo, conseil stratégique IA Afrique"
      />

      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Nos services détaillés</span>
            <h1>Des solutions IA pour chaque <span className="acc">problème opérationnel</span>.</h1>
            <p className="lead">De l&apos;extraction de données à l&apos;automatisation de la conformité, nous concevons des systèmes sur mesure pour les entreprises de Lubumbashi. Premier audit gratuit et sans engagement.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: 'var(--s-8)' }} aria-label="Liste des services">
        <div className="container">
          <div className="grid grid--2">
            {services.map((srv, i) => (
              <Reveal key={srv.n} delay={(i % 2) * 0.06} className="card service-card">
                <span className="num-tag" aria-hidden="true">{srv.n}</span>
                <h2 className="heading-6" style={{ marginTop: 8, marginBottom: 12 }}>{srv.t}</h2>
                <p>{srv.d}</p>
                <p style={{ marginTop: 24, fontWeight: 600, color: 'var(--text)' }}>Livrables typiques</p>
                <ul>
                  {srv.deliv.map((item) => (
                    <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                  <Link to="/#contact" className="btn btn--secondary btn--sm btn--block">
                    Demander ce service <ArrowRight size={16} className="arrow" aria-hidden="true" />
                    <span className="sr-only"> : {srv.t}</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="audience-quote" style={{ marginTop: 0 }}>
              « Chaque solution est tarifée selon vos besoins. Nous signons un NDA avant même de commencer à discuter des détails. »
            </p>
            <Link to="/#contact" className="btn btn--primary" style={{ marginTop: 32 }}>
              Obtenir mon audit gratuit <ArrowRight size={18} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
