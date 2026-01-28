
import React from 'react';
import Logo from '../assets/logo3.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#00838f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Codetrain Foundation Logo" className="h-[15rem] w-[15rem] object-contain" />
          </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* <a href="#" className="text-sm font-medium hover:text-teal-100">About</a>
            <a href="#" className="text-sm font-medium hover:text-teal-100">Our Impact</a>
            <a href="#" className="text-sm font-medium hover:text-teal-100">Support Us</a> */}
            <a href='https://donate.stripe.com/fZu00kcoq6v04Yr8i91ZS0b'>
            <button className="bg-white text-[#00838f] px-5 py-2.5 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-teal-50 transition-colors cursor-pointer">
              Donate via KATO
            </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
