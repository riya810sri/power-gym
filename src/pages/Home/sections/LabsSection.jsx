import { Button } from '../../../components/ui/Button';
import labsData from '../../../data/labs.json';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export function LabsSection() {
  const navigate = useNavigate();

const handleCTAClick = () => {
  navigate('/labs'); // or any route you want
};

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{labsData.title}</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">{labsData.description}</p>
        
        {/* Virtual Lab Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Virtual Lab Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <div className="text-3xl mb-4">💡</div>
              <h4 className="font-semibold text-white mb-2">Practical Insights</h4>
            </div>
            <div className="feature-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <div className="text-3xl mb-4">🌐</div>
              <h4 className="font-semibold text-white mb-2">Realistic network simulations</h4>
            </div>
            <div className="feature-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="font-semibold text-white mb-2">Instant feedback and guidance</h4>
            </div>
            <div className="feature-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-semibold text-white mb-2">Safe environment for experimentation</h4>
            </div>
          </div>
        </div>
        
        <Button
  onClick={handleCTAClick}
  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
>
  {labsData.cta}
</Button>

      </div>
    </section>
  );
}