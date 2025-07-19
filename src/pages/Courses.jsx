import React, { useEffect, useState } from 'react';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError, handleImageLoad, fetchImageWithCORS } from '../fun';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';

// CourseCard component with CORS image loading
function CourseCard({ course }) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    async function loadImage() {
      if (course?.image) {
        setImageLoading(true);
        try {
          const corsImageUrl = await fetchImageWithCORS(getImageUrl(course.image));
          setImageUrl(corsImageUrl);
        } catch (err) {
          console.log('Failed to load image with CORS, using direct URL:', err);
          setImageUrl(getImageUrl(course.image));
        } finally {
          setImageLoading(false);
        }
      } else {
        setImageLoading(false);
      }
    }
    loadImage();
  }, [course.image]);

  return (
    <div
      key={course._id}
      className="bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-700 flex flex-col transition-all duration-500 hover:border-purple-500"
    >
      {imageLoading ? (
        <div className="w-full h-40 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <img
          src={imageUrl || getImageUrl(course.image)}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg mb-4 transition-opacity duration-500"
          onError={(e) => handleImageError(e)}
          onLoad={() => handleImageLoad(imageUrl || course.image)}
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-400 mb-2 text-sm line-clamp-3">{course.shortDescription || course.description}</p>
      
      {/* Course meta information */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Duration:</span>
          <span className="text-gray-300">{course.duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Category:</span>
          <span className="text-purple-400">{course.category}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Level:</span>
          <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">{course.level}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Instructor:</span>
          <span className="text-gray-300">{course.instructor}</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {course.originalPrice && course.originalPrice !== course.price && (
            <span className="text-gray-500 text-sm line-through">₹{course.originalPrice}</span>
          )}
          <span className="text-2xl font-bold text-purple-400">₹{course.price}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-auto space-y-2">
        <Link 
          to={`/courses/${course.path || course._id}`}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function CoursesNavbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem('token');
    console.log('Checking authentication state:', token ? 'Authenticated' : 'Not authenticated');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    console.log('User logged out');
    setIsAuthenticated(false);
    // Optionally redirect to home page
    window.location.href = '/';
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-white">Durbhasi Gurukulam</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
        <Link to="/courses" className="text-purple-400 hover:text-white transition-colors text-sm font-medium">Courses</Link>
        <Link to="/labs" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Labs</Link>
        
        {/* Conditional rendering based on authentication state */}
        {isAuthenticated ? (
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
      <div className="md:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

const sampleCourses = [
  {
    _id: '1',
    title: 'Web Application Security',
    path: 'web-application-security',
    description: 'Learn how to secure web applications from common vulnerabilities',
    shortDescription: 'Comprehensive web security course',
    image: 'https://via.placeholder.com/400x300',
    price: '4999',
    level: 'Intermediate',
    instructor: 'John Doe'
  },
  {
    _id: '2',
    title: 'Network Penetration Testing',
    path: 'network-penetration-testing',
    description: 'Master the art of network security testing',
    shortDescription: 'Professional pentesting course',
    image: 'https://via.placeholder.com/400x300',
    price: '5999',
    level: 'Advanced',
    instructor: 'Jane Smith'
  },
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        console.log('Fetching courses...');
        const response = await courseHandler.getAll({ page: 1 });
        console.log('Fetched courses data:', response);
        
        // Extract courses from response.data since API returns { data: [...], pagination: {...}, success: true }
        const courseData = response?.data || [];
        console.log('Extracted courses:', courseData);
        
        setCourses(courseData);
        setFilteredCourses(courseData);
        setError('');
      } catch (err) {
        console.error('Course fetch error:', err);
        setCourses(sampleCourses);
        setFilteredCourses(sampleCourses);
        setError('Failed to load live data. Showing sample data.');
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCourses(results);
  }, [search, courses]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8">
      <CoursesNavbar />
      <div className="pt-28 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Available Courses</h2>
          
        </div>

        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="w-full mb-6 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400"
        />

        {error && <p className="text-yellow-400 text-center mb-4">{error}</p>}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCourses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
