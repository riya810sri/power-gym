import testimonials from '../../../data/testimonials.json';



export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Success Stories from Our Learners</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          See How Vulnhut is Shaping the Future of Cybersecurity Career
        </p>
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((review) => (
          <div key={review.id} className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">
                {review.name?.charAt(0) || "U"}
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                <p className="text-purple-400 text-sm font-medium">{review.role}</p>
              </div>
            </div>
            <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg">
              "{review.comment}"
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
