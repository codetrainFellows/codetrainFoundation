import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Mission", href: "#mission" },
    { name: "Stories", href: "#stories" },
    // { name: "Partners", href: "#partners" },
    // { name: "Students", href: "https://codetrainafrica.com" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for the page to load, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/logo1.png"
                alt="VisionTech Logo"
                className="h-24 w-24 object-contain"
              />
              
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-5 py-2 text-gray-700 hover:text-teal-600 font-medium transition-all duration-200 relative group rounded-lg hover:bg-teal-50 cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-4/5"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="https://paystack.shop/pay/vt_4t777qss" target="_blank">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Heart className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110 fill-white" />
                <span className="relative z-10">Sponsor a Student</span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
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
          mobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pt-4 pb-6 space-y-2 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-5 py-3.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl font-medium transition-all duration-200 transform hover:translate-x-1 cursor-pointer"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen
                  ? "slideIn 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {link.name}
            </a>
          ))}
          <Link to="https://paystack.shop/pay/vt_4t777qss" target="_blank">
            <button
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all duration-300 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="w-5 h-5 fill-white" />
              Sponsor a Student
            </button>
          </Link>
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