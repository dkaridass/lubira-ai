import { motion } from 'framer-motion';

export function AnimatedSection({ children, className = '', borderLeft = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative ${className} ${borderLeft ? 'pl-6 md:pl-8' : ''}`}
    >
      {borderLeft && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          className="absolute left-0 top-0 bottom-0 w-[6px] bg-red-accent origin-top"
        />
      )}
      {children}
    </motion.section>
  );
}

export function AnimatedCard({ children, className = '', index = 0, hoverEffect = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      whileHover={hoverEffect ? { y: -2 } : {}}
      className={`transition-transform duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
