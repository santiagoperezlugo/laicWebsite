import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroHome from './pages/HeroHome';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroHome />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}