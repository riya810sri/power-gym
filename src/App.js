import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Trainers from './pages/Trainers';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import DentalClinicWebsite from './components/DentalClinicWebsite';

import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Apply dark theme class only to specific routes
  const isDarkThemeRoute = !location.pathname.includes('/dental-clinic');

  return (
    <div className={`${isDarkThemeRoute ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      <div className={`${isDarkThemeRoute ? '' : 'min-h-screen'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dental-clinic" element={<DentalClinicWebsite />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;