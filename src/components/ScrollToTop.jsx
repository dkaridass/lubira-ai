import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On route change: scroll to top, or — when the URL has a #hash — to that
 * section, and move keyboard focus to it (WCAG 2.4.3) so screen-reader and
 * keyboard users land where the page scrolled.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Smooth only for same-page jumps; arriving from another route is instant.
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: reduce || !samePage ? 'instant' : 'smooth', block: 'start' });
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
