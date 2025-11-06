import { Handshake, Mail } from 'lucide-react';

export default function PartnerSection() {
  const partners = [
    { name: 'Mastercard Foundation', logo: '/mastercard-logo.png' },
    { name: 'GIZ', logo: '/giz-logo.png' },
    { name: 'Chancen International', logo: '/chancen-logo.png' },
    { name: 'Mozilla Foundation', logo: '/mozilla-logo.png' },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Join Us to Empower<br />
              Africa's Builders
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Partner with us to transform communities through digital 
              empowerment. Fund multiple students, co-brand scholarships, 
              or add us to your CSR initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white font-semibold px-6 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md flex items-center justify-center gap-3 group">
                <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Become a Corporate Partner
              </button>
              
              <button className="bg-white border-2 border-orange-500 text-orange-500 font-semibold px-6 py-4 rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-md flex items-center justify-center gap-3 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Our Partnership Deck
              </button>
            </div>
          </div>

          {/* Right Column - Partner Logos Grid */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
                Our Trusted Partners
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    {/* Placeholder for logos - replace with actual images */}
                    <div className="w-full h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-gray-600 font-bold text-sm text-center">${partner.name}</span>`;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Partner Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm">
                  Join leading organizations making an impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
    </section>
  );
}