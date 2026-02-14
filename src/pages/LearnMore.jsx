import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const facilityDetails = [
  {
    id: 1,
    name: 'Cardio Zone',
    description: 'Our Cardio Zone features top-tier treadmills, ellipticals, and stationary bikes with built-in entertainment systems. Enjoy a motivating environment with music, TV, and virtual runs.',
    image: '/cardio.jpg',
    highlights: [
      'Latest cardio equipment',
      'Personal screens & entertainment',
      'Heart rate monitoring',
      'Spacious and well-ventilated area'
    ]
  },
  {
    id: 2,
    name: 'Free Weights',
    description: 'Dumbbells, barbells, and Olympic platforms for all levels. Our free weights area is designed for both beginners and advanced lifters, with plenty of space and mirrors for perfect form.',
    image: '/weight.jpg',
    highlights: [
      'Wide range of weights',
      'Olympic platforms',
      'Spotting racks',
      'Professional guidance available'
    ]
  },
  {
    id: 3,
    name: 'Functional Training',
    description: 'TRX, battle ropes, kettlebells, and more for dynamic, full-body workouts. Our functional zone is perfect for HIIT, circuit training, and improving athletic performance.',
    image: '/fun.jpg',
    highlights: [
      'TRX and battle ropes',
      'Kettlebells & medicine balls',
      'Agility ladders',
      'Open space for movement'
    ]
  },
  {
    id: 4,
    name: 'Group Classes',
    description: 'Join our group classes including HIIT, CrossFit, Zumba, and Yoga. Our spacious studio and expert instructors make every class fun and effective.',
    image: '/group.jpg',
    highlights: [
      'Daily group sessions',
      'Certified instructors',
      'Variety of class types',
      'Motivating community'
    ]
  },
  {
    id: 5,
    name: 'Recovery Center',
    description: 'Relax and recover in our sauna, steam room, and massage therapy center. We focus on holistic wellness and optimal recovery for all members.',
    image: '/recovery.jpg',
    highlights: [
      'Sauna & steam room',
      'Massage therapy',
      'Recovery tools',
      'Peaceful ambiance'
    ]
  },
  {
    id: 6,
    name: 'Nutrition Bar',
    description: 'Refuel with healthy shakes and snacks at our Nutrition Bar. We offer protein shakes, smoothies, and nutritious snacks for your post-workout needs.',
    image: '/nutrition.jpg',
    highlights: [
      'Protein shakes',
      'Fresh smoothies',
      'Healthy snacks',
      'Dietary advice'
    ]
  }
];

const LearnMore = () => {
  // Optionally, you can use location state to show specific facility details
  // For now, show all facilities
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg"
        >
          Facility Details
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilityDetails.map(facility => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: facility.id * 0.1 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-white/10 backdrop-blur-lg flex flex-col text-center group"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <img src={facility.image} alt={facility.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{facility.name}</h2>
                <p className="text-gray-200 text-base mb-4">{facility.description}</p>
                <ul className="text-left text-gray-300 mb-4 list-disc list-inside">
                  {facility.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
