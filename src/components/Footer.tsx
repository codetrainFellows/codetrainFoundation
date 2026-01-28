import React from 'react';
import Logo from '../assets/logo1.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 px-4 py-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">

        {/* Logo */}
        <img
          src={Logo}
          alt="Codetrain Foundation Logo"
          className="block w-[15rem]  object-contain"
        />

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#00838f]">📧</span>
            <a
              href="mailto:empower@codetrainfoundation.org"
              className="text-slate-600 hover:text-[#00838f] font-semibold transition-colors"
            >
              empower@codetrainfoundation.org
            </a>
          </div>

          

         
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          
          {/* other icons unchanged */}
        </div>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Codetrain Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
