import React from 'react';
import Header from '../components/header';
import './HomePage.css';

const HomePage: React.FC = () => (
  <div className="home-page">
    <Header />
    <section className="home-wrapper">
      <h1 className="home-title">LAIC</h1>
      <p className="home-tagline">Latin American Community at UVA</p>
    </section>
  </div>
);

export default HomePage;