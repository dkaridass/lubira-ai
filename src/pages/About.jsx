import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const reasons = [
  { n: '01', t: "Congolais d'abord", d: 'Conçu avec une compréhension intime des réalités locales.' },
  { n: '02', t: 'Livraison en 48h', d: "Vitesse d'exécution inégalée grâce à nos architectures modulaires." },
  { n: '03', t: 'Prix accessibles', d: 'Pas de frais de licence exorbitants. Vous payez pour la valeur créée.' },
  { n: '04', t: 'Résultats garantis', d: 'Nous ne déployons que si nous pouvons garantir un ROI positif.' },
];

const values = [
  { t: 'Vérité', d: "Nous ne survendons pas l'IA. Si un simple script Excel suffit, nous vous le dirons. L'intégrité est notre première métrique." },
  { t: 'Vitesse', d: 'Dans un marché en pleine évolution, la lenteur est mortelle. Nous concevons, testons et déployons en jours, pas en mois.' },
  { t: 'Fierté', d: "Chaque ligne de code que nous écrivons est une preuve que l'ingénierie de classe mondiale peut émerger du Congo." },
];

export default function About() {
  return (
    <>
      <SEO title="À Propos — Cabinet IA Congolais fondé par Darius Tshibangu"
        description="LUBIRA AI est un cabinet de conseil en IA fondé à Lubumbashi, RDC par Darius Tshibangu."
        path="/a-propos" />

      <section className="page-hero">
        <div className="container">
          <div className="split" style={{ gridTemplateColumns: '5fr 7fr', alignItems: 'center' }}>
            <Reveal>
              <div className="founder-photo" style={{ maxWidth: 340 }}>
                <img src="/founder.jpg" alt="Darius Tshibangu, fondateur LUBIRA AI" width="340" height="425" decoding="async" />
              </div>
              <p style={{ marginTop: 24, fontWeight: 600 }}>Darius Tshibangu</p>
              <p className="muted small">Fondateur &amp; CEO, LUBIRA AI</p>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="eyebrow">Notre histoire</span>
              <h1>Né au <span className="acc">Congo</span>. Construit pour l&apos;<span className="acc">Afrique</span>.</h1>
              <div className="prose" style={{ marginTop: 32 }}>
                <p>LUBIRA AI est née d&apos;une conviction profonde : les entreprises africaines méritent les mêmes outils d&apos;intelligence artificielle que le reste du monde. Fondée à Lubumbashi, au cœur de la République Démocratique du Congo, nous construisons une nouvelle infrastructure numérique pour toute l&apos;Afrique.</p>
                <p>Nous ne sommes pas une entreprise étrangère qui arrive avec des solutions toutes faites. Nous sommes d&apos;ici. Nous comprenons vos défis parce que ce sont aussi les nôtres. Nous savons ce que signifie opérer dans un environnement complexe, et nous concevons des outils robustes pour surmonter ces obstacles spécifiques.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="why">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Pourquoi LUBIRA AI</span>
            <h2 id="why">Quatre raisons de nous faire confiance.</h2>
          </Reveal>
          <div className="grid grid--2">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.06} className="card">
                <span className="num-tag" aria-hidden="true">{r.n}</span>
                <h3 style={{ marginTop: 8 }}>{r.t}</h3>
                <p>{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="values">Nos valeurs</h2>
          </Reveal>
          <div className="grid grid--3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <h3 className="heading-4" style={{ marginBottom: 12 }}>{v.t}</h3>
                <p className="muted">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-label="Mission">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p lang="en" className="display" style={{ color: 'var(--on-dark)' }}>
              Built from <span className="acc">Congo</span>.<br />Built for the <span className="acc">World</span>.
            </p>
            <Link to="/contact" className="btn btn--on-dark" style={{ marginTop: 40 }}>
              Parlons de votre projet <ArrowRight size={18} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
