import React, { useEffect } from 'react';
import { Building2, Users, TrendingUp, Award, FileText, Handshake, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PartnerWithUs() {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fund 10–20 scholarships annually",
      description: "Across our Software Engineering and Digital Product Design programs — or support fewer students if preferred."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Support learners on the journey you care about most",
      description: "From training to internship to employment — or focus on specific stages where you'd like to make the greatest difference."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Receive transparent quarterly reports",
      description: "Fully track progress, stories, and outcomes for the students or initiatives you support."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Optional co-branding opportunities",
      description: "Join us on impact stories, campaigns, and events — only if this aligns with your brand and goals."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Engage with students in ways that suit you",
      description: "Mentorship, guest workshops, internship opportunities, or simply cheering them on from afar."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Back a school with strong employment outcomes",
      description: "Codetrain has a proven track record of helping young Africans launch successful tech careers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-full mb-8 shadow-lg">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide uppercase">Corporate Partnership</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] text-gray-900">
            Together, We Build
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Africa's Future
            </span>
            <br />
            Tech Workforce
          </h1>

          {/* Intro Text */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-12 leading-relaxed">
            Codetrain Foundation partners with organizations committed to investing in youth skills, digital transformation, and job creation across Africa.
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Your partnership supports access to our two flagship <span className="font-bold text-teal-700">2-year programs</span>, which together build both the builders and the designers of digital products.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programs Your{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Partnership Supports
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating well-rounded talent that can design and build products end-to-end
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Software Engineering Program */}
            <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:border-teal-500 hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1.5 bg-teal-600 text-white text-sm font-bold rounded-full">
                PROGRAM 1
              </div>
              
              <div className="mt-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Software Engineering
                </h3>
                <p className="text-teal-700 font-semibold text-sm">
                  Web Applications, Mobile Apps & Websites
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Students learn how to build the digital products people use every day — including modern web applications, mobile apps, and professional websites.
              </p>

              <div className="space-y-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                <p><span className="font-semibold text-gray-900">Program covers:</span> Fullstack development using the MERN stack, backend APIs, Applied AI tools, cloud deployment, and DevOps foundations.</p>
              </div>
            </div>

            {/* Digital Product Design Program */}
            <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:border-teal-500 hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1.5 bg-teal-600 text-white text-sm font-bold rounded-full">
                PROGRAM 2
              </div>
              
              <div className="mt-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Digital Product Design
                </h3>
                <p className="text-teal-700 font-semibold text-sm">
                  UI/UX Design, App Interfaces & User Research
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Students learn how to design the look, feel, and experience of digital products — including mobile apps, web apps, and websites.
              </p>

              <div className="space-y-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                <p><span className="font-semibold text-gray-900">Program covers:</span> Visual design, user research, wireframing, prototyping, design systems, and product thinking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Partner With{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Codetrain Foundation?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-500 hover:bg-teal-50/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                Your support strengthens Africa's ability to build and export world-class digital talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly CTA Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule a {" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Partnership Meeting
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Let's Explore How We Can Work Together
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether your focus is CSR, talent development, innovation, or youth empowerment, we're here to understand your priorities and design a partnership that delivers measurable, long-term impact for your organisation.
            </p>
          </div>

          {/* How to Get Started */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
              How to Get Started
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full text-2xl font-bold mb-4">
                  1
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Share Your Goals
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Tell us what matters most to your organisation — CSR, employment pathways, diversity, innovation, or talent development.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full text-2xl font-bold mb-4">
                  2
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Explore Partnership Options
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We'll walk you through flexible ways to get involved: scholarships, internships, training support, talent pipelines, mentorship, and more.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full text-2xl font-bold mb-4">
                  3
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Co-Create an Impact Plan
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Together, we build a tailored partnership that fits your objectives and capacity.
                </p>
              </div>
            </div>
          </div>

          {/* Book a Time heading */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Book a Time That Works for You
            </h3>
            <p className="text-lg text-gray-600">
              Choose a convenient slot and let's start shaping meaningful impact together.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Schedule a Partnership Meeting
              </h3>
              <p className="text-teal-100">
                Let’s Explore How We Can Work Together 
              </p>
            </div>
            
            <div className="p-4 md:p-8">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/codetrain-foundation-codetrainfoundation/30min"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Prefer to reach out directly?
            </p>
            <a 
              href="mailto:empower@codetrainfoundation.org"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
            >
              <span>empower@codetrainfoundation.org</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      {/* <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Partnership Opportunities
          </h3>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            We work with partners across various engagement models
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Corporate CSR",
                description: "Long-term scholarship programs with quarterly reporting and impact measurement"
              },
              {
                title: "Talent Pipeline",
                description: "Strategic partnerships with hiring commitments and internship placements"
              },
              {
                title: "Innovation Partners",
                description: "Collaborative programs in emerging tech, AI applications, and digital transformation"
              }
            ].map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3">{type.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}