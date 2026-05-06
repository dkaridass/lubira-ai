import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="w-full bg-white pb-0">
      <SEO 
        title="À Propos — Cabinet IA Congolais fondé par Darius Tshibangu"
        description="LUBIRA AI est un cabinet de conseil en intelligence artificielle fondé à Lubumbashi, RDC par Darius Tshibangu. Né au Congo, construit pour l'Afrique. Découvrez notre histoire, nos valeurs et notre mission."
        path="/a-propos"
        keywords="LUBIRA AI fondateur, Darius Tshibangu, cabinet IA Congo, entreprise intelligence artificielle Lubumbashi, startup IA Afrique, consultant IA congolais, à propos LUBIRA AI"
      />
      
      {/* STORY SECTION */}
      <section className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Left Column - Founder */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="w-64 h-64 rounded-full border-[3px] border-red-accent bg-off-white flex items-center justify-center mb-8 relative overflow-hidden">
                  <img src="/founder.jpg" alt="Fondateur LUBIRA AI" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-playfair text-black-strong font-bold text-[24px] mb-1">Darius Tshibangu</h3>
                <p className="font-inter text-red-accent text-[14px] font-semibold tracking-wide uppercase">
                  Fondateur & CEO, LUBIRA AI
                </p>
              </div>

              {/* Right Column - Story */}
              <div className="lg:col-span-7">
                <p className="eyebrow text-red-accent mb-6">NOTRE HISTOIRE</p>
                <h1 className="font-playfair text-[32px] md:text-[42px] font-bold text-black-strong leading-[1.1] mb-8">
                  Né au Congo.<br/>Construit pour l'Afrique.
                </h1>
                
                <div className="prose prose-lg prose-p:text-gray-body prose-p:text-[15px] prose-p:leading-[1.8] max-w-none">
                  <p className="mb-6">
                    LUBIRA AI est née d'une conviction profonde : les entreprises africaines méritent les mêmes outils d'intelligence artificielle que le reste du monde. Fondée à Lubumbashi, au cœur de la République Démocratique du Congo, nous construisons une nouvelle infrastructure numérique pour toute l'Afrique.
                  </p>
                  <p>
                    Nous ne sommes pas une entreprise étrangère qui arrive avec des solutions toutes faites. Nous sommes d'ici. Nous comprenons vos défis parce que ce sont aussi les nôtres. Nous savons ce que signifie opérer dans un environnement complexe, et nous concevons des outils robustes pour surmonter ces obstacles spécifiques.
                  </p>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="bg-off-white border-t-[3px] border-red-accent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-16">
              <p className="eyebrow text-gray-body mb-4">POURQUOI LUBIRA AI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { n: "01", t: "Congolais d'Abord", d: "Conçu avec une compréhension intime des réalités locales." },
                { n: "02", t: "Livraison en 48h", d: "Vitesse d'exécution inégalée grâce à nos architectures modulaires." },
                { n: "03", t: "Prix Accessibles", d: "Pas de frais de licence exorbitants, vous payez pour la valeur créée." },
                { n: "04", t: "Résultats Garantis", d: "Nous ne déployons que si nous pouvons garantir un ROI positif." }
              ].map((reason, i) => (
                <AnimatedCard key={reason.n} index={i} hoverEffect={false} className="bg-white border border-gray-border p-8">
                  <p className="font-playfair text-red-accent font-bold text-[20px] mb-4">{reason.n}</p>
                  <h3 className="font-inter font-bold text-black-strong text-[16px] mb-2">{reason.t}</h3>
                  <p className="text-gray-body text-[14px] leading-relaxed">{reason.d}</p>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { t: "Vérité", d: "Nous ne survendons pas l'IA. Si un simple script Excel suffit, nous vous le dirons. L'intégrité est notre première métrique." },
                { t: "Vitesse", d: "Dans un marché en pleine évolution, la lenteur est mortelle. Nous concevons, testons et déployons en jours, pas en mois." },
                { t: "Fierté", d: "Chaque ligne de code que nous écrivons est une preuve que l'ingénierie de classe mondiale peut émerger du Congo." }
              ].map((val, i) => (
                <div key={val.t} className="pl-6 border-l-[4px] border-red-accent py-2">
                  <h3 className="font-playfair text-black-strong font-bold text-[24px] mb-4">{val.t}</h3>
                  <p className="text-gray-body text-[14px] leading-relaxed">{val.d}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION STATEMENT BANNER */}
      <section className="bg-off-white border-y-[3px] border-red-accent py-32 text-center">
        <AnimatedSection className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-[40px] md:text-[64px] font-bold text-black-strong leading-[1.1] tracking-[-0.02em]">
            Built from <span className="text-red-accent">Congo.</span><br/>
            Built for the World.
          </h2>
        </AnimatedSection>
      </section>
      
    </div>
  );
}
