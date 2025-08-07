import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroHome from './pages/HeroHome';
import Events from './pages/Events';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HeroHome/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}