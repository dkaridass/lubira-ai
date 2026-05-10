import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
  {
    n: "01",
    t: "Automatisation des Processus",
    d: "Nous remplaçons vos tâches manuelles répétitives par des scripts intelligents. Fini les copier-coller sans fin entre vos logiciels. Vos employés se concentrent enfin sur le travail qui a de la valeur.",
    deliv: ["Scripts d'intégration API", "Automatisation Excel/Google Sheets", "Workflows Zapier/Make sur mesure"]
  },
  {
    n: "02",
    t: "Agents IA sur Mesure",
    d: "Des assistants virtuels connectés à la base de connaissances de votre entreprise. Ils connaissent vos procédures, vos produits et peuvent assister vos employés 24/7 sans jamais se fatiguer.",
    deliv: ["Chatbot interne sécurisé", "Intégration Slack/Teams", "Entraînement sur vos documents"]
  },
  {
    n: "03",
    t: "Intelligence Documentaire",
    d: "Extrayez automatiquement les informations cruciales de vos factures, contrats et formulaires scannés. Terminé la saisie manuelle et les erreurs de frappe qui coûtent cher.",
    deliv: ["OCR propulsé par l'IA", "Extraction de données structurées", "Validation croisée automatique"]
  },
  {
    n: "04",
    t: "Bots WhatsApp Business",
    d: "Interagissez avec vos clients et employés là où ils se trouvent déjà. Commandes, requêtes RH ou support client, tout est géré automatiquement sur WhatsApp.",
    deliv: ["Bot transactionnel complet", "Escalade vers un agent humain", "Analyses d'engagement"]
  },
  {
    n: "05",
    t: "Tableaux de Bord Intelligents",
    d: "Transformez vos montagnes de données brutes en informations exploitables. Nous connectons vos sources de données et construisons des visuels qui vous aident à décider vite.",
    deliv: ["Agrégation de données multi-sources", "Visualisation en temps réel", "Alertes intelligentes"]
  },
  {
    n: "06",
    t: "Conformité et Traçabilité Minière",
    d: "Particulièrement vital pour le secteur minier. Nous générons automatiquement vos documents de conformité (OCDE, rapports gouvernementaux) sans erreur et en un temps record.",
    deliv: ["Génération de PDF automatisée", "Piste d'audit immuable", "Mises à jour réglementaires"]
  },
  {
    n: "07",
    t: "Formation en IA",
    d: "Nous ne vous laissons pas seuls avec la technologie. Nous formons vos équipes dirigeantes et opérationnelles à l'utilisation quotidienne de l'IA générative comme ChatGPT ou Claude.",
    deliv: ["Ateliers pratiques sur site", "Création de guides d'utilisation", "Support post-formation"]
  },
  {
    n: "08",
    t: "Conseil Stratégique IA",
    d: "Où l'IA aura-t-elle le plus d'impact pour vous ? Nous auditons vos opérations, chiffrons le ROI potentiel et établissons une feuille de route claire pour votre transformation.",
    deliv: ["Audit opérationnel sur site", "Analyse de faisabilité technique", "Roadmap d'implémentation chiffrée"]
  }
];

export default function Services() {
  return (
    <div className="w-full bg-white pb-0">
      <SEO 
        title="Services IA — Automatisation, Agents IA, WhatsApp Bots, Conformité OCDE"
        description="Découvrez les 8 services d'intelligence artificielle de LUBIRA AI à Lubumbashi, RDC : automatisation des processus, agents IA sur mesure, bots WhatsApp Business, conformité OCDE, tableaux de bord intelligents. Premier audit gratuit."
        path="/services"
        keywords="services IA Lubumbashi, automatisation processus Congo, agent IA sur mesure RDC, bot WhatsApp Business Congo, conformité OCDE IA, tableau de bord intelligent RDC, formation IA Congo, conseil stratégique IA Afrique"
      />
      
      {/* PAGE HEADER */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-l-[6px] border-red-accent pl-6 md:pl-12 ml-4 md:ml-8"
          >
            <p className="eyebrow mb-6">NOS SERVICES DÉTAILLÉS</p>
            <h1 className="h1-fluid max-w-4xl mb-8">
              Des solutions IA pour chaque<br/>problème opérationnel.
            </h1>
            <p className="font-inter text-[1.25rem] text-gray-body leading-relaxed max-w-2xl">
              De l'extraction de données à l'automatisation de la conformité, nous concevons des systèmes sur mesure pour les entreprises de Lubumbashi. Premier audit gratuit et sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((srv, index) => (
              <motion.div 
                key={srv.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full bg-white border border-gray-border border-t-[3px] border-t-red-accent p-8 relative hover:border-black-strong transition-colors"
              >
                <div className="absolute top-8 right-8 font-inter font-bold text-red-accent text-[14px]">{srv.n}</div>
                
                <h3 className="font-playfair text-black-strong font-bold text-[24px] mb-4 pr-12">
                  {srv.t}
                </h3>
                
                <p className="font-inter text-gray-body text-[15px] leading-relaxed mb-10 flex-grow">
                  {srv.d}
                </p>
                
                <div className="mb-10 space-y-4">
                  <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-black-strong">Livrables typiques</p>
                  {srv.deliv.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-accent shrink-0" strokeWidth={2} />
                      <span className="font-inter text-[14px] text-gray-body">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-border">
                  <a 
                    href={`/#contact?service=${encodeURIComponent(srv.t)}`} 
                    className="inline-flex items-center gap-2 font-inter font-semibold text-[14px] text-red-accent hover:text-black-strong transition-colors"
                  >
                    Demander ce service <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-off-white border-t border-b border-gray-border py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <p className="font-playfair italic text-[24px] md:text-[28px] text-black-strong leading-relaxed mb-10">
            "Chaque solution est tarifée selon vos besoins. Nous signons un NDA avant même de commencer à discuter des détails."
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-red-accent text-white font-semibold text-[15px] hover:bg-black-strong transition-colors"
          >
            Obtenir mon audit gratuit →
          </a>
        </motion.div>
      </section>
      
    </div>
  );
}
