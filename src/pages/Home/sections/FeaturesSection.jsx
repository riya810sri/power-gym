import features from '../../../data/features.json';

export function FeaturesSection() {
  return (
    <section id="features" className="section-dark py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Vulnhut?</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore why we are the top choice in cybersecurity training.
        </p>
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <div key={item.id} className="feature-card bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6 text-4xl">{item.icon || "🔒"}</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}