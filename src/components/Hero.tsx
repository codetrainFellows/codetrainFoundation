
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#00838f] text-white overflow-hidden min-h-[600px] lg:min-h-[750px] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex justify-end">
          <div className="w-full lg:w-3/5 h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000" 
              alt="Students with laptops" 
              className="w-full h-full object-cover object-center"
            />
            {/* Seamless Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00838f] via-[#00838f]/50 to-transparent"></div>
          </div>
        </div>
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#00838f]/70 lg:hidden"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Expanding Access <br />
            to Tech Careers
          </h1>
          
          <div className="max-w-lg space-y-4 mb-10">
            <p className="text-lg md:text-xl text-teal-50 opacity-95 leading-relaxed">
              Codetrain Foundation is a Ghana-based nonprofit expanding access to <span className="font-bold">employment-linked technology education</span> for talented individuals who would otherwise be excluded.
            </p>
            <p className="text-lg md:text-xl text-teal-50 opacity-95 leading-relaxed">
              We fund scholarships that enable learners to build <span className="font-bold">sustainable careers</span> — not just acquire skills.
            </p>
            <p className="text-xl md:text-2xl font-bold text-white italic">
              Education must lead to work.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#00838f] px-10 py-4 rounded-md text-sm font-extrabold hover:bg-teal-50 transition-all shadow-xl">
              Donate via KATO
            </button>
            <button className="bg-[#134e4a]/40 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-md text-sm font-extrabold hover:bg-[#134e4a]/60 transition-all">
              Fund a Scholarship
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
