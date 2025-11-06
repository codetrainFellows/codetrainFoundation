import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Stories', href: '#stories' },
    { name: 'Partners', href: '#partners' },
    { name: 'Students', href: 'https://codetrainafrica.com' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                  Codetrain
                </h1>
                <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider">
                  Foundation
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 relative group rounded-lg hover:bg-orange-50"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-4/5"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Heart className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110 fill-white" />
              <span className="relative z-10">Sponsor a Student</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 pt-4 pb-6 space-y-2 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-5 py-3.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl font-medium transition-all duration-200 transform hover:translate-x-1"
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300 active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Heart className="w-5 h-5 fill-white" />
            Sponsor a Student
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;