import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AdvancedSparkleAnimation from '../animations/AdvancedSparkleAnimation';
import { FloatingElement } from '../animations/FloatingElements';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Features', path: '/#features' },
    { name: 'Contact', path: 'https://durbhasigurukulam.com/contact' },
  ];

  const menuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  // Enhanced glow effect with dynamic colors
  const getGlowStyle = () => {
    const hue = (mousePosition.x / window.innerWidth) * 360;
    return {
      background: `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.8) 0%, hsla(${(hue + 30) % 360}, 80%, 50%, 0.6) 50%, transparent 70%)`,
      width: '400px',
      height: '400px',
      left: mousePosition.x - 200,
      top: mousePosition.y - 200,
      transition: 'left 0.1s ease-out, top 0.1s ease-out, background 0.5s ease-out'
    };
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-700 overflow-hidden ${
        scrolled 
          ? 'backdrop-blur-2xl py-2 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-b border-purple-500/30' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      {/* Enhanced Mouse Follower Glow with Dynamic Colors */}
      <motion.div 
        className="absolute pointer-events-none rounded-full blur-2xl opacity-30"
        style={getGlowStyle()}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <AdvancedSparkleAnimation 
          className="absolute inset-0 pointer-events-none" 
          sparkleCount={12}
          colors={["#8B5CF6", "#3B82F6", "#EC4899", "#7E22CE"]}
          shapes={['circle', 'diamond']}
        />
      </div>
      
      {/* Floating Particles with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
            style={{
              left: `${10 + i * 15}%`,
              top: '-10px'
            }}
            animate={{
              y: [0, 80 + i * 20, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo with Enhanced Parallax Animation */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => {}}
          >
            <Link to="/" className="flex items-center group">
              <FloatingElement 
                floatDistance={10} 
                floatDuration={4} 
                rotation={12}
              >
                <motion.div 
                  className="bg-gradient-to-br from-purple-600 to-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"
                  animate={{
                    boxShadow: [
                      '0 0 25px rgba(139, 92, 246, 0.7)',
                      '0 0 40px rgba(59, 130, 246, 0.9)',
                      '0 0 25px rgba(139, 92, 246, 0.7)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <motion.span 
                    className="text-white font-bold text-xl sm:text-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    D
                  </motion.span>
                </motion.div>
              </FloatingElement>
              <motion.span 
                className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundPosition: ['0% 50%', '100% 50%']
                }}
              >
                Durbhasi
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {link.path.startsWith('http') ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        (link.path === 'https://durbhasigurukulam.com/contact')
                          ? 'text-white font-bold'
                          : 'text-gray-200 hover:text-white'
                      } px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 relative group overflow-hidden`}
                    >
                      {/* Morphing Background Effect */}
                      <motion.span 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ 
                          background: [
                            'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(45deg, #3B82F6, #EC4899)',
                            'linear-gradient(45deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Animated Underline with Gradient Shift */}
                      <motion.span 
                        className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ 
                          scaleX: (link.path === 'https://durbhasigurukulam.com/contact') ? 1 : 0,
                          background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)'
                        }}
                        animate={{ 
                          scaleX: (link.path === 'https://durbhasigurukulam.com/contact') ? 1 : 0,
                          background: [
                            'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(90deg, #3B82F6, #EC4899)',
                            'linear-gradient(90deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        whileHover={{ 
                          scaleX: 1,
                          background: [
                            'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(90deg, #3B82F6, #EC4899)',
                            'linear-gradient(90deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        transition={{ 
                          duration: 0.3,
                          background: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }
                        }}
                      />
                      
                      {/* Enhanced Sparkle Effect on Hover */}
                      <AnimatePresence>
                        {link.path === 'https://durbhasigurukulam.com/contact' && (
                          <motion.span
                            className="absolute inset-0 rounded-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            {[...Array(4)].map((_, i) => (
                              <motion.span
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                style={{
                                  left: `${15 + i * 20}%`,
                                  top: '50%'
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                  y: [0, -25, -50],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`${
                        (link.path === '/courses' && location.pathname.startsWith('/courses')) ||
                        (link.path === '/#features' && location.hash === '#features')
                          ? 'text-white font-bold'
                          : 'text-gray-200 hover:text-white'
                      } px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 relative group overflow-hidden`}
                    >
                      {/* Morphing Background Effect */}
                      <motion.span 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ 
                          background: [
                            'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(45deg, #3B82F6, #EC4899)',
                            'linear-gradient(45deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Animated Underline with Gradient Shift */}
                      <motion.span 
                        className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ 
                          scaleX: (
                            (link.path === '/courses' && location.pathname.startsWith('/courses')) ||
                            (link.path === '/#features' && location.hash === '#features')
                          ) ? 1 : 0,
                          background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)'
                        }}
                        animate={{ 
                          scaleX: (
                            (link.path === '/courses' && location.pathname.startsWith('/courses')) ||
                            (link.path === '/#features' && location.hash === '#features')
                          ) ? 1 : 0,
                          background: [
                            'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(90deg, #3B82F6, #EC4899)',
                            'linear-gradient(90deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        whileHover={{ 
                          scaleX: 1,
                          background: [
                            'linear-gradient(90deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(90deg, #3B82F6, #EC4899)',
                            'linear-gradient(90deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        transition={{ 
                          duration: 0.3,
                          background: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }
                        }}
                      />
                      
                      {/* Enhanced Sparkle Effect on Hover/Active */}
                      <AnimatePresence>
                        {((link.path === '/courses' && location.pathname.startsWith('/courses')) ||
                          (link.path === '/#features' && location.hash === '#features')) && (
                          <motion.span
                            className="absolute inset-0 rounded-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            {[...Array(4)].map((_, i) => (
                              <motion.span
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                style={{
                                  left: `${15 + i * 20}%`,
                                  top: '50%'
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                  y: [0, -25, -50],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button with Enhanced Animation */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ 
                  background: [
                    'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                    'linear-gradient(45deg, #3B82F6, #EC4899)',
                    'linear-gradient(45deg, #EC4899, #8B5CF6)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              {/* Hamburger Icon with Morphing Effect */}
              <motion.svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-7 w-7 relative z-10`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ 
                  stroke: '#8B5CF6',
                  strokeWidth: 2.5
                }}
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                  animate={{
                    pathLength: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.svg>
              {/* Close Icon with Rotation Effect */}
              <motion.svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-7 w-7 relative z-10`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ 
                  stroke: '#EC4899',
                  strokeWidth: 2.5
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu with Unique Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden backdrop-blur-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-t border-purple-500/30"
          >
            <motion.div 
              className="px-4 pt-6 pb-8 space-y-3 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  {link.path.startsWith('http') ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        (link.path === 'https://durbhasigurukulam.com/contact')
                          ? 'text-white font-bold bg-gradient-to-r from-purple-600/40 to-blue-600/40'
                          : 'text-gray-200 hover:bg-white/10 hover:text-white'
                      } block px-5 py-3 sm:px-6 sm:py-4 rounded-2xl text-base font-medium transition-all duration-300 relative overflow-hidden group`}
                    >
                      {/* Animated Background */}
                      <motion.span
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ 
                          background: [
                            'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(45deg, #3B82F6, #EC4899)',
                            'linear-gradient(45deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      {/* Content */}
                      <span className="relative z-10 flex items-center">
                        {link.name}
                        <motion.span 
                          className="ml-2"
                          animate={{ 
                            x: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`${
                        (link.path === '/courses' && location.pathname.startsWith('/courses')) ||
                        (link.path === '/#features' && location.hash === '#features')
                          ? 'text-white font-bold bg-gradient-to-r from-purple-600/40 to-blue-600/40'
                          : 'text-gray-200 hover:bg-white/10 hover:text-white'
                      } block px-5 py-3 sm:px-6 sm:py-4 rounded-2xl text-base font-medium transition-all duration-300 relative overflow-hidden group`}
                    >
                      {/* Animated Background */}
                      <motion.span
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ 
                          background: [
                            'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                            'linear-gradient(45deg, #3B82F6, #EC4899)',
                            'linear-gradient(45deg, #EC4899, #8B5CF6)'
                          ]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      {/* Content */}
                      <span className="relative z-10 flex items-center">
                        {link.name}
                        <motion.span 
                          className="ml-2"
                          animate={{ 
                            x: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;