import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElement = ({ 
  children, 
  className = "",
  floatDistance = 20,
  floatDuration = 3,
  delay = 0,
  rotation = 0,
  scale = 1
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotate: 0, scale: scale }}
      animate={{ 
        y: [-floatDistance, floatDistance, -floatDistance],
        rotate: [0, rotation, 0],
        scale: [scale, scale * 1.05, scale]
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingIcon = ({ 
  icon, 
  className = "",
  floatDistance = 20,
  floatDuration = 3,
  delay = 0,
  rotation = 0,
  size = "text-4xl"
}) => {
  return (
    <FloatingElement 
      className={className}
      floatDistance={floatDistance}
      floatDuration={floatDuration}
      delay={delay}
      rotation={rotation}
      scale={1}
    >
      <div className={`${size} ${className}`}>
        {icon}
      </div>
    </FloatingElement>
  );
};

const FloatingElements = {
  FloatingElement,
  FloatingIcon
};

export default FloatingElements;