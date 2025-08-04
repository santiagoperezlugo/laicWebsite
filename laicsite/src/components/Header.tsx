import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const TABS = ['HOME', 'EVENTS', 'EXEC', 'CLUBS', 'RESOURCES'];

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          {TABS.map(tab => (
            <li key={tab}>
                <Link to={tab === 'HOME' ? '/' : `/${tab.toLowerCase()}`}>
                {tab}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
