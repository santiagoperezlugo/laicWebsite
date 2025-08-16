import React from 'react';
import './About.css';
import ExecCardSwiper from '../components/ExecCardSwiper';
import Header from '../components/Header';

const execs = [
  // Co-Presidents (alphabetical by name)
  {
    name: 'Steven Santos',
    role: 'Co-President',
    image: '/images/exec/steven.jpeg',
    hometown: 'Columbia, Maryland',
    major: 'Economics',
    ethnicity: 'Honduran & German',
    funFact:
      'I was feet from an 18-foot gator',
    whyLaic:
      'I joined LAIC looking for a community that felt like home—people who understand my background, culture, and the little things that make being Latinx special. LAIC gave me that and more: friendships, pride in my identity, and a space to grow and give back.',
  },
  {
    name: 'Yadira Gomez',
    role: 'Co-President',
    image: '/images/exec/yadira.jpeg',
    hometown: 'Eastern Shore, Virginia',
    major: 'Kinesiology',
    ethnicity: 'Mexican',
    funFact: 'I love baking and exploring local cafés',
    whyLaic:
      'LAIC has helped me grow and connect with people passionate about uplifting the Latinx community at UVA. It’s comforting to be around those who share your culture and values. Thank you LAIC for creating a safe space to proudly celebrate our Latinx identities!',
  },

  // Vice President
  {
    name: 'Nicole Checker',
    role: 'Vice President',
    image: '/images/exec/nicole.jpeg',
    hometown: 'Jackson Hole, Wyoming',
    major: 'Computer Science',
    ethnicity: 'Mexican',
    funFact: 'I am afraid of butterflies',
    whyLaic:
      'I joined LAIC to be part of a community that celebrates Latinx culture and creates a space where we can feel seen, supported, and proud of who we are.',
  },

  // Secretary
  {
    name: 'Angeline Damian',
    role: 'Secretary',
    image: '/images/exec/angeline.jpeg',
    hometown: 'West New York, NJ',
    major: 'Behavioral Neuroscience',
    ethnicity: 'Ecuadorian & Peruvian',
    funFact: 'I can touch my nose with my tongue 🐶',
    whyLaic:
      'LAIC helped me find a space to connect with students who share similar life experiences and cultural backgrounds. Now I want to pay that forward so others can find the same community, friendship, and support.',
  },

  // Treasurers (alphabetical)
  {
    name: 'Agustin Hansen-Vik',
    role: 'Treasurer',
    image: '/images/exec/agustin.jpeg',
    hometown: 'Leesburg, Virginia',
    major: 'Economics',
    ethnicity: 'Ecuadorian',
    funFact: 'I got bit by a dolphin',
    whyLaic:
      'I’ve been lucky to have strong Hispanic mentors, and I want to be that kind of support for others.',
  },
  {
    name: 'Cynthia Gutierrez',
    role: 'Treasurer',
    image: '/images/exec/cynthia.jpeg',
  },

  // Public Relations (alphabetical)
  {
    name: 'Esther Casco',
    role: 'Public Relations',
    image: '/images/exec/esther.jpeg',
    hometown: 'Woodbridge, VA',
    major: 'Computer Science',
    ethnicity: 'Honduran',
    funFact: 'I love Red Bull',
    whyLaic:
      'I want to help create spaces where the Latinx community at UVA can feel seen and connected. As PR chair, I’m proud to use my skills to build belonging and unity.',
  },
  {
    name: 'Melani Silva',
    role: 'Public Relations',
    image: '/images/exec/melani.jpeg',
    hometown: 'Falls Church, VA',
    major: 'Economics',
    ethnicity: 'Honduran',
    funFact: 'I can play the viola!',
    whyLaic:
      'Going into college can be scary, and the people you meet make all the difference. I joined LAIC to help incoming students find community and belonging while representing their Latin roots.',
  },

  // Historian
  {
    name: 'Epi Francisco',
    role: 'Historian',
    image: '/images/image.png',
    hometown: 'Hilton Head Island, SC',
    major: 'Kinesiology',
    ethnicity: 'Mexican',
    funFact: 'I’m obsessed with NYT games',
    whyLaic: 'LAIC is a home away from home',
  },

  // Event Coordinators (alphabetical)
  {
    name: 'Adrian Celaya',
    role: 'Event Cordinator',
    image: '/images/exec/adrian.jpeg',
    hometown: 'Virginia Beach, VA',
    major: 'Mechanical Engineering',
    ethnicity: 'Mexican',
    funFact: 'I grew up in Atlanta, Georgia',
    whyLaic:
      'I want to help bring our community closer, celebrate our culture, and host fun, meaningful events to share together.',
  },
  {
    name: 'Eric Thompson',
    role: 'Event Cordinator',
    image: '/images/exec/eric.jpeg',
    hometown: 'Centreville, VA',
    major: 'Commerce & Computer Science',
    ethnicity: 'Puerto Rican',
    funFact: 'I have a twin brother',
    whyLaic:
      'I attended many LAIC events my first year and wanted to help host more social events for the Latinx community at UVA.',
  },
  {
    name: 'Jimmy Sejas',
    role: 'Event Cordinator',
    image: '/images/exec/jimmy.jpeg',
    hometown: 'Manassas, VA',
    major: 'Mechanical Engineering',
    ethnicity: 'Bolivian',
    funFact: 'I own over 80 pairs of shoes',
    whyLaic:
      'I love bringing together a community of people!',
  },
  {
    name: 'Madison Sejas Siles',
    role: 'Event Cordinator',
    image: '/images/exec/Madison.jpeg',
    hometown: 'Fairfax, VA',
    major: 'Computer Science',
    ethnicity: 'Bolivian & Argentine',
    funFact: 'I love fishing',
    whyLaic:
      'Community is my favorite aspect of our culture. Through LAIC I can host events that uplift and unify the Latinx community at UVA, giving students a home away from home.',
  },
  {
    name: 'Santiago Perez',
    role: 'Event Cordinator',
    image: '/images/exec/santi.jpeg',
    hometown: 'Arlington, VA',
    major: 'Computer Science',
    ethnicity: 'Mexican',
    funFact: 'I have lived in 3 countries',
    whyLaic:
      'I want to help build the latin community into a family',
  },
  {
    name: 'Selma Perez',
    role: 'Event Cordinator',
    image: '/images/image.png',
    hometown: 'Alexandria, VA',
    major: 'Government',
    ethnicity: 'Salvadoran',
    funFact: 'I collect Sonny Angels',
    whyLaic:
      'I chose LAIC for the space and community it brings for Latinas at a PWI. Creating welcoming events has allowed me to uplift others and positively impact our community—something I’m extremely grateful for.',
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        {/* Mission */}
        <section className="about-mission about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-lead">
            Where Latinx leaders grow, connect, and uplift. Celebrating Latinx identities at UVA and beyond.
          </p>
        </section>

        <section className="about-hero">
          <h1 className="about-title">Meet our Executive Board</h1>
        </section>

        <section className="about-exec">
          <div className="exec-swiper-container">
            <ExecCardSwiper people={execs} />
          </div>
        </section>
        
        {/* What we do / value-add under Exec */}
        <section className="about-programs about-section">
          <h2 className="section-title">What We Do</h2>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-emoji" aria-hidden>🤝</div>
              <h3>Community & Social</h3>
              <p>GBMs, socials, and mixers that make Grounds feel like home.</p>
            </article>
            <article className="feature-card">
              <div className="feature-emoji" aria-hidden>🎉</div>
              <h3>Culture & Celebration</h3>
              <p>Heritage events that honor and uplift Latinx identities.</p>
            </article>
            <article className="feature-card">
              <div className="feature-emoji" aria-hidden>🚀</div>
              <h3>Leadership & Growth</h3>
              <p>Opportunities to lead, learn, and serve on and off Grounds.</p>
            </article>
            <article className="feature-card">
              <div className="feature-emoji" aria-hidden>🧡</div>
              <h3>Service & Advocacy</h3>
              <p>Building solidarity and giving back to the wider community.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}