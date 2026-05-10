import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [salary, setSalary] = useState(500);
  const [annualCost, setAnnualCost] = useState(0);
  const lubiraCost = 800;

  useEffect(() => {
    const hourlyRate = salary / 160;
    setAnnualCost(Math.round(hoursPerWeek * employees * 52 * hourlyRate));
  }, [employees, hoursPerWeek, salary]);

  const savings = Math.max(0, annualCost - lubiraCost);

  return (
    <section className="bg-cream section-y border-b border-ink/8">
      <div className="container-x">
        <div className="mb-16">
          <span className="eyebrow">// 09 — Calculateur de ROI</span>
          <h2 className="display-md max-w-2xl mt-6">
            Combien vous coûte{' '}
            <em className="accent-italic">votre processus manuel</em> ?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <Slider label="Nombre d'employés concernés" value={employees} display={employees} min={1} max={50}
              onChange={(v) => setEmployees(v)} />

            <Slider label="Heures par semaine sur cette tâche" value={hoursPerWeek} display={`${hoursPerWeek}h`} min={1} max={40}
              onChange={(v) => setHoursPerWeek(v)} />

            <div>
              <label className="block font-sans font-semibold text-[14px] text-ink mb-2">
                Salaire mensuel moyen (USD)
              </label>
              <input
                type="number" min="100" step="50"
                value={salary}
                onChange={(e) => setSalary(parseInt(e.target.value) || 0)}
                className="w-full p-4 border border-ink/15 rounded-md bg-paper font-sans text-[15px] text-ink outline-none focus:border-copper transition-colors"
              />
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-paper border border-ink/10 rounded-2xl p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="num-tag mb-2 text-slate">// Coût annuel de cette tâche manuelle</p>
              <p className="font-serif text-[44px] md:text-[52px] text-copper-deep leading-none">
                {annualCost.toLocaleString()} USD
              </p>
            </div>

            <div className="mb-8">
              <p className="num-tag mb-2 text-slate">// Ce que LUBIRA AI vous coûte</p>
              <p className="body-lg text-ink">
                À partir de {lubiraCost} USD — une seule fois.
              </p>
            </div>

            <div className="mb-8 pt-8 border-t border-ink/10">
              <p className="num-tag mb-2 text-slate">// Vous économisez (Année 1)</p>
              <p className="font-serif text-[36px] md:text-[40px] text-success leading-none">
                {savings.toLocaleString()} USD
              </p>
            </div>

            <p className="body-sm text-slate italic mb-8">
              Ces calculs sont conservateurs. Ils n'incluent pas les erreurs humaines, les délais, ni le stress de vos équipes.
            </p>

            <a href="#contact" className="btn-primary w-full justify-center">
              Réserver mon audit gratuit <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, display, min, max, onChange }) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <label className="font-sans font-semibold text-[14px] text-ink">{label}</label>
        <span className="font-mono text-[14px] text-copper-deep">{display}</span>
      </div>
      <input
        type="range" min={min} max={max} value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1 bg-ink/15 rounded appearance-none cursor-pointer accent-copper"
      />
    </div>
  );
}
