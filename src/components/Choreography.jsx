import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const whenIdle = (fn) => (window.requestIdleCallback ? window.requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 600));
const cancelIdle = (id) => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : clearTimeout(id));

/**
 * GSAP choreography, attached after the page is idle so GSAP is not in the first paint:
 *  - section titles reveal line by line (SplitText, masked rise) when they scroll into view;
 *    titles already on screen are left alone so nothing flickers
 *  - on desktop the process section pins and its four steps light up in order (ScrollTrigger scrub)
 * Nothing runs with reduced motion. Re-attached on every route change.
 */
export default function Choreography() {
  const { pathname } = useLocation();

  useEffect(() => {
    let mm = null; let cancelled = false;

    const run = async () => {
      const { gsap, SplitText } = await import('../lib/gsap');
      if (cancelled) return;
      if (document.fonts?.ready) await document.fonts.ready;
      if (cancelled) return;

      mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        document.querySelectorAll('.section-head h2').forEach((h) => {
          if (h.getBoundingClientRect().top < window.innerHeight * 0.88) return; // already visible
          SplitText.create(h, {
            type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 110, duration: 1.1, ease: 'base', stagger: 0.12,
                scrollTrigger: { trigger: h, start: 'top 88%', once: true },
              });
            },
          });
        });
      });

      mm.add('(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
        const root = document.getElementById('processus');
        const stage = root?.querySelector('.process-stage');
        if (!root || !stage) return;
        const cards = gsap.utils.toArray('.step', root);
        root.classList.add('is-story');
        gsap.set(cards, { scale: 0.96, '--lit': 0 });
        gsap.set(root.querySelectorAll('.step-num'), { backgroundColor: '#6E6E73' });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: stage, start: 'top 14%', end: '+=150%', pin: true, scrub: 0.5, anticipatePin: 1 },
        });
        tl.to(root.querySelector('.process-progress i'), { scaleX: 1, duration: cards.length }, 0);
        cards.forEach((card, i) => {
          const at = i * 0.95 + (i === 0 ? 0 : 0.1);
          tl.to(card, { scale: 1, y: -8, '--lit': 1, duration: 0.5 }, at);
          tl.to(card.querySelector('.step-num'), { backgroundColor: '#A8542C', duration: 0.4 }, at);
        });
        return () => root.classList.remove('is-story');
      });
    };

    const idle = whenIdle(run);
    return () => { cancelled = true; cancelIdle(idle); mm?.revert(); };
  }, [pathname]);

  return null;
}
