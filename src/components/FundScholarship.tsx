import React from 'react';
import { InlineWidget } from 'react-calendly';
import Navbar from './Navbar';

const FundScholarship: React.FC = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Content - fills remaining space */}
      <div className="flex-1 flex flex-col overflow-hidden px-4 py-8">
        <div className="max-w-5xl w-full mx-auto flex flex-col h-full">
          {/* Header Text */}
          <div className="text-center mb-6 flex-shrink-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a3a3a] mb-3">
              Let's Explore How We Can Work Together
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Whether your goals are CSR, talent development, innovation, or youth empowerment, 
              we'd love to learn about your priorities and shape a partnership that delivers 
              measurable, long-term impact.
            </p>
          </div>

          {/* Calendly Widget - takes remaining space */}
          <div className="flex-1 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden min-h-0">
            <InlineWidget 
              url="YOUR_CALENDLY_LINK_HERE" 
              styles={{
                height: '100%',
                minWidth: '320px',
              }}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-center flex-shrink-0">
            <p className="text-sm text-slate-500">
              Have questions before booking? Email us at{' '}
              <a 
                href="mailto:partnerships@codetrainfoundation.org" 
                className="text-[#00838f] font-semibold hover:underline"
              >
                partnerships@codetrainfoundation.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundScholarship;