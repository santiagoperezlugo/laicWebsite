import React from 'react';
import './Clubs.css';
import Header from '../components/Header';

const clubs = [
  {
    id: 'laic',
    name: 'Latin American Identities Coalition',
    image: '/images/image.png',
    description: 'Umbrella organization uplifting Latinx orgs & voices across UVA through culture, community, and advocacy.',
    instagram: 'https://instagram.com/uvafm_laic'
  },
  {
    id: 'dance',
    name: 'Baile Social Club',
    image: '/images/Baile_Social.png',
    description: 'Sharing Latin dance, movement, and music while building confidence and community on & off the floor.',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'heritage',
    name: 'Heritage Dinner Committee',
    image: '/images/Heritage_Dinner.png',
    description: 'Annual celebration planning team spotlighting the diversity of Latin American cultures through food & performance.',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'copa',
    name: 'Copa Latine',
    image: '/images/Copa_24.png',
    description: 'Our signature fútbol tournament bringing students together in friendly competition and cultural pride.',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'merienda',
    name: 'Merienda on the Lawn',
    image: '/images/Merienda_24.png',
    description: 'Student-led pop up sharing cafecito, pan dulce, and conversation in iconic UVA spaces.',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'jeopardy',
    name: 'Music Jeopardy Night',
    image: '/images/Jeopardy24.png',
    description: 'Interactive Latin music trivia experience mixing fun, learning, and friendly competition.',
    instagram: 'https://instagram.com/'
  },
];

export default function Clubs() {
  return (
    <div className="clubs-page">
      <Header />
      <main className="clubs-main" aria-labelledby="clubs-title">
        <section className="clubs-hero">
          <h1 id="clubs-title" className="clubs-title">Clubs & Initiatives</h1>
          <p className="clubs-tag">Explore Latinx-led communities, programs, and traditions at UVA</p>
        </section>

        <section className="clubs-grid-wrapper">
          <ul className="clubs-grid" aria-label="Clubs and initiatives list">
            {clubs.map((club) => (
              <li key={club.id} className="club-card" tabIndex={0} aria-label={club.name}>
                <div className="club-media">
                  <img src={club.image} alt={club.name} loading="lazy" onError={(e)=>{e.currentTarget.src='/images/image.png';}} />
                </div>
                <div className="club-body">
                  <h2 className="club-name">{club.name}</h2>
                  <p className="club-desc">{club.description}</p>
                </div>
                <a className="club-ig" href={club.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${club.name} Instagram`}>
                  <img src="/images/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
