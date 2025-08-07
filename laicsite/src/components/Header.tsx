
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const TABS = ['HOME', 'EVENTS', 'EXEC', 'CLUBS', 'ARTICLES', 'RESOURCES'];

export default function Header() {
  return (
    <header className="header">
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