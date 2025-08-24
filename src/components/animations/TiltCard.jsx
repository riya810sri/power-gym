import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ 
  children, 
  className = "",
  tiltMax = 5,
  scale = 1.02,
  ...props
}) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * tiltMax;
    const rotateX = -((y - centerY) / centerY) * tiltMax;
    
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: transform.rotateX !== 0 || transform.rotateY !== 0 ? scale : 1
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        mass: 0.1
      }}
      style={{ 
        transformStyle: "preserve-3d",
        willChange: 'transform'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;