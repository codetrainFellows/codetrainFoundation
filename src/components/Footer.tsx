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
          <a href="#" className="text-slate-400 hover:text-[#00838f] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
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
