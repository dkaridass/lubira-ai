// First-touch campaign tag. A link like /?utm_source=linkedin&utm_campaign=post23 is remembered for the
// session (even after the visitor navigates), then saved with the lead so you know which post produced it.
const KEY = 'lubira_utm';
const clean = (v) => String(v || '').toLowerCase().replace(/[^a-z0-9_.-]/g, '').slice(0, 40);

export function captureUtm() {
  try {
    const q = new URLSearchParams(window.location.search);
    const source = clean(q.get('utm_source'));
    if (!source) return;                                   // keep any earlier first touch
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, JSON.stringify({ source, medium: clean(q.get('utm_medium')), campaign: clean(q.get('utm_campaign')) }));
  } catch { /* storage blocked: leads still work, just untagged */ }
}

export function getUtm() {
  try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch { return null; }
}

/** Value for the leads.source column: "website", or "website:linkedin/post23" when the visit was tagged. */
export function leadSource() {
  const u = getUtm();
  if (!u) return 'website';
  return `website:${u.source}${u.campaign ? '/' + u.campaign : ''}`;
}
