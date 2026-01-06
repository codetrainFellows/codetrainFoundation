import React from "react";
import { Target, AlertCircle, TrendingUp, Sparkles } from "lucide-react";

export default function ChallengesSection() {
  return (
    <div className="bg-[#FFF8E7]">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: The Challenge */}
        <section className="relative flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 text-white overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/30 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <AlertCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">The Challenge</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Talent Is Everywhere.
              <br />
              <span className="text-teal-200">Opportunity Is Not.</span>
            </h3>

            {/* Point 1 */}
            <div className="group mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 bg-white/10 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/>
                    <line x1="8" y1="10" x2="16" y2="10" strokeWidth="2"/>
                    <line x1="8" y1="14" x2="16" y2="14" strokeWidth="2"/>
                    <line x1="8" y1="18" x2="12" y2="18" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-white/95">
                    Across Ghana and Africa, <span className="font-bold text-teal-200">thousands</span> of ambitious young people cannot afford the training, equipment, or support needed to begin a tech career.
                    Without intervention, promising learners risk losing access to programs that could change their lives, and their families’ futures.</p>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            {/* <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 bg-white/10 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2"/>
                    <path d="M12 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-white/95">
                    Without support, promising learners risk <span className="font-bold text-teal-200">losing access</span> to training, internships, and jobs
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Right: 100 Scholarships. 100 Futures */}
        <section className="relative flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-amber-50 via-[#FFF8E7] to-amber-50 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-600/10 border border-teal-600/20 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              <span className="text-teal-700 text-xs font-semibold">Our Goal for 2026</span>
            </div>

         {/* Main Heading */}
<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#004F4F]">
  <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
    Empower the Next Generation
  </span>
</h2>

{/* Body */}
<p className="text-base mb-8 leading-relaxed text-[#004F4F]/80 font-medium max-w-2xl">
  We aim to support <span className="font-bold text-teal-700">100 talented young people</span> with full scholarships for the 2026 cohort, while also ensuring current learners receive the support they need to complete their program and secure employment.
</p>

{/* Closing Line */}
<p className="text-base md:text-lg leading-relaxed text-[#004F4F]/90 font-semibold max-w-2xl">
  Together, we can open doors for over <span className="font-bold text-teal-700">160 students</span> through scholarships, mentorship, and essential learning resources.
</p>

          </div>
        </section>
      </div>
    </div>
  );
}