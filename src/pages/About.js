import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
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
    <div className="pt-20 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About PowerMax Gym</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center text-gray-300 text-lg mb-12"
            >
              <p className="mb-6">
                At PowerMax Gym, we believe in transforming not just bodies but lives. Our cutting-edge facility and expert trainers are here to guide you on your fitness journey with state-of-the-art equipment and personalized programs.
              </p>
              <p className="mb-6">
                Founded in 2010, PowerMax Gym has grown to become one of the premier fitness destinations in the city. Our mission is to provide a welcoming environment where everyone, regardless of their fitness level, can achieve their health and wellness goals.
              </p>
              <p>
                We pride ourselves on our community atmosphere, where members support each other and celebrate achievements together. Our team of certified trainers is dedicated to helping you reach your potential through customized workout plans and nutritional guidance.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
                <h3 className="text-xl font-bold text-white">Years Experience</h3>
                <p className="text-gray-300">Proven track record of success</p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">5000+</div>
                <h3 className="text-xl font-bold text-white">Happy Members</h3>
                <p className="text-gray-300">Transformed lives and bodies</p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                <h3 className="text-xl font-bold text-white">Open Access</h3>
                <p className="text-gray-300">Work out on your schedule</p>
              </motion.div>
            </div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Excellence</h3>
                  <p className="text-gray-300">We strive for excellence in everything we do, from our facilities to our service.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Community</h3>
                  <p className="text-gray-300">We foster a supportive community where everyone feels welcome.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Innovation</h3>
                  <p className="text-gray-300">We continuously update our equipment and programs to stay ahead.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Results</h3>
                  <p className="text-gray-300">We are committed to helping you achieve your fitness goals.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="py-8 text-center">
        <Link to="/membership">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-600 transition-all shadow-lg shadow-red-500/30"
          >
            Start Your Journey
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default About;