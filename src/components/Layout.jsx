import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';

const NAV = [
  { to: '/#services', label: 'Services' },
  { to: '/#realisations', label: 'Réalisations' },
  { to: '/#processus', label: 'Processus' },
  { to: '/#tarifs', label: 'Formules' },
  { to: '/#faq', label: 'FAQ' },
];

function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick} aria-label="LUBIRA AI — accueil">
      <span className="brand-mark" aria-hidden="true">L</span>
      <span className="brand-name">LUBIRA <span>AI</span></span>
    </Link>
  );
}

export default function Layout() {
  // The menu is "open" only for the location it was opened on, so it closes
  // automatically on any navigation without a setState-in-effect.
  const { key } = useLocation();
  const [openKey, setOpenKey] = useState(null);
  const open = openKey === key;
  const setOpen = (v) => setOpenKey(v ? key : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpenKey(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const wa = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}`;

  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">Aller au contenu principal</a>

      <header className="site-header">
        <div className="container bar">
          <Brand onClick={() => window.scrollTo(0, 0)} />
          <nav className="nav-primary" aria-label="Navigation principale">
            {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
          </nav>
          <div className="nav-actions">
            <Link to="/#contact" className="btn btn--primary btn--sm">Audit gratuit</Link>
            <button
              type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-nav"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile">
            {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
            <Link to="/#contact" className="btn btn--primary btn--block" style={{ marginTop: 20, borderBottom: 0 }}>Audit gratuit</Link>
          </nav>
        )}
      </header>

      <main id="main">
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
