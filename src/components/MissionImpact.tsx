import React, { useState } from 'react';

const MissionImpact: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // YouTube video ID extracted from the URL
  const videoId = 'xr_pJlJi0JE';

  return (
    <section id="about" className="bg-white min-h-[90vh] flex flex-col">
      {/* Top: Mission Content */}
      <div className="flex-grow flex items-center px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-3xl font-extrabold text-[#1a3a3a] mb-1">Our Mission</h2>
              <div className="h-1 w-12 bg-[#00838f]"></div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
              Building Africa's Tech Opportunity Engine
            </h3>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
              We remove financial barriers so high-potential individuals 
              can secure meaningful employment and participate 
              fully in the digital economy.
            </p>
            
            <p className="text-xl font-bold text-[#1a3a3a] pt-4">
              Access without outcomes is not impact.
            </p>
          </div>

          <div className="relative shadow-2xl rounded-sm overflow-hidden border-8 border-white">
            {!isVideoPlaying ? (
              <div 
                className="relative group cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* YouTube thumbnail image */}
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Mission Video" 
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-[#00838f] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=vIL4CI0Ta4Ww8_v8`}
                title="Mission Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>

      {/* Middle: Stats Bar */}
      <div className="bg-[#3b6f71] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="py-6 md:py-0 text-center text-white">
              <p className="text-5xl font-bold mb-1">700+</p>
              <p className="text-sm uppercase tracking-widest font-medium opacity-90">Learners Trained</p>
            </div>
            <div className="py-6 md:py-0 text-center text-white">
              <p className="text-5xl font-bold mb-1">89%</p>
              <p className="text-sm uppercase tracking-widest font-medium opacity-90">Job Placement Rate</p>
            </div>
            <div className="py-6 md:py-0 text-center text-white">
              <p className="text-5xl font-bold mb-1">91%</p>
              <p className="text-sm uppercase tracking-widest font-medium opacity-90">Improved Quality of Life</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Graduate Quote */}
      <div className="bg-slate-50 py-8 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed">
            <span className="text-2xl text-[#00838f] font-serif mr-2">"</span>
            The program prepared me for a real work environment, not just technical skills.
            <span className="text-2xl text-[#00838f] font-serif ml-2">"</span>
            <span className="ml-4 text-sm font-bold text-slate-500 uppercase tracking-tighter">— Graduate</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionImpact;