// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import LabsPage from './pages/LabsPage';
import Courses from './pages/Courses';
import LearnPage from './pages/LearnPage';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
// make sure this file exists


export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<LearnPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
