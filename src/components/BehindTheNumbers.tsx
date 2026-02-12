import React from 'react';

const BehindTheNumbers: React.FC = () => {
  const alumniStories = [
    {
      name: "Josephine Mensah",
      role: "Frontend Developer at mPharma",
      before: "Josephine was unemployed after university, struggling to break into tech without formal training.",
      after: "After completing the program, she secured a role at mPharma building healthcare solutions.",
      quote: "The program prepared me for a real work environment, not just technical skills."
    },
    {
      name: "Kwame Asante",
      role: "Full-Stack Engineer",
      before: "Before Codetrain, Kwame was working in retail with no clear path to a tech career.",
      after: "Today, he's a full-stack engineer building products used across West Africa.",
      quote: null
    },
    {
      name: "Ama Darko",
      role: "UX Designer at Fidelity Bank",
      before: "Entered the program with a passion for design but no professional experience.",
      after: "Now working as a UX designer and contributing to digital banking innovation.",
      quote: null
    }
  ];

  const videoTestimonials = [
    {
      title: "From unemployment to my first tech role",
      videoId: "https://www.youtube.com/watch?v=QWKI4aMB07c" 
    },
    {
      title: "What stable income means for my family",
      videoId: "https://www.youtube.com/watch?v=uqozP61jgKQ"
    },
    {
      title: "How Codetrain rebuilt my confidence",
      videoId: "https://www.youtube.com/watch?v=biQP0dUS7zM" 
    }
  ];

  const getEmbedId = (videoId: string) => {
    try {
      const url = new URL(videoId);
      return url.searchParams.get("v") ?? videoId;
    } catch {
      return videoId;
    }
  };

  return (
    <section className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a3a] mb-4">
            Behind the Numbers
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-4xl mx-auto">
            The outcomes above represent real people — each with a journey shaped by access to skills, opportunity, and support. 
            Codetrain Foundation works with young people who are often unemployed or under-employed at entry. 
            What follows are a few of the lived journeys behind the data — showing how skills translate into confidence, income, and long-term opportunity.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-[#00838f]/30 mx-auto mb-10"></div>

        {/* Alumni Journeys Header */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a3a3a] text-center">
            Alumni Journeys
          </h3>
        </div>

        {/* Alumni Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {alumniStories.map((story, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#00838f]/30 transition-all flex flex-col">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-[#1a3a3a] mb-1">
                  {story.name}
                </h4>
                <p className="text-[#00838f] font-semibold text-sm">
                  {story.role}
                </p>
              </div>
              
              <div className="space-y-3 mb-4 flex-grow">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">Before:</span> {story.before}
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">After:</span> {story.after}
                </p>
              </div>

              {story.quote && (
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-700 italic text-sm leading-relaxed">
                    <span className="text-lg text-[#00838f] font-serif mr-1">"</span>
                    {story.quote}
                    <span className="text-lg text-[#00838f] font-serif ml-1">"</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-[#00838f]/30 mx-auto mb-10"></div>

        {/* Hear It From Them Section */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a3a3a] text-center mb-3">
            Hear It From Them
          </h3>
          <p className="text-slate-600 text-sm md:text-base text-center max-w-3xl mx-auto">
            Short video stories from Codetrain alumni sharing what the program changed — in their own words.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videoTestimonials.map((video, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  src={`https://www.youtube.com/embed/${getEmbedId(video.videoId)}`}
                 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
              <p className="text-slate-700 font-semibold text-sm md:text-base text-center leading-snug">
                
              </p>
            </div>
          ))}
        </div>

        {/* Transition Line */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-slate-600 text-sm md:text-base text-center italic max-w-3xl mx-auto">
            These stories reflect the broader outcomes of Codetrain Foundation's work across programs, communities, and countries.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BehindTheNumbers;