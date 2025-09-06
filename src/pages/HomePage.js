import React from 'react';
import { HeroSection } from './Home/sections/HeroSection';
import { FeaturesSection } from './Home/sections/FeaturesSection';
import { TestimonialsSection } from './Home/sections/TestimonialsSection';
import { StatsSection } from './Home/sections/StatsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      {/* Add padding to account for fixed navbar */}
      <div className="pt-16"></div>

      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      {/* <LabsSection /> */}
      <TestimonialsSection />
    </div>
  );
}