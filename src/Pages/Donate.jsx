import React from "react";
import { Heart, Users, ArrowRight } from "lucide-react";

function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Support Our Mission
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Help us empower the next generation of African tech leaders through education and opportunity
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 justify-center">
        {/* Donate Card */}
        <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-xl">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          
          {/* Icon */}
          <div className="relative bg-linear-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Heart className="text-white" size={32} />
          </div>

          {/* Content */}
          <h2 className="relative text-3xl font-bold text-gray-900 mb-4">
            Make a Donation
          </h2>
          <p className="relative text-gray-600 text-lg mb-8 leading-relaxed">
            Your contribution directly impacts young Africans by providing access to quality technology education, mentorship, and resources they need to thrive.
          </p>

          {/* Stats */}
          <div className="relative bg-orange-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Impact</p>
                <p className="text-2xl font-bold text-orange-600">1000+ Lives</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Changed</p>
                <p className="text-2xl font-bold text-orange-600">Every Year</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="relative w-full bg-[#0c0827] text-[#ffbf00] font-bold px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4 shadow-lg hover:shadow-xl">
            Donate Now
            <ArrowRight size={20} className="transition-all duration-300" />
          </button>
        </div>

        {/* Sponsorship Card */}
        <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-xl">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          
          {/* Icon */}
          <div className="relative bg-linear-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="text-white" size={32} />
          </div>

          {/* Content */}
          <h2 className="relative text-3xl font-bold text-gray-900 mb-4">
            Become a Sponsor
          </h2>
          <p className="relative text-gray-600 text-lg mb-8 leading-relaxed">
            Partner with us to create lasting change. As a sponsor, you'll help build sustainable tech education programs across Africa.
          </p>

          {/* Benefits */}
          <div className="relative bg-yellow-50 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Sponsor Benefits:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Recognition on our platform</li>
              <li>• Impact reports & updates</li>
              <li>• Community engagement opportunities</li>
            </ul>
          </div>

          {/* Button */}
          <button className="relative w-full bg-[#ffbf00] text-[#0c0827] font-bold px-8 py-4 rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4 shadow-lg hover:shadow-xl">
            Become a Sponsor
            <ArrowRight size={20} className="transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate;