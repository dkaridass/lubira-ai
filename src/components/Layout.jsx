import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import OrbitIcon from './ui/OrbitIcon';
import WhatsAppButton from './WhatsAppButton';

const navLinks = [
  { path: '#services', label: 'Services' },
  { path: '#realisations', label: 'Réalisations' },
  { path: '#tarifs', label: 'Tarifs' },
  { path: '#faq', label: 'FAQ' },
  { path: '#contact', label: 'Contact' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for hash links
  const handleNavClick = (e, path) => {
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-border transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group" onClick={() => window.scrollTo(0, 0)}>
              <OrbitIcon className="w-8 h-8 text-black-strong transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-playfair font-bold text-[22px] tracking-tight text-black-strong leading-none">LUBIRA</span>
                  <span className="font-playfair font-bold text-[22px] tracking-tight text-red-accent leading-none ml-1">AI</span>
                </div>
                <span className="font-inter font-semibold text-[9px] uppercase tracking-[0.14em] text-[#888888] mt-0.5">LUBUMBASHI · DRC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.path} 
                  href={location.pathname === '/' ? link.path : `/${link.path}`}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="relative py-2 text-[14px] font-medium text-black-strong hover:text-red-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href={location.pathname === '/' ? '#contact' : '/#contact'} 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-semibold text-white bg-red-accent hover:bg-black-strong transition-colors"
              >
                Audit gratuit
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-black-strong p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40 h-[calc(100vh-73px)] overflow-y-auto">
            <div className="flex flex-col h-full p-6">
              <nav className="flex flex-col space-y-6 flex-grow">
                {navLinks.map(link => (
                  <a 
                    key={link.path} 
                    href={location.pathname === '/' ? link.path : `/${link.path}`}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-[24px] font-playfair font-bold text-black-strong border-b border-gray-border pb-4"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-gray-border">
                <a 
                  href={location.pathname === '/' ? '#contact' : '/#contact'}
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center py-4 text-[16px] font-semibold text-white bg-red-accent"
                >
                  Audit gratuit
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white border-t-[3px] border-red-accent pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            
            {/* Column 1 */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6" onClick={() => window.scrollTo(0, 0)}>
                <OrbitIcon className="w-8 h-8 text-white" />
                <div className="flex items-center">
                  <span className="font-playfair font-bold text-[22px] tracking-tight text-white leading-none">LUBIRA</span>
                  <span className="font-playfair font-bold text-[22px] tracking-tight text-red-accent leading-none ml-1">AI</span>
                </div>
              </Link>
              <p className="font-inter text-[13px] text-[#888888] mb-2">L'IA qui fait bouger l'Afrique.</p>
              <p className="font-inter text-[13px] text-[#888888]">Built from Congo. Built for the World.</p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-inter text-[11px] uppercase tracking-[0.12em] text-[#888888] mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <a href={location.pathname === '/' ? link.path : `/${link.path}`} onClick={(e) => handleNavClick(e, link.path)} className="font-inter text-[14px] text-white hover:text-red-accent transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact" className="font-inter text-[14px] text-red-accent font-medium hover:text-white transition-colors">
                    Audit gratuit
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-inter text-[11px] uppercase tracking-[0.12em] text-[#888888] mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@lubira.ai" className="font-inter text-[14px] text-white hover:text-red-accent transition-colors">
                    contact@lubira.ai
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "243995974770"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[14px] text-white hover:text-red-accent transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="font-inter text-[14px] text-white pt-2">
                  Lubumbashi, Katanga, RDC
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#222222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-[12px] text-[#555555]">© 2026 LUBIRA AI · Lubumbashi, Katanga, RDC</p>
            <p className="font-inter text-[12px] text-[#555555]">Built from Congo. Built for the World.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
