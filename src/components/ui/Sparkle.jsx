import React, { useState, useEffect } from 'react';

const Sparkle = ({ size = 12, color = '#e879f9', delay = 0 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div 
      className="absolute animate-ping"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: '50%',
        opacity: 0.7,
        animationDuration: '1.5s',
        animationIterationCount: 'infinite'
      }}
    />
  );
};

export default Sparkle;