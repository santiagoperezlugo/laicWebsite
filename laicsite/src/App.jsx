import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeroHome from './pages/HeroHome';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Clubs from './pages/Clubs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HeroHome />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
  <Route path="/clubs" element={<Clubs />} />
  <Route path="/resources" element={<Resources />} />
  <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}