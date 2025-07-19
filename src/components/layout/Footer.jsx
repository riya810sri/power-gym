import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export function Footer() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <footer id="contact" className="footer bg-black">
      {/* Call to Action Section */}
      <div className="py-20 px-4 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Cybersecurity Journey?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already taken the first step towards a rewarding career in cybersecurity.
          </p>
          <Button
  onClick={handleGetStarted}
  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
>
  Get Started
</Button>

          <p className="text-sm text-gray-500 mt-4">
            By signing up, you agree to our{" "}
            <a href="https://durbhasigurukulam.com/other/t&c.html" className="text-purple-400 hover:text-purple-300">Terms & Conditions</a>
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
          <div>
            <h3 className="text-white font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="https://durbhasigurukulam.com" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="https://durbhasigurukulam.com/other/t&c.html" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="https://durbhasigurukulam.com/other/refund.html" className="text-gray-400 hover:text-white transition-colors text-sm">Refund</a></li>
              <li><a href="https://durbhasigurukulam.com/contact.html" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Phone: +91 7852034945</li>
              <li className="text-gray-400 text-sm">Email: support@durbhasigurukulam.com</li>
              <li className="text-gray-400 text-sm">349, Budh vihar, pal, jodhpur, rajasthan, india</li>
            </ul>
          </div>

          
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 DURBHASI GURUKULAM PRIVATE LIMITED</p>
        </div>
      </div>
    </footer>
  );
} 