import React, { useEffect, useState } from 'react';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError, handleImageLoad, fetchImageWithCORS } from '../fun';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';

// CourseCard component with CORS image loading
const CourseCard = React.memo(({ course, index }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    async function loadImage() {
      if (course?.image) {
        setImageLoading(true);
        try {
          const corsImageUrl = await fetchImageWithCORS(getImageUrl(course.image));
          if (isMounted) {
            setImageUrl(corsImageUrl);
          }
        } catch (err) {
          console.log('Failed to load image with CORS, using direct URL:', err);
          if (isMounted) {
            setImageUrl(getImageUrl(course.image));
          }
        } finally {
          if (isMounted) {
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
    <div
      key={course._id}
      data-aos="fade-up"
      data-aos-delay={index * 50}
      className="bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-700 flex flex-col transition-all duration-500 hover:border-purple-500 hover:transform hover:scale-105"
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
          data-aos="zoom-in"
          data-aos-delay={index * 50 + 100}
          loading="lazy"
        />
      )}
      <h3 
        data-aos="fade-right" 
        data-aos-delay={index * 50 + 200}
        className="text-xl font-semibold mb-2"
      >
        {course.title}
      </h3>
      <p 
        data-aos="fade-left" 
        data-aos-delay={index * 50 + 300}
        className="text-gray-400 mb-2 text-sm line-clamp-3"
      >
        {course.shortDescription || course.description}
      </p>
      
      {/* Course meta information */}
      <div className="flex flex-col gap-2 mb-4">
        <div 
          data-aos="fade-up" 
          data-aos-delay={index * 50 + 400}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-gray-500">Duration:</span>
          <span className="text-gray-300">{course.duration}</span>
        </div>
        <div 
          data-aos="fade-up" 
          data-aos-delay={index * 50 + 500}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-gray-500">Category:</span>
          <span className="text-purple-400">{course.category}</span>
        </div>
        <div 
          data-aos="fade-up" 
          data-aos-delay={index * 50 + 600}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-gray-500">Level:</span>
          <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">{course.level}</span>
        </div>
        <div 
          data-aos="fade-up" 
          data-aos-delay={index * 50 + 700}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-gray-500">Instructor:</span>
          <span className="text-gray-300">{course.instructor}</span>
        </div>
      </div>

      {/* Price */}
      <div 
        data-aos="fade-up" 
        data-aos-delay={index * 50 + 800}
        className="flex items-center justify-between mb-4"
      >
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
          data-aos="zoom-in" 
          data-aos-delay={index * 50 + 900}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
});

export default function Courses() {
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
  ], []);

  // Debounce search input to reduce filtering frequency
  const debouncedSearch = React.useMemo(() => {
    return search;
  }, [search]);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchCourses() {
      try {
        setLoading(true);
        console.log('Fetching courses...');
        const response = await courseHandler.getAll({ page: 1 });
        console.log('Fetched courses data:', response);
        
        // Extract courses from response.data since API returns { data: [...], pagination: {...}, success: true }
        const courseData = response?.data || [];
        console.log('Extracted courses:', courseData);
        
        if (isMounted) {
          setCourses(courseData);
          setFilteredCourses(courseData);
          setError('');
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

  // Optimize filtering with useMemo
  useEffect(() => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      course.description.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredCourses(results);
  }, [debouncedSearch, courses]);

  // Memoize the rendered course cards
  const renderedCourses = React.useMemo(() => {
    return filteredCourses.map((course, index) => (
      <CourseCard key={course._id} course={course} index={index} />
    ));
  }, [filteredCourses]);

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
        <div className="flex justify-between items-center mb-6">
          <h2 data-aos="fade-right" className="text-3xl font-bold">Available Courses</h2>
        </div>

        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search courses..."
          data-aos="fade-up"
          className="w-full mb-6 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400"
        />

        {error && <p className="text-yellow-400 text-center mb-4">{error}</p>}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderedCourses}
        </div>
      </div>
    </div>
  );
}