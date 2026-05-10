import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import Audience from '../components/sections/Audience';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import CaseStudy from '../components/sections/CaseStudy';
import Trust from '../components/sections/Trust';
import ROICalculator from '../components/sections/ROICalculator';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Audience />
      <Services />
      <Process />
      <CaseStudy />
      <Trust />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <ContactSection />
    </>
  );
}
