import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import Audience from '../components/sections/Audience';
import Trust from '../components/sections/Trust';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import ROICalculator from '../components/sections/ROICalculator';
import CaseStudy from '../components/sections/CaseStudy';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import ContactSection from '../components/sections/ContactSection';
import Reveal from '../components/Reveal';
import TaglineReveal from '../components/TaglineReveal';
import CountUp from '../components/CountUp';

const stats = [
  { v: <CountUp to={48} suffix="h" />, l: 'Livraison garantie' },
  { v: <CountUp to={100} suffix="%" />, l: 'Code vous appartient' },
  { v: '0 €', l: 'Licence retenue' },
  { v: 'NDA', l: 'Signé avant échange' },
];

function ProofStrip() {
  return (
    <section className="proof" aria-label="Nos engagements en chiffres">
      <div className="container">
        <dl className="grid grid--4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <dd className="v">{s.v}</dd>
              <dt className="l">{s.l}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <ProofStrip />
      <Audience />
      <TaglineReveal
        label="Notre promesse"
        accent={[6, 7, 8, 9]}
        words={"Si votre équipe passe plus de 2 heures par semaine sur une tâche répétitive, nous pouvons l'automatiser.".split(' ')}
      />
      <Trust />
      <Process />
      <Services />
      <ROICalculator />
      <CaseStudy />
      <Pricing />
      <FAQ />
      <ContactSection />
    </>
  );
}
