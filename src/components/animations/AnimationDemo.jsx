import React from 'react';
import SplitTextAnimation from './SplitTextAnimation';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';
import BlobBackground from './BlobBackground';
import TiltCard from './TiltCard';

const AnimationDemo = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Blob Background */}
      <BlobBackground 
        color1="#8B5CF6" 
        color2="#3B82F6" 
        color3="#7E22CE" 
        opacity={0.2}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Split Text Hero */}
        <div className="text-center mb-20">
          <SplitTextAnimation
            text="Welcome to Durbhasi Gurukulam"
            className="text-5xl font-bold mb-6"
            delay={0.2}
            animationType="slideUp"
          />
          <SplitTextAnimation
            text="Transform your career with expert-led courses"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            delay={0.5}
            animationType="fadeIn"
          />
        </div>
        
        {/* Scroll Reveal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3].map((item, index) => (
            <ScrollReveal
              key={item}
              delay={index * 0.1}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <TiltCard className="h-full">
                <h3 className="text-xl font-bold mb-3">Feature {item}</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Magnetic Button */}
        <div className="text-center">
          <MagneticButton className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
            Get Started
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemo;