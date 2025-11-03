import React from "react";
import Donate from "./Donate";

export default function Home() {
  return (
    <>
      {/* Our story */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-12 text-center">
            Our Story
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/campus2.jpg"
                alt="Student 1"
                className="w-full h-74 object-cover shadow-lg"
              />
              <img
                src="/group.jpg"
                alt="Student 2"
                className="w-full h-74 object-cover shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Codetrain Codetrain helped me build the skills and confidence to
                work in tech.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your donation funds scholarships that unlock careers in
                technology.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We've grown from 10 students and borrowedlabs to over 100
                graduates working in 191 countries for tech companies around the
                world.
              </p>

              <p className="text-base text-gray-600 italic">
                — Abigail Codetrain Graduate
              </p>

              {/* UN SDGs Section */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Impact - Redesigned */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Your donation keeps this door of opportunity open for the next
              generation
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Alumni */}
            <div className="group text-center transform transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-100">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-2.21 0-4.21-.9-5.66-2.34L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Alumni
              </h3>
              <p className="text-6xl md:text-7xl font-bold text-blue-600">
                700<span className="text-4xl">+</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Graduates empowered</p>
            </div>

            {/* Job Placement */}
            <div className="group text-center transform transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-300">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6v3m-4-3v3m-4-3v3m5 6v3m-4-3v3m-4-3v3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Job Placement
              </h3>
              <p className="text-6xl md:text-7xl font-bold text-green-600">
                89<span className="text-4xl">%</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Secured employment</p>
            </div>

            {/* Rating */}
            <div className="group text-center transform transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-500">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Student Rating
              </h3>
              <p className="text-6xl md:text-7xl font-bold text-amber-600">
                91<span className="text-4xl">%</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate & Sponsorship */}
      <Donate />
    </>
  );
}
