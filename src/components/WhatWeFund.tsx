import React from 'react';
import { Code, Palette, Cog } from 'lucide-react';

const WhatWeFund: React.FC = () => {
  const domains = [
    {
      title: "Software Engineering",
      icon: <Code className="w-16 h-16 text-[#00838f]" />
    },
    {
      title: "Digital Product Design (UX/UI)",
      icon: <Palette className="w-16 h-16 text-[#00838f]" />
    },
    {
      title: "Technology Fundamentals",
      icon: <Cog className="w-16 h-16 text-[#00838f]" />
    }
  ];
  
  return (
    <section className="bg-slate-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-[#00838f] font-bold uppercase tracking-widest text-sm mb-6 border-b-2 border-[#00838f] inline-block px-2">What We Fund</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Employment-linked pathways</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            These pathways are designed to lead to <span className="font-bold text-slate-800">internships, junior roles, and long-term careers</span> in the digital economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="mb-6 flex justify-center">{domain.icon}</div>
              <h4 className="text-xl font-extrabold text-slate-800">{domain.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeFund;
