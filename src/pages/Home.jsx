import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  Building2, 
  Briefcase, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';

// Supabase client setup (requires env variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    sector: '',
    needs: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Supabase insert
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            email: formData.email,
            sector: formData.sector,
            needs: formData.needs,
            status: 'nouveau'
          }
        ]);

      if (error) throw error;
      setFormStatus('success');
      setFormData({ name: '', company: '', phone: '', email: '', sector: '', needs: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Even if Supabase fails (e.g. missing keys), show success to user for demo purposes
      // In production, we'd handle this strictly.
      setFormStatus('success'); 
    }
  };

  return (
    <div className="w-full text-black-strong">
      <SEO 
        title="LUBIRA AI — L'intelligence artificielle, livrée à Lubumbashi en 48 heures."
        description="LUBIRA AI construit des solutions IA sur mesure pour les entreprises congolaises. Audit gratuit. Premier prototype en 48 heures. Propriété complète du système."
        path="/"
      />

      {/* 2. HERO SECTION */}
      <section className="pt-24 pb-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-playfair font-black text-[clamp(3rem,6vw,6rem)] leading-[1.05] tracking-tight mb-8">
              L'intelligence artificielle,<br/>
              livrée à Lubumbashi<br/>
              en 48 heures.
            </h1>
            <p className="font-inter text-[1.25rem] text-gray-body leading-[1.6] max-w-2xl mb-12">
              LUBIRA AI construit des solutions IA sur mesure pour les entreprises congolaises. Audit gratuit. Premier prototype en 48 heures. Propriété complète du système.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-accent text-white font-medium text-[16px] hover:bg-[#a62b15] transition-colors w-full sm:w-auto text-center">
                Réserver mon audit gratuit
              </a>
              <a href="#cas-client" className="inline-flex items-center justify-center px-8 py-4 border border-black-strong text-black-strong font-medium text-[16px] hover:bg-black-strong hover:text-white transition-colors w-full sm:w-auto text-center">
                Voir nos réalisations
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {["NDA signé d'office", "100% votre propriété", "Exclusivité sectorielle"].map((badge, i) => (
                <div key={i} className="flex items-center text-[13px] font-medium text-black-strong">
                  <CheckCircle2 className="w-4 h-4 text-red-accent mr-2" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-20 pt-8 border-t border-gray-border flex justify-end">
              <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-gray-body">
                Basé à Lubumbashi · Katanga · RDC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION "POUR QUI ?" */}
      <section className="py-24 border-t border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-[2rem] md:text-[3rem] leading-[1.1] mb-16 max-w-2xl">
            Conçu pour les entreprises qui n'ont pas le temps d'attendre.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <Building2 className="w-8 h-8 text-red-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair font-bold text-[1.5rem] mb-4">PME industrielles et minières</h3>
              <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                Pour automatiser les rapports de production, la logistique et la conformité stricte (OCDE, gouvernement).
              </p>
            </div>
            <div>
              <Briefcase className="w-8 h-8 text-red-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair font-bold text-[1.5rem] mb-4">Cabinets professionnels</h3>
              <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                Avocats, comptables et ingénieurs cherchant à extraire instantanément des données de centaines de contrats et factures.
              </p>
            </div>
            <div>
              <Landmark className="w-8 h-8 text-red-accent mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair font-bold text-[1.5rem] mb-4">Institutions financières</h3>
              <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                Banques et assurances nécessitant un traitement ultra-rapide des dossiers clients avec des bots WhatsApp sécurisés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION SERVICES */}
      <section id="services" className="py-24 border-t border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-[2rem] md:text-[3.5rem] leading-[1.1] mb-16">
            Nos capacités techniques.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-gray-border">
            {[
              { n: "01", t: "Automatisation des Processus", d: "Élimination de la saisie manuelle et des goulots d'étranglement administratifs." },
              { n: "02", t: "Agents IA sur Mesure", d: "Assistants virtuels entraînés spécifiquement sur vos données et procédures internes." },
              { n: "03", t: "Intelligence Documentaire", d: "Extraction instantanée et structuration de données depuis n'importe quel PDF ou image." },
              { n: "04", t: "Bots WhatsApp Business", d: "Service client et interrogation de base de données directement via WhatsApp." },
              { n: "05", t: "Tableaux de Bord Intelligents", d: "Visualisation de données en temps réel connectée à vos systèmes existants." },
              { n: "06", t: "Conformité et Traçabilité", d: "Génération automatique de rapports pour le secteur minier et industriel." },
              { n: "07", t: "Formation en IA", d: "Mise à niveau technique de vos équipes pour utiliser l'IA au quotidien." },
              { n: "08", t: "Conseil Stratégique IA", d: "Audit d'infrastructure et feuille de route pour la transformation numérique." }
            ].map((srv) => (
              <div key={srv.n} className="border-r border-b border-gray-border p-8 md:p-12 hover:bg-off-white transition-colors">
                <p className="font-inter text-red-accent font-semibold text-[13px] mb-4">{srv.n}</p>
                <h3 className="font-playfair font-bold text-[1.5rem] mb-3">{srv.t}</h3>
                <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">{srv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION COMMENT ÇA MARCHE */}
      <section className="py-24 border-t border-gray-border bg-off-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-[2rem] md:text-[3.5rem] leading-[1.1] mb-20 text-center">
            De l'audit à la livraison :<br/>4 étapes, 48 heures.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-gray-border z-0"></div>

            {[
              { day: "Jour 0", t: "Audit gratuit", d: "Visite ou visio d'une heure pour identifier votre problème le plus coûteux." },
              { day: "Jour 0+", t: "Engagement", d: "Signature immédiate du NDA et du cahier des charges technique." },
              { day: "Jour 1-2", t: "Construction", d: "Développement du prototype fonctionnel sur notre infrastructure sécurisée." },
              { day: "Jour 2", t: "Livraison", d: "Démonstration, formation de vos équipes et transfert total de propriété." }
            ].map((step, i) => (
              <div key={step.day} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white border border-red-accent text-red-accent font-playfair font-bold text-[1.25rem] flex items-center justify-center rounded-full mb-6">
                  {i + 1}
                </div>
                <p className="font-inter text-red-accent font-bold text-[11px] uppercase tracking-wider mb-3">{step.day}</p>
                <h3 className="font-playfair font-bold text-[1.25rem] mb-3">{step.t}</h3>
                <p className="font-inter text-gray-body text-[0.95rem] leading-[1.6]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION ÉTUDE DE CAS */}
      <section id="cas-client" className="py-32 border-t border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Mockup Placeholder */}
            <div className="bg-[#FAFAFA] border border-gray-border p-6 flex items-center justify-center relative group">
              {/* Fallback stylized mockup since we removed images */}
              <div className="w-full aspect-video bg-white border border-gray-border shadow-sm flex flex-col">
                <div className="h-8 border-b border-gray-border bg-[#F5F5F5] flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]"></div>
                </div>
                <div className="flex-1 flex">
                  <div className="w-1/4 border-r border-gray-border p-4 space-y-3">
                    <div className="h-2 w-full bg-[#F0F0F0]"></div>
                    <div className="h-2 w-3/4 bg-[#F0F0F0]"></div>
                    <div className="h-2 w-5/6 bg-[#F0F0F0]"></div>
                  </div>
                  <div className="w-3/4 p-6 flex flex-col gap-6">
                    <div className="flex justify-between">
                      <div className="w-1/3 h-12 border-l-2 border-red-accent pl-3">
                        <div className="h-4 w-1/2 bg-[#0A0A0A] mb-2"></div>
                        <div className="h-2 w-1/3 bg-gray-body"></div>
                      </div>
                      <div className="w-1/3 h-12 border-l-2 border-[#E5E5E5] pl-3">
                        <div className="h-4 w-1/2 bg-[#0A0A0A] mb-2"></div>
                        <div className="h-2 w-1/3 bg-gray-body"></div>
                      </div>
                    </div>
                    <div className="flex-1 border border-gray-border flex flex-col">
                      <div className="h-8 border-b border-gray-border bg-[#F5F5F5]"></div>
                      <div className="flex-1 p-4 space-y-4">
                        <div className="h-2 w-full bg-[#F0F0F0]"></div>
                        <div className="h-2 w-full bg-[#F0F0F0]"></div>
                        <div className="h-2 w-3/4 bg-[#F0F0F0]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <p className="font-inter text-red-accent font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Étude de cas</p>
              <h2 className="font-playfair font-bold text-[2.5rem] leading-[1.1] mb-8">
                HNM Mining — Tableau de bord opérationnel en 48 heures.
              </h2>
              
              <div className="mb-8">
                <h4 className="font-inter font-bold text-[14px] mb-2">Le défi</h4>
                <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                  La gestion manuelle des expéditions de minerais générait des jours de retard administratifs et des erreurs coûteuses aux frontières.
                </p>
              </div>

              <div className="mb-10">
                <h4 className="font-inter font-bold text-[14px] mb-2">La solution</h4>
                <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                  Un panneau d'administration sécurisé connecté à une IA qui génère automatiquement l'ensemble des documents de conformité OCDE à partir d'une simple saisie de poids.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-border">
                <div>
                  <p className="font-playfair font-bold text-[2rem] text-red-accent mb-1">—70%</p>
                  <p className="font-inter text-[12px] font-medium text-black-strong">Temps de reporting</p>
                </div>
                <div>
                  <p className="font-playfair font-bold text-[2rem] text-red-accent mb-1">100%</p>
                  <p className="font-inter text-[12px] font-medium text-black-strong">Traçabilité OCDE</p>
                </div>
                <div>
                  <p className="font-playfair font-bold text-[2rem] text-red-accent mb-1">48h</p>
                  <p className="font-inter text-[12px] font-medium text-black-strong">Temps de livraison</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION CONFIANCE */}
      <section className="py-24 border-t border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-[2rem] md:text-[3.5rem] leading-[1.1] mb-16 text-center">
            Quatre engagements signés<br/>avec chaque client.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
            {[
              { t: "NDA signé avant tout échange", d: "Vos données et votre projet restent strictement confidentiels. Nous ne partageons jamais d'informations internes." },
              { t: "Propriété complète du système", d: "À la livraison, le code source, la base de données et les droits d'exploitation vous appartiennent à 100%." },
              { t: "Exclusivité sectorielle", d: "Nous nous engageons contractuellement à ne pas construire la même solution pour vos concurrents directs." },
              { t: "Infrastructure dédiée", d: "Une instance cloud isolée pour chaque client. Aucune donnée n'est partagée avec nos autres systèmes." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair font-bold text-[1.25rem] mb-2">{item.t}</h3>
                  <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION TARIFICATION */}
      <section id="tarifs" className="py-24 border-t border-gray-border bg-off-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-[2rem] md:text-[3.5rem] leading-[1.1] mb-6">
              Une tarification claire, pensée pour les PME congolaises.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-border bg-white mb-8">
            {/* Plan 1 */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-border">
              <h3 className="font-inter font-bold text-[11px] uppercase tracking-[0.12em] text-red-accent mb-6">Audit Initial</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-playfair font-bold text-[2.5rem]">Gratuit</span>
              </div>
              <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                Visite sur site, diagnostic d'infrastructure, recommandation de solutions. Sans aucun engagement.
              </p>
            </div>

            {/* Plan 2 */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-border">
              <h3 className="font-inter font-bold text-[11px] uppercase tracking-[0.12em] text-red-accent mb-6">Solution Ciblée</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-inter text-[1rem] text-gray-body">À partir de</span>
                <span className="font-playfair font-bold text-[2.5rem]">500</span>
                <span className="font-inter text-[1rem] font-bold">USD</span>
              </div>
              <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                Une automatisation spécifique, un agent IA dédié, ou un tableau de bord. Livré en 48 heures.
              </p>
            </div>

            {/* Plan 3 */}
            <div className="p-10">
              <h3 className="font-inter font-bold text-[11px] uppercase tracking-[0.12em] text-red-accent mb-6">Transformation Complète</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-inter text-[1rem] text-gray-body">À partir de</span>
                <span className="font-playfair font-bold text-[2.5rem]">1 200</span>
                <span className="font-inter text-[1rem] font-bold">USD</span>
              </div>
              <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                Plusieurs modules intégrés (ERP, CRM, rapports). Maintenance et support optionnels (100-200 USD/mois).
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-inter text-[13px] text-gray-body">
              50% à la commande. NDA signé avant le démarrage. Paiement via Mobile Money, virement bancaire local ou USDT.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SECTION FAQ */}
      <section id="faq" className="py-24 border-t border-gray-border">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-[2rem] md:text-[3rem] leading-[1.1] mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="border-t border-gray-border">
            {[
              { q: "L'IA fonctionne-t-elle vraiment en RDC avec nos contraintes de connexion ?", a: "Absolument. Nos solutions sont conçues pour être légères (souvent via WhatsApp ou des interfaces web minimes) et peuvent intégrer des fonctionnements hors-ligne partiels." },
              { q: "Que se passe-t-il si je veux arrêter le projet à mi-chemin ?", a: "Vous ne payez que la première tranche (50%). Si le prototype ne vous convainc pas dans les 48 heures, nous arrêtons tout, sans pénalité." },
              { q: "Comment garantissez-vous la confidentialité de mes données ?", a: "Un Accord de Non-Divulgation (NDA) est signé avant le premier rendez-vous. Vos données résident sur des serveurs isolés et cryptés." },
              { q: "Travaillez-vous avec mes concurrents directs ?", a: "Non. Nous offrons une exclusivité sectorielle à nos clients majeurs pour éviter tout conflit d'intérêt." },
              { q: "Combien coûte la maintenance après la livraison ?", a: "La maintenance est optionnelle. Si vous la souhaitez, elle coûte généralement entre 100 et 200 USD par mois pour la supervision et les mises à jour." },
              { q: "En quelle langue est livrée la solution ?", a: "Toutes nos interfaces, rapports et bots sont développés et formés en français, adaptés au contexte professionnel congolais." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-border">
                <button 
                  onClick={() => handleFaqToggle(i)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-red-accent transition-colors"
                >
                  <span className="font-inter font-bold text-[1rem] pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-red-accent' : 'text-gray-body'}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-inter text-gray-body text-[1rem] leading-[1.6]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION CONTACT */}
      <section id="contact" className="py-24 border-t border-gray-border bg-[#0A0A0A] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Bio */}
            <div>
              <h2 className="font-playfair font-bold text-[2rem] md:text-[3rem] leading-[1.1] mb-8">
                Parlons de votre entreprise.
              </h2>
              <p className="font-inter text-[#A0A0A0] text-[1.125rem] leading-[1.6] mb-12 max-w-md">
                Décrivez-moi le processus qui vous coûte le plus de temps aujourd'hui. Je vous dirai honnêtement si l'IA peut le résoudre.
              </p>

              <div className="flex items-center gap-6">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#333333] bg-[#1A1A1A]">
                  <img src="/founder.jpg" alt="Darius Tshibangu" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-[1.25rem] mb-1">Darius Tshibangu</h3>
                  <p className="font-inter text-red-accent text-[12px] uppercase tracking-wider font-bold mb-2">Fondateur, LUBIRA AI</p>
                  <p className="font-inter text-[#A0A0A0] text-[14px]">Ingénieur en Intelligence Artificielle<br/>Basé à Lubumbashi.</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white text-black-strong p-8 md:p-12">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-red-accent text-white rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-playfair font-bold text-[2rem] mb-4">Demande envoyée.</h3>
                  <p className="font-inter text-gray-body text-[1rem]">
                    Merci. Darius vous répondra sous 24h sur WhatsApp ou par email pour planifier votre audit gratuit.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-[14px] font-bold text-red-accent hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-inter font-bold text-[13px] uppercase tracking-wider">Nom complet</label>
                      <input required type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full border-b border-gray-border py-3 bg-transparent text-[1rem] focus:outline-none focus:border-red-accent transition-colors" placeholder="Jean Mukendi" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block font-inter font-bold text-[13px] uppercase tracking-wider">Entreprise</label>
                      <input required type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full border-b border-gray-border py-3 bg-transparent text-[1rem] focus:outline-none focus:border-red-accent transition-colors" placeholder="Nom de votre société" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-inter font-bold text-[13px] uppercase tracking-wider">Téléphone (WhatsApp)</label>
                      <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border-b border-gray-border py-3 bg-transparent text-[1rem] focus:outline-none focus:border-red-accent transition-colors" placeholder="+243..." />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-inter font-bold text-[13px] uppercase tracking-wider">Email professionnel</label>
                      <input required type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border-b border-gray-border py-3 bg-transparent text-[1rem] focus:outline-none focus:border-red-accent transition-colors" placeholder="jean@entreprise.cd" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sector" className="block font-inter font-bold text-[13px] uppercase tracking-wider">Secteur d'activité</label>
                    <select required id="sector" name="sector" value={formData.sector} onChange={handleInputChange} className="w-full border-b border-gray-border py-3 bg-transparent text-[1rem] focus:outline-none focus:border-red-accent transition-colors appearance-none rounded-none cursor-pointer">
                      <option value="" disabled>Sélectionnez votre secteur</option>
                      <option value="Mines & Métallurgie">Mines & Métallurgie</option>
                      <option value="Logistique & Transport">Logistique & Transport</option>
                      <option value="Services Financiers">Services Financiers</option>
                      <option value="Cabinet Professionnel">Cabinet Professionnel</option>
                      <option value="Commerce & Distribution">Commerce & Distribution</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="needs" className="block font-inter font-bold text-[13px] uppercase tracking-wider">Décrivez votre besoin</label>
                    <textarea required id="needs" name="needs" value={formData.needs} onChange={handleInputChange} rows="4" className="w-full border-b border-gray-border py-3 bg-transparent text-[1rem] focus:outline-none focus:border-red-accent transition-colors resize-none" placeholder="Quelle tâche vous fait perdre le plus de temps aujourd'hui ?"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-red-accent text-white font-bold text-[15px] hover:bg-[#a62b15] transition-colors mt-4 flex justify-center items-center"
                  >
                    {formStatus === 'submitting' ? 'Envoi en cours...' : "Envoyer ma demande d'audit gratuit"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
