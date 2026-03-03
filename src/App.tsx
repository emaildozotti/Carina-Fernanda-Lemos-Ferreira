import React from 'react';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { VideoSection } from './components/sections/VideoSection';
import { Methodology } from './components/sections/Methodology';
import { Bio } from './components/sections/Bio';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-[#F5F2EA]">
      <Hero />
      <PainPoints />
      <VideoSection />
      <Methodology />
      <Bio />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
