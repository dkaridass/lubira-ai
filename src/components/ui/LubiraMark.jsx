/**
 * LubiraMark — Symbole "disque cuivré" de LUBIRA AI.
 *
 * Le symbole : un disque de cuivre avec une fine barre intérieure
 * (rappel du soleil de Lubumbashi / du cuivre du Katanga).
 * Fonctionne dès 16px, en mono comme en couleur.
 *
 * Usage:
 *   <LubiraMark className="w-8 h-8" />            // couleur (cuivre)
 *   <LubiraMark variant="mono" className="w-8 h-8" /> // mono (currentColor)
 *   <LubiraMark variant="inverse" className="w-8 h-8" /> // sur fond sombre
 */
export default function LubiraMark({ className = 'w-8 h-8', variant = 'color', title = 'LUBIRA AI' }) {
  const fill = variant === 'mono'
    ? 'currentColor'
    : variant === 'inverse'
      ? 'var(--color-copper-glow, #D88A5E)'
      : 'var(--color-copper, #B8633A)';

  const bar = variant === 'mono'
    ? 'var(--color-paper, #FBF8F2)'
    : variant === 'inverse'
      ? 'var(--color-ink, #0E0F12)'
      : 'var(--color-paper, #FBF8F2)';

  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="24" cy="24" r="22" fill={fill} />
      <rect x="14" y="22.75" width="20" height="2.5" rx="1.25" fill={bar} />
    </svg>
  );
}
