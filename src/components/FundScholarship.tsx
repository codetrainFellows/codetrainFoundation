import React from 'react';
import Navbar from './Navbar';
import { Mail, CheckCircle } from 'lucide-react';

const FundScholarship: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex-1 px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a3a3a] mb-4 leading-tight">
              Fund a Scholarship with Codetrain Foundation
            </h1>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 mb-8">
            
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Codetrain Foundation partners with organizations to fund scholarships that enable talented young Africans from low-income backgrounds to access world-class software engineering education and pathways to meaningful employment.
              </p>
            </div>

            {/* Who We Work With */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1a3a3a] mb-4">
                We work with corporates, foundations, embassies, and development partners whose goals include:
              </h2>
              <ul className="space-y-3">
                {[
                  'Youth employment and skills development',
                  'Digital inclusion and equity',
                  'CSR and long-term social impact',
                  "Building Africa's future tech workforce"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mb-10">
              <p className="text-lg text-slate-700 leading-relaxed">
                If your organization is interested in funding one or more scholarships, we'd love to start a conversation and understand your priorities.
              </p>
            </div>

            {/* How to Get Started Section */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-[#1a3a3a] mb-4">
                How to get started
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Send us an email introducing your organization and areas of interest. We'll follow up with relevant information and next steps.
              </p>
              
              {/* Email CTA */}
              <a 
                href="mailto:empower@codetrainfoundation.org"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5" />
                empower@codetrainfoundation.org
              </a>
            </div>

            {/* What We Discuss */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1a3a3a] mb-4">
                We typically discuss:
              </h3>
              <ul className="space-y-3">
                {[
                  'Scholarship scope and budget options',
                  'Target learners and focus areas',
                  'Timelines and implementation',
                  'Impact measurement and reporting'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing */}
            <div className="text-center pt-6 border-t border-slate-200">
              <p className="text-lg md:text-xl text-slate-700 font-medium">
                We look forward to exploring how we can create meaningful, measurable impact together.
              </p>
            </div>

          </div>

          {/* Footer Contact */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Questions? Reach out to us at{' '}
              <a 
                href="mailto:empower@codetrainfoundation.org" 
                className="text-teal-700 font-semibold hover:underline"
              >
                empower@codetrainfoundation.org
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FundScholarship;