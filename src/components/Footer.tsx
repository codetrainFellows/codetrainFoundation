import React from 'react';
import Logo from '../assets/logo3.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a3a3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <img
              src={Logo}
              alt="Codetrain Foundation Logo"
              className="w-32 h-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Expanding access to employment-linked technology education for talented individuals facing financial or structural barriers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Programs
                </a>
              </li>
              <li>
                <a href="/fund-scholarship" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Fund a Scholarship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[#00838f]">📧</span>
                <a
                  href="mailto:empower@codetrainfoundation.org"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  empower@codetrainfoundation.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00838f]">📍</span>
                <span className="text-gray-300 text-sm">
                  Accra, Ghana
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00838f]">🌐</span>
                <a
                  href="https://codetrainfoundation.org"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  codetrainfoundation.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Codetrain Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
