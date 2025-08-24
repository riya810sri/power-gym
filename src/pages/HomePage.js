import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { testimonialHandler } from '../handlers';

import { HeroSection } from './Home/sections/HeroSection';
import { FeaturesSection } from './Home/sections/FeaturesSection';

// import { TestimonialsSection } from './Home/sections/TestimonialsSection';

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState('');

  // Sample testimonials data to show when API fails
  const sampleTestimonials = React.useMemo(() => [
    {
      _id: '1',
      name: 'Rahul Sharma',
      message: 'The cybersecurity course completely transformed my career. I went from a beginner to landing a job at a top tech firm within 6 months!'
    },
    {
      _id: '2',
      name: 'Priya Patel',
      message: 'Hands-down the best cybersecurity training I\'ve ever taken. The practical labs and real-world scenarios prepared me for actual challenges in the field.'
    },
    {
      _id: '3',
      name: 'Amit Kumar',
      message: 'The instructors are industry experts who truly care about your success. The course material is up-to-date with the latest security threats and防护 measures.'
    },
    {
      _id: '4',
      name: 'Sneha Gupta',
      message: 'I\'ve taken several cybersecurity courses, but this one stands out. The hands-on approach and mentor support helped me pass my CISSP certification on the first try.'
    },
    {
      _id: '5',
      name: 'Vikram Singh',
      message: 'As a network admin, this course gave me the security knowledge I needed to advance. The community support and career guidance are invaluable.'
    },
    {
      _id: '6',
      name: 'Anjali Mehta',
      message: 'The course content is comprehensive and well-structured. I especially appreciated the ethical hacking module which gave me practical penetration testing skills.'
    }
  ], []);

  // Memoized function to get random testimonials
  const getRandomTestimonials = React.useCallback((count = 3) => {
    const shuffled = [...sampleTestimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, [sampleTestimonials]);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchTestimonials() {
      try {
        const data = await testimonialHandler.getAll();
        if (isMounted) {
          if (data?.testimonials && data.testimonials.length > 0) {
            setTestimonials(data.testimonials);
          } else {
            // If no testimonials from API, show random sample testimonials
            setTestimonials(getRandomTestimonials(3));
          }
          console.log('Fetched testimonials:', data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load testimonials');
          console.log('Testimonial fetch error:', err);
          // Show random sample testimonials when API fails
          setTestimonials(getRandomTestimonials(3));
        }
      }
    }
    
    fetchTestimonials();
    
    return () => {
      isMounted = false;
    };
  }, [getRandomTestimonials]);

  // Memoize the rendered testimonials to prevent unnecessary re-renders
  const renderedTestimonials = React.useMemo(() => {
    return testimonials.map((t, index) => (
      <div 
        key={t._id} 
        data-aos="fade-up" 
        data-aos-delay={index * 100}
        data-aos-duration="1000"
        className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group transition-all duration-300"
      >
        <h3 
          data-aos="fade-right" 
          data-aos-delay={index * 50 + 200}
          className="text-xl font-bold mb-4 text-white"
        >
          {t.name}
        </h3>
        <p 
          data-aos="fade-left" 
          data-aos-delay={index * 50 + 300}
          className="text-gray-400 leading-relaxed"
        >
          {t.message}
        </p>
      </div>
    ));
  }, [testimonials]);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div data-aos="fade-up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Our Students Say</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Hear from our community of cybersecurity professionals.
        </p>
        {error && (
          <p className="text-yellow-400 mt-4">{error}</p>
        )}
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {renderedTestimonials}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      {/* Add padding to account for fixed navbar */}
      <div className="pt-16"></div>

      <HeroSection />
      <FeaturesSection />
      {/* <LabsSection /> */}
      <TestimonialsSection />
    </div>
  );
}