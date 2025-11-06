import { ArrowRight } from 'lucide-react';

export default function DonationHero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - Right Side */}
      <div 
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: 'url(/campus2.jpg)',
          backgroundPosition: 'right center'
        }}
      />
      
      {/* Orange Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900 via-orange-800/95 to-orange-900/40" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-full" />
            </div>
            <span className="text-white font-semibold text-xl">Camcoin</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-7xl w-full">
            <div className="max-w-2xl">
              {/* Hero Text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Every Donation<br />
                Unlocks a Future<br />
                Innovator
              </h1>
              
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
                Empowering African youth, women and people with<br className="hidden sm:block" />
                quantities through tech education
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Sponsor a Student – $3,000 /
                  <span className="text-sm opacity-75">36 Scholarships</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                  Empower a Women<br />
                  In Tech
                </button>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded" />
                    <div className="w-6 h-6 bg-white/20 rounded" />
                  </div>
                  <span className="text-sm font-medium">LagosYellow</span>
                </div>
                
                <div className="text-white/80">
                  <span className="text-2xl font-bold">giz</span>
                </div>
                
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <span className="text-sm font-medium">Mastercard</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}