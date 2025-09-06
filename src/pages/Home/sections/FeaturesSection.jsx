import { motion, LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState, memo, useMemo } from "react";
import { lazy, Suspense } from 'react';
import { useInView } from "react-intersection-observer";
import features from "../../../data/features.json";

// Lazy load components for better performance
const SparkleAnimation = lazy(() => import('../../../components/ui/SparkleAnimation'));

// Constants for animations to prevent recreating objects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Optimized animated icon component
const AnimatedIcon = memo(({ icon, index, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="mb-6 text-4xl"
      variants={variants}
      animate={isHovered ? "hover" : "idle"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="img"
      aria-label={`${title} feature icon: ${icon || "Secure lock"}`}
      style={{ 
        willChange: "transform",
        backfaceVisibility: "hidden"
      }}
    >
      {icon || "🔒"}
    </motion.div>
  )
});

// Progress bar component for features
const AnimatedProgressBar = memo(({ delay }) => {
  return (
    <motion.div
      className="h-1 bg-gray-700 rounded-full overflow-hidden mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.5 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 1.5,
          delay: delay + 0.7,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
});

// Optimized feature card component
const FeatureCard = memo(({ item, index }) => {
  return (
    <motion.article
      key={item.id}
      variants={itemVariants}
      className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group transition-all duration-300 relative overflow-hidden"
      whileHover={{ 
        y: -10,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      style={{ 
        willChange: "transform",
        transform: "translate3d(0,0,0)"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Optimized corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
      />
      
      {/* Optimized icon with accessibility */}
      <AnimatedIcon icon={item.icon} index={index} title={item.title} />
      
      <h3 
        className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors"
        id={`feature-${item.id}-title`}
      >
        {item.title}
      </h3>
      
      <p 
        className="text-gray-400 leading-relaxed"
        aria-labelledby={`feature-${item.id}-title`}
      >
        {item.description}
      </p>
      
      <div 
        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        role="presentation"
      />
    </motion.article>
  );
});

FeatureCard.displayName = 'FeatureCard';

export function FeaturesSection() {
  // Memoize the features data
  const featuresData = useMemo(() => features, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        id="features"
        className="section-dark py-12 sm:py-16 md:py-20 px-2 sm:px-4 w-full max-w-7xl mx-auto relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Sparkle Animation Background */}
        <SparkleAnimation count={15} className="opacity-20" />
        
        <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10 max-w-full overflow-hidden">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white px-2 sm:px-4 break-words mx-auto max-w-[90%] sm:max-w-[95%] md:max-w-full"
            variants={itemVariants}
          >
            <span className="inline-block">Why Choose</span>
            <br className="sm:hidden" />
            <span className="inline-block">Durbhasi Gurukulam?</span>
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg text-gray-400 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-4"
            variants={itemVariants}
          >
            Explore why we are the top choice in cybersecurity training.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 px-2 sm:px-4">
          {featuresData.map((item, index) => (
            <FeatureCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.section>
    </LazyMotion>
  );
}

export default memo(FeaturesSection);