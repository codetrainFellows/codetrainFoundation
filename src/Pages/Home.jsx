import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Our Story</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop" 
              alt="Student 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
              alt="Student 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              alt="Student 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop" 
              alt="Graduate"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Codetrain Codetrain helped me build the skills and confidence to work in tech.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Your donation funds scholarships that unlock careers in technology.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We've grown from 10 students and borrowedlabs to over 100 graduates working in 191 countries for tech companies around the world.
            </p>
            
            <p className="text-base text-gray-600 italic">
              — Abigail Codetrain Graduate
            </p>

             {/* UN SDGs Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Alignment with the UN SDGs
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* SDG 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SDG 4</h3>
              <p className="text-sm text-gray-600">
                Ensure quality education for under-served youth
              </p>
            </div>

            {/* SDG 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⚖️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SDG 5</h3>
              <p className="text-sm text-gray-600">
                Achieve gender achievements
              </p>
            </div>

            {/* SDG 8 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">💼</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SDG 8</h3>
              <p className="text-sm text-gray-600">
                Develop age of patents through education
              </p>
            </div>

            {/* SDG 17 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">SDG 17</h3>
              <p className="text-sm text-gray-600">
                Partnership and global development partners
              </p>
            </div>
          </div>
        </div>
          </div>

          
        </div>

       
      </div>
    </div>
  );
}