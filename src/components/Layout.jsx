import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LubiraMark from './ui/LubiraMark';
import WhatsAppButton from './WhatsAppButton';

const navLinks = [
  { path: 'services', label: 'Services' },
  { path: 'realisations', label: 'Réalisations' },
  { path: 'a-propos', label: 'À propos' },
  { path: '#faq', label: 'FAQ' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, path) => {
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(path.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink">
      {/* ===== HEADER ===== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-paper/95 border-ink/8 py-3'
            : 'bg-paper/80 border-transparent py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <LubiraMark className="w-9 h-9 transition-transform duration-300 group-hover:rotate-12" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[24px] tracking-tight text-ink">
                LUBIRA <em className="accent-italic">AI</em>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate mt-1">
                Lubumbashi · RDC
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.path.startsWith('#') ? (
                <a
                  key={link.path}
                  href={location.pathname === '/' ? link.path : `/${link.path}`}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-[14px] font-medium text-ink/80 hover:text-copper-deep"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={`/${link.path}`}
                  className="text-[14px] font-medium text-ink/80 hover:text-copper-deep"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <a
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex btn-primary"
          >
            Audit gratuit
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-ink p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[64px] bg-paper z-40 h-[calc(100vh-64px)] overflow-y-auto border-t border-ink/8">
            <div className="flex flex-col h-full p-6 gap-6">
              {navLinks.map((link) =>
                link.path.startsWith('#') ? (
                  <a
                    key={link.path}
                    href={location.pathname === '/' ? link.path : `/${link.path}`}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="font-serif text-[28px] text-ink border-b border-ink/8 pb-4"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={`/${link.path}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-[28px] text-ink border-b border-ink/8 pb-4"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={location.pathname === '/' ? '#contact' : '/#contact'}
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary mt-4"
              >
                Audit gratuit
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===== MAIN ===== */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="on-dark bg-ink text-cream relative overflow-hidden">
        {/* Subtle copper glow top-right */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--color-copper) 0%, transparent 65%)' }}
        />

        <div className="container-x relative pt-24 pb-10">
          {/* Manifesto line */}
          <div className="mb-16 max-w-3xl">
            <span className="eyebrow on-dark mb-6">// Manifeste</span>
            <p className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.1] mt-4 text-cream">
              L'IA <em className="accent-italic">construite ici</em>, pour ici.
              <br />
              Built from Congo. Built for the World.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-3 mb-6" onClick={() => window.scrollTo(0, 0)}>
                <LubiraMark variant="inverse" className="w-9 h-9" />
                <span className="font-serif text-[24px] text-cream">
                  LUBIRA <em className="accent-italic">AI</em>
                </span>
              </Link>
              <p className="body-md text-mist max-w-md">
                Cabinet de conseil en intelligence artificielle.
                Audit gratuit. Premier prototype en 48 heures.
                Vous restez propriétaire de tout.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="num-tag mb-6">// Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    {link.path.startsWith('#') ? (
                      <a href={`/${link.path}`} className="body-sm text-cream hover:text-copper-glow">
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={`/${link.path}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="body-sm text-cream hover:text-copper-glow"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="num-tag mb-6">// Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@lubira.ai" className="body-sm text-cream hover:text-copper-glow">
                    contact@lubira.ai
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-sm text-cream hover:text-copper-glow"
                  >
                    +243 99 597 47 70 (WhatsApp)
                  </a>
                </li>
                <li className="body-sm text-mist pt-1">
                  Lubumbashi · Haut-Katanga · RDC
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/70">
              © 2026 LUBIRA AI · Tous droits réservés
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/70">
              Charte v1.0 · Mai 2026
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
