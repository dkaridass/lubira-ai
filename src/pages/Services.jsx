import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

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
    t: "Conformité et Traçabilité",
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
      
      {/* PAGE HEADER */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection borderLeft className="max-w-3xl">
            <p className="eyebrow text-red-accent mb-6">NOS SERVICES</p>
            <h1 className="text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-bold mb-6">
              Des solutions IA pour chaque<br/>problème opérationnel.
            </h1>
            <p className="text-[18px] text-gray-body leading-relaxed">
              Premier audit gratuit et sans engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, index) => (
              <AnimatedCard key={srv.n} index={index} className="flex flex-col h-full bg-white border-thin border-gray-border border-t-[3px] border-t-red-accent p-8 relative">
                <div className="absolute top-8 right-8 font-playfair text-red-accent font-bold text-[18px]">{srv.n}</div>
                <h3 className="font-playfair text-black-strong font-bold text-[22px] mb-4 pr-12">{srv.t}</h3>
                <p className="text-gray-body text-[14px] leading-relaxed mb-8 flex-grow">
                  {srv.d}
                </p>
                <div className="mb-8 space-y-3">
                  {srv.deliv.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-red-accent shrink-0 mt-0.5" />
                      <span className="text-[13px] text-black-strong font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link to={`/contact?service=${srv.t}`} className="inline-flex items-center justify-center w-full py-3 border border-red-accent text-red-accent font-semibold text-[14px] rounded-btn hover:bg-red-accent hover:text-white transition-colors">
                    Demander ce service
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="bg-off-white border-t-[3px] border-red-accent py-20 text-center">
        <AnimatedSection className="max-w-3xl mx-auto px-4">
          <p className="font-inter text-[18px] md:text-[20px] font-medium text-black-strong mb-10">
            Chaque solution est tarifée selon vos besoins. Premier audit gratuit.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-accent text-white font-bold text-[15px] hover:bg-[#a62b15] rounded-btn transition-colors">
            Obtenir un Devis Gratuit
          </Link>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
