import React from 'react';
import { Calendar, Heart, Star, Award, Rocket, Users } from 'lucide-react';

const Home = () => {
  const timelineEvents = [
    {
      year: '2017',
      title: 'The Beginning',
      description: 'Our journey started with a simple idea and a passionate team.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2018',
      title: 'First Milestone',
      description: 'Reached 1,000 happy customers and expanded our services.',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2019',
      title: 'Growing Together',
      description: 'Opened new offices and doubled our team size.',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2020',
      title: 'Innovation Year',
      description: 'Launched groundbreaking features despite global challenges.',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2021',
      title: 'Recognition',
      description: 'Won industry awards and recognition for excellence.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Extended our reach to 50+ countries worldwide.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      year: '2023',
      title: 'Technology Leap',
      description: 'Integrated AI and cutting-edge technology into our platform.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: '2024',
      title: 'Community Focus',
      description: 'Built a thriving community of 100,000+ active users.',
      icon: Users,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Continuing to innovate and shape the future together.',
      icon: Star,
      color: 'from-violet-500 to-fuchsia-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            OUR STORY
          </h1>
          <p className="text-gray-600 text-lg">A journey through time and memories</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Two Images Vertical */}
          <div className="lg:col-span-1 space-y-6">
            {/* First Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Our Team</h3>
                  <p className="text-sm text-gray-200">United by passion</p>
                </div>
              </div>
            </div>

            {/* Second Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Success celebration"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Celebrating Success</h3>
                  <p className="text-sm text-gray-200">Every milestone matters</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
              <h3 className="font-bold text-gray-800 text-lg">By the Numbers</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years of Excellence</span>
                  <span className="font-bold text-purple-600 text-xl">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Happy Customers</span>
                  <span className="font-bold text-pink-600 text-xl">100K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Countries</span>
                  <span className="font-bold text-blue-600 text-xl">50+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400"></div>

              {/* Timeline Events */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <div 
                      key={event.year} 
                      className="relative pl-20 group"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 w-9 h-9 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-125 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>

                      {/* Content Card */}
                      <div className="bg-white rounded-xl shadow-lg p-2 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-3xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                            {event.year}
                          </span>
                          <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
