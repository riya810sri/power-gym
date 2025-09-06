import React, { useRef, useEffect, useState } from 'react';
import AdvancedSparkleAnimation from '../animations/AdvancedSparkleAnimation';
import { motion } from 'framer-motion';

export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="footer bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-lg border-t border-purple-500/20 relative overflow-hidden"
    >
      {/* Mouse Follower Glow */}
      <div 
        className="absolute pointer-events-none rounded-full blur-2xl opacity-15 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)',
          width: '400px',
          height: '400px',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transition: 'left 0.2s ease-out, top 0.2s ease-out'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <AdvancedSparkleAnimation 
          className="absolute inset-0 pointer-events-none" 
          sparkleCount={25}
          colors={["#8B5CF6", "#3B82F6", "#7E22CE", "#EC4899"]}
          shapes={['circle', 'diamond']}
        />
      </div>
      
      {/* Floating Orbs - hidden on small screens */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000 hidden sm:block"></div>
      
      {/* Pulsing Circles - reduced size on small screens */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-purple-500/30 animate-ping hidden sm:block"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-blue-500/20 animate-ping delay-1000 hidden sm:block"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand Section with Enhanced Styling */}
          <div className="col-span-1">
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl sm:text-2xl">D</span>
              </div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Durbhasi
              </h2>
            </motion.div>
            <motion.p 
              className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Empowering learners with quality education for the digital age. Transforming careers through expert-led courses.
            </motion.p>
            <motion.div 
              className="flex space-x-3 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="https://twitter.com" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/durbhasi-gurukulam/" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </motion.div>
          </div>
          
          {/* Useful Links with Enhanced Styling */}
          <div>
            <motion.h3 
              className="text-white font-bold mb-5 sm:mb-6 text-lg sm:text-xl relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Useful Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            </motion.h3>
            <ul className="space-y-2 sm:space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a 
                  href="https://durbhasigurukulam.com/about" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 group-hover:animate-ping"></span>
                  <span className="group-hover:ml-1 transition-all duration-300">About</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="https://durbhasigurukulam.com/terms-of-service" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 group-hover:animate-ping"></span>
                  <span className="group-hover:ml-1 transition-all duration-300">Terms of Service</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="https://durbhasigurukulam.com/refund-policy" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 group-hover:animate-ping"></span>
                  <span className="group-hover:ml-1 transition-all duration-300">Refund Policy</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a 
                  href="https://durbhasigurukulam.com/contact" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center group"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 group-hover:animate-ping"></span>
                  <span className="group-hover:ml-1 transition-all duration-300">Contact Us</span>
                </a>
              </motion.li>
            </ul>
          </div>
          
          {/* Contact & Info with Enhanced Styling */}
          <div>
            <motion.h3 
              className="text-white font-bold mb-5 sm:mb-6 text-lg sm:text-xl relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get In Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            </motion.h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-purple-600 transition-all duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-xs sm:text-sm">Email</h4>
                  <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">support@durbhasigurukulam.com</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-blue-600 transition-all duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-xs sm:text-sm">Phone</h4>
                  <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">+91 7852034945</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-indigo-600 transition-all duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-xs sm:text-sm">Address</h4>
                  <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">349, Budh vihar, pal, jodhpur, rajasthan, india</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Copyright with Enhanced Styling */}
        <motion.div 
          className="border-t border-gray-700/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} <span className="text-purple-400">DURBHASI GURUKULAM PRIVATE LIMITED</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;