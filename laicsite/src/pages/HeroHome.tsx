import React from 'react';
import { Link } from 'react-router-dom';
import './HeroHome.css';


const TABS = ['ABOUT', 'EVENTS', 'CLUBS', 'RESOURCES', 'CONTACT'];

export default function HeroHome() {
  return (
    <div className="hero">
      <div className="hero-content">
        <img
          src="/images/image.png"
          alt="LAIC logo"
          className="hero-logo"
        />
        <h1 className="hero-subtitle">LATIN AMERICAN IDENTITIES COALITION</h1>
        <nav className="hero-nav">
          {TABS.map(tab => (
            <Link key={tab} to={`/${tab.toLowerCase()}`} className="hero-link">
              {tab}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
