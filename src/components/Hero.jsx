import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-full border border-purple-400/30 backdrop-blur-sm text-white">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm text-white">Codetrain Foundation</span>
            </div> */}
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#180749]">
              Empower Africa's
              <span className="block bg-clip-text">
                Next Innovators
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
              Every young African deserves the opportunity to learn, build, and thrive.
              Your donation funds scholarship that unlock careers in technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#ffbf00] text-[#0c0127] rounded-lg font-bold  shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Sponsor a student
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-[#0c0127] font-semibold text-[#ffbf00] rounded-lg font-bold  shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Donate Now
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-700 font-semibold">100% of your donation goes directly to fund students's scholarship</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">99.9% Uptime</span>
              </div> */}
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative lg:h-[600px] h-[400px] group">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative h-full bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Placeholder for your actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/donate3.jpg"
                  alt="Hero"
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Elements */}
              {/* <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 animate-float">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-xs text-gray-300">Active Students</div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-white font-medium">Join thousands</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}