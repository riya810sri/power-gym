import React from 'react';
import { motion } from 'framer-motion';

const SplitTextAnimation = ({ 
  text, 
  className = "",
  delay = 0,
  duration = 0.02,
  stagger = 0.01,
  animationType = "fadeIn" // fadeIn, slideUp, pop
}) => {
  const words = text.split(" ");
  
  const getAnimationVariants = () => {
    switch(animationType) {
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: delay + i * stagger, duration: duration }
          })
        };
      case 'pop':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { 
              delay: delay + i * stagger, 
              duration: duration,
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          })
        };
      default: // fadeIn
        return {
          hidden: { opacity: 0 },
          visible: (i) => ({
            opacity: 1,
            transition: { delay: delay + i * stagger, duration: duration }
          })
        };
    }
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger
      }
    }
  };

  const animationVariants = getAnimationVariants();

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ willChange: 'transform' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={animationVariants}
          custom={i}
          className="inline-block mr-2"
          style={{ willChange: 'transform' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitTextAnimation;