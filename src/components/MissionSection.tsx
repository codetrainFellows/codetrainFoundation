import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-[#00838f] font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Building Africa’s Tech Opportunity Engine
              </h3>
            </div>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Our mission is to remove financial barriers to technology education so high-potential individuals 
              can secure meaningful employment, support their families, and participate fully in the digital 
              economy.
            </p>
            
            <div className="space-y-6 pt-4 border-l-4 border-[#00838f] pl-6">
              <p className="text-xl font-bold text-slate-900">
                We focus on outcomes, not enrolment.
              </p>
              <p className="text-lg font-extrabold text-[#00838f] italic">
                Access without outcomes is not impact.
              </p>
            </div>
          </div>

          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Codetrain Student Graduate" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-[#00838f] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100">
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">How Our Model Works</h3>
            <p className="text-slate-600 max-w-2xl text-lg">
              Codetrain Foundation is a <span className="font-bold text-slate-900">funding and access organization</span>. 
              Training delivery and career outcomes are provided by our implementation partner, 
              <span className="font-bold text-[#00838f]"> Codetrain Africa</span> — one of Ghana’s leading technology schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#00838f]/30 transition-all">
              <h4 className="text-xl font-extrabold text-[#00838f] mb-6 flex items-center gap-2">
                Codetrain Foundation
              </h4>
              <ul className="space-y-4">
                {[
                  "Stewards donor capital",
                  "Funds scholarships and learner support",
                  "Prioritises access, accountability, and outcomes"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <span className="text-[#00838f] font-bold">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all">
              <h4 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                Codetrain Africa
              </h4>
              <ul className="space-y-4">
                {[
                  "Delivers curriculum and instruction",
                  "Provides instructors and learning infrastructure",
                  "Supports career preparation and job placement"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <span className="text-slate-400 font-bold">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-500 text-sm font-bold italic">
            This separation ensures clarity, accountability, and quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;