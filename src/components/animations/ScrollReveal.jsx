import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  variants = null,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  const controls = useAnimation();

  const defaultVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  const animationVariants = variants || defaultVariants;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      style={{ willChange: 'transform' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;