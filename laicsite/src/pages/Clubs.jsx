import React from 'react';
import './Clubs.css';
import Header from '../components/Header';

const clubs = [
  {
    id: 'claro',
    name: 'Cultural Latinx Advancement for Resources & Opportunities',
    image: '/images/clubs/claro.jpg',
    description: 'Cultural Latinx Advancement for Resources & Opportunities @ the University of Virginia 💙',
    instagram: 'https://www.instagram.com/claroatuva/'
  },
  {
    id: 'bln',
    name: 'Batten Latinx Network',
    image: '/images/clubs/bln.png',
    description: 'Creating a community of future policymaking Latinx students that will support one another in their academic, social, and professional pursuits.',
    instagram: 'https://www.instagram.com/uva_bln/'
  },
  {
    id: 'shpe',
    name: 'Society of Hispanic Professional Engineers',
    image: '/images/clubs/shpe.jpg',
    description: 'Society of Hispanic Professional Engineers UVA Chapter Established in 2000',
    instagram: 'https://www.instagram.com/shpe_uva/'
  },
  {
    id: 'plumas',
    name: 'Political Latinxs United for Movement & Action in Society',
    image: '/images/clubs/plumas.jpg',
    description: 'Political Latinxs United for Movement & Action in Society is a radical group aimed towards community, justice & liberation at all fronts.',
    instagram: 'https://www.instagram.com/plumasatuva/'
  },
  {
    id: 'lli',
    name: 'Latin Leadership Insititute',
    image: '/images/clubs/lli.png',
    description: 'The Latinx Leadership Institute is a student-led, and cohort-based leadership development program for 1st, 2nd, and 3rd Year Latinx emerging leaders.',
    instagram: 'https://www.instagram.com/lliatuva/'
  },
  {
    id: 'pmp',
    name: ' Peer Mentoring Program',
    image: '/images/clubs/pmp.png',
    description: 'Interactive Latin music trivia experience mixing fun, learning, and friendly competition.',
    instagram: 'https://www.instagram.com/pmpuva/'
  },
  {
    id: 'fuego',
    name: 'Fuego',
    image: '/images/clubs/fuego.jpg',
    description: 'We are Fuego Dance Team @ UVA that celebrates Latin American culture',
    instagram: 'https://www.instagram.com/fuegodanceteam/'
  },
  {
    id: 'lmsa',
    name: 'Latino Medical Student Association',
    image: '/images/clubs/lmsa.png',
    description: 'The Latino Medical Student Association at the University of Virginia School of Medicine',
    instagram: 'https://www.instagram.com/uvalmsa/'
  }
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
