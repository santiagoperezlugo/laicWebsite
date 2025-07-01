import React from 'react';
import './Header.css';

const TABS = ['HOME', 'CLUBS', 'EVENTS', 'ARTICLES', 'RESOURCES'];

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          {TABS.map(tab => (
            <li key={tab}>
              <a href="#">{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
