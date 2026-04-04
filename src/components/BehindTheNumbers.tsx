import React from 'react';

const BehindTheNumbers: React.FC = () => {
  const alumniStories = [
    {
      name: "Jermaine",
      story: "After completing Codetrain at just 12, he embarked on his second tech startup, focused on revolutionizing loyalty programs for small shops. He interned at Cedi Rates and now advises two companies. Additionally, he serves as a mentor at Moonshot Pirates in Austria, guiding young innovators and sharing his expertise."
    },
    {
      name: "Oscarlyn",
      story: "She was best student in 2023. A medical doctor with a passion for tech, she impressed several companies at our demo day. She showcased her app, a comprehensive rabbit farming management system, which captured significant interest from potential employers. She currently mentors other young ladies at Codetrain."
    },
    {
      name: "Anthony",
      story: "After dropping out of university, Anthony decided to join Codetrain, seeking practical experience and leadership skills. After working as a teaching fellow, he secured a role with Infinitas Media in Berlin. He continues to mentor Codetrain students and gives talks whenever he's in Ghana."
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00838f]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00838f] font-bold text-sm">
                    {story.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1a3a3a]">
                  {story.name}
                </h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-grow">
                {story.story}
              </p>
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
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
              <p className="text-slate-700 font-semibold text-sm md:text-base text-center leading-snug">
                {video.title}
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