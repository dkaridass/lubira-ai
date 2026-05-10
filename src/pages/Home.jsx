import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import Audience from '../components/sections/Audience';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import CaseStudy from '../components/sections/CaseStudy';
import ROICalculator from '../components/sections/ROICalculator';
import Trust from '../components/sections/Trust';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="w-full">
      <SEO 
        title="LUBIRA AI — Solutions IA pour les entreprises de Lubumbashi, DRC"
        description="LUBIRA AI construit des agents IA sur mesure pour les PME congolaises. Audit gratuit. Livraison en 48h. Lubumbashi, RDC."
        path="/"
      />
      
      <Hero />
      <Audience />
      <Services />
      <Process />
      <CaseStudy />
      <ROICalculator />
      <Trust />
      <Pricing />
      <FAQ />
      <ContactSection />
      
    </div>
  );
}
