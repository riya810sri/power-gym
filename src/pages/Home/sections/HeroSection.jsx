import { Button } from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import SparkleAnimation from '../../../components/ui/SparkleAnimation';
import AnimatedHeading from '../../../components/ui/AnimatedHeading';

export function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/courses'); // or '/login' or wherever you want to go
  };
  
  return (
    <section className="hero-section min-h-screen flex flex-col justify-center items-center px-4 relative -mt-16 pt-16 overflow-hidden">
      {/* Enhanced Sparkle Animation Background */}
      <SparkleAnimation count={30} intensity="high" />
      
      {/* Floating Particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Background decorative elements with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-32 left-10 w-2 h-2 bg-purple-500 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full"
      />
      
      {/* Introducing badge with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2,
          type: "spring",
          stiffness: 150,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 relative z-10 shadow-lg shadow-yellow-500/20"
      >
        <motion.span 
          className="text-yellow-400 text-sm font-medium"
          animate={{ 
            textShadow: [
              "0 0 0px rgba(255, 255, 0, 0)",
              "0 0 8px rgba(255, 255, 0, 0.5)",
              "0 0 0px rgba(255, 255, 0, 0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          ✨ Introducing Durbhasi Gurukulam
        </motion.span>
      </motion.div>

      {/* Main heading with enhanced animation */}
      <AnimatedHeading 
        className="hero-title text-5xl md:text-7xl font-bold text-center mb-6 leading-tight relative z-10"
        delay={0.4}
      >
        Master Cybersecurity
        with Durbhasi Gurukulam
      </AnimatedHeading>

      {/* Subtitle with enhanced animation */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="hero-subtitle text-lg md:text-xl text-center mb-12 leading-relaxed max-w-4xl relative z-10"
      >
        Dive into our comprehensive video courses and become a cybersecurity expert.
        Learn from industry professionals and stay ahead in the digital security landscape.
      </motion.p>

      {/* CTA Buttons with enhanced animations */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4 mb-16 mt-4 items-center justify-center relative z-10"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(139, 69, 195, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            onClick={handleGetStarted}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>

        <motion.button 
          className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 transition-colors font-semibold relative overflow-hidden group"
          whileHover={{ 
            scale: 1.05,
            borderColor: "#a855f7",
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10">Our Commitment</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-8 flex flex-col items-center relative z-10"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-gray-500 rounded-full mt-2"
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <motion.span
          className="text-xs text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Scroll
        </motion.span>
      </motion.div>
     
    </section>
  );
}