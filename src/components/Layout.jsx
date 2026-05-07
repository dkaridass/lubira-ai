import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const navLinks = [
  { path: '/', label: 'Home', showInNav: false },
  { path: '/services', label: 'Services', showInNav: true },
  { path: '/realisations', label: 'Réalisations', showInNav: true },
  { path: '/a-propos', label: 'À Propos', showInNav: true },
  { path: '/contact', label: 'Contact', showInNav: true },
];

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <svg className="w-8 h-9 transition-transform group-hover:scale-105" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L30 10V26L16 34L2 26V10L16 2Z" stroke="#C4341A" strokeWidth="4" strokeLinejoin="miter"/>
                <path d="M16 12L21 18L16 24L11 18L16 12Z" fill="#111111"/>
              </svg>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-playfair font-bold text-[22px] tracking-tight text-black-strong leading-none">LUBIRA</span>
                  <span className="font-playfair font-bold text-[22px] tracking-tight text-red-accent leading-none ml-1">AI</span>
                </div>
                <span className="font-inter font-semibold text-[9px] uppercase tracking-[0.15em] text-gray-body mt-0.5">LUBUMBASHI · DRC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.filter(l => l.showInNav).map(link => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="relative py-2 text-[14px] font-medium text-black-strong hover:text-red-accent transition-colors"
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-accent"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-red-accent hover:bg-[#a62b15] rounded-btn transition-colors">
                Démo Gratuite
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-black-strong p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-border absolute top-16 left-0 w-full shadow-lg h-screen overflow-y-auto pb-24">
            <nav className="flex flex-col px-4 pt-2 space-y-0">
              {navLinks.filter(l => l.showInNav).map(link => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-2 py-4 text-[16px] font-medium transition-colors border-b border-gray-border ${
                      isActive ? 'text-red-accent' : 'text-black-strong hover:text-red-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-8 pb-8">
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-4 text-[15px] font-bold text-white bg-red-accent hover:bg-[#a62b15] rounded-btn transition-colors"
                >
                  Démo Gratuite
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-red-accent bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Col 1 */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center gap-4 mb-6 group">
                <svg className="w-8 h-9 transition-transform group-hover:scale-105" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L30 10V26L16 34L2 26V10L16 2Z" stroke="#C4341A" strokeWidth="4" strokeLinejoin="miter"/>
                  <path d="M16 12L21 18L16 24L11 18L16 12Z" fill="#111111"/>
                </svg>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-playfair font-bold text-[22px] tracking-tight text-black-strong leading-none">LUBIRA</span>
                    <span className="font-playfair font-bold text-[22px] tracking-tight text-red-accent leading-none ml-1">AI</span>
                  </div>
                  <span className="font-inter font-semibold text-[9px] uppercase tracking-[0.15em] text-gray-body mt-0.5">LUBUMBASHI · DRC</span>
                </div>
              </Link>
              <p className="text-[15px] font-medium text-black-strong">L'IA qui fait bouger l'Afrique.</p>
            </div>

            {/* Col 2 */}
            <div className="col-span-1">
              <h4 className="font-inter font-bold text-[13px] uppercase tracking-wider text-black-strong mb-6">Services</h4>
              <ul className="space-y-3">
                {["Automatisation des Processus", "Agents IA sur Mesure", "Intelligence Documentaire", "Bots WhatsApp Business", "Tableaux de Bord", "Conformité", "Formation en IA", "Conseil Stratégique"].map(s => (
                  <li key={s}><Link to="/services" className="text-[14px] text-gray-body hover:text-red-accent transition-colors">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div className="col-span-1">
              <h4 className="font-inter font-bold text-[13px] uppercase tracking-wider text-black-strong mb-6">Entreprise</h4>
              <ul className="space-y-3">
                <li><Link to="/a-propos" className="text-[14px] text-gray-body hover:text-red-accent transition-colors">À Propos</Link></li>
                <li><Link to="/realisations" className="text-[14px] text-gray-body hover:text-red-accent transition-colors">Réalisations</Link></li>
                <li><Link to="/contact" className="text-[14px] text-gray-body hover:text-red-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="col-span-1">
              <h4 className="font-inter font-bold text-[13px] uppercase tracking-wider text-black-strong mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="text-[14px] text-gray-body">Lubumbashi, RDC</li>
                <li className="text-[14px] text-gray-body">contact@lubira.ai</li>
                <li className="text-[14px] font-medium text-black-strong mt-4">+243 99 597 47 70 (WhatsApp)</li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-gray-body">© 2026 LUBIRA AI · Lubumbashi, DRC</p>
            <p className="font-playfair text-[15px] text-black-strong italic">Built from Congo. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
