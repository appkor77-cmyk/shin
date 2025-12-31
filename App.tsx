import React from 'react';
import Navigation from './components/Navigation';
import Hero3D from './components/Hero3D';
import Scoreboard from './components/Scoreboard';
import PromotionBanner from './components/PromotionBanner';
import QuickLinks from './components/QuickLinks';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Hero3D />
        <Scoreboard />
        <PromotionBanner />
        <QuickLinks />
        <NewsSection />
        <VideoSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;