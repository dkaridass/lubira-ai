import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from '../lib/smooth';

/**
 * On route change: scroll to top, or, when the URL has a #hash, to that section,
 * and move keyboard focus to it (WCAG 2.4.3) so screen reader and keyboard users
 * land where the page scrolled. Uses Lenis when smooth scroll is on.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Smooth only for same-page jumps; arriving from another route is instant.
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    const instant = reduce || !samePage;
    const lenis = getLenis();

    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        // Lenis reads the CSS scroll-padding-top (96px, clears the floating bar), so no extra offset.
        // resize() first: after a route change Lenis still holds the previous page's height as its limit.
        if (lenis) { lenis.resize(); lenis.scrollTo(el, { immediate: instant, duration: 1.4 }); }
        else el.scrollIntoView({ behavior: instant ? 'instant' : 'smooth', block: 'start' });
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        return;
      }
    }
    if (lenis) { lenis.resize(); lenis.scrollTo(0, { immediate: true }); }
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
