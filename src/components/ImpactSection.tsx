
import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="bg-[#00838f] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl lg:text-6xl font-black mb-2">700+</p>
              <p className="text-teal-100 font-medium">Learners Trained</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-black mb-2">89%</p>
              <p className="text-teal-100 font-medium">Job Placement Rate</p>
              <p className="text-xs text-teal-200/60 mt-1">within six months</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-black mb-2">91%</p>
              <p className="text-teal-100 font-medium">Report Improved Quality of Life</p>
            </div>
          </div>
          <p className="text-center text-xs text-teal-200/50 mt-12 italic">
            Independent alumni feedback collected by 60 Decibels.
          </p>
        </div>
      </div>
      
      <div className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-slate-700 italic font-medium leading-relaxed mb-6">
            "The program prepared me for a real work environment, not just technical skills."
          </p>
          <p className="text-slate-400 font-bold">— Graduate</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
