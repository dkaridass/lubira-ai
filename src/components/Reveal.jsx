import { motion } from 'framer-motion';

/**
 * Reveal — single, calm scroll-in used across the site.
 * Fade + 12px rise, once. Reduced motion is honoured globally by
 * <MotionConfig reducedMotion="user"> in App.jsx (transforms are disabled).
 */
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
