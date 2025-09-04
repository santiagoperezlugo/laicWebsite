
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const TABS = ['HOME', 'ABOUT', 'EVENTS', 'CLUBS', 'RESOURCES', 'CONTACT'];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide header when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-content">
        <nav className="header-nav">
          {TABS.map(tab => (
            <Link key={tab} to={`/${tab.toLowerCase()}`} className="header-link">
              {tab}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}