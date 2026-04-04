import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionImpact from './components/MissionImpact';
// import BehindTheNumbers from './components/BehindTheNumbers';
import InclusionSection from './components/InclusionSection';
import Footer from './components/Footer';
import FundScholarship from './components/FundScholarship';

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <MissionImpact />
      {/* <BehindTheNumbers /> */}
      <InclusionSection />
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-teal-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fund-scholarship" element={<FundScholarship />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;