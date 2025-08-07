import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroHome from './pages/HeroHome';
import Events from './pages/Events';
import Exec from './pages/Exec';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HeroHome/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/exec" element={<Exec/>}/>
      </Routes>
    </BrowserRouter>
  );
}