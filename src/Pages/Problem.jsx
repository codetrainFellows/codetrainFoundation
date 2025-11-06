import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function CTAStoriesSection() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <div className="bg-white">
      {/* Start Transforming Lives Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Start Transforming Lives Today
          </h2>
          
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Join us in empowering the next generation of African leaders<br className="hidden sm:block" />
            in tech. Your support makes a world of difference.
          </p>

          <button className="bg-orange-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg text-lg">
            Donate
          </button>
        </div>
      </section>

      {/* Our Stories Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-gray-50">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Stories
          </h2>
          
          <p className="text-gray-700 text-lg max-w-2xl leading-relaxed">
            Discover the impact of Codetrain through the inspiring stories<br className="hidden sm:block" />
            of our students, alumni, and partners.
          </p>
        </div>

        {/* Story Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 h-96 md:h-auto">
              <img 
                src="/jeremy.jpg" 
                alt="Jermaine - Alumni Success Story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Side */}
            <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
              <div className="text-sm text-gray-600 mb-3 font-medium uppercase tracking-wide">
                Alumni Success Story
              </div>
              
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Jermaine's Transformation
              </h3>
              
              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                From classroom learner to software engineer — Jermaine turned his 
                passion for technology into a thriving career through Codetrain's 
                hands-on mentorship and real-world training.
              </p>
              <button 
                onClick={() => setShowFullStory(true)}
                className="self-start bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 group shadow-md"
              >
                Read His Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Story Modal */}
      {showFullStory && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button 
              onClick={() => setShowFullStory(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-sm text-orange-500 mb-3 font-medium uppercase tracking-wide">
                Alumni Success Story
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Jermaine's Transformation
              </h2>

              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src="/jeremy.jpg" 
                  alt="Jermaine"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Story Content */}
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Jermaine grew up in Accra with limited access to technology education. 
                  Through Codetrain's scholarship program, he completed the 2-year Software 
                  Engineering and AI program, gaining hands-on experience with real-world 
                  projects and industry mentors.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-6">
                  <p className="text-gray-800 italic">
                    "Codetrain taught me to believe in myself and showed me that my dreams 
                    were achievable. Now I'm building the future I always imagined."
                  </p>
                  <p className="text-gray-600 mt-3 font-semibold">
                    — Jermaine, Software Engineer
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Today, Jermaine works as a software engineer at a leading tech company, 
                  supporting his entire family and inspiring other young people in his 
                  community to pursue careers in technology.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <button className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}