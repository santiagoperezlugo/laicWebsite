import React from 'react';
import './Clubs.css';
import Header from '../components/Header';

const clubs = [
  {
    id: 'ALSO',
    name: 'Afro-Latinx Student Organization at UVA',
    image: '/images/clubs/ALSO.jpg',
    description: 'Our mission is to create a more inclusive, educational, and unifying space for Afro-Latinx & African-diasporic students.',
    instagram: 'https://www.instagram.com/alsoatuva/'
  },
  {
    id: ' ALPFA',
    name: 'Association of Lation Professionals for America',
    image: '/images/clubs/ALPFA.jpg',
    description: 'The Latino Medical Student Association at the University of Virginia School of Medicine',
    instagram: 'https://www.instagram.com/alpfa.uva/'
  },
  {
    id: 'BLN',
    name: 'Batten Latinx Network',
    image: '/images/clubs/bln.png',
    description: 'Creating a community of future policymaking Latinx students that will support one another in their academic, social, and professional pursuits.',
    instagram: 'https://www.instagram.com/uva_bln/'
  },
  {
    id: 'CAFE',
    name: 'Central Americans for Empowerment',
    image: '/images/clubs/CAFE.jpg',
    description: 'Central Americans for Empowerment at UVA empowers CentAm students through political/cultural education and advocacy.',
    instagram: 'https://www.instagram.com/cafeatuva/'
  },
  {
    id: 'CLARO',
    name: 'Cultural Latinx Advancement for Resources & Opportunities',
    image: '/images/clubs/claro.jpg',
    description: 'Cultural Latinx Advancement for Resources & Opportunities @ the University of Virginia 💙',
    instagram: 'https://www.instagram.com/claroatuva/'
  },
  {
    id: 'FUEGO',
    name: 'Fuego',
    image: '/images/clubs/fuego.jpg',
    description: 'We are Fuego Dance Team @ UVA that celebrates Latin American culture',
    instagram: 'https://www.instagram.com/fuegodanceteam/'
  },
  {
    id: 'LEAF',
    name: 'Latinx Empowerment and Financial-Literacy',
    image: '/images/clubs/LEAF.jpg',
    description: 'Latinx Empowerment and Financial-Literacy aims to empower Latinx students at the University of Virginia through educational workshops and more!',
    instagram: 'https://www.instagram.com/cafeatuva/'
  },
  {
    id: 'LNSU',
    name: 'Latinx Student Network (LSN)',
    image: '/images/clubs/LSN.jpg',
    description: 'We are an undergraduate Commerce-related organization with the mission to recruit, support, develop, and engage with the Latinx community at McIntire.',
    instagram: 'https://www.instagram.com/lsn_uva/'
  },
  {
    id: 'LLI',
    name: 'Latin Leadership Insititute',
    image: '/images/clubs/lli.png',
    description: 'The Latinx Leadership Institute is a student-led, and cohort-based leadership development program for 1st, 2nd, and 3rd Year Latinx emerging leaders.',
    instagram: 'https://www.instagram.com/lliatuva/'
  },
  {
    id: 'LMSA',
    name: 'Latino Medical Student Association',
    image: '/images/clubs/lmsa.png',
    description: 'The Latino Medical Student Association at the University of Virginia School of Medicine',
    instagram: 'https://www.instagram.com/uvalmsa/'
  },
  {
    id: 'LUL',
    name: 'ΛΥΛ AE',
    image: '/images/clubs/LUL.jpg',
    description: 'La Unidad Latina, ΛΥΛ Fraternity, Inc. | @lambdas1982 AE Chapter | Est. December 10th, 1999 University of Virginia | @uva',
    instagram: 'https://www.instagram.com/lul_ae/'
  },
  {
    id: 'OPBSI',
    name: 'The Iota Chapter of Omega Phi Beta Sorority, Inc.',
    image: '/images/clubs/OPBSI.JPG',
    description: 'The Iota Chapter of Omega Phi Beta Sorority, Inc. 🌻 📍 Est. 1998 at the University of Virginia 💛 “Serving and Educating Through Our Diversity”',
    instagram: 'https://www.instagram.com/opbsi_iota/'
  },
  {
    id: 'PMP',
    name: ' Peer Mentoring Program',
    image: '/images/clubs/pmp.png',
    description: 'Interactive Latin music trivia experience mixing fun, learning, and friendly competition.',
    instagram: 'https://www.instagram.com/pmpuva/'
  },
  {
    id: 'PLUMAS',
    name: 'Political Latinxs United for Movement & Action in Society',
    image: '/images/clubs/plumas.jpg',
    description: 'Political Latinxs United for Movement & Action in Society is a radical group aimed towards community, justice & liberation at all fronts.',
    instagram: 'https://www.instagram.com/plumasatuva/'
  },
  {
    id: 'SHPE',
    name: 'Society of Hispanic Professional Engineers',
    image: '/images/clubs/shpe.jpg',
    description: 'Society of Hispanic Professional Engineers UVA Chapter Established in 2000',
    instagram: 'https://www.instagram.com/shpe_uva/'
  },
  {
    id: 'SLU',
    name: 'Sigma Lambda Upsilon',
    image: '/images/clubs/SLU.jpg',
    description: '💃🏽💃🏿💃🏻💃 The AdmiRable Alpha Rho Chapter at the University of Virginia since 2013 | Sincerity, Loyalty, Unity ❤️🖤💛 ',
    instagram: 'https://www.instagram.com/slu_alpharho/'
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
