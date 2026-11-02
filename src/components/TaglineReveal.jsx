import { useEffect, useRef, useState } from 'react';

/**
 * Large tagline whose words brighten one at a time, in reading order, as they
 * cross a trigger line (60% down the viewport). One IntersectionObserver for all
 * words; no scroll listener. With reduced motion the full text shows immediately.
 * Words not yet reached are 50% opacity, which still meets the 3:1 large-text contrast.
 */
export default function TaglineReveal({ words, accent = [], label }) {
  const ref = useRef(null);
  const [reduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (reduced) return;
    const nodes = [...ref.current.querySelectorAll('.w')];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        // Words above the trigger line (or already crossing it) switch on, once.
        if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -40% 0px', threshold: 0 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [reduced]);

  return (
    <section className={`tagline${reduced ? ' static' : ''}`} aria-label={label}>
      <div className="container">
        <p ref={ref}>
          {words.map((w, i) => (
            <span key={i}>
              <span className={`w${accent.includes(i) ? ' acc-w' : ''}`}>{w}</span>{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
