import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';
import { getLenis } from '../lib/smooth';

const NAV = [
  { to: '/#services', label: 'Services' },
  { to: '/#realisations', label: 'Réalisations' },
  { to: '/#processus', label: 'Processus' },
  { to: '/#tarifs', label: 'Formules' },
  { to: '/#faq', label: 'FAQ' },
];

function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick} aria-label="LUBIRA AI, accueil">
      <span className="brand-mark" aria-hidden="true">L</span>
      <span className="brand-name">LUBIRA <span>AI</span></span>
    </Link>
  );
}

export default function Layout() {
  const { key, pathname, hash } = useLocation();
  // The menu is "open" only for the location it was opened on, so it closes on any navigation.
  const [openKey, setOpenKey] = useState(null);
  const open = openKey === key;
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // A nav link is current when its hash matches (home sections) — exposed via aria-current.
  const isCurrent = (to) => pathname === '/' && hash && to === `/${hash}`;

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    getLenis()?.stop();
    panelRef.current?.querySelector('a')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') { setOpenKey(null); toggleRef.current?.focus(); return; }
      if (e.key !== 'Tab') return;
      // Keep Tab inside the open menu (panel links + the toggle button)
      const items = [...panelRef.current.querySelectorAll('a,button'), toggleRef.current];
      const first = items[0]; const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; getLenis()?.start(); };
  }, [open]);

  const wa = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}`;

  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">Aller au contenu principal</a>

      <header className="site-header">
        <div className="nav-pill">
          <Brand onClick={() => window.scrollTo(0, 0)} />
          <nav className="nav-primary" aria-label="Navigation principale">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} aria-current={isCurrent(n.to) ? 'location' : undefined}>{n.label}</Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link to="/#contact" className="btn btn--primary btn--sm">Audit gratuit</Link>
            <button
              ref={toggleRef} type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-panel"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpenKey(open ? null : key)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-panel" ref={panelRef} className="mobile-panel" aria-label="Navigation mobile">
            {NAV.map((n, i) => (
              <Link key={n.to} to={n.to} className="m-link" style={{ '--i': i }}
                aria-current={isCurrent(n.to) ? 'location' : undefined}>{n.label}</Link>
            ))}
            <Link to="/#contact" className="btn btn--primary btn--block" style={{ '--i': NAV.length }}>Audit gratuit</Link>
          </nav>
        )}
      </header>

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="cols">
            <div>
              <Brand />
              <p className="about">Conseil en intelligence artificielle pour les entreprises congolaises. Basés à Lubumbashi, RDC.</p>
            </div>
            <nav aria-label="Services">
              <h2 className="footer-h">Services</h2>
              <ul>
                <li><Link to="/services">Automatisation</Link></li>
                <li><Link to="/services">Agents IA</Link></li>
                <li><Link to="/services">Tableaux de bord</Link></li>
                <li><Link to="/#tarifs">Formules</Link></li>
              </ul>
            </nav>
            <nav aria-label="Société">
              <h2 className="footer-h">Société</h2>
              <ul>
                <li><Link to="/realisations">Réalisations</Link></li>
                <li><Link to="/#processus">Méthodologie</Link></li>
                <li><Link to="/a-propos">À propos</Link></li>
                <li><Link to="/#faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div>
              <h2 className="footer-h">Contact</h2>
              <ul>
                <li><a href="mailto:contact@lubira.ai">contact@lubira.ai</a></li>
                <li><a href={wa} target="_blank" rel="noopener noreferrer">+243 99 597 47 70<span className="sr-only"> (WhatsApp, nouvel onglet)</span></a></li>
                <li>Lubumbashi · RDC</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 LUBIRA AI · Tous droits réservés</span>
            <span>Mentions légales · Confidentialité</span>
          </div>
        </div>
      </footer>

      <aside aria-label="Contact rapide"><WhatsAppButton /></aside>
    </>
  );
}
