import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Membership = () => {
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

  // Membership plans data
  const USD_TO_INR = 83; // Conversion rate
  const memberships = [
    { 
      id: 1, 
      name: "Starter", 
      priceUSD: 39, 
      duration: "Monthly", 
      features: [
        "Access to gym",
        "Locker room",
        "Basic equipment",
        "1 free session",
        "Group classes (2/month)"
      ],
      popular: false
    },
    { 
      id: 2, 
      name: "Pro", 
      priceUSD: 69, 
      duration: "Monthly", 
      features: [
        "All Starter features",
        "Personal trainer (2 sessions)",
        "Classes included",
        "Recovery center access",
        "Nutrition plan",
        "Progress tracking"
      ],
      popular: true
    },
    { 
      id: 3, 
      name: "Elite", 
      priceUSD: 99, 
      duration: "Monthly", 
      features: [
        "All Pro features",
        "Unlimited classes",
        "VIP lounge access",
        "Priority booking",
        "Custom meal plan",
        "Monthly progress review",
        "Guest passes (2/month)"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Membership Plans</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {memberships.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={slideUp}
                whileHover={{ y: -10 }}
                className={`rounded-2xl overflow-hidden border-2 ${
                  plan.popular ? 'border-red-500 transform scale-105 shadow-2xl shadow-red-500/20' : 'border-gray-700'
                }`}
              >
                <div className={`p-6 text-center ${
                  plan.popular ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white' : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white'
                }`}>
                  {plan.popular && (
                    <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">
                      ${plan.priceUSD} <span className="text-lg">USD</span>
                      <span className="block text-2xl font-semibold text-green-400 mt-1">
                        ₹{(plan.priceUSD * USD_TO_INR).toLocaleString()} INR
                      </span>
                    </span>
                    <span className="text-lg">/{plan.duration}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-bold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600' 
                        : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-600 hover:from-gray-600 hover:to-gray-700'
                    } transition-all`}
                  >
                    Select Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Membership?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Flexible Options</h3>
                <p className="text-gray-300">Choose from monthly, quarterly, or annual plans with no long-term commitment required. Pause or cancel anytime with our flexible membership terms.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Value Added Services</h3>
                <p className="text-gray-300">All memberships include access to our premium services like nutrition consultations, fitness assessments, and exclusive member events.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Family Packages</h3>
                <p className="text-gray-300">Save more with our family membership options that allow multiple family members to enjoy all the benefits of our facility.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">Money-Back Guarantee</h3>
                <p className="text-gray-300">Not satisfied within the first 30 days? We offer a money-back guarantee to ensure you're completely happy with your investment.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Our membership advisors are here to help you choose the perfect plan for your fitness goals and budget. Contact us today for a personalized consultation.
            </p>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:from-red-700 hover:to-orange-600 transition-all">
                Contact Membership Team
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Membership;