import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DonationHero() {
  return (
   <div className="relative min-h-[70vh] min-h-[70vh] overflow-hidden">
      {/* Background Image - Right Side */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right"
        style={{
          backgroundImage: "url(/campus2.jpg)",
        }}
      />

      {/* Teal Gradient Overlay - Lighter on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/70 to-transparent md:from-teal-900 md:via-teal-800/95 md:to-teal-900/40" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main Content */}
        <main className="flex-1 flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl w-full">
            <div className="max-w-2xl">
              {/* Hero Text */}
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Expanding Access 
                <br />
                to Tech Education
                <br />
                in Africa
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
                Giving talented young Africans the chance to learn, build careers,
                <br className="hidden sm:block" />
                and change their lives — regardless of their financial background.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
  {/* First Button – unchanged */}
  <Link to="/sponsor" target="_blank">
  <button className="bg-white text-teal-900 px-6 md:px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base">
    Sponsor a Student
  </button>
  </Link>

  {/* Second Button – redesigned */}
  <Link
    to="/partner"
    className="group relative overflow-hidden border-2 border-white/70 text-white px-6 md:px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base text-center backdrop-blur-sm hover:border-white hover:shadow-xl"
  >
    {/* Hover background effect */}
    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

    <span className="relative z-10 flex flex-col items-center leading-tight">
      <span className="tracking-wide">Partner with Us</span>
      <span className="text-xs md:text-sm font-light opacity-90 mt-1">
        Schedule a meeting
      </span>
    </span>
  </Link>
</div>

{/* Supporting text */}
<p className="text-white/80 text-sm md:text-base  mx-auto mb-4">
  Your support opens doors for the next generation of African innovators.
</p>


              {/* Partner Logos */}
              {/* <h1 className="text-white mb-3">Supported by</h1>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="text-white/80">
                  <img src="codetrain-logo.webp" alt="" className="w-16" />
                </div>

                <div className="text-white/80">
                  <img src="/giz-logo.webp" alt="" className="w-10" />
                </div>

                <div className="text-white/80">
                  <img
                    src="/mastercard-foundation.png"
                    alt=""
                    className="w-12"
                  />
                </div>

                <div className="text-white/80">
                  <img src="Chancen-Logo.png" alt="" className="w-16" />
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}