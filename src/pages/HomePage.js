import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { testimonialHandler } from '../handlers';

import { HeroSection } from './Home/sections/HeroSection';
import { FeaturesSection } from './Home/sections/FeaturesSection';
import { LabsSection } from './Home/sections/LabsSection';

// import { TestimonialsSection } from './Home/sections/TestimonialsSection';

function TestimonialsSection({ testimonials, error, isLoading }) {
  console.log('TestimonialsSection received props:', { testimonials, error, isLoading });
  
  if (isLoading) {
    return (
      <div className="py-12 px-6 text-center">
        <div className="text-gray-400">Loading testimonials...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="py-12 px-6 text-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }
  
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="py-12 px-6 text-center">
        <div className="text-gray-400">No testimonials available</div>
      </div>
    );
  }

  console.log('Testimonials data in component:', testimonials);

  
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map(t => (
          <div key={t._id} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">{t.name}</h3>
            <p className="text-gray-300">{t.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialError, setTestimonialError] = useState('');
  const [isTestimonialLoading, setIsTestimonialLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        console.log('Fetching testimonials...');
        setIsTestimonialLoading(true);
        const response = await testimonialHandler.getAll();
        console.log('Fetched testimonials data:', response);
        
        // Extract testimonials from response.data since API returns { data: [...], pagination: {...}, success: true }
        const testimonialsData = response?.data || [];
        console.log('Extracted testimonials:', testimonialsData);
        
        setTestimonials(testimonialsData);
        setTestimonialError('');
      } catch (err) {
        console.log('Testimonial fetch error:', err);
        setTestimonialError('Failed to load testimonials');
        setTestimonials([]);
      } finally {
        setIsTestimonialLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem('token');
    console.log('HomePage - Checking authentication state:', token ? 'Authenticated' : 'Not authenticated');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    console.log('User logged out from HomePage');
    setIsAuthenticated(false);
    // Optionally redirect to home page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">Durbhasi Gurukulam</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
          <Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Courses</Link>
          // <a href="#reviews" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Reviews</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
          
          {/* Conditional rendering based on authentication state */}
          {isAuthenticated ? (
            <div   class="course-card fade-in" className="relative group">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div   class="course-card fade-in" className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium">Login</button>
              </Link>
              <Link to="/signup">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium ml-2">Sign Up</button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div  class="course-card fade-in" className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div  class="course-card fade-in"  className="pt-16"></div>

      <HeroSection />
      <FeaturesSection />
      <LabsSection />
      <TestimonialsSection 
        testimonials={testimonials}
        error={testimonialError}
        isLoading={isTestimonialLoading}
      />
      <Footer />
    </div>
  );
}
