import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/courses');
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <footer id="contact" className="footer bg-black">
      {/* Call to Action Section */}
      <motion.div
        className="py-20 px-4 text-center border-b border-gray-800"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeUp}
          >
            Ready to Start Your Cybersecurity Journey?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Join thousands of students who have already taken the first step towards a rewarding career in cybersecurity.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button
              onClick={handleGetStarted}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Get Started
            </Button>
          </motion.div>
          <motion.p
            className="text-sm text-gray-500 mt-4"
            variants={fadeUp}
          >
            By signing up, you agree to our{" "}
            <a
              href="https://durbhasigurukulam.com/terms-of-service"
              className="text-purple-400 hover:text-purple-300"
            >
              Terms & Conditions
            </a>
          </motion.p>
        </div>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="https://durbhasigurukulam.com/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="https://durbhasigurukulam.com/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="https://durbhasigurukulam.com/refund-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Refund</a></li>
              <li><a href="https://durbhasigurukulam.com/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Phone: +91 7852034945</li>
              <li className="text-gray-400 text-sm">Email: support@durbhasigurukulam.com</li>
              <li className="text-gray-400 text-sm">349, Budh vihar, pal, jodhpur, rajasthan, india</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          variants={fadeUp}
        >
          <p className="text-gray-400 text-sm">© 2025 DURBHASI GURUKULAM PRIVATE LIMITED</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
