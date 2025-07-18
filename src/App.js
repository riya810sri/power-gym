// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import LabsPage from './pages/LabsPage';
import Courses from './pages/Courses';
import LearnPage from './pages/LearnPage';
// make sure this file exists


export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<LearnPage />} />
        
      </Routes>
   
  );
}
