import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const handleNavClick = (e, path) => {
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(path.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* BANNER */}
      <div className="banner">
        <div className="container-x row">
          <span>// LUBUMBASHI · RDC</span>
          <span>Premier audit gratuit · livraison sous 48h · <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Réserver →</a></span>
        </div>
      </div>

      {/* HEADER */}
      <header className="nav">
        <div className="container-x row">
          <Link to="/" className="brand" onClick={() => window.scrollTo(0, 0)}>
            <div className="mark-sun">
              <div className="disc"></div>
              <div className="L">L</div>
            </div>
            <div className="wordmark">
              <span className="name">LUBIRA</span>
              <span className="ai">AI</span>
            </div>
          </Link>
          <nav className="primary">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
            <a href="#realisations" onClick={(e) => handleNavClick(e, '#realisations')}>Réalisations</a>
            <a href="#processus" onClick={(e) => handleNavClick(e, '#processus')}>Processus</a>
            <a href="#tarifs" onClick={(e) => handleNavClick(e, '#tarifs')}>Tarifs</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
          </nav>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn btn--primary btn--sm">Audit gratuit</a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="site">
        <div className="container-x">
          <div className="grid">
            <div className="col">
              <div className="brand">
                <div className="mark-sun">
                  <div className="disc"></div>
                  <div className="L">L</div>
                </div>
                <div className="wordmark">
                  <span className="name">LUBIRA</span>
                  <span className="ai">AI</span>
                </div>
              </div>
              <p>Conseil en intelligence artificielle pour les entreprises congolaises. Basés à Lubumbashi, RDC.</p>
            </div>
            <div className="col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Automatisation</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Agents IA</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Tableaux de bord</a></li>
                <li><a href="#tarifs" onClick={(e) => handleNavClick(e, '#tarifs')}>Tarifs</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Société</h4>
              <ul>
                <li><a href="#realisations" onClick={(e) => handleNavClick(e, '#realisations')}>Réalisations</a></li>
                <li><a href="#processus" onClick={(e) => handleNavClick(e, '#processus')}>Méthodologie</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@lubira.ai">contact@lubira.ai</a></li>
                <li><a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '243995974770'}`}>+243 99 597 47 70</a></li>
                <li>Lubumbashi · RDC</li>
              </ul>
            </div>
          </div>
          <div className="bot">
            <span>© 2026 LUBIRA AI · Tous droits réservés</span>
            <span>Mentions légales · Confidentialité</span>
          </div>
        </div>
      </footer>
    </>
  );
}
