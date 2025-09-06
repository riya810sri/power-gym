import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError } from '../fun';

// CourseCard component
const CourseCard = React.memo(({ course, index }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function loadImage() {
      if (course?.image) {
        setImageLoading(true);
        try {
          const url = getImageUrl(course.image);
          if (isMounted) {
            setImageUrl(url);
            setImageLoading(false);
          }
        } catch (err) {
          console.log('Failed to load image:', err);
          if (isMounted) {
            setImageUrl('https://via.placeholder.com/400x300');
            setImageLoading(false);
          }
        }
      } else {
        if (isMounted) {
          setImageLoading(false);
        }
      }
    }
    
    loadImage();
    
    return () => {
      isMounted = false;
    };
  }, [course.image]);

  return (
    <motion.div
      key={course._id}
      className="bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-700 flex flex-col transition-all duration-500 hover:border-purple-500 hover:transform hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {imageLoading ? (
        <div className="w-full h-40 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <img
          src={imageUrl}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg mb-4 transition-opacity duration-500"
          onError={(e) => handleImageError(e, 'https://via.placeholder.com/400x300')}
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-400 mb-2 line-clamp-3">{course.shortDescription || course.description}</p>
      
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Duration:</span>
          <span className="text-gray-300">{course.duration || 'Self-paced'}</span>
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
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {course.originalPrice && course.originalPrice !== course.price && (
            <span className="text-gray-500 text-sm line-through">₹{course.originalPrice}</span>
          )}
          <span className="text-2xl font-bold text-purple-400">₹{course.price}</span>
        </div>
      </div>

      <Link to={`/courses/${course.path || course._id}`}>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors">
          View Details
        </button>
      </Link>
    </motion.div>
  );
});

function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Memoize sample courses to prevent recreation on each render
  const sampleCourses = React.useMemo(() => [
    {
      _id: '1',
      title: 'Web Application Security',
      path: 'web-application-security',
      description: 'Learn how to secure web applications from common vulnerabilities',
      shortDescription: 'Comprehensive web security course',
      image: 'https://via.placeholder.com/400x300',
      price: '4999',
      level: 'Intermediate',
      instructor: 'John Doe',
      duration: '8 weeks'
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
      instructor: 'Jane Smith',
      duration: '10 weeks'
    },
  ], []);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchCourses() {
      try {
        setLoading(true);
        console.log('Fetching courses...');
        const response = await courseHandler.getAll();
        console.log('Courses response:', response);
        
        // Extract courses from response.data since API returns { data: [...], pagination: {...}, success: true }
        const courseData = response?.data || response?.courses || [];
        console.log('Extracted courses:', courseData);
        
        if (isMounted) {
          if (courseData.length > 0) {
            setCourses(courseData);
            setFilteredCourses(courseData);
            setError('');
          } else {
            setCourses(sampleCourses);
            setFilteredCourses(sampleCourses);
            setError('Failed to load live data. Showing sample data.');
          }
        }
      } catch (err) {
        console.error('Course fetch error:', err);
        if (isMounted) {
          setCourses(sampleCourses);
          setFilteredCourses(sampleCourses);
          setError('Failed to load live data. Showing sample data.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    fetchCourses();
    
    return () => {
      isMounted = false;
    };
  }, [sampleCourses]);

  // Optimize filtering with useEffect
  useEffect(() => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      (course.description && course.description.toLowerCase().includes(search.toLowerCase()))
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
      <div className="pt-28 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-3xl font-bold">Available Courses</h2>
        </motion.div>

        <motion.input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="w-full mb-6 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {error && <p className="text-yellow-400 text-center mb-4">{error}</p>}

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course._id} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;