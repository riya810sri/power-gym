<<<<<<< HEAD
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError, handleImageLoad, fetchImageWithCORS } from '../fun';
import { Link } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError, handleImageLoad, fetchImageWithCORS } from '../fun';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  // Memoize authentication check
  useEffect(() => {
    let isMounted = true;
    
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem('token');
    console.log('CourseDetails - Checking authentication state:', token ? 'Authenticated' : 'Not authenticated');
    
    if (isMounted) {
      setIsAuthenticated(!!token);
    }
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Memoize course fetching
  useEffect(() => {
    let isMounted = true;
    
    async function fetchCourse() {
      try {
        const isPath = id.includes('-') || id.includes('_') || id.length !== 24;
        let response = isPath
          ? await courseHandler.getByPath(id)
          : await courseHandler.getById(id);

        const courseData = response?.data || response;
<<<<<<< HEAD
        
        if (isMounted) {
          setCourse(courseData);
          console.log('Fetched course details:', courseData);
          
          // Handle image loading with CORS
          if (courseData?.image) {
            setImageLoading(true);
            try {
              const corsImageUrl = await fetchImageWithCORS(getImageUrl(courseData.image));
              if (isMounted) {
                setImageUrl(corsImageUrl);
              }
            } catch (err) {
              console.log('Failed to load image with CORS, using direct URL:', err);
              if (isMounted) {
                setImageUrl(getImageUrl(courseData.image));
              }
            } finally {
              if (isMounted) {
                setImageLoading(false);
              }
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load course details');
          console.log('Course details fetch error:', err);
        }
=======
        setCourse(courseData);

        if (courseData?.image) {
          setImageLoading(true);
          try {
            const corsImageUrl = await fetchImageWithCORS(getImageUrl(courseData.image));
            setImageUrl(corsImageUrl);
          } catch {
            setImageUrl(getImageUrl(courseData.image));
          } finally {
            setImageLoading(false);
          }
        }
      } catch {
        setError('Failed to load course details');
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
      }
    }
    
    fetchCourse();
    
    return () => {
      isMounted = false;
    };
  }, [id]);

<<<<<<< HEAD
=======
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const handleSyllabusDownload = () => {
    if (course?.syllabusDownloadLink) {
      window.open(course.syllabusDownloadLink, '_blank');
    } else {
      alert('Syllabus download is currently not available for this course.');
    }
  };

  const handleEnrollNow = () => {
    if (course?.enrollLink) {
      window.open(course.enrollLink, '_blank');
    } else {
      alert('Enrollment link is currently not available for this course.');
    }
  };

  // Memoize rendered requirements
  const renderedRequirements = useMemo(() => {
    if (!course?.requirements) return null;
    
    return (
      <div data-aos="fade-up" data-aos-delay="300" className="mt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-300">
          {course.requirements.map((req, idx) => (
            <li key={idx} data-aos="fade-up" data-aos-delay={400 + idx * 50}>{req}</li>
          ))}
        </ul>
      </div>
    );
  }, [course?.requirements]);

  // Memoize rendered learning outcomes
  const renderedLearningOutcomes = useMemo(() => {
    if (!course?.whatYouWillLearn) return null;
    
    return (
      <div data-aos="fade-up" data-aos-delay="500" className="mt-4">
        <h3 className="text-lg font-semibold text-white mb-2">What You Will Learn:</h3>
        <ul className="list-disc list-inside text-gray-300">
          {course.whatYouWillLearn.map((item, idx) => (
            <li key={idx} data-aos="fade-up" data-aos-delay={600 + idx * 50}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }, [course?.whatYouWillLearn]);

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!course) return <div className="text-gray-400 text-center py-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8">
<<<<<<< HEAD
      <nav data-aos="fade-down" className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80">
=======
      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80">
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Durbhasi Gurukulam</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium" data-aos="fade-down" data-aos-delay="100">Home</Link>
          <Link to="/courses" className="text-purple-400 hover:text-white transition-colors text-sm font-medium" data-aos="fade-down" data-aos-delay="200">Courses</Link>
          
          {/* Conditional rendering based on authentication state */}
=======
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
          <Link to="/courses" className="text-purple-400 hover:text-white transition-colors text-sm font-medium">Courses</Link>
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
          {isAuthenticated && (
            <div className="relative group">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium flex items-center space-x-2">
                <span>Profile</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg border border-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
          )}
        </div>
      </nav>

      <div className="pt-20"></div>
<<<<<<< HEAD
      <div data-aos="fade-up" className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-2xl p-8 border border-purple-600 mt-8">
=======

      {/* Course Card */}
      <motion.div
        className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-2xl p-8 border border-purple-600 mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
        {imageLoading ? (
          <div className="w-full h-56 bg-zinc-800 rounded-lg mb-6 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <motion.img 
            src={imageUrl || getImageUrl(course.image)} 
            alt={course.title} 
            className="w-full h-56 object-cover rounded-lg mb-6"
            onError={(e) => handleImageError(e)}
            onLoad={() => handleImageLoad(imageUrl || course.image)}
<<<<<<< HEAD
            data-aos="zoom-in"
            loading="lazy"
          />
        )}
        <h2 data-aos="fade-right" className="text-3xl font-bold mb-2 text-purple-400">{course.title}</h2>
        <p data-aos="fade-left" className="text-gray-300 mb-4 text-lg">{course.description}</p>
        <div data-aos="fade-up" className="mb-2 text-sm text-gray-400">Instructor: {course.instructor}</div>
        <div data-aos="fade-up" className="mb-2 text-sm text-gray-400">Level: {course.level}</div>
        <div data-aos="fade-up" className="mb-2 text-sm text-gray-400">Duration: {course.duration}</div>
        <div data-aos="fade-up" className="mb-2 text-sm text-gray-400">Category: {course.category}</div>
        <div data-aos="fade-up" className="mb-2 text-sm text-gray-400">Price: <span className="text-purple-400 font-bold">₹{course.price}</span></div>
        
        {/* Action Buttons */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-6 flex flex-col sm:flex-row gap-4">
=======
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          />
        )}

        {/* Title & Description */}
        <motion.h2 
          className="text-3xl font-bold mb-2 text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          {course.title}
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          {course.description}
        </motion.p>

        {/* Details */}
        <div className="mb-2 text-sm text-gray-400">Instructor: {course.instructor}</div>
        <div className="mb-2 text-sm text-gray-400">Level: {course.level}</div>
        <div className="mb-2 text-sm text-gray-400">Duration: {course.duration}</div>
        <div className="mb-2 text-sm text-gray-400">Category: {course.category}</div>
        <div className="mb-2 text-sm text-gray-400">Price: <span className="text-purple-400 font-bold">₹{course.price}</span></div>

        {/* Action Buttons */}
        <motion.div 
          className="mt-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
          <button 
            onClick={handleSyllabusDownload}
            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
          >
            Download Syllabus
          </button>
          <button 
            onClick={handleEnrollNow}
            className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium"
          >
            Enroll Now
          </button>
<<<<<<< HEAD
        </div>
        
        {renderedRequirements}
        {renderedLearningOutcomes}
      </div>
=======
        </motion.div>

        {/* Requirements */}
        {course.requirements && (
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-lg font-semibold text-white mb-2">Requirements:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {course.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* What You Will Learn */}
        {course.whatYouWillLearn && (
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-lg font-semibold text-white mb-2">What You Will Learn:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {course.whatYouWillLearn.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>

      <Footer />
>>>>>>> dd3061f92f065c1ad29ff9c11a80d7136b8110d1
    </div>
  );
}
