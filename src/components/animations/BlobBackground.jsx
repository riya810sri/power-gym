import React from 'react';
import { motion } from 'framer-motion';

const BlobBackground = ({ 
  className = "",
  color1 = "#8B5CF6", 
  color2 = "#3B82F6",
  color3 = "#7E22CE",
  size = "100%",
  blur = "60%",
  opacity = 0.3,
  animationDuration = 20
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full"
        style={{ 
          background: `radial-gradient(circle, ${color1}, transparent)`,
          filter: `blur(${blur})`,
          opacity: opacity,
          willChange: 'transform'
        }}
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1/4 h-1/4 rounded-full"
        style={{ 
          background: `radial-gradient(circle, ${color2}, transparent)`,
          filter: `blur(${blur})`,
          opacity: opacity,
          willChange: 'transform'
        }}
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 60, 0, -60, 0],
          scale: [1, 0.9, 1, 1.1, 1]
        }}
        transition={{
          duration: animationDuration + 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-1/5 h-1/5 rounded-full"
        style={{ 
          background: `radial-gradient(circle, ${color3}, transparent)`,
          filter: `blur(${blur})`,
          opacity: opacity,
          willChange: 'transform'
        }}
        animate={{
          x: [0, 70, 0, -70, 0],
          y: [0, -50, 0, 50, 0],
          scale: [1, 1.3, 1, 0.7, 1]
        }}
        transition={{
          duration: animationDuration + 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default BlobBackground;