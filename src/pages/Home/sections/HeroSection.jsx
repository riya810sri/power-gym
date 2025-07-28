import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Button } from '../../../components/ui/Button';

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Animate every time it enters view
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <motion.section
      ref={ref}
      className="hero-section min-h-screen flex flex-col justify-center items-center px-4 relative -mt-16 pt-16 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      {/* Floating Background Blob */}
      <motion.div
        className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600 to-pink-400 rounded-full filter blur-3xl opacity-30 z-[-1]"
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Background sparkles */}
      <motion.div
        className="absolute top-32 left-10 w-2 h-2 bg-purple-500 rounded-full shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full shadow-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Flickering Badge */}
      <motion.div
        className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 shadow-md"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.8, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-yellow-400 text-sm font-medium">✨ Introducing Vulnhut</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="hero-title text-5xl md:text-7xl font-bold text-center mb-6 leading-tight"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        {['Master', 'Cybersecurity', 'with'].map((word, index) => (
          <motion.span key={index} className="inline-block mr-2" variants={wordVariants}>
            {word}
          </motion.span>
        ))}
        <motion.span
          variants={wordVariants}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Vulnhut
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="hero-subtitle text-lg md:text-xl text-center mb-12 leading-relaxed max-w-4xl relative group"
        variants={wordVariants}
      >
        <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all group-hover:after:w-full">
          Dive into our comprehensive video courses and become a cybersecurity expert.
        </span>
        <br />
        Learn from industry professionals and stay ahead in the digital security landscape.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-16 mt-4 items-center justify-center"
        variants={wordVariants}
      >
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          <Button
            onClick={handleGetStarted}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Button>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-colors font-semibold"
        >
          Our Commitment
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center"
        variants={wordVariants}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-500 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
