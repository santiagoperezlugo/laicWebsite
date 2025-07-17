import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroHome from './pages/HeroHome';
import Events from './pages/Events';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroHome />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}