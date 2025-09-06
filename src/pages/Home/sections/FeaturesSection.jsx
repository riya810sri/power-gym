import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import features from "../../../data/features.json";
import SparkleAnimation from '../../../components/ui/SparkleAnimation';

// Animated icon component
const AnimatedIcon = ({ icon, index }) => {
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const sequence = async () => {
      await controls.start({ 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      });
      // Repeat the animation with a delay
      setTimeout(sequence, 3000 + index * 500);
    };
    
    sequence();
  }, [controls, index, isMounted]);

  if (!isMounted) {
    return (
      <div className="mb-6 text-4xl">
        {icon || "🔒"}
      </div>
    );
  }

  return (
    <motion.div
      className="mb-6 text-4xl"
      animate={controls}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      {icon || "🔒"}
    </motion.div>
  );
};

// Progress bar component for features
const AnimatedProgressBar = ({ delay }) => {
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
};

export function FeaturesSection() {
  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // delay between cards
    },
  };

  // Each card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="features"
      className="section-dark py-20 px-4 max-w-7xl mx-auto relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Sparkle Animation Background */}
      <SparkleAnimation count={15} className="opacity-20" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Durbhasi Gurukulam?
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore why we are the top choice in cybersecurity training.
        </motion.p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(139, 69, 195, 0.3)",
            }}
          >
            {/* Animated background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Corner accent element */}
            <motion.div
              className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            />
            
            {/* Animated icon */}
            <AnimatedIcon icon={item.icon} index={index} />
            
            <motion.h3 
              className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {item.description}
            </motion.p>
            
            {/* Animated progress bar */}
            <AnimatedProgressBar delay={index * 0.1} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FeaturesSection;