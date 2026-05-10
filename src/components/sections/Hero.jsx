import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-l-[6px] border-red-accent pl-6 md:pl-12 py-24 md:py-32 my-8 md:my-16 ml-4 md:ml-8">
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-6"
          >
            LUBUMBASHI · KATANGA · RDC
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h1-fluid mb-8"
          >
            <span className="block">L'intelligence artificielle,</span>
            <span className="block">livrée à Lubumbashi</span>
            <span className="block relative inline-block">
              en 48 heures.
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-2 bg-red-accent/30 -z-10"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-[1.25rem] text-gray-body leading-relaxed max-w-3xl mb-12"
          >
            LUBIRA AI construit des solutions IA sur mesure pour les entreprises congolaises. 
            Audit gratuit. Premier prototype en 48 heures. Propriété complète du système livré à vous.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-red-accent text-white font-semibold text-[15px] hover:bg-black-strong transition-colors w-full sm:w-auto text-center"
            >
              Réserver mon audit gratuit →
            </a>
            <a 
              href="#realisations" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-black-strong text-black-strong font-semibold text-[15px] hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
            >
              Voir nos réalisations
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-16"
          >
            {["NDA signé d'office", "100% votre propriété", "Exclusivité sectorielle"].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-red-accent font-bold">✓</span>
                <span className="font-inter text-[13px] text-gray-body">{badge}</span>
                {index < 2 && <span className="hidden md:block w-px h-4 bg-gray-border ml-6"></span>}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 pt-6 border-t border-gray-border inline-flex"
          >
            <div className="relative flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-body" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-accent rounded-full animate-ping"></span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-accent rounded-full"></span>
            </div>
            <span className="font-inter text-[12px] text-gray-body">
              Basé à Lubumbashi, Katanga, RDC — Opérationnel
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
