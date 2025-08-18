import { motion } from "framer-motion";
import features from "../../../data/features.json";

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
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore why we are the top choice in cybersecurity training.
        </p>
      </div>

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
        ))}
      </div>
    </motion.section>
  );
}
