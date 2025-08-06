import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// You can define your features inline or import from JSON
const features = [
  {
    id: 1,
    icon: "🛡️",
    title: "Hands-On Labs",
    description: "Practice in real-world attack environments and improve your skills.",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Expert Instructors",
    description: "Learn from industry leaders and cybersecurity professionals.",
  },
  {
    id: 3,
    icon: "📈",
    title: "Progress Tracking",
    description: "Track your growth and set personalized learning goals.",
  },
  {
    id: 4,
    icon: "⚙️",
    title: "AI-Driven Insights",
    description: "Get personalized suggestions using AI-powered recommendations.",
  },
  {
    id: 5,
    icon: "🔒",
    title: "Real-World Projects",
    description: "Work on real challenges that simulate real-world cyberattacks.",
  },
  {
    id: 6,
    icon: "🚀",
    title: "Career Support",
    description: "Get mentorship, resume help, and job interview prep.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-dark py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background parallax animation blob */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-purple-700/20 blur-3xl rounded-full z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Vulnhut?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore why we are the top choice in cybersecurity training.
        </motion.p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((item, index) => (
          <Tilt
            key={item.id}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={1500}
          >
            <motion.div
              className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
