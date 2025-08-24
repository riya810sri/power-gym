import React, { useEffect, useState } from 'react';

const SparkleAnimation = ({ count = 15, className = "", intensity = "medium" }) => {
  const [sparkles, setSparkles] = useState([]);
  
  // Adjust sparkle properties based on intensity
  const intensitySettings = {
    low: { minSize: 2, maxSize: 6, minDuration: 1000, maxDuration: 3000 },
    medium: { minSize: 4, maxSize: 12, minDuration: 1500, maxDuration: 4000 },
    high: { minSize: 6, maxSize: 16, minDuration: 2000, maxDuration: 5000 }
  };
  
  const settings = intensitySettings[intensity] || intensitySettings.medium;

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < count; i++) {
        // Random position with clustering towards center for more visual impact
        const isCenterCluster = Math.random() > 0.3;
        const top = isCenterCluster 
          ? `${50 + (Math.random() - 0.5) * 60}%` 
          : `${Math.random() * 100}%`;
        const left = isCenterCluster 
          ? `${50 + (Math.random() - 0.5) * 60}%` 
          : `${Math.random() * 100}%`;
          
        newSparkles.push({
          id: i,
          size: Math.floor(Math.random() * (settings.maxSize - settings.minSize)) + settings.minSize,
          color: ['#e879f9', '#8b45c3', '#5b21b6', '#c084fc', '#a855f7', '#d946ef'][Math.floor(Math.random() * 6)],
          top,
          left,
          animationDuration: `${(Math.random() * (settings.maxDuration - settings.minDuration) + settings.minDuration) / 1000}s`,
          animationDelay: `${Math.random() * 2}s`,
          opacity: Math.random() * 0.8 + 0.2 // Between 0.2 and 1.0
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    
    // Regenerate sparkles periodically for continuous effect
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, [count, intensity, settings.maxSize, settings.minSize, settings.maxDuration, settings.minDuration]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute sparkle-element"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            borderRadius: '50%',
            opacity: sparkle.opacity,
            animation: `sparkle-glow ${sparkle.animationDuration} ${sparkle.animationDelay} infinite`,
            boxShadow: `0 0 ${sparkle.size/2}px ${sparkle.size/4}px ${sparkle.color}40`
          }}
        >
          {/* Add a subtle glow effect */}
          <div 
            className="absolute inset-0 rounded-full blur-[1px]"
            style={{
              backgroundColor: sparkle.color,
              opacity: 0.7
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SparkleAnimation;