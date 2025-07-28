import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';

const initialReviews = [
  {
    id: 1,
    name: 'Alice',
    rating: 5,
    comment: 'Excellent course, very detailed and practical!',
  },
  {
    id: 2,
    name: 'Bob',
    rating: 4,
    comment: 'Great explanations and content!',
  },
];

export default function Review() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      ...formData,
      rating: parseInt(formData.rating),
    };
    setReviews([newReview, ...reviews]); // New review on top
    setFormData({ name: '', rating: '', comment: '' }); // Clear form
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-10">
      {/* ✅ Navbar with animation */}
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
          <Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Courses</Link>
          <Link to="/reviews" className="text-purple-400 hover:text-white transition-colors text-sm font-medium">Reviews</Link>
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

      {/* Content below navbar */}
      <div className="pt-24 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Course Reviews
        </motion.h2>

        {/* Review Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">Rating (1–5)</label>
            <input
              type="number"
              min="1"
              max="5"
              required
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400"
              placeholder="Rating"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">Comment</label>
            <textarea
              required
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-400"
              placeholder="Write your review..."
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 font-semibold transition"
          >
            Submit Review
          </button>
        </motion.form>

        {/* Display Reviews */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-zinc-800 p-4 rounded-lg mb-4 border border-zinc-700"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold">{review.name}</h4>
                <span className="text-yellow-400">⭐ {review.rating}/5</span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer Animation */}
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
