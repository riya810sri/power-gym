import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-red-600">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
        >
          PowerMax Gym
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`capitalize ${isActive('/') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`capitalize ${isActive('/about') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/trainers" 
            className={`capitalize ${isActive('/trainers') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Trainers
          </Link>
          <Link 
            to="/facilities" 
            className={`capitalize ${isActive('/facilities') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Facilities
          </Link>
          <Link 
            to="/gallery" 
            className={`capitalize ${isActive('/gallery') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/membership" 
            className={`capitalize ${isActive('/membership') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Membership
          </Link>
          <Link 
            to="/contact" 
            className={`capitalize ${isActive('/contact') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-sm border-t border-red-600"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`capitalize py-2 ${isActive('/') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`capitalize py-2 ${isActive('/about') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/trainers" 
              className={`capitalize py-2 ${isActive('/trainers') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trainers
            </Link>
            <Link 
              to="/facilities" 
              className={`capitalize py-2 ${isActive('/facilities') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link 
              to="/gallery" 
              className={`capitalize py-2 ${isActive('/gallery') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/membership" 
              className={`capitalize py-2 ${isActive('/membership') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              to="/contact" 
              className={`capitalize py-2 ${isActive('/contact') ? 'text-red-500 font-bold' : 'text-gray-300'} hover:text-red-400 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;