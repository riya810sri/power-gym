import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ children, className = '', delay = 0.2 }) => {
  // Ensure children is a string and split the text into lines
  const text = typeof children === 'string' ? children : (children || '').toString();
  const lines = text.split('\n');
  
  // Make sure we have at least 2 lines
  if (lines.length < 2) {
    return (
      <motion.h1
        className={className}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          type: "spring",
          stiffness: 80,
          damping: 12
        }}
      >
        {text}
      </motion.h1>
    );
  }
  
  // Split the second line to highlight "Durbhasi Gurukulam"
  const secondLineParts = lines[1].split('with ');
  
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.span
        className="block"
        variants={{
          hidden: { opacity: 0, y: 30, rotateX: -90 },
          visible: { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            transition: {
              duration: 0.8,
              delay: delay,
              type: "spring",
              stiffness: 80,
              damping: 12
            }
          }
        }}
      >
        {lines[0]}
      </motion.span>
      
      <motion.span
        className="block"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: delay + 0.2,
              type: "spring",
              stiffness: 80,
              damping: 12
            }
          }
        }}
      >
        {secondLineParts[0]}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block"
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            backgroundPosition: "0% 50%"
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            backgroundPosition: "100% 50%"
          }}
          transition={{
            duration: 1,
            delay: delay + 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          {secondLineParts[1] || 'Durbhasi Gurukulam'}
        </motion.span>
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedHeading;