import React, { useEffect, useState } from 'react';
import { apihandler } from '../fun';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CoursesNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80"
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">V</span>
        </div>
        <span className="text-xl font-bold text-white">Vulnhut</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
        <Link to="/courses" className="text-purple-400 hover:text-white transition-colors text-sm font-medium">Courses</Link>
        <Link to="/login">
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium ml-2">Sign Up</button>
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}

const sampleCourses = [
  {
    _id: '1',
    title: 'Web Application Security',
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
        const response = await apihandler({ url: 'http://localhost:5000/api/courses', method: 'GET' });
        await new Promise(resolve => setTimeout(resolve, 500));
        const courseData = response?.courses || sampleCourses;
        setCourses(courseData);
        setFilteredCourses(courseData);
        if (!response?.courses) setError('Failed to load live data. Showing sample data.');
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
            <motion.div
              key={course._id}
              className="bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-700 flex flex-col transition-all duration-500 hover:border-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={course.image || 'https://via.placeholder.com/400x300'}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4 transition-opacity duration-500"
                onError={(e) => {
                  if (e.target.src !== 'https://via.placeholder.com/400x300') {
                    e.target.src = 'https://via.placeholder.com/400x300';
                  }
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-400 mb-2">{course.shortDescription || course.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-purple-400 font-bold text-lg">₹{course.price}</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded text-xs">{course.level}</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">{course.instructor}</div>
              <Link to={`/courses/${course._id}`}>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold transition">
                  Learn More
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
