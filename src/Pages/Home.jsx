import { Heart, BookOpen, Rocket, Eye } from 'lucide-react';
import TransparencySection from './Transform';
import Problem from './Problem';

import PartnerSection from './PartnerSection';
import CTADonationSection from './CTADonationSection';


export default function MissionSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Orange Top Border */}
      <div className="h-2 bg-orange-500" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <h2 className="font-bold text-lg mb-4">Our Mission</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We're building Africa's<br />
            Tech Opportunity Engine
          </h3>
          
          <p className="text-gray-700 text-lg mb-12 max-w-2xl leading-relaxed">
            Codetrain Foundation exists to remove financial barriers to tech education –<br className="hidden md:block" />
            so every young African can build, succeed, and support their<br className="hidden md:block" />
            family and shape the continent's digital future.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8  ">
            <div>
              <div className="text-4xl md:text-3xl font-bold text-gray-900 mb-2">GH₵120,000+</div>
              <div className="text-gray-600 text-sm">In scholarships awarded</div>
            </div>
            <div>
              <div className="text-4xl md:text-3xl font-bold text-gray-900 mb-2">700+</div>
              <div className="text-gray-600 text-sm">graduates trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-3xl font-bold text-gray-900 mb-2">89%</div>
              <div className="text-gray-600 text-sm">job placement</div>
            </div>
            <div>
              <div className="text-4xl md:text-3xl font-bold text-gray-900 mb-2">91%</div>
              <div className="text-gray-600 text-sm">report improved<br />quality of life</div>
            </div>
            
          </div>
        </section>

        {/* How It Works Section */}
        <section className='text-center'>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Step 1: You Sponsor */}
  <div className="text-center shadow-lg p-6 rounded-lg">
    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
      <Heart className="w-10 h-10 text-white fill-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">You Sponsor</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Choose how to give –<br />
      any student, or<br />
      a named scholarship
    </p>
  </div>

  {/* Step 2: We Train */}
  <div className="text-center shadow-lg p-6 rounded-lg">
    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
      <BookOpen className="w-10 h-10 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">We Train</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Students complete<br />
      Codetrain Africa's<br />
      2-year Software<br />
      Engineering + AI<br />
      program
    </p>
  </div>

  {/* Step 3: They Thrive */}
  <div className="text-center shadow-lg p-6 rounded-lg">
    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
      <Rocket className="w-10 h-10 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">They Thrive</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Graduates secure jobs<br />
      and become<br />
      trailblazers, lifting<br />
      entire families out<br />
      of poverty
    </p>
  </div>

  
</div>


          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg">
              Start a Named Scholarship
            </button>
          </div>
        </section>

       
      </div>
       {/* Additional Sections */}
      
        <TransparencySection />
        <Problem />
        <PartnerSection />
        <CTADonationSection />
    </div>
  );
}
