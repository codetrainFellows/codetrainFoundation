
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionImpact from './components/MissionImpact';
import InclusionSection from './components/InclusionSection';
import Focus2026 from './components/Focus2026';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-teal-100 ">
      <Navbar />
      <main>
        <Hero />
        <MissionImpact />
        <InclusionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
