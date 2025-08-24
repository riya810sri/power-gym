import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ id, x, y, color, delay, size }) => {
  return (
    <motion.div
      key={id}
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${size / 2}px ${color}`,
      }}
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
};

const SparkleAnimation = ({ children, className = "" }) => {
  const [sparkles, setSparkles] = useState([]);

  const colors = [
    "#FFD700", // Gold
    "#FF6B6B", // Coral
    "#4ECDC4", // Turquoise
    "#FF9F1C", // Orange
    "#6A0572", // Purple
    "#1A936F", // Green
  ];

  const generateSparkles = () => {
    const newSparkles = [];
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
      newSparkles.push({
        id: Math.random(),
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        size: Math.floor(Math.random() * 6) + 4, // Random size between 4-10px
      });
    }
    
    setSparkles(newSparkles);
  };

  useEffect(() => {
    generateSparkles();
    const interval = setInterval(generateSparkles, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          id={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          color={sparkle.color}
          delay={sparkle.delay}
          size={sparkle.size}
        />
      ))}
      {children}
    </div>
  );
};

export default SparkleAnimation;