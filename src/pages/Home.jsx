import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import Audience from '../components/sections/Audience';
import Trust from '../components/sections/Trust';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import ROICalculator from '../components/sections/ROICalculator';
import CaseStudy from '../components/sections/CaseStudy';
import FAQ from '../components/sections/FAQ';
import ContactSection from '../components/sections/ContactSection';

/* Thin sand-coloured hairline between same-tone sections */
const Hr = () => <hr className="sand" />;

/* Graphite stat banner — shows signal green + copper-glow + mist */
function StatsBanner() {
  const stats = [
    { v: '48h', l: 'Livraison garantie', color: 'var(--copper-glow)' },
    { v: '100%', l: 'Code vous appartient', color: 'var(--mist)' },
    { v: '0 €', l: 'Licence retenue', color: 'var(--copper-glow)' },
    { v: 'NDA', l: 'Signé avant échange', color: '#7EC8A4' },
  ];
  return (
    <div style={{
      background: 'var(--graphite)', padding: '48px 0',
      borderTop: '1px solid rgba(214,207,195,.08)',
      borderBottom: '1px solid rgba(214,207,195,.08)',
    }}>
      <div className="container-x" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px', textAlign: 'center',
      }}>
        {stats.map((s) => (
          <div key={s.l}>
            <div style={{
              fontFamily: '"Instrument Serif", serif', fontSize: '48px',
              lineHeight: 1, color: s.color, marginBottom: '8px',
            }}>{s.v}</div>
            <div style={{
              fontFamily: '"Geist Mono", monospace', fontSize: '10px',
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--stone)',
            }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Hr />
      <Audience />
      <Hr />
      <Trust />
      <Process />
      <StatsBanner />
      <Services />
      <Hr />
      <ROICalculator />
      <Hr />
      <CaseStudy />
      <Hr />
      <FAQ />
      <ContactSection />
    </>
  );
}
