
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    setReviews([newReview, ...reviews]);
    setFormData({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-10">
      {/* ⬇ Reduced from pt-28 to pt-16 */}
      <div className="pt-16 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Course Reviews
        </motion.h2>

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
