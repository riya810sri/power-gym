import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError, handleImageLoad, fetchImageWithCORS } from '../fun';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        console.log('Fetching course details for ID/Path:', id);
        
        // First, try to determine if this is a path or an ID
        const isPath = id.includes('-') || id.includes('_') || id.length !== 24;
        
        let response;
        if (isPath) {
          console.log('Treating as path:', id);
          response = await courseHandler.getByPath(id);
        } else {
          console.log('Treating as ID:', id);
          response = await courseHandler.getById(id);
        }
        
        const courseData = response?.data || response;
        setCourse(courseData);
        console.log('Fetched course details:', courseData);
        
        // Handle image loading with CORS
        if (courseData?.image) {
          setImageLoading(true);
          try {
            const corsImageUrl = await fetchImageWithCORS(getImageUrl(courseData.image));
            setImageUrl(corsImageUrl);
          } catch (err) {
            console.log('Failed to load image with CORS, using direct URL:', err);
            setImageUrl(getImageUrl(courseData.image));
          } finally {
            setImageLoading(false);
          }
        }
      } catch (err) {
        setError('Failed to load course details');
        console.log('Course details fetch error:', err);
      }
    }
    fetchCourse();
  }, [id]);

  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem('token');
    console.log('CourseDetails - Checking authentication state:', token ? 'Authenticated' : 'Not authenticated');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    console.log('User logged out from CourseDetails');
    setIsAuthenticated(false);
    // Optionally redirect to home page
    window.location.href = '/';
  };

  const handleSyllabusDownload = () => {
    if (course?.syllabusDownloadLink) {
      console.log('Downloading syllabus from:', course.syllabusDownloadLink);
      window.open(course.syllabusDownloadLink, '_blank');
    } else {
      console.log('No syllabus download link available');
      alert('Syllabus download is currently not available for this course.');
    }
  };

  const handleEnrollNow = () => {
    if (course?.enrollLink) {
      console.log('Redirecting to enrollment page:', course.enrollLink);
      window.open(course.enrollLink, '_blank');
    } else {
      console.log('No enrollment link available');
      alert('Enrollment link is currently not available for this course.');
    }
  };

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!course) return <div className="text-gray-400 text-center py-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8">
      <nav className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Durbhasi Gurukulam</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
          <Link to="/courses" className="text-purple-400 hover:text-white transition-colors text-sm font-medium">Courses</Link>
          
          
          {/* Conditional rendering based on authentication state */}
          {isAuthenticated && (
            <div className="relative group">
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
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-2xl p-8 border border-purple-600 mt-8">
        {imageLoading ? (
          <div className="w-full h-56 bg-zinc-800 rounded-lg mb-6 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <img 
            src={imageUrl || getImageUrl(course.image)} 
            alt={course.title} 
            className="w-full h-56 object-cover rounded-lg mb-6"
            onError={(e) => handleImageError(e)}
            onLoad={() => handleImageLoad(imageUrl || course.image)}
          />
        )}
        <h2 className="text-3xl font-bold mb-2 text-purple-400">{course.title}</h2>
        <p className="text-gray-300 mb-4 text-lg">{course.description}</p>
        <div className="mb-2 text-sm text-gray-400">Instructor: {course.instructor}</div>
        <div className="mb-2 text-sm text-gray-400">Level: {course.level}</div>
        <div className="mb-2 text-sm text-gray-400">Duration: {course.duration}</div>
        <div className="mb-2 text-sm text-gray-400">Category: {course.category}</div>
        <div className="mb-2 text-sm text-gray-400">Price: <span className="text-purple-400 font-bold">₹{course.price}</span></div>
        
        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleSyllabusDownload}
            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Syllabus
          </button>
          <button 
            onClick={handleEnrollNow}
            className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Enroll Now
          </button>
        </div>
        {course.requirements && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white mb-2">Requirements:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {course.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        )}
        {course.whatYouWillLearn && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white mb-2">What You Will Learn:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {course.whatYouWillLearn.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
