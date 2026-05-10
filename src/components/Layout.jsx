import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

const navLinks = [
  { path: '#services', label: 'Services' },
  { path: '#cas-client', label: 'Cas client' },
  { path: '#tarifs', label: 'Tarifs' },
  { path: '#faq', label: 'FAQ' },
  { path: '#contact', label: 'Contact' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const scrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', targetId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter">
      <ScrollToTop />
      
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            
            {/* Left: Logo + Orbit Icon */}
            <a href="#" onClick={(e) => scrollTo(e, '#top')} className="flex items-center gap-3 group">
              {/* Orbit icon (red SVG circular arc) */}
              <svg className="w-6 h-6 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="#C4341A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4"/>
                <circle cx="12" cy="12" r="3" fill="#0A0A0A"/>
              </svg>
              <span className="font-playfair font-black text-[20px] tracking-tight text-black-strong leading-none mt-1">LUBIRA AI</span>
            </a>

            {/* Right: Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.path} 
                  href={link.path}
                  onClick={(e) => scrollTo(e, link.path)}
                  className="text-[14px] font-medium text-black-strong hover:text-red-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-medium text-white bg-red-accent hover:bg-[#a62b15] transition-colors rounded-none"
              >
                Audit gratuit
              </a>
            </nav>

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
          <div className="md:hidden bg-white border-t border-gray-border absolute top-[72px] left-0 w-full shadow-lg h-screen overflow-y-auto pb-24">
            <nav className="flex flex-col px-4 pt-2 space-y-0">
              {navLinks.map(link => (
                <a 
                  key={link.path} 
                  href={link.path}
                  onClick={(e) => scrollTo(e, link.path)}
                  className="block px-2 py-4 text-[16px] font-medium text-black-strong hover:text-red-accent transition-colors border-b border-gray-border"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-8 pb-8">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="block w-full text-center px-5 py-4 text-[15px] font-bold text-white bg-red-accent hover:bg-[#a62b15] transition-colors rounded-none"
                >
                  Audit gratuit
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="top" className="flex-grow">
        <Outlet />
      </main>

      {/* 11. FOOTER */}
      <footer className="border-t border-gray-border bg-white pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="#C4341A" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                  <circle cx="12" cy="12" r="3" fill="#0A0A0A"/>
                </svg>
                <span className="font-playfair font-black text-[18px] tracking-tight text-black-strong">LUBIRA AI</span>
              </div>
              <p className="text-[14px] text-gray-body leading-relaxed max-w-xs">
                L'intelligence artificielle, livrée à Lubumbashi en 48 heures.
              </p>
            </div>

            {/* Col 2: Navigation links */}
            <div>
              <h4 className="font-inter font-bold text-[12px] uppercase tracking-wider text-black-strong mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <a href={link.path} onClick={(e) => scrollTo(e, link.path)} className="text-[14px] text-gray-body hover:text-red-accent transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="font-inter font-bold text-[12px] uppercase tracking-wider text-black-strong mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:dariustshibang53@gmail.com" className="text-[14px] text-gray-body hover:text-red-accent transition-colors">dariustshibang53@gmail.com</a></li>
                <li><a href="https://wa.me/243818318287" target="_blank" rel="noopener noreferrer" className="text-[14px] text-gray-body hover:text-red-accent transition-colors">WhatsApp : +243 818 318 287</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom line */}
          <div className="pt-8 border-t border-gray-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-gray-body">© 2026 LUBIRA AI · Lubumbashi, Katanga, RDC</p>
            <p className="text-[13px] text-gray-body italic font-playfair">Built from Congo. Built for the World.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/243818318287?text=Bonjour%20Darius%2C%20je%20souhaite%20un%20audit%20gratuit%20pour%20mon%20entreprise." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-0 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
        aria-label="Discutons sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 group-hover:mr-2 transition-all duration-500 ease-in-out text-[14px] font-medium">
          Discutons sur WhatsApp
        </span>
      </a>
    </div>
  );
}
