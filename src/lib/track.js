import { leadSource } from './utm';

/**
 * Privacy-friendly analytics (Plausible). Does nothing unless VITE_PLAUSIBLE_DOMAIN is set at build time,
 * so no tracker loads by default. Plausible reads utm_* from the landing URL on its own.
 */
export function initAnalytics() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  if (!domain || document.querySelector('script[data-lubira-analytics]')) return;
  const s = document.createElement('script');
  s.defer = true;
  s.dataset.domain = domain;
  s.dataset.lubiraAnalytics = '1';
  s.src = import.meta.env.VITE_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js';
  document.head.appendChild(s);
}

/** Goal events: audit_cta_click, whatsapp_click, lead_submitted. `where` says which button or form. */
export function track(name, where) {
  try {
    window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
    window.plausible(name, { props: { where, source: leadSource() } });
  } catch { /* analytics must never break the page */ }
}
