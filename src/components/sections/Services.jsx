import { motion } from 'framer-motion';
import { ArrowUpRight, Workflow, Bot, MessageSquare, FileText, BarChart3, Shield } from 'lucide-react';

const services = [
  { num: '01', icon: Workflow,      title: 'Automatisation des processus', desc: 'Remplacement des tâches manuelles répétitives par des scripts intelligents fiables.' },
  { num: '02', icon: Bot,           title: 'Agents IA sur mesure',         desc: 'Assistants virtuels connectés à votre base de connaissances et à vos outils.' },
  { num: '03', icon: MessageSquare, title: 'Bots WhatsApp Business',       desc: 'Service client automatisé sur le canal le plus utilisé en RDC.' },
  { num: '04', icon: FileText,      title: 'Intelligence documentaire',    desc: 'Extraction automatique de données depuis factures, contrats, et rapports.' },
  { num: '05', icon: BarChart3,     title: 'Tableaux de bord intelligents',desc: 'Vos données Excel transformées en insights opérationnels en temps réel.' },
  { num: '06', icon: Shield,        title: 'Conformité & traçabilité OCDE',desc: 'Génération automatique de rapports conformes aux standards internationaux.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream section-y border-y border-ink/8">
      <div className="container-x">
        {/* Section head */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">// 02 — Services</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-md">
              Six prestations,{' '}
              <em className="accent-italic">une seule promesse</em>&nbsp;:
              vous repartez avec un système qui fonctionne, pas une démo.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8 rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.num}
                href="/services"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-paper p-8 md:p-10 flex flex-col gap-6 hover:bg-cream transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <span className="num-tag">// {s.num}</span>
                  <Icon className="w-5 h-5 text-copper-deep opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-[26px] leading-[1.1] text-ink">
                  {s.title}
                </h3>

                <p className="body-sm text-slate flex-1">
                  {s.desc}
                </p>

                <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-copper-deep">
                  En savoir plus
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Footer line */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 border-t border-ink/10">
          <p className="body-md text-slate max-w-xl">
            Vous ne trouvez pas votre besoin ?
            On commence toujours par un audit gratuit pour comprendre.
          </p>
          <a href="#contact" className="btn-secondary self-start md:self-auto">
            Réserver l'audit
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
