
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo3.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1a3a3a]/95 backdrop-blur-sm shadow-2xl border-b border-[#00838f]/20' 
        : 'bg-[#1a3a3a]/90 backdrop-blur-sm shadow-xl border-b border-[#00838f]/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={Logo} 
                alt="Codetrain Foundation Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white text-sm font-medium hover:text-[#00838f] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-white text-sm font-medium hover:text-[#00838f] transition-colors"
            >
              Our Impact
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-white text-sm font-medium hover:text-[#00838f] transition-colors"
            >
              Support Us
            </button>
            <a 
              href='https://paystack.shop/pay/opportunity'
              className="bg-[#00838f] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-[#006064] transition-colors shadow-md"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-[#00838f] transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a3a3a] border-t border-[#00838f]/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#00838f] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="block w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#00838f] transition-colors"
              >
                Our Impact
              </button>
              <button
                onClick={() => scrollToSection('support')}
                className="block w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#00838f] transition-colors"
              >
                Support Us
              </button>
              <div className="px-3 py-2">
                <a 
                  href='https://paystack.shop/pay/opportunity'
                  className="bg-[#00838f] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-[#006064] transition-colors shadow-md w-full block text-center"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
