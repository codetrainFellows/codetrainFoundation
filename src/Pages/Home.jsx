import React from "react";

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
      {/* Our Impact */}
      <div>
        <div>
          <h1 className="text-center text-6xl mt-22">Our Impact</h1>
          <p className="text-center pt-5">
            Your donation keeps this door of opportunity open
          </p>
        </div>
        <div className="flex justify-around">
          <div>
            <h1 className="text-xl text-center">Alumni</h1>
            <p className="text-8xl">700+</p>
          </div>
          <div>
            <h1 className="text-xl text-center">Job Placement</h1>
            <p className="text-8xl">89%</p>
          </div>
          <div>
            <h1 className="text-xl text-center">Rating</h1>
            <p className="text-8xl">91%</p>
          </div>
        </div>
      </div>

      {/* Donate & Sponsorship */}

    </>
  );
}
