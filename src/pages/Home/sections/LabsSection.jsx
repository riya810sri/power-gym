import { Button } from '../../../components/ui/Button';
import labsData from '../../../data/labs.json';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function LabsSection() {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/labs');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {labsData.title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {labsData.description}
        </motion.p>

        {/* Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Virtual Lab Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💡', label: 'Practical Insights' },
              { icon: '🌐', label: 'Realistic network simulations' },
              { icon: '⚡', label: 'Instant feedback and guidance' },
              { icon: '🛡️', label: 'Safe environment for experimentation' },
            ].map((feature, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="feature-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{feature.label}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            onClick={handleCTAClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            {labsData.cta}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
