import { Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Tagline */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Stay Connected to the Impact You Create
          </h3>
          <p className="text-xl text-orange-400 italic">
            "We don't give charity — we unlock potential."
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wide">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#mission" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Mission
                </a>
              </li>
              <li>
                <a 
                  href="#transparency" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Transparency
                </a>
              </li>
              <li>
                <a 
                  href="#leadership" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Get Involved */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wide">
              Get Involved
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#donate" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Donate
                </a>
              </li>
              <li>
                <a 
                  href="#partner" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Partner
                </a>
              </li>
              <li>
                <a 
                  href="#volunteer" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              Registered under Codetrain Foundation Ghana | © 2025 Codetrain Foundation
            </div>
            <div>
              <a 
                href="#privacy" 
                className="hover:text-orange-400 transition-colors duration-200"
              >
                Privacy & Transparency Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}