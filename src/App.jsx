
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import MissionSection from './components/MissionSection';
import ImpactSection from './components/ImpactSection';
import WhatWeFund from './components/WhatWeFund';
import InclusionSection from './components/InclusionSection';
import Focus2026 from './components/Focus2026';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-teal-100 font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <MissionSection />
        <ImpactSection />
        <WhatWeFund />
        <InclusionSection />
        <Focus2026 />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
