import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              PowerMax Gym
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-6 text-white">Transform Your Body</p>
            <p className="text-xl mb-8 max-w-lg text-gray-300">Join us today and start your transformation journey with our expert trainers and world-class facilities.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/membership">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-600 transition-all shadow-lg shadow-red-500/30 w-full sm:w-auto"
                >
                  Join Now
                </motion.button>
              </Link>
              <Link to="/facilities">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-500 hover:text-white transition-all w-full sm:w-auto"
                >
                  View Facilities
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-black border-2 border-red-500/30 rounded-2xl w-80 h-80 md:w-96 md:h-96 flex items-center justify-center text-gray-500 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover opacity-30"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-white mb-2">POWER</div>
                  <div className="text-3xl font-bold text-red-500">MAX</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg font-bold transform rotate-6 shadow-lg shadow-red-500/30">
                OPEN 24/7
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose PowerMax?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">State-of-the-Art Equipment</h3>
              <p className="text-gray-300">Top-tier cardio and strength training equipment from leading manufacturers.</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Trainers</h3>
              <p className="text-gray-300">Certified professionals with years of experience to guide your fitness journey.</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Memberships</h3>
              <p className="text-gray-300">Various membership options to fit your lifestyle and fitness goals.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;