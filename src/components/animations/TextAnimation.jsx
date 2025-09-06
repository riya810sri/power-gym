import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ 
  text, 
  className = "",
  delay = 0,
  duration = 0.05,
  variants = null,
  animateOnScroll = true
}) => {
  const words = text.split(" ");
  
  // Default variants if none provided
  const defaultVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * duration + delay },
    }),
  };
  
  const animationVariants = variants || defaultVariants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateOnScroll ? "hidden" : "visible"}
      whileInView="visible"
      viewport={animateOnScroll ? { once: false, amount: 0.3 } : undefined}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={animationVariants}
          custom={i}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AnimatedLetters = ({ 
  text, 
  className = "",
  delay = 0,
  duration = 0.03,
  variants = null,
  animateOnScroll = true
}) => {
  const letters = text.split("");
  
  // Default variants if none provided
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * duration + delay },
    }),
  };
  
  const animationVariants = variants || defaultVariants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateOnScroll ? "hidden" : "visible"}
      whileInView="visible"
      viewport={animateOnScroll ? { once: false, amount: 0.3 } : undefined}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={animationVariants}
          custom={i}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const TextAnimation = { AnimatedText, AnimatedLetters };

export default TextAnimation;