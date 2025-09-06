// src/pages/Learn.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseHandler } from '../handlers';
import { getImageUrl, handleImageError, fetchImageWithCORS } from '../fun';

export default function Learn() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        console.log('Fetching course details for ID/Path:', id);
        
        // First, try to determine if this is a path or an ID
        // If it contains characters that are unlikely to be in an ID (like hyphens), treat as path
        // MongoDB ObjectIds are 24 characters of hex, paths usually contain hyphens or other chars
        const isPath = id.includes('-') || id.includes('_') || id.length !== 24;
        
        let response;
        if (isPath) {
          console.log('Treating as path:', id);
          response = await courseHandler.getByPath(id);
        } else {
          console.log('Treating as ID:', id);
          response = await courseHandler.getById(id);
        }
        
        console.log('Fetched course details:', response);
        
        // Extract course from response.data since API returns single course object
        const courseData = response?.data || response;
        console.log('Extracted course data:', courseData);
        
        setCourse(courseData);
        setError('');
        
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
        console.error('Course details fetch error:', err);
        setError('Failed to load course details');
        setCourse(null);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [id]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <Link to="/courses">
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 font-semibold">
              Back to Courses
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-xl mb-4">Course not found</div>
          <Link to="/courses">
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 font-semibold">
              Back to Courses
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8">
      <div className="pt-20"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-700">
              {imageLoading ? (
                <div className="w-full h-64 bg-zinc-800 rounded-lg mb-6 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              ) : (
                <img 
                  src={imageUrl || getImageUrl(course.image)} 
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  onError={(e) => handleImageError(e)}
                />
              )}
              
              <h1 className="text-4xl font-bold mb-4 text-white">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags && course.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4">
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

              {/* What You Will Learn */}
              {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">What You Will Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {course.requirements && course.requirements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Requirements</h3>
                  <div className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  {course.originalPrice && course.originalPrice !== course.price && (
                    <span className="text-gray-500 text-2xl line-through mr-3">₹{course.originalPrice}</span>
                  )}
                  <span className="text-3xl font-bold text-purple-400">₹{course.price}</span>
                </div>
                <button 
                  onClick={handleEnrollNow}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg transition mb-4"
                >
                  Enroll Now
                </button>
                {/* <p className="text-sm text-gray-400">30-day money-back guarantee</p> */}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <span className="text-gray-400">Instructor:</span>
                  <span className="text-white font-medium">{course.instructor}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <span className="text-gray-400">Level:</span>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">{course.level}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-purple-400">{course.category}</span>
                </div>
                {/* <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <span className="text-gray-400">Students:</span>
                  <span className="text-white">{course.enrolledStudents || 0}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Rating:</span>
                  <span className="text-yellow-400">{course.rating || 'No ratings yet'}</span>
                </div> */}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-700">
                <Link to="/courses">
                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg font-medium transition">
                    ← Back to Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
