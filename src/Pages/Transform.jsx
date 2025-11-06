import React from 'react';
import { Sparkles } from 'lucide-react'; // Assuming Sparkles might be used for the 'Codetech' logo, though not in this image.

const TransparencySection = () => {
  return (
    <section className="bg-[#122A4E] py-16 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content Area */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Transparency <span className="block">You Can Trust</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
            We believe in radical transparency. Donors can track their impact through quarterly updates, student reports, and our open scholarship database.
          </p>
          <button 
            className="px-10 py-5 bg-[#FFBF00] text-[#122A4E] rounded-xl font-bold text-lg shadow-xl hover:bg-[#FFD147] transition-all duration-300 transform hover:scale-105"
            aria-label="Donate now to support transparency"
          >
            Donate
          </button>
        </div>

        {/* Right Statistics Block */}
        <div className="bg-[#1D3C6B] p-8 md:p-12 rounded-2xl shadow-2xl">
          {/* Top Row of Stats */}
          <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-white">231</p>
              <p className="text-base md:text-lg text-white/70 mt-2">Scholarships Funded This Year</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-white">300</p>
              <p className="text-base md:text-lg text-white/70 mt-2">Students Currently Enrolled</p>
            </div>
          </div>

          {/* Bottom Row of Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-white">125</p>
              <p className="text-base md:text-lg text-white/70 mt-2">Job Secured</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-white">8</p>
              <p className="text-base md:text-lg text-white/70 mt-2">Partner Institutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;