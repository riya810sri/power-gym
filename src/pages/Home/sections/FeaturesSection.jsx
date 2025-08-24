<<<<<<< HEAD
import features from '../../../data/features.json';
import SparkleAnimation from '../../../components/ui/SparkleAnimation';
=======
import { motion } from "framer-motion";
import features from "../../../data/features.json";
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1

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
<<<<<<< HEAD
    <section id="features" className="section-dark py-20 px-4 max-w-7xl mx-auto relative">
      {/* Sparkle Animation Background */}
      <SparkleAnimation count={10} className="opacity-30" />
      
      <div data-aos="fade-up" className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Durbhasi Gurukulam?</h2>
=======
    <motion.section
      id="features"
      className="section-dark py-20 px-4 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // triggers on scroll
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Why Choose Durbhasi Gurukulam?
        </h2>
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore why we are the top choice in cybersecurity training.
        </p>
      </div>
<<<<<<< HEAD
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((item, index) => (
          <div 
            key={item.id} 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
            data-aos-duration="1000"
            className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            {/* Small sparkle effect on hover */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div 
              data-aos="zoom-in" 
              data-aos-delay={index * 50 + 200}
              className="mb-6 text-4xl"
            >
              {item.icon || "🔒"}
            </div>
            <h3 
              data-aos="fade-right" 
              data-aos-delay={index * 50 + 300}
              className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors"
            >
              {item.title}
            </h3>
            <p 
              data-aos="fade-left" 
              data-aos-delay={index * 50 + 400}
              className="text-gray-400 leading-relaxed"
            >
              {item.description}
            </p>
          </div>
=======

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="mb-6 text-4xl">{item.icon || "🔒"}</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </motion.div>
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
        ))}
      </div>
    </motion.section>
  );
}
