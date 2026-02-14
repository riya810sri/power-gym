import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Trainers = () => {
  // Animation variants
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Trainers data
  const trainers = [
    { id: 1, name: "Alex Morgan", specialty: "Strength Training", experience: "8 years", bio: "Specializes in building muscle mass and increasing strength through progressive overload techniques.", image: "/trainer.jpg" },
    { id: 2, name: "Jessica Stone", specialty: "Cardio & Conditioning", experience: "6 years", bio: "Expert in cardiovascular fitness and conditioning programs for all levels.", image: "/cardio1.jpg" },
    { id: 3, name: "Marcus Johnson", specialty: "Nutrition Specialist", experience: "10 years", bio: "Certified nutritionist who creates personalized meal plans to complement your fitness goals.", image: "/specilist.jpg" },
    { id: 4, name: "Sophia Lee", specialty: "Yoga & Flexibility", experience: "5 years", bio: "Focuses on flexibility, balance, and mental well-being through yoga and mobility work.", image: "/yogic.jpg" },
    { id: 5, name: "David Chen", specialty: "Functional Training", experience: "7 years", bio: "Specializes in movement patterns that improve daily life activities and athletic performance.", image: "/fun.jpg" },
    { id: 6, name: "Maria Rodriguez", specialty: "Group Fitness", experience: "9 years", bio: "Leads high-energy group classes that make fitness fun and engaging.", image: "/group1.jpg" }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Elite Trainers</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {trainers.map((trainer) => (
              <motion.div
                key={trainer.id}
                variants={slideUp}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-700 shadow-xl"
              >
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 w-full h-64 flex items-center justify-center text-gray-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover opacity-70" style={{ backgroundImage: `url(${trainer.image})` }}></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-red-500 font-semibold">{trainer.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-2">{trainer.experience} experience</p>
                  <p className="text-gray-400">{trainer.bio}</p>
                  <div className="mt-4">
                    <Link to="/contact">
                      <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded-lg font-bold hover:from-red-700 hover:to-orange-600 transition-all">
                        Book Session
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Why Train With Our Experts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="text-red-500 text-3xl mb-3">✓</div>
                <h3 className="text-lg font-bold text-white mb-2">Personalized Programs</h3>
                <p className="text-gray-300">Custom workout plans tailored to your goals and fitness level.</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="text-red-500 text-3xl mb-3">✓</div>
                <h3 className="text-lg font-bold text-white mb-2">Correct Form</h3>
                <p className="text-gray-300">Learn proper technique to maximize results and prevent injury.</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="text-red-500 text-3xl mb-3">✓</div>
                <h3 className="text-lg font-bold text-white mb-2">Motivation</h3>
                <p className="text-gray-300">Stay accountable and motivated to reach your goals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;