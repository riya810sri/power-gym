import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} PowerMax Gym. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Transform your body, transform your life</p>
      </div>
    </footer>
  );
};

export default Footer;