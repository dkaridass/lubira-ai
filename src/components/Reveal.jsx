import { motion } from 'framer-motion';

/**
 * Reveal: single scroll-in used across the site.
 * Rises 32px and fades in over 700ms on the base curve, once.
 * Reduced motion is honoured globally by <MotionConfig reducedMotion="user"> in App.jsx,
 * which drops the movement and keeps a plain opacity change.
 */
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
