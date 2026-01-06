import React from 'react';
import { Quote, Users, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AlumniSuccessPage() {
  const testimonials = [
    {
      quote: "I've been employed and I can feed myself.",
      author: "Male Alumnus",
      impact: "Economic Independence"
    },
    {
      quote: "I built my first mobile apps — something I never believed I could do.",
      author: "Female, 35",
      impact: "New Skills Unlocked"
    },
    {
      quote: "I can now solve problems in my community using tech.",
      author: "Male, 26",
      impact: "Community Impact"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section with Featured Story */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 to-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-cream-50 to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 border border-teal-200 rounded-full mb-8">
            <Users className="w-4 h-4 text-teal-700" />
            <span className="text-teal-700 text-sm font-semibold">Alumni Success Stories</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Real People.
            <br />
            <span className="text-teal-600">
              Real Transformation.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-16">
            Every scholarship writes a new story. Here are voices from those whose lives have changed through tech education
          </p>

          {/* Featured Story Card */}
          <div className="max-w-5xl bg-white border border-teal-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-teal-100/50">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-teal-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                  Featured Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  From $90/Month to a Life-Changing Career
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 md:gap-12">
              <div className="md:col-span-3 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-teal-500 to-teal-200 rounded-full" />
                  <div>
                    <h3 className="text-xl font-bold text-teal-600 mb-3">The Challenge</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                     A young woman living with sickle cell disease earned $90/month as a salesgirl. The physical demands threatened her health, and her income kept her trapped.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-teal-500 to-teal-200 rounded-full" />
                  <div>
                    <h3 className="text-xl font-bold text-teal-600 mb-3">The Transformation</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Through Codetrain, she learned software development and transitioned into a flexible remote role that supports her health and provides financial stability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-teal-600 mb-4" />
                  <blockquote className="text-xl md:text-2xl text-gray-900 italic leading-relaxed mb-6">
                    "Working in tech saved my life. I never imagined I could have this kind of future."
                  </blockquote>
                  <p className="text-teal-700 font-semibold"> Female Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Voices Section */}
      <section className="relative py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 border border-teal-200 rounded-full mb-6">
              <Heart className="w-4 h-4 text-teal-700" />
              <span className="text-teal-700 text-sm font-semibold">60 Decibels Survey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              More Voices,{" "}
              <span className="text-teal-600">
                More Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Independent surveys reveal the real impact of tech education on lives
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-cream-50 border border-teal-100 rounded-2xl p-8 hover:bg-teal-50 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-teal-200">
                    <Quote className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
                    {testimonial.impact}
                  </div>
                </div>

                <blockquote className="text-lg text-gray-900 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-teal-100">
                  <p className="text-sm text-gray-600 font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-teal-600 to-teal-700 border border-teal-500 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  A scholarship is more than tuition
                </h3>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  It is{" "}
                  <span className="text-white font-bold">dignity</span>,{" "}
                  <span className="text-white font-bold">opportunity</span>,
                  <span className="text-white font-bold">empowerment</span>, and a{" "}
                  <span className="text-white font-bold">new beginning</span>.
                </p>

                <div className="mt-10 pt-10 border-t border-white/20">
                  <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                    Codetrain Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-cream-50 border-t border-teal-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write More Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-10">
           Your support helps talented young Africans gain access to life-changing tech careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/sponsor" target="_blank">
            <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/50 hover:scale-105">
              Sponsor a Student
            </button>
            </Link>
              <Link to="/partner" target="_blank">
            <button className="bg-white border-2 border-teal-500 text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300">
              Partner with Us
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}