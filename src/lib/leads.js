import { supabase } from './supabase';
import { leadSource } from './utm';

// Where the instant email alert goes. Same formsubmit.co service the /contact page already uses.
const LEAD_EMAIL = import.meta.env.VITE_LEAD_EMAIL || 'dariustshibang53@gmail.com';

const withTimeout = async (promise, ms) => {
  let t;
  const timeout = new Promise((_, rej) => { t = setTimeout(() => rej(new Error('timeout')), ms); });
  try { return await Promise.race([promise, timeout]); } finally { clearTimeout(t); }
};

async function saveToSupabase(payload) {
  if (!supabase) return false;
  const { error } = await supabase.from('leads').insert([payload]);
  if (error) throw error;
  return true;
}

async function emailAlert(payload) {
  const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: payload.nom, email: payload.email, company: payload.entreprise, whatsapp: payload.telephone,
      sector: payload.secteur, services: payload.services_demandes, budget: payload.budget,
      message: payload.besoin, source: payload.source,
      _subject: `[LUBIRA AI] Nouveau lead : ${payload.nom}, ${payload.entreprise}`,
      _template: 'table',
    }),
  });
  if (!res.ok) throw new Error(`email ${res.status}`);
  return true;
}

/**
 * Saves a lead to Supabase AND emails an alert, in parallel. The visitor sees success if at least one
 * worked, so a lead is lost only if both fail. In `npm run dev` with no Supabase configured it
 * simulates success so the form can be tried locally.
 */
export async function submitLead(fields) {
  const payload = { ...fields, status: 'nouveau', source: leadSource() };
  if (import.meta.env.DEV && !supabase) { await new Promise((r) => setTimeout(r, 800)); return { saved: false, emailed: false, simulated: true }; }
  const [db, mail] = await Promise.allSettled([withTimeout(saveToSupabase(payload), 10000), withTimeout(emailAlert(payload), 10000)]);
  const saved = db.status === 'fulfilled' && db.value === true;
  const emailed = mail.status === 'fulfilled' && mail.value === true;
  if (!saved) console.warn('Lead not saved to Supabase:', db.reason?.message || 'Supabase not configured');
  if (!emailed) console.warn('Lead email alert failed:', mail.reason?.message);
  if (!saved && !emailed) throw new Error('Lead could not be delivered');
  return { saved, emailed };
}
