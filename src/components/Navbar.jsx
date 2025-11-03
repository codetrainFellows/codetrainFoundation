import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Students', href: 'https://codetrainafrica.com' },
    
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 leading-tight">Codetrain</h1>
                <p className="text-xs text-blue-600 font-medium">Foundation</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="group px-6 py-3 bg-[#0c0827] rounded-lg font-bold text-[#ffbf00] transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 cursor-pointer">
              <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
              Sponsor a Student
            </button>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-50 border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-[#0c0827] rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300">
            <Heart className="w-5 h-5" />
            Sponsor a Student
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;