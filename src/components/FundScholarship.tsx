import React from 'react';
import Navbar from './Navbar';
import { Mail, CheckCircle, Users, Target, HandHeart } from 'lucide-react';

const FundScholarship: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#00838f]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-[#00838f]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a3a3a] mb-4 sm:mb-6 px-2">
            Fund a Scholarship
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Partner with us to create opportunities for talented young Africans 
            to access world-class tech education and build sustainable careers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          
          {/* Partnership Overview */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#00838f]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a3a]">Who We Partner With</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8">
              We work with corporates, foundations, embassies, and development partners 
              to create meaningful impact through tech education scholarships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {[
                'Youth employment and skills development',
                'Digital inclusion and equity',
                'CSR and long-term social impact',
                "Building Africa's future tech workforce"
              ].map((goal, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00838f] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion Topics */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#00838f]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a3a]">What We Discuss</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Scholarship Scope', desc: 'Budget options and coverage' },
                { title: 'Target Learners', desc: 'Focus areas and demographics' },
                { title: 'Implementation', desc: 'Timelines and execution' },
                { title: 'Impact Measurement', desc: 'Reporting and outcomes' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-[#00838f] pl-3 sm:pl-4">
                  <h3 className="font-bold text-[#1a3a3a] mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email CTA - Main Focus */}
          <div className="bg-gradient-to-r from-[#00838f] to-[#006064] text-white rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <div className="bg-white/10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-2">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Send us an email to start the conversation about partnership opportunities
            </p>
            
            <a 
              href="mailto:empower@codetrainfoundation.org"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#00838f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 break-all sm:break-normal"
            >
              <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">empower@codetrainfoundation.org</span>
            </a>
            
            <p className="text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">
              We typically respond within 24-48 hours
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FundScholarship;