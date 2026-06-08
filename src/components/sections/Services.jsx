import { motion } from 'framer-motion';

const services = [
  { num: '01', title: 'Automatisation des Processus', desc: 'Remplacez vos tâches répétitives par des agents IA opérationnels 24h/24.', items: ['Audit des processus existants', 'Workflows automatisés sur mesure', 'Intégrations Excel, Email, SAP, etc.', 'Dashboards temps réel'], price: 'à partir de 2 500 $', delivery: 'Livraison 48h' },
  { num: '02', title: 'Agents IA conversationnels', desc: 'Des assistants virtuels connectés à la base de connaissances de votre entreprise, pour le service client, la formation interne et l\'analyse documentaire.', items: ['RAG sur vos documents privés', 'Multilingue (FR · EN · Swahili)', 'Intégrable web, WhatsApp, Teams', 'Audit logs & gouvernance'], price: 'à partir de 4 500 $', delivery: 'Livraison 5 jours' },
  { num: '03', title: 'Tableaux de bord & Analyse', desc: 'Vos données brutes transformées en décisions claires, en temps réel. Visualisation de vos KPIs métier, alertes automatiques, rapports pour direction et investisseurs.', items: ['Consolidation multi-sources', 'KPIs personnalisés', 'Alertes & notifications', 'Export PDF & reporting investisseurs'], price: 'à partir de 3 000 $', delivery: 'Livraison 3 jours' },
  { num: '04', title: 'Intelligence Documentaire', desc: 'Extraction automatique des informations cruciales de vos factures, contrats et formulaires scannés. Terminé la saisie manuelle et les erreurs de frappe.', items: ['OCR propulsé par l\'IA', 'Extraction de données structurées', 'Validation croisée automatique', 'Archivage intelligent'], price: 'à partir de 2 000 $', delivery: 'Livraison 48h' },
  { num: '05', title: 'Bots WhatsApp Business', desc: 'Interagissez avec vos clients et employés là où ils se trouvent déjà. Commandes, requêtes RH ou support client, tout est géré automatiquement sur WhatsApp.', items: ['Bot transactionnel complet', 'Multilingue FR/Swahili/EN', 'Escalade vers agent humain', 'Analyses d\'engagement'], price: 'à partir de 3 500 $', delivery: 'Livraison 5 jours' },
  { num: '06', title: 'Conformité & Traçabilité Minière', desc: 'Traçabilité OCDE, documentation ITSCI, registres immuables pour l\'export. Particulièrement vital pour le secteur minier au Katanga.', items: ['Génération de PDF automatisée', 'Piste d\'audit immuable', 'Mises à jour réglementaires', 'Rapports conformité OCDE'], price: 'à partir de 4 000 $', delivery: 'Livraison 5 jours' },
  { num: '07', title: 'Formation en IA', desc: 'Nous formons vos équipes dirigeantes et opérationnelles à l\'utilisation quotidienne de l\'IA générative comme ChatGPT ou Claude.', items: ['Ateliers pratiques sur site', 'Création de guides d\'utilisation', 'Support post-formation', 'Suivi mensuel'], price: 'à partir de 1 500 $', delivery: 'Sessions 1-2 jours' },
  { num: '08', title: 'Conseil Stratégique IA', desc: 'Où l\'IA aura-t-elle le plus d\'impact pour vous ? Nous auditons vos opérations, chiffrons le ROI potentiel et établissons une feuille de route claire.', items: ['Audit opérationnel sur site', 'Analyse de faisabilité technique', 'Roadmap d\'implémentation chiffrée', 'Accompagnement décisionnel'], price: 'Sur devis', delivery: 'Selon périmètre' },
  { num: '09', title: 'IA & Machine Learning (Demaze)', desc: 'Nous construisons des solutions d\'intelligence artificielle sur mesure pour transformer vos données brutes en informations exploitables.', items: ['Analyses prédictives & Prévisions', 'Traitement du langage naturel (NLP)', 'Vision par ordinateur (Computer Vision)', 'Modèles génératifs & Synthèse de contenu'], price: 'à partir de 5 000 $', delivery: 'Livraison 5 jours' },
  { num: '10', title: 'Développement Web, Mobile & SaaS', desc: 'Conception de logiciels, plateformes SaaS et applications mobiles évolutives offrant des expériences utilisateur exceptionnelles.', items: ['Applications Web & Mobile natives', 'Développement SaaS sur mesure', 'Automatisation des flux de travail', 'Architecture API & Intégrations', 'Progressive Web Apps (PWA)'], price: 'à partir de 4 000 $', delivery: 'Livraison 5 jours' },
  { num: '11', title: 'E-commerce & Places de Marché', desc: 'Plateformes de e-commerce intelligentes et marketplaces multi-vendeurs optimisées par l\'IA pour maximiser vos conversions.', items: ['Boutiques en ligne & Marketplaces', 'Recommandations de produits par l\'IA', 'Abonnements & Paiements récurrents', 'Passerelles de paiement & Sécurité', 'Gestion logistique & Stocks'], price: 'à partir de 3 500 $', delivery: 'Livraison 4 jours' },
  { num: '12', title: 'Architecture Cloud & DevOps', desc: 'Architectures cloud sécurisées et pipelines DevOps pour garantir la haute disponibilité et la scalabilité de vos systèmes.', items: ['Migration & Modernisation Cloud', 'Applications Cloud-Native', 'Architectures Multi-Cloud & Hybrides', 'Sécurité & Gouvernance Cloud', 'Observabilité & Optimisation DevOps'], price: 'à partir de 3 000 $', delivery: 'Livraison 3 jours' },
];

export default function Services() {
  return (
    <section className="section dark on-dark" id="services">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="eyebrow">Nos services</span>
          <h2>Douze façons de transformer<br/><em className="acc">vos opérations</em>.</h2>
          <p className="lead">Chaque mission inclut audit gratuit, NDA signé, transfert complet du code et formation de votre équipe.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="service-card"
            >
              <span className="num-tag">// {srv.num}</span>
              <h3>{srv.title}</h3>
              <p className="desc">{srv.desc}</p>
              <ul>
                {srv.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
