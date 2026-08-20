import React from 'react';
import { Link } from 'react-router-dom';
import './HeroHome.css';
import lsaLogo from '../assets/lsa-logo.png';

const TABS = ['ABOUT', 'EVENTS', 'CLUBS', 'RESOURCES', 'CONTACT'];

export default function HeroHome() {
  return (
    <div className="hero">
      <div className="hero-content">
        <img
          src={lsaLogo}
          alt="Latinx Student Association logo"
          className="hero-logo"
        />

        <h1 className="hero-subtitle">
          LATINX STUDENT ASSOCIATION
        </h1>

        <p className="hero-tagline">
          "Celebrating Latinx identities at UVA and beyond"
        </p>

        <nav className="hero-nav">
          {TABS.map(tab => (
            <Link
              key={tab}
              to={`/${tab.toLowerCase()}`}
              className="hero-link"
            >
              {tab}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}