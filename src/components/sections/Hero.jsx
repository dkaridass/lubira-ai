import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      {/* Subtle texture: copper haze top-right and bottom-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(1200px 500px at 85% 0%, rgba(184,99,58,.18), transparent 60%), radial-gradient(700px 400px at 5% 100%, rgba(184,99,58,.08), transparent 60%)'
        }}
      />

      <div className="container-x relative pt-24 md:pt-32 pb-24 md:pb-32">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow on-dark"
        >
          // Cabinet IA · Lubumbashi · Katanga · RDC
        </motion.span>

        {/* Headline — sérif éditorial */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="display-xl mt-8 max-w-[18ch]"
        >
          L'IA{' '}
          <em className="accent-italic">construite ici</em>,
          <br />
          livrée en{' '}
          <em className="accent-italic">48 heures</em>.
        </motion.h1>

        {/* Lede */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="body-lg text-cream/70 mt-8 max-w-2xl"
        >
          LUBIRA AI conçoit des solutions d'intelligence artificielle pour les
          entreprises congolaises. Audit gratuit, premier prototype en 48&nbsp;heures,
          et propriété complète du système livré chez vous.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-12"
        >
          <a href="#contact" className="btn-primary">
            Réserver mon audit gratuit
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/realisations" className="btn" style={{ background: 'transparent', color: 'var(--color-cream)', borderColor: 'rgba(245,240,232,.3)', border: '1px solid rgba(245,240,232,.3)' }}>
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-3xl"
        >
          {[
            { kicker: '01', label: 'NDA signé d\'office' },
            { kicker: '02', label: '100% votre propriété' },
            { kicker: '03', label: 'Exclusivité sectorielle' },
          ].map((b) => (
            <div key={b.kicker} className="border-t border-cream/15 pt-4">
              <div className="num-tag on-dark mb-2">// {b.kicker}</div>
              <div className="body-sm text-cream font-medium">{b.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Location ping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="inline-flex items-center gap-3 mt-16 px-4 py-2 rounded-full border border-cream/10 bg-ink-soft"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-copper-glow animate-ping opacity-75" />
            <span className="relative w-2 h-2 rounded-full bg-copper-glow" />
          </span>
          <MapPin className="w-3.5 h-3.5 text-stone" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone">
            Opérationnel · Lubumbashi
          </span>
        </motion.div>
      </div>
    </section>
  );
}
