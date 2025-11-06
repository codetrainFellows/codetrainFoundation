import { Heart, PenLine, Target, TrendingUp } from 'lucide-react';

export default function CTADonationSection() {
  const goal = 600000;
  const raised = 320000;
  const percentage = (raised / goal) * 100;
  const studentsHelped = Math.floor((raised / goal) * 20);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/class-celebration.jpg)',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-800/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wide">January 2026 Cohort</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Help 20 Students Start in January
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your donation today directly funds students starting their tech journey. 
              Transform lives through education.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-orange-300" />
                  <span className="text-sm text-white/70 uppercase tracking-wide">Students Funded</span>
                </div>
                <div className="text-4xl font-bold">{studentsHelped}<span className="text-2xl text-white/70">/20</span></div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-orange-300" />
                  <span className="text-sm text-white/70 uppercase tracking-wide">Progress</span>
                </div>
                <div className="text-4xl font-bold">{percentage.toFixed(0)}%</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-orange-400 p-4 rounded-r-lg">
              <p className="text-white/90 text-sm">
                <span className="font-bold">100% of donations fund scholarships.</span> Administrative costs covered by Codetrain Africa.
              </p>
            </div>
          </div>

          {/* Right Column - Donation Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-lg mb-4">
                <span className="text-3xl">🎯</span>
                <span>Goal: ₵{goal.toLocaleString()}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 transition-all duration-1000 ease-out relative"
                  style={{ width: `${percentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="font-semibold text-orange-600 text-lg">₵{raised.toLocaleString()} raised</span>
                <span className="font-medium">₵{(goal - raised).toLocaleString()} to go</span>
              </div>
            </div>

            {/* Impact Message */}
            <div className="bg-orange-50 rounded-xl p-6 mb-8 text-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                Each <span className="font-bold text-orange-600">₵30,000</span> scholarship 
                changes a life forever
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group text-lg">
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform fill-white" />
                Donate Now
              </button>
              
              <button className="w-full bg-white border-2 border-orange-500 text-orange-600 font-bold px-8 py-5 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-md flex items-center justify-center gap-3 group text-lg">
                <PenLine className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Create Named Scholarship
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
    </section>
  );
}