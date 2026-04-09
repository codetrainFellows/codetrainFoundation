import React from 'react';
import { Target, TrendingUp, FileText } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">How to Support</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Your support opens the door to tech careers for those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Option 1 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col hover:border-[#00838f]/30 transition-all">
            <h4 className="font-extrabold text-slate-900 text-xl mb-4">Donate</h4>
            <p className="text-slate-500 text-sm mb-8 flex-grow">Simple, tax-efficient giving for individual supporters.</p>
            <a href='https://paystack.shop/pay/opportunity'>
            <button className="w-full bg-[#00838f] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#006064] transition-colors shadow-md">
              Donate Now
            </button>
            </a>
          </div>

          {/* Option 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col hover:border-[#00838f]/30 transition-all shadow-sm">
            <h4 className="font-extrabold text-slate-900 text-xl mb-4">Fund a Scholarship</h4>
            <p className="text-slate-500 text-sm mb-8 flex-grow">Conversation-led engagement for donors funding one or more full scholarships.</p>
            <button className="w-full bg-[#134e4a] text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors shadow-md">
              Start a Conversation
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col hover:border-[#00838f]/30 transition-all">
            <h4 className="font-extrabold text-slate-900 text-xl mb-4">Corporate & Foundation Partnerships</h4>
            <p className="text-slate-500 text-sm mb-8 flex-grow">Co-fund measurable workforce outcomes with structured reporting.</p>
            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-md">
              Partner with Us
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-teal-50 rounded-3xl p-10 md:p-16 border border-teal-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-[#00838f] mb-4">Our Commitment</h3>
            <p className="text-slate-600 font-medium">Codetrain Foundation believes trust is built through:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-[#00838f] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <p className="font-extrabold text-slate-900">Clear goals</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#00838f] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="font-extrabold text-slate-900">Measurable outcomes</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#00838f] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <p className="font-extrabold text-slate-900">Transparent reporting</p>
            </div>
          </div>

          <p className="mt-12 text-center text-slate-700 font-bold text-lg italic">
            "We deliver carefully — and we measure what matters."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;