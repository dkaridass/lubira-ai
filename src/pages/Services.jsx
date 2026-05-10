import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Workflow, Bot, FileText, MessageSquare, BarChart3, Shield, GraduationCap, Target } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
  { n: '01', icon: Workflow,       t: 'Automatisation des processus',     d: "Nous remplaçons vos tâches manuelles répétitives par des scripts intelligents. Vos employés se concentrent enfin sur le travail qui a de la valeur.", deliv: ["Scripts d'intégration API", 'Automatisation Excel/Google Sheets', 'Workflows Zapier/Make sur mesure'] },
  { n: '02', icon: Bot,             t: 'Agents IA sur mesure',             d: "Assistants virtuels connectés à votre base de connaissances. Ils assistent vos employés 24/7 sans jamais se fatiguer.",                                  deliv: ['Chatbot interne sécurisé', 'Intégration Slack/Teams', 'Entraînement sur vos documents'] },
  { n: '03', icon: FileText,        t: 'Intelligence documentaire',        d: "Extraction automatique des informations cruciales de vos factures, contrats et formulaires scannés. Terminé la saisie manuelle et les erreurs.",      deliv: ['OCR propulsé par l\'IA', 'Extraction de données structurées', 'Validation croisée automatique'] },
  { n: '04', icon: MessageSquare,   t: 'Bots WhatsApp Business',           d: "Interagissez avec vos clients là où ils sont déjà. Commandes, requêtes RH, support — tout est géré automatiquement sur WhatsApp.",                   deliv: ['Bot transactionnel complet', 'Escalade vers un agent humain', 'Analyses d\'engagement'] },
  { n: '05', icon: BarChart3,       t: 'Tableaux de bord intelligents',    d: "Transformez vos montagnes de données brutes en informations exploitables. Vos sources connectées, des visuels qui aident à décider vite.",            deliv: ['Agrégation multi-sources', 'Visualisation en temps réel', 'Alertes intelligentes'] },
  { n: '06', icon: Shield,          t: 'Conformité & traçabilité minière', d: "Génération automatique de vos documents de conformité (OCDE, rapports gouvernementaux) sans erreur et en un temps record.",                            deliv: ['Génération de PDF automatisée', 'Piste d\'audit immuable', 'Mises à jour réglementaires'] },
  { n: '07', icon: GraduationCap,   t: 'Formation en IA',                  d: "Nous formons vos équipes dirigeantes et opérationnelles à l'utilisation quotidienne de l'IA générative comme ChatGPT ou Claude.",                       deliv: ['Ateliers pratiques sur site', 'Création de guides d\'utilisation', 'Support post-formation'] },
  { n: '08', icon: Target,          t: 'Conseil stratégique IA',           d: "Où l'IA aura-t-elle le plus d'impact ? Nous auditons vos opérations, chiffrons le ROI et établissons une feuille de route claire.",                    deliv: ['Audit opérationnel sur site', 'Analyse de faisabilité technique', 'Roadmap chiffrée'] },
];

export default function Services() {
  return (
    <div className="w-full bg-paper">
      <SEO title="Services IA — Automatisation, Agents IA, WhatsApp Bots, Conformité OCDE"
        description="Découvrez les 8 services d'intelligence artificielle de LUBIRA AI à Lubumbashi, RDC."
        path="/services" />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 border-b border-ink/8">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-l-[6px] border-copper pl-6 md:pl-10 ml-0 md:ml-4"
          >
            <span className="eyebrow">// Nos services détaillés</span>
            <h1 className="display-lg max-w-4xl mt-6 mb-8">
              Des solutions IA pour{' '}
              <em className="accent-italic">chaque problème opérationnel</em>.
            </h1>
            <p className="body-lg text-slate max-w-2xl">
              De l'extraction de données à l'automatisation de la conformité, nous concevons des systèmes sur mesure pour les entreprises de Lubumbashi. Premier audit gratuit et sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col h-full bg-paper border border-ink/10 border-t-[3px] border-t-copper rounded-2xl p-8 hover:border-ink transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-6 h-6 text-copper-deep" strokeWidth={1.5} />
                    <span className="num-tag">// {srv.n}</span>
                  </div>

                  <h3 className="font-serif text-[26px] leading-[1.1] text-ink mb-4">{srv.t}</h3>
                  <p className="body-sm text-slate mb-8 flex-grow">{srv.d}</p>

                  <div className="mb-8 space-y-3">
                    <p className="num-tag text-slate">// Livrables typiques</p>
                    {srv.deliv.map((item, k) => (
                      <div key={k} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-copper-deep shrink-0 mt-1" strokeWidth={2} />
                        <span className="body-sm text-ink">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-ink/10">
                    <a href={`/contact?service=${encodeURIComponent(srv.t)}`}
                      className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-copper-deep hover:text-ink transition-colors">
                      Demander ce service <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-b border-ink/8 section-y text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <p className="font-serif italic text-[26px] md:text-[32px] text-ink leading-snug mb-10">
            « Chaque solution est tarifée selon vos besoins. Nous signons un NDA avant même de commencer à discuter des détails. »
          </p>
          <a href="/contact" className="btn-primary">
            Obtenir mon audit gratuit <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
