import React from 'react';
import { Heart, Book, Laptop, Users, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';

export default function SponsorStudent() {
  const benefits = [
    {
      icon: <Book className="w-6 h-6" />,
      text: "Access to a high-quality 2-year training program"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      text: "A laptop and essential learning resources"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Career coaching, mentorship, and internship support"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      text: "Job placement assistance after graduation"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "A life-changing income upgrade for the student and their family"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-[#FFF8E7] to-orange-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600/10 border-2 border-teal-600/30 rounded-full mb-8">
            <Heart className="w-4 h-4 text-teal-700 fill-teal-700" />
            <span className="text-teal-700 text-sm font-bold tracking-wide">SPONSOR A STUDENT</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] text-[#004F4F]">
            Change One Life.
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Empower One Future.
            </span>
          </h1>

          {/* Intro Text */}
          <p className="text-xl md:text-2xl text-[#004F4F]/80 max-w-3xl mb-12 leading-relaxed font-medium">
            Every young person who joins Codetrain carries ambition, potential, and the dream of building a better future in tech. What many lack is financial access.
          </p>

          <p className="text-lg md:text-xl text-[#004F4F]/70 max-w-3xl leading-relaxed">
            By sponsoring a student, you support their full <span className="font-bold text-teal-700">2-year journey</span> in one of our flagship programs.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #14b8a6 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004F4F] mb-4">
              Programs You Can{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Sponsor A Student In
              </span>
            </h2>
            <p className="text-lg text-[#004F4F]/70 max-w-2xl mx-auto">
              Both paths prepare students for real jobs in Ghana and globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Software Engineering Program */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-teal-100/50 border-2 border-teal-200 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-[1.02]">
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-t-3xl" />
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#004F4F] mb-2">
                  Software Engineering
                </h3>
                <p className="text-teal-700 font-semibold text-sm">
                  Web Applications, Mobile Apps & Websites
                </p>
              </div>

              <p className="text-[#004F4F]/80 leading-relaxed mb-6">
                Students learn how to build the digital products people use every day — including modern web applications, mobile apps, and professional websites.
              </p>

              <div className="space-y-2 text-sm text-[#004F4F]/70">
                <p><span className="font-semibold text-teal-700">Covers:</span> Fullstack development using the MERN stack, backend APIs, Applied AI tools, cloud deployment, and DevOps foundations.</p>
              </div>
            </div>

            {/* Digital Product Design Program */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02]">
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-3xl" />
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#004F4F] mb-2">
                  Digital Product Design
                </h3>
                <p className="text-orange-700 font-semibold text-sm">
                  UI/UX Design, App Interfaces & User Research
                </p>
              </div>

              <p className="text-[#004F4F]/80 leading-relaxed mb-6">
                Students learn how to design the look, feel, and experience of digital products — including mobile apps, web apps, and websites.
              </p>

              <div className="space-y-2 text-sm text-[#004F4F]/70">
                <p><span className="font-semibold text-orange-700">Covers:</span> Visual design, user research, wireframing, prototyping, design systems, and product thinking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Sponsorship Makes Possible */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What Your Sponsorship
              <br />
              <span className="text-teal-200">Makes Possible</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <p className="text-white/95 leading-relaxed pt-2">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8">
              Your sponsorship doesn't only fund education — it unlocks{" "}
              <span className="font-bold text-white">dignified careers</span>, empowers{" "}
              <span className="font-bold text-white">families</span>, and helps build{" "}
              <span className="font-bold text-white">Africa's next generation of digital leaders</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 md:py-32 bg-[#FFF8E7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004F4F] mb-6 leading-tight">
              One Student. One Sponsor.
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                One Transformative Journey.
              </span>
            </h2>
            <p className="text-xl text-[#004F4F]/80 max-w-2xl mx-auto leading-relaxed">
              You will receive periodic updates on your sponsored student's progress through training, internship, and employment.
            </p>
          </div>

          {/* Visual Journey Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "1", label: "Training", icon: "📚" },
              { step: "2", label: "Internship", icon: "💼" },
              { step: "3", label: "Employment", icon: "🎯" },
              { step: "4", label: "Impact", icon: "✨" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-sm font-bold text-teal-600 mb-1">STEP {item.step}</div>
                  <div className="text-lg font-semibold text-[#004F4F]">{item.label}</div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-teal-300" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sponsor a Student Today
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Transform a life and invest in Africa's digital future
              </p>
              
              <a
                href="https://paystack.shop/pay/vt_4t777qss"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-teal-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95"
              >
                <Heart className="w-6 h-6 fill-teal-700" />
                Sponsor a Student
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-white/80 text-sm mt-6">
                Full scholarship: $3,000 for 2 years
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}