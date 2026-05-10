import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="w-full bg-paper">
      <SEO title="À Propos — Cabinet IA Congolais fondé par Darius Tshibangu"
        description="LUBIRA AI est un cabinet de conseil en IA fondé à Lubumbashi, RDC par Darius Tshibangu."
        path="/a-propos" />

      {/* Story */}
      <section className="pt-24 md:pt-32 pb-24">
        <div className="container-x">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="w-56 h-56 rounded-full border-[3px] border-copper bg-cream flex items-center justify-center mb-8 overflow-hidden">
                  <img src="/founder.jpg" alt="Darius Tshibangu, fondateur LUBIRA AI" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-[26px] text-ink mb-1">Darius Tshibangu</h3>
                <p className="num-tag">// Fondateur & CEO, LUBIRA AI</p>
              </div>

              <div className="lg:col-span-7">
                <span className="eyebrow">// Notre histoire</span>
                <h1 className="display-lg mt-6 mb-8">
                  Né au <em className="accent-italic">Congo</em>.<br />
                  Construit pour l'<em className="accent-italic">Afrique</em>.
                </h1>

                <div className="space-y-6">
                  <p className="body-md text-slate">
                    LUBIRA AI est née d'une conviction profonde : les entreprises africaines méritent les mêmes outils d'intelligence artificielle que le reste du monde. Fondée à Lubumbashi, au cœur de la République Démocratique du Congo, nous construisons une nouvelle infrastructure numérique pour toute l'Afrique.
                  </p>
                  <p className="body-md text-slate">
                    Nous ne sommes pas une entreprise étrangère qui arrive avec des solutions toutes faites. Nous sommes d'ici. Nous comprenons vos défis parce que ce sont aussi les nôtres. Nous savons ce que signifie opérer dans un environnement complexe, et nous concevons des outils robustes pour surmonter ces obstacles spécifiques.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream border-t-[3px] border-copper py-24">
        <div className="container-x">
          <AnimatedSection>
            <div className="mb-16">
              <span className="eyebrow">// Pourquoi LUBIRA AI</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { n: '01', t: 'Congolais d\'abord',  d: 'Conçu avec une compréhension intime des réalités locales.' },
                { n: '02', t: 'Livraison en 48h',     d: 'Vitesse d\'exécution inégalée grâce à nos architectures modulaires.' },
                { n: '03', t: 'Prix accessibles',     d: 'Pas de frais de licence exorbitants. Vous payez pour la valeur créée.' },
                { n: '04', t: 'Résultats garantis',   d: 'Nous ne déployons que si nous pouvons garantir un ROI positif.' },
              ].map((reason, i) => (
                <AnimatedCard key={reason.n} index={i} hoverEffect={false}
                  className="bg-paper border border-ink/10 rounded-2xl p-8">
                  <p className="num-tag mb-4">// {reason.n}</p>
                  <h3 className="font-serif text-[22px] text-ink mb-2">{reason.t}</h3>
                  <p className="body-sm text-slate">{reason.d}</p>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { t: 'Vérité', d: "Nous ne survendons pas l'IA. Si un simple script Excel suffit, nous vous le dirons. L'intégrité est notre première métrique." },
                { t: 'Vitesse', d: "Dans un marché en pleine évolution, la lenteur est mortelle. Nous concevons, testons et déployons en jours, pas en mois." },
                { t: 'Fierté',  d: "Chaque ligne de code que nous écrivons est une preuve que l'ingénierie de classe mondiale peut émerger du Congo." },
              ].map((val) => (
                <div key={val.t} className="pl-6 border-l-[4px] border-copper py-2">
                  <h3 className="font-serif text-[28px] text-ink mb-4">{val.t}</h3>
                  <p className="body-sm text-slate">{val.d}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission banner */}
      <section className="bg-cream border-y-[3px] border-copper py-32 text-center">
        <AnimatedSection className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] text-ink">
            Built from <em className="accent-italic">Congo</em>.<br />
            Built for the <em className="accent-italic">World</em>.
          </h2>
        </AnimatedSection>
      </section>
    </div>
  );
}
