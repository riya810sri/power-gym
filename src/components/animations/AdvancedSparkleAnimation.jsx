import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const AdvancedSparkle = ({ id, x, y, color, delay, size, shape = 'circle' }) => {
  const renderShape = () => {
    const style = {
      left: x,
      top: y,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px ${color}`,
    };

    switch (shape) {
      case 'circle':
        return (
          <motion.div
            key={id}
            className="absolute rounded-full pointer-events-none"
            style={style}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut"
            }}
          />
        );
      case 'square':
        return (
          <motion.div
            key={id}
            className="absolute pointer-events-none"
            style={style}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 90, 180],
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut"
            }}
          />
        );
      case 'diamond':
        return (
          <motion.div
            key={id}
            className="absolute pointer-events-none"
            style={{
              ...style,
              transform: 'rotate(45deg)',
            }}
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [45, 135, 225],
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut"
            }}
          />
        );
      default:
        return (
          <motion.div
            key={id}
            className="absolute rounded-full pointer-events-none"
            style={style}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut"
            }}
          />
        );
    }
  };

  return renderShape();
};

const AdvancedSparkleAnimation = ({ 
  children, 
  className = "",
  sparkleCount = 20,
  colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#FF9F1C", "#6A0572", "#1A936F"],
  shapes = ['circle', 'square', 'diamond']
}) => {
  const [sparkles, setSparkles] = useState([]);

  const generateSparkles = useCallback(() => {
    const newSparkles = [];
    
    for (let i = 0; i < sparkleCount; i++) {
      newSparkles.push({
        id: Math.random(),
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        size: Math.floor(Math.random() * 6) + 4, // Random size between 4-10px
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
    
    setSparkles(newSparkles);
  }, [sparkleCount, colors, shapes]);

  useEffect(() => {
    generateSparkles();
    const interval = setInterval(generateSparkles, 2500);
    return () => clearInterval(interval);
  }, [generateSparkles]);

  return (
    <div className={`relative ${className}`}>
      {sparkles.map((sparkle) => (
        <AdvancedSparkle
          key={sparkle.id}
          id={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          color={sparkle.color}
          delay={sparkle.delay}
          size={sparkle.size}
          shape={sparkle.shape}
        />
      ))}
      {children}
    </div>
  );
};

export default AdvancedSparkleAnimation;