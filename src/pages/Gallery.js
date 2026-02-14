import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
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

  // Gallery data
  const galleryItems = [
    { id: 1, title: "Cardio Area", category: "equipment", image: "/cardio.jpg" },
    { id: 2, title: "Weight Lifting", category: "strength", image: "/weight.jpg" },
    { id: 3, title: "Group Class", category: "classes", image: "/group.jpg" },
    { id: 4, title: "Recovery Center", category: "recovery", image: "/recovery.jpg" },
    { id: 5, title: "Functional Training", category: "functional", image: "/fun.jpg" },
    { id: 6, title: "Trainer Session", category: "training", image: "/trainer.jpg" },
    { id: 7, title: "Nutrition Bar", category: "nutrition", image: "/nutrition.jpg" },
    { id: 8, title: "Locker Rooms", category: "amenities", image: "/locker.jpg" },
    { id: 9, title: "Yoga Studio", category: "classes", image: "/yoga.jpg" }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Gym Gallery</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-800 p-2 rounded-lg">
              {['all', 'equipment', 'strength', 'classes', 'recovery', 'functional', 'training', 'nutrition', 'amenities'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={slideUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-xl transition-all duration-300 border border-gray-700 cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-black w-full h-64 flex items-center justify-center text-gray-500 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover opacity-50" 
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="relative z-10 text-white font-bold text-xl">{item.title}</div>
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
            <h2 className="text-2xl font-bold text-white mb-6">Virtual Tour</h2>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 max-w-4xl mx-auto">
              <motion.div 
                className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-gray-500 mb-6 overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="absolute inset-0 bg-cover opacity-80" 
                  style={{ backgroundImage: "url('/virtual.jpg')" }}
                ></div>
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <p className="text-xl font-bold text-white">360° Virtual Tour</p>
                  <p className="text-gray-300 mb-4">Explore our facility from anywhere</p>
                  <motion.button 
                    className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:from-red-700 hover:to-orange-600 transition-all"
                    onClick={() => document.getElementById('virtualTourModal').classList.remove('hidden')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Virtual Tour
                  </motion.button>
                </div>
              </motion.div>
              <p className="text-gray-300">
                Take a virtual tour of our state-of-the-art facility to see our premium equipment, spacious workout areas, and amenities before visiting in person.
              </p>
            </div>
          </motion.div>
          
          {/* Virtual Tour Modal */}
          <div id="virtualTourModal" className="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-red-500/30 relative">
              <div className="p-4 bg-gradient-to-r from-red-600 to-orange-500 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">360° Virtual Tour</h3>
                <button 
                  className="text-white hover:text-gray-300"
                  onClick={() => document.getElementById('virtualTourModal').classList.add('hidden')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-white text-lg">Virtual Tour Video Player</p>
                    <p className="text-gray-400">Experience our gym facilities in 360°</p>
                  </div>
                </div>
                <div className="mt-4 text-gray-300">
                  <p>This virtual tour showcases our state-of-the-art facilities including:</p>
                  <ul className="list-disc list-inside mt-2 grid grid-cols-2 gap-2">
                    <li>Cardio and strength training zones</li>
                    <li>Group fitness studios</li>
                    <li>Free weights area</li>
                    <li>Recovery and relaxation spaces</li>
                    <li>Nutrition bar and hydration stations</li>
                    <li>Locker rooms and amenities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;