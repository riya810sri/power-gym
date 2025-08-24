import React from 'react';
import { Link } from 'react-router-dom';
import SplitTextAnimation from '../components/animations/SplitTextAnimation';
import ScrollReveal from '../components/animations/ScrollReveal';
import MagneticButton from '../components/animations/MagneticButton';
import BlobBackground from '../components/animations/BlobBackground';
import TiltCard from '../components/animations/TiltCard';

const AnimationExamples = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <BlobBackground 
          color1="#8B5CF6" 
          color2="#3B82F6" 
          color3="#7E22CE" 
          opacity={0.2}
        />
        
        <div className="relative z-10 text-center px-6">
          <SplitTextAnimation
            text="Animation Showcase"
            className="text-5xl md:text-7xl font-bold mb-6"
            delay={0.2}
            animationType="slideUp"
          />
          <SplitTextAnimation
            text="Experience smooth GPU-accelerated animations"
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
            delay={0.5}
            animationType="fadeIn"
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg">
              Get Started
            </MagneticButton>
            <Link 
              to="/"
              className="bg-transparent border-2 border-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Reveal Examples */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Scroll Reveal Animations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These elements animate in as you scroll down the page
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <ScrollReveal 
              key={item} 
              delay={index * 0.1}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <TiltCard>
                <h3 className="text-xl font-bold mb-3">Card {item}</h3>
                <p className="text-gray-300">
                  This card features both scroll reveal and tilt effects. 
                  Move your cursor over it to see the 3D tilt transformation.
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Text Animation Examples */}
      <div className="py-20 px-6 max-w-6xl mx-auto bg-gray-800/30">
        <div className="text-center mb-16">
          <SplitTextAnimation
            text="Text Animation Types"
            className="text-4xl font-bold mb-6"
            delay={0.1}
            animationType="slideUp"
          />
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Fade In Animation</h3>
            <SplitTextAnimation
              text="This text fades in word by word with a smooth transition"
              className="text-xl text-gray-300"
              delay={0.2}
              animationType="fadeIn"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Slide Up Animation</h3>
            <SplitTextAnimation
              text="Each word slides up into view with a staggered delay"
              className="text-xl text-gray-300"
              delay={0.2}
              animationType="slideUp"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Pop Animation</h3>
            <SplitTextAnimation
              text="Words pop into view with a spring-like effect"
              className="text-xl text-gray-300"
              delay={0.2}
              animationType="pop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationExamples;