
import React from 'react';

const Focus2026: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 -skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-6">Our Focus for 2026</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Depth Before Scale</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              In 2026, Codetrain Foundation will support <span className="text-white font-bold">100 scholars</span> across high-impact technology pathways. This deliberate focus allows us to:
            </p>
            <ul className="space-y-6">
              {[
                "Protect employment outcomes",
                "Provide deep academic and career support",
                "Strengthen systems for responsible expansion"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-teal-600/10 border border-teal-500/30 p-12 rounded-3xl text-center">
            <p className="text-7xl font-black text-teal-400 mb-4">100</p>
            <p className="text-2xl font-bold mb-4 italic">is a quality threshold — not a ceiling.</p>
            <div className="h-1 w-20 bg-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus2026;
