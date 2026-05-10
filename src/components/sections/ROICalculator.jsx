import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [salary, setSalary] = useState(500);
  
  const [annualCost, setAnnualCost] = useState(0);
  const lubiraCost = 800;

  useEffect(() => {
    // cost = hours * employees * 52 weeks * (salary / 160 hours per month)
    const hourlyRate = salary / 160;
    const cost = Math.round(hoursPerWeek * employees * 52 * hourlyRate);
    setAnnualCost(cost);
  }, [employees, hoursPerWeek, salary]);

  const savings = Math.max(0, annualCost - lubiraCost);

  return (
    <section className="bg-off-white py-24 md:py-32 border-b border-gray-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <p className="eyebrow mb-6">CALCULATEUR DE ROI</p>
          <h2 className="h2-fluid max-w-2xl">
            Combien vous coûte<br/>votre processus manuel ?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Inputs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-inter font-bold text-[14px] text-black-strong">
                  Nombre d'employés concernés
                </label>
                <span className="font-inter font-bold text-[14px] text-red-accent">{employees}</span>
              </div>
              <input 
                type="range" 
                min="1" max="50" 
                value={employees} 
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-border appearance-none cursor-pointer accent-red-accent"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="font-inter font-bold text-[14px] text-black-strong">
                  Heures par semaine sur cette tâche
                </label>
                <span className="font-inter font-bold text-[14px] text-red-accent">{hoursPerWeek}h</span>
              </div>
              <input 
                type="range" 
                min="1" max="40" 
                value={hoursPerWeek} 
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-border appearance-none cursor-pointer accent-red-accent"
              />
            </div>

            <div>
              <label className="block font-inter font-bold text-[14px] text-black-strong mb-2">
                Salaire mensuel moyen (USD)
              </label>
              <input 
                type="number" 
                min="100" step="50"
                value={salary} 
                onChange={(e) => setSalary(parseInt(e.target.value) || 0)}
                className="w-full p-4 border border-gray-border bg-white font-inter text-[15px] text-black-strong outline-none focus:border-red-accent transition-colors"
              />
            </div>
            
            <button className="w-full py-4 bg-red-accent text-white font-semibold text-[15px] hover:bg-black-strong transition-colors cursor-default">
              Calculer mon coût annuel
            </button>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-12 border border-gray-border"
          >
            <div className="mb-8">
              <p className="font-inter text-[13px] uppercase tracking-[0.12em] text-gray-body mb-2">
                Coût annuel de cette tâche manuelle:
              </p>
              <p className="font-playfair font-bold text-[40px] md:text-[48px] text-red-accent leading-none">
                {annualCost.toLocaleString()} USD
              </p>
            </div>

            <div className="mb-8">
              <p className="font-inter text-[13px] uppercase tracking-[0.12em] text-gray-body mb-2">
                Ce que LUBIRA AI vous coûte:
              </p>
              <p className="font-inter text-[18px] text-black-strong">
                À partir de {lubiraCost} USD — une seule fois.
              </p>
            </div>

            <div className="mb-8 pt-8 border-t border-gray-border">
              <p className="font-inter text-[13px] uppercase tracking-[0.12em] text-gray-body mb-2">
                Vous économisez (Année 1):
              </p>
              <p className="font-playfair font-bold text-[32px] md:text-[36px] text-green-success leading-none">
                {savings.toLocaleString()} USD
              </p>
            </div>

            <p className="font-inter text-[13px] text-gray-body italic mb-8">
              Ces calculs sont conservateurs. Ils n'incluent pas les erreurs humaines, les délais, ni le stress de vos équipes.
            </p>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center w-full py-4 bg-red-accent text-white font-semibold text-[15px] hover:bg-black-strong transition-colors"
            >
              Réserver mon audit gratuit →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
