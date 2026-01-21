import React from 'react';

const InclusionSection: React.FC = () => {
  const categories = [
    {
      title: "Low-Income Learners",
      desc: "Learners from low-income backgrounds unable to afford market-rate training",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Women in STEM",
      desc: "Young women entering STEM careers, where participation gaps persist",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Adaptive Pathways",
      desc: "Learners requiring adaptive pathways, including disability, neurodivergence, or health-related constraints",
      img: "https://images.unsplash.com/photo-1534667760410-b3846663f256?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const contexts = [
    {
      text: "A learner from a low-income household transitioned from informal work into a junior tech role, providing stable income for their family."
    },
    {
      text: "A young woman entering technology for the first time completed a digital product design pathway and began her career in the tech sector."
    },
    {
      text: "A learner requiring a more flexible training approach completed the program and transitioned into a sustainable tech role."
    }
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Inclusion by Design</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Codetrain Foundation expands access intentionally for those who face structural barriers to technology education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {categories.map((cat, i) => (
            <div key={i} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#00838f]/10"></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-extrabold text-slate-900 mb-3">{cat.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00838f]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-12 text-center">Access Works Across Contexts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contexts.map((ctx, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    {ctx.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-[#00838f] font-black uppercase tracking-widest text-sm">
                Different barriers. Consistent outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto p-8 bg-slate-50 rounded-xl border-t-4 border-[#00838f]">
          <p className="text-lg text-slate-600">
            Our approach does not lower standards. <br className="hidden md:block" />
            <span className="font-extrabold text-slate-900 italic">It removes barriers that prevent capable people from participating fully.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InclusionSection;