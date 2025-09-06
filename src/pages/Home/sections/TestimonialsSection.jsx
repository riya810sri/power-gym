import { motion } from "framer-motion";
import testimonials from "../../../data/testimonials.json";

// Animated quote icon
const AnimatedQuoteIcon = () => {
  return (
    <motion.div
      className="text-5xl text-purple-500 opacity-20 absolute top-4 left-4"
      initial={{ rotate: -10, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 0.2 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      "
    </motion.div>
  );
};

// Animated avatar with border animation
const AnimatedAvatar = ({ name }) => {
  return (
    <motion.div 
      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg relative"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
        {name?.charAt(0) || "U"}
      </div>
    </motion.div>
  );
};

export function TestimonialsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="reviews"
      className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-32 w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Success Stories from Our Learners
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          See How Durbhasi Gurukulam is Shaping the Future of Cybersecurity Career
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {testimonials.map((review, index) => (
          <motion.div
            key={review.id}
            variants={cardVariants}
            className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(139, 69, 195, 0.3)",
            }}
          >
            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <AnimatedQuoteIcon />
            
            <div className="flex items-center mb-6 relative z-10">
              <AnimatedAvatar name={review.name} />
              <div>
                <motion.h4 
                  className="font-bold text-white text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {review.name}
                </motion.h4>
                <motion.p 
                  className="text-purple-400 text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {review.role}
                </motion.p>
              </div>
            </div>
            
            <motion.blockquote 
              className="text-gray-300 leading-relaxed mb-6 text-lg relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              "{review.comment}"
            </motion.blockquote>
            
            {/* Animated rating stars */}
            <motion.div 
              className="flex space-x-1 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                >
                  ★
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}