
import React from 'react';
import image from "../assets/group.jpg"
import { Link } from 'react-router-dom';
import pic1 from "../assets/image1.jpg";
import pic2 from "../assets/image2.jpg";
import pic3 from "../assets/image3.jpg";

const InclusionSection: React.FC = () => {
  const cards = [
    {
      title: "Low-Income Learners",
      description: "For learners unable to afford market-rate training",
      image: pic1,
      bgColor: "bg-[#f8f9fb]"
    },
    {
      title: "Women in STEM",
      description: "For young women where participation gaps persist.",
      image: pic2,
      bgColor: "bg-[#f8f9fb]"
    },
    {
      title: "Adaptive Pathways",
      description: "For learners requiring flex and adaptive training paths",
      image: pic3,
      bgColor: "bg-[#f8f9fb]"
    }
  ];

  return (
    <section className="bg-white min-h-[90vh] flex flex-col justify-center py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full gap-8 lg:gap-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a3a] inline-block relative">
            Inclusion by Design
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#00838f]/30"></div>
          </h2>
        </div>

        {/* Inclusion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className={`${card.bgColor} rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow`}>
              <div className="h-32 lg:h-40 overflow-hidden relative">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover  opacity-80"
                />
                <div className="absolute inset-0 bg-[#00838f]/5"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-extrabold text-[#1a3a3a] mb-2">{card.title}</h3>
                <p className="text-slate-500 italic text-xs lg:text-sm leading-relaxed max-w-[220px] mx-auto">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Make an Impact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#fdfdfd] p-4 lg:p-6 rounded-3xl border border-slate-50">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-full min-h-[250px] lg:min-h-[350px]">
            <img 
              src={image}
              alt="Graduates" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1a3a3a] mb-3">Make an Impact</h2>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                Your support opens the door to tech careers for those who need it most.
              </p>
            </div>

            <div className="space-y-4">
              {/* CTA 1 */}
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <a href='https://donate.stripe.com/fZu00kcoq6v04Yr8i91ZS0b'>
                <button className="w-full sm:w-auto min-w-[200px] bg-[#3b6f71] text-white px-16.5 py-3 rounded-lg font-bold text-sm transition-all hover:bg-[#2d5557] shadow-lg cursor-pointer">
                  Donate via KATO
                </button>
                </a>
                <p className="text-slate-600 text-xs lg:text-sm font-medium">Support a student through a scholarship</p>
              </div>

              {/* CTA 2 */}
              <div className="flex flex-col sm:flex-row items-center gap-4 group">
                <Link to="/fund-scholarship">
                <button className="w-full sm:w-auto min-w-[250px] bg-[#3b6f71] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-[#2d5557] shadow-lg cursor-pointer">
                  Fund a Scholarship Program
                </button>
                </Link>
                <p className="text-slate-600 text-xs lg:text-sm font-medium">For companies, nonprofits, and partners sponsoring multiple scholars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusionSection;
