import React from "react";
import { useInView } from "react-intersection-observer";
import { Users, Briefcase, TrendingUp } from "lucide-react";

export default function MissionImpactSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-[#FFF8E7]">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left: Mission */}
        <section className="flex flex-col p-12 bg-[#FFF8E7]">
          <h2 className="font-bold text-lg mb-4 text-[#004F4F]">Our Mission</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#004F4F] mb-6 leading-tight">
            Building Africa’s Tech Opportunity Engine
          </h3>

          <p className="text-[#004F4F] text-lg mb-12 max-w-2xl leading-relaxed">
            Codetrain Foundation removes financial barriers to tech education, enabling young Africans to learn, succeed, support their families, and shape the continent’s digital future.
            
          </p>
        </section>

        {/* Right: Impact */}
        <section
          ref={ref}
          className="flex flex-col justify-start p-12 bg-gradient-to-br from-teal-600 to-teal-700 text-white"
        >
          {/* Impact Heading */}
          <h2 className="font-bold text-3xl mb-4">Our Impact</h2>

          {/* Short Description */}
          {/* <p className="mb-12 text-lg leading-relaxed max-w-2xl">
            Codetrain Africa is one of Ghana's leading <strong>SOFTWARE ENGINEERING & DESIGN SCHOOLS</strong>, training young Africans to thrive in the global digital economy.
          </p> */}
           <p className="mb-12 text-lg leading-relaxed max-w-2xl">
           Through our partnership with <strong>Codetrain Africa</strong> Ghana’s leading Software Engineering & Digital Design school,we help students access world-class training and achieve life-changing careers.
          </p>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-500 p-4 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3">700+</div>
                <div className="text-white/90 text-base">Graduates trained across Ghana</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-500 p-4 rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3">89%</div>
                <div className="text-white/90 text-base">Job placement rate within 6 months</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500 p-4 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3">91%</div>
                <div className="text-white/90 text-base mb-2">
                  Alumni report improved quality of life
                </div>
                <span className="text-xs text-white/70">(60 Decibels Impact Report, 2023)</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}