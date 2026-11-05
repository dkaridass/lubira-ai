import { useEffect } from 'react';
import 'lenis/dist/lenis.css';
import { setLenis } from '../lib/smooth';

const whenIdle = (fn) => (window.requestIdleCallback ? window.requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 600));
const cancelIdle = (id) => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : clearTimeout(id));

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
 * Loaded after the page is idle (never on the critical path) and off for users who
 * prefer reduced motion. Native scrolling, keyboard scrolling and find-in-page keep
 * working: Lenis only eases wheel input.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis = null; let tick = null; let gsapRef = null; let cancelled = false; let idle = 0;

    const start = async () => {
      if (lenis || cancelled) return;
      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([import('lenis'), import('../lib/gsap')]);
      if (cancelled || lenis || mq.matches) return;
      gsapRef = gsap;
      lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true, syncTouch: false });
      setLenis(lenis);
      lenis.on('scroll', ScrollTrigger.update);
      tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };
    const stop = () => {
      if (!lenis) return;
      gsapRef?.ticker.remove(tick);
      lenis.destroy(); lenis = null; tick = null; setLenis(null);
    };
    const sync = () => (mq.matches ? stop() : start());

    if (!mq.matches) idle = whenIdle(start);
    mq.addEventListener('change', sync);
    return () => { cancelled = true; cancelIdle(idle); mq.removeEventListener('change', sync); stop(); };
  }, []);

  return null;
}
