import React from 'react';
import HeroImage from "../assets/campus2.jpg"
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const handleScrollToImpact = () => {
    const elem = document.getElementById('impact');
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#1a3a3a] text-white overflow-hidden min-h-[550px] lg:min-h-[650px] flex items-center">
      {/* Background Image & Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex justify-end">
          <div className="w-full lg:w-[70%] h-full relative">
            <img 
              src={HeroImage} 
              alt="Students collaborating in a tech environment" 
              className="w-full h-full object-cover object-center"
            />
            {/* 
                Refined Gradient Overlay: 
                - Starts solid dark teal on the left.
                - Fades out much quicker (via-40% with lower opacity) to keep the image clear.
            */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a3a] via-[#1a3a3a]/40 to-transparent hidden lg:block"></div>
          </div>
        </div>
        {/* Mobile overlay - balanced for readability without completely hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a3a] via-[#1a3a3a]/70 to-[#1a3a3a]/30 lg:hidden"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10 py-16 lg:py-24">
        {/* Added lg:ml-0 and reduced width to push content further left */}
        <div className="lg:w-[55%] lg:ml-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
            Expanding Access 
            to <br />Tech Careers
          </h1>
          
          <div className=" space-y-6 mb-12">
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium">
              Codetrain Foundation is a Ghana-based nonprofit expanding access to employment-linked technology education for talented individuals facing financial or structural barriers.
            </p>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium">
              We fund scholarships that enable learners to build sustainable careers — not just acquire skills.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            {/* Donate via KATO Button */}
            <a href='https://donate.stripe.com/fZu00kcoq6v04Yr8i91ZS0b'>
            <button 
              onClick={handleScrollToImpact}
              className="w-full sm:w-auto bg-[#dae5e7] text-[#1a3a3a] px-10 py-4 rounded-lg text-lg font-bold hover:bg-white transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              Donate via KATO
            </button>
            </a>
            
            {/* Fund a Scholarship Button */}
            <Link to="/fund-scholarship">
            <button 
              onClick={handleScrollToImpact}
              className="w-full sm:w-auto bg-[#234e4e] border border-white/30 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#1a3a3a] transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              Fund a Scholarship
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;