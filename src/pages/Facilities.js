import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Facilities = () => {
  // Animation variants
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Facilities data
  const facilities = [
    { id: 1, name: "Cardio Zone", description: "Top-tier treadmills, ellipticals, and stationary bikes with entertainment systems", image: "/cardio.jpg" },
    { id: 2, name: "Free Weights", description: "Dumbbells, barbells, and Olympic platforms for strength training", image: "/weight.jpg" },
    { id: 3, name: "Functional Training", description: "TRX, battle ropes, and functional equipment for dynamic workouts", image: "/fun.jpg" },
    { id: 4, name: "Group Classes", description: "HIIT, CrossFit, Zumba, and more in our spacious studio", image: "/group.jpg" },
    { id: 5, name: "Recovery Center", description: "Sauna, steam room, and massage therapy for optimal recovery", image: "/recovery.jpg" },
    { id: 6, name: "Nutrition Bar", description: "Healthy shakes and snacks for post-workout fuel", image: "/nutrition.jpg" }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 -z-10">
          <img src="/virtual.jpg" alt="Facilities Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Facilities</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {facilities.map((facility) => (
              <motion.div
                key={facility.id}
                variants={slideUp}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-white/10 backdrop-blur-lg flex flex-col items-center text-center transition-all duration-300 group"
                style={{ minHeight: 380 }}
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img src={facility.image} alt={facility.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-lg">{facility.name}</h3>
                  <p className="text-gray-200 text-base mb-4">{facility.description}</p>
                  <Link to="/learnmore">
                    <button className="mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold shadow-lg hover:from-red-700 hover:to-orange-600 transition-all">Learn More</button>
                  </Link>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-xs text-white font-semibold shadow backdrop-blur">#{facility.id}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Facility Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Cleanliness & Safety</h3>
                <p className="text-gray-300">We maintain the highest standards of cleanliness with frequent sanitization of all equipment and surfaces. Our facility is equipped with air purification systems and follows all health guidelines.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Cutting-Edge Equipment</h3>
                <p className="text-gray-300">Our gym features the latest fitness equipment from top manufacturers, ensuring durability, functionality, and the best workout experience possible.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">24/7 Access</h3>
                <p className="text-gray-300">With our key fob entry system, members have access to the facility 24 hours a day, 7 days a week, allowing you to work out on your schedule.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Spacious Layout</h3>
                <p className="text-gray-300">Our thoughtfully designed layout maximizes space efficiency while providing ample room for movement and reducing crowding during peak hours.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;