import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Globe, Heart, Handshake, ArrowRight, Sparkles } from "lucide-react";

export default function PartnershipSection() {
  return (
    <div className="relative bg-[#FFF8E7] py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600/10 border border-teal-600/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span className="text-teal-700 text-sm font-semibold">Make an Impact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#004F4F] mb-6 leading-tight">
            Partner. Sponsor.{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Empower.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[#004F4F]/80 max-w-3xl mx-auto leading-relaxed">
           Every contribution creates ripples of change. No gift is too small to transform a life.
          </p>
        </div>

        {/* Partnership Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

          {/* Corporate Partner - Premium Card */}
          <Link 
            to="/partner"
            className="group relative bg-gradient-to-br from-teal-600 to-teal-700 p-8 md:p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-400/0 to-teal-500/0 group-hover:from-teal-500/20 group-hover:via-teal-400/10 group-hover:to-teal-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Corporate Partner</h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Co-brand and fund 10–20 scholarships, join our annual showcase, and receive quarterly impact reports. Build a CSR legacy rooted in real transformation.
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Schedule a Partnership Meeting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Sponsor a Student - Premium Card */}
          <a 
            href="/sponsor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden border-2 border-teal-600/30"
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-500 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#004F4F] mb-4">Sponsor a Student</h3>
              <p className="text-lg text-[#004F4F]/80 leading-relaxed mb-6">
                Fund a full scholarship ($3,000) and follow your student’s journey through training, graduation, and employment.
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-600">
                <span>Sponsor Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* Monthly Donor */}
          <a 
            href="/sponsor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden border-2 border-teal-600/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-teal-600/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-teal-600/30">
                  <Globe className="w-8 h-8 text-teal-700" />
                </div>
                <ArrowRight className="w-6 h-6 text-teal-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#004F4F] mb-4">Donate Any Amount</h3>
              <p className="text-lg text-[#004F4F]/80 leading-relaxed mb-6">
                Give monthly or one-time support to keep scholarships and essential resources running year-round.
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-600">
                <span>Start Giving</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* Mentor / Provide Equipment */}
          <Link 
            to="/Appointment"
            className="group relative bg-gradient-to-br from-teal-600 to-teal-700 p-8 md:p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/20 group-hover:to-teal-600/10 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Mentor / Provide Equipment</h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Share your expertise or donate laptops to help students learn with dignity and the tools they deserve.
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action Banner */}
        <div className="relative bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 p-10 md:p-16 rounded-3xl text-center text-white shadow-2xl overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            <blockquote className="text-2xl md:text-4xl font-bold mb-10 italic leading-relaxed">
              "Join the Codetrain Foundation Network—<br className="hidden md:block" />
              where access meets impact."
            </blockquote>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 text-base md:text-lg">
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <span className="font-semibold">Contact:</span>
                <a 
                  href="mailto:empower@codetrainfoundation.org" 
                  className="underline hover:text-teal-200 transition-colors font-medium"
                >
                  empower@codetrainfoundation.org
                </a>
              </div>
              
              <div className="hidden lg:block w-px h-8 bg-white/30" />
              
              {/* <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <span className="font-semibold">Admission</span>
                <a 
                  href="https://www.codetrainfoundation.org" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-teal-200 transition-colors font-medium"
                >
                  codetrainadmissions@codetrainafrica.com
                </a>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}