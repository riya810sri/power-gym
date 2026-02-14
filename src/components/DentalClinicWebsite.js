import React from 'react';
import { motion } from 'framer-motion';

const DentalClinicWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SmileCare Dental Clinic</h1>
            <p className="text-xl mb-6">Advanced Dental Care & Implants</p>
            <p className="text-2xl font-semibold mb-8">Healthy Smile. Trusted Care.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                📞 Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                📍 Get Directions
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1588776813677-77d597b1a7bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Modern dental clinic interior"
              className="rounded-xl shadow-xl object-cover w-full h-64 md:h-80"
            />
          </motion.div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About the Doctor</h2>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="md:w-1/3 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea811ec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Dr. Rajesh Sharma, BDS, MDS"
                className="rounded-full border-4 border-blue-200 object-cover w-64 h-64"
              />
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Dr. Rajesh Sharma</h3>
              <p className="text-lg text-gray-600 mb-4">BDS, MDS (Implant Specialist) • 10+ Years Experience</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We provide safe, hygienic and advanced dental treatments with modern equipment. 
                Our clinic follows international sterilization protocols to ensure patient safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dental Implants", desc: "Permanent solution for missing teeth" },
              { title: "Root Canal Treatment (RCT)", desc: "Save infected teeth with minimal discomfort" },
              { title: "Teeth Cleaning & Polishing", desc: "Professional cleaning for optimal oral health" },
              { title: "Braces & Aligners", desc: "Straighten teeth with modern orthodontics" },
              { title: "Tooth Extraction", desc: "Safe and painless extraction procedures" },
              { title: "Cosmetic Dentistry", desc: "Enhance your smile with aesthetic procedures" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✔</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Why Choose Us</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Experienced Dentist", desc: "10+ years of expertise" },
              { title: "Modern Equipment", desc: "Latest technology for treatment" },
              { title: "Affordable Treatment", desc: "Quality care at reasonable prices" },
              { title: "Clean & Hygienic Clinic", desc: "Sterilized instruments & environment" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100"
              >
                <div className="flex flex-col items-center">
                  <span className="text-green-500 text-2xl mb-3">✔</span>
                  <h3 className="text-lg font-bold text-blue-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Clinic Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-xl mr-3">📍</span>
                  <div>
                    <h4 className="font-bold">Clinic Address</h4>
                    <p className="text-blue-100">123 Dental Avenue, Health District, City, State - 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-xl mr-3">📞</span>
                  <div>
                    <h4 className="font-bold">Phone Number</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-xl mr-3">🕒</span>
                  <div>
                    <h4 className="font-bold">Clinic Timing</h4>
                    <p className="text-blue-100">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-blue-100">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1606124201947-80e4d5e1b6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Clinic location map"
                className="rounded-xl shadow-lg object-cover w-full h-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition-colors w-full"
              >
                📩 WhatsApp Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DentalClinicWebsite;