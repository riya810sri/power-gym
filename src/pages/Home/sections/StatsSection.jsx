import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animated counter component
const AnimatedCounter = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60); // 60fps

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <motion.div
        className="text-5xl font-bold text-purple-400 mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {count}+
      </motion.div>
      <motion.div
        className="text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
    </div>
  );
};

// Floating element component
const FloatingElement = ({ delay, size, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-20`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export function StatsSection() {
  const stats = [
    { end: 1500, duration: 3, label: "Students Trained" },
    { end: 50, duration: 3, label: "Expert Instructors" },
    { end: 95, duration: 3, label: "Success Rate %" },
    { end: 24, duration: 3, label: "Course Hours" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElement delay={0} size="60px" color="bg-purple-500" />
      <FloatingElement delay={1} size="40px" color="bg-pink-500" />
      <FloatingElement delay={2} size="80px" color="bg-blue-500" />
      <FloatingElement delay={3} size="50px" color="bg-indigo-500" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the measurable results of our cybersecurity training programs
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
            >
              <AnimatedCounter 
                end={stat.end} 
                duration={stat.duration} 
                label={stat.label} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;