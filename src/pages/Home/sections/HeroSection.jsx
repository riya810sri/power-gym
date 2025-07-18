import { Button } from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';


export function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); // or '/login' or wherever you want to go
  };
  return (
    <section className="hero-section min-h-screen flex flex-col justify-center items-center px-4 relative -mt-16 pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      
      {/* Introducing badge */}
      <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10">
        <span className="text-yellow-400 text-sm font-medium">✨ Introducing Vulnhut</span>
      </div>

      {/* Main heading */}
      <h1 className="hero-title text-5xl md:text-7xl font-bold text-center mb-6 leading-tight">
        Master Cybersecurity<br />
        with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vulnhut</span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle text-lg md:text-xl text-center mb-12 leading-relaxed max-w-4xl">
        Dive into our comprehensive video courses and become a cybersecurity expert.<br />
        Learn from industry professionals and stay ahead in the digital security landscape.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-4 items-center justify-center">
        <Button
  onClick={handleGetStarted}
  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
>
  Get Started
</Button>

        <button className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-colors font-semibold">
          Our Commitment
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
     
    </section>
  );
}