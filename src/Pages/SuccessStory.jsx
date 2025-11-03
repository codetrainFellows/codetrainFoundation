import React from "react";
import { Play, Star } from "lucide-react";

function SuccessStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
          <Star className="text-blue-600" size={20} fill="currentColor" />
          <span className="text-blue-600 font-semibold">Success Stories</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Transforming Lives Through Technology
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear directly from Codetrain alumni about how tech education changed their lives and opened doors to incredible opportunities
        </p>
      </div>

      {/* First Row of Videos */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 justify-center mb-8">
        {/* Video Card 1 */}
        <div className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-xl">
          <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-900 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Codetrain Success Story 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              From Zero to Software Engineer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Watch how our graduate went from having no coding experience to landing a role at an international tech company through Codetrain's comprehensive program.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Play size={16} />
              <span>Student Success Story</span>
            </div>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-xl">
          <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-900 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="Codetrain Success Story 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Career Transformation Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover how Codetrain helped this professional transition from their previous career into the thriving tech industry with confidence and skills.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Play size={16} />
              <span>Career Switcher Story</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Videos */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 justify-center">
        {/* Video Card 3 */}
        <div className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-xl">
          <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-900 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="Codetrain Success Story 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Building Solutions for Africa
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn how this Codetrain graduate is using their newfound skills to create innovative tech solutions that address real challenges in African communities.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Play size={16} />
              <span>Entrepreneur Story</span>
            </div>
          </div>
        </div>

        {/* Video Card 4 */}
        <div className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-xl">
          <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-900 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_4"
              title="Codetrain Success Story 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Empowering the Next Generation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              See how this alumni is giving back by mentoring aspiring developers and inspiring others to pursue careers in technology through Codetrain.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Play size={16} />
              <span>Alumni Impact Story</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of students who are transforming their lives through technology education at Codetrain Africa
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessStory;