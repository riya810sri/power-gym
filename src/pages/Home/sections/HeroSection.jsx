import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

// Floating particle component
const FloatingParticle = ({ delay, duration, size, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Animated text component
const AnimatedText = ({ text, className = "" }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={`hero-title text-5xl md:text-7xl font-bold text-center mb-6 leading-tight ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Rocket animation component
const RocketAnimation = () => {
  return (
    <motion.div
      className="absolute top-1/4 right-10 w-16 h-16 z-20"
      initial={{ x: 100, y: 100, opacity: 0 }}
      animate={{ 
        x: [-100, window.innerWidth - 200],
        y: [100, -200],
        opacity: [0, 1, 1, 0],
        rotate: [0, 360]
      }}
      transition={{ 
        duration: 4,
        times: [0, 0.2, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut"
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10 L60 30 L50 25 L40 30 Z" fill="#E879F9" />
        <rect x="45" y="30" width="10" height="40" fill="#8B45C3" />
        <circle cx="50" cy="75" r="8" fill="#E879F9">
          <animate attributeName="r" values="8;12;8" dur="0.5s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Rocket trail */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2"
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0.5, 2, 0.5],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-2 h-8 bg-gradient-to-t from-purple-500 to-transparent rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

// Sparkle burst component
const SparkleBurst = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top: '30%', left: '20%' }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{ 
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 7,
      }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            transform: `rotate(${i * 45}deg) translateX(20px)`,
            origin: 'center',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: delay + i * 0.1,
          }}
        />
      ))}
      <motion.div
        className="w-4 h-4 bg-yellow-300 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          delay: delay,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

// Floating sparkle component
const FloatingSparkle = ({ delay, size, top, left }) => {
  return (
    <motion.div
      className={`absolute ${size} opacity-70`}
      style={{ top, left }}
      animate={{
        y: [0, -20, 0],
        x: [0, Math.random() * 30 - 15, 0],
        opacity: [0.3, 0.8, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
              stroke="url(#sparkleGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="sparkleGradient" x1="12" y1="2" x2="12" y2="21.02" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E879F9" />
            <stop offset="1" stopColor="#8B45C3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export function HeroSection() {
  const navigate = useNavigate();
  const controls = useAnimation();

  const handleGetStarted = () => {
    navigate('/courses');
  };

  // Animate the scroll indicator
  useEffect(() => {
    controls.start({
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <section className="hero-section min-h-screen flex flex-col justify-center items-center px-4 relative -mt-16 pt-16 overflow-hidden">
      {/* Animated background particles */}
      <FloatingParticle delay={0} duration={4} size="8px" color="bg-purple-500" />
      <FloatingParticle delay={1} duration={5} size="6px" color="bg-blue-400" />
      <FloatingParticle delay={2} duration={6} size="4px" color="bg-pink-500" />
      <FloatingParticle delay={3} duration={7} size="10px" color="bg-indigo-500" />
      <FloatingParticle delay={4} duration={8} size="5px" color="bg-cyan-400" />
      
      {/* Floating sparkles */}
      <FloatingSparkle delay={0} size="w-6 h-6" top="20%" left="10%" />
      <FloatingSparkle delay={1} size="w-4 h-4" top="70%" left="85%" />
      <FloatingSparkle delay={2} size="w-5 h-5" top="40%" left="80%" />
      <FloatingSparkle delay={3} size="w-3 h-3" top="80%" left="15%" />
      
      {/* Sparkle bursts */}
      <SparkleBurst delay={0} />
      <SparkleBurst delay={3.5} />
      
      {/* Rocket animation */}
      <RocketAnimation />
      
      {/* Introducing badge with entrance animation */}
      <motion.div 
        className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span 
          className="text-yellow-400 text-sm font-medium"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          ✨ Introducing Durbhasi Gurukulam
        </motion.span>
      </motion.div>

      {/* Main heading with letter-by-letter animation */}
      <AnimatedText text="Master Cybersecurity" className="text-white z-10" />
      
      {/* Animated gradient text */}
      <motion.h1 
        className="hero-title text-5xl md:text-7xl font-bold text-center mb-6 leading-tight z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient-x">
          Durbhasi Gurukulam
        </span>
      </motion.h1>

      {/* Subtitle with fade-in animation */}
      <motion.p 
        className="hero-subtitle text-lg md:text-xl text-center mb-12 leading-relaxed max-w-4xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Dive into our comprehensive video courses and become a cybersecurity expert.<br />
        Learn from industry professionals and stay ahead in the digital security landscape.
      </motion.p>

      {/* CTA Buttons with hover animations */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-4 items-center justify-center z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold relative overflow-hidden"
          >
            <motion.span
              className="relative z-10"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get Started
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>

        <motion.button
          className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 transition-colors font-semibold relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(139, 92, 246, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="bg-gradient-to-r from-gray-300 via-purple-300 to-gray-300 bg-clip-text text-transparent"
          >
            Our Commitment
          </motion.span>
        </motion.button>
      </div>

      {/* Scroll indicator with bounce animation */}
      <motion.div 
        className="absolute bottom-8 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={controls}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
        </motion.div>
        <motion.p 
          className="text-gray-500 text-sm mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </section>
  );
}