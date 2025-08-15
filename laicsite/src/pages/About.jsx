import React from 'react';
import './About.css';
import ExecCardSwiper from '../components/ExecCardSwiper';
import Header from '../components/Header';

const execs = [
  { name: 'Steven Santos', role: 'Co-President', image: '/images/image.png', bio: "Steven's Bio " },
  { name: 'Yadira Gomez', role: 'Co-President', image: '/images/image.png', bio: "Yadira's Bio" },
  { name: 'Nicole Checker', role: 'Vice President', image: '/images/image.png', bio: 'I am a Computure Science major. I am from Jackson Hole Wyoming and I am Mexican. A fun fact about me is that I am afraid of butterflies. I joined LAIC because I wanted to be part of a community that celebrates Latinx culture and creates a space where we can feel seen, supported, and proud of who we are.' },
  { name: 'Angeline Damian', role: 'Secretary', image: '/images/Angeline.jpg', bio: 'Boop Boop ' },
  { name: 'Esther Casco', role: 'Public Relations', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Melani Silva', role: 'Public Relations', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Agustin Hansen-Vik', role: 'Treasurer', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Cynthia Gutierrez', role: 'Treasurer', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Epi Francisco', role: 'Historian', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Selma Perez', role: 'Event Cordinator', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Adrian Celaya', role: 'Event Cordinator', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Eric Thompson', role: 'Event Cordinator', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Santi Perez', role: 'Event Cordinator', image: '/images/image.png', bio: 'Boop Boop ' },
  { name: 'Madison Sejas Siles', role: 'Event Cordinator', image: '/images/image.png', bio: "I'm a Computer Science major from Fairfax, VA. I'm Bolivian and Argentine, and I love fishing. I joined LAIC because community is my favorite aspect of our culture, through LAIC I can host events that uplift and unify the Latinx community at UVA, ensuring that Latinx students have a home away from home" },
  { name: 'Jimmy Sejas', role: 'Event Cordinator', image: '/images/image.png', bio: 'Boop Boop ' },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero">
          <h1 className="about-title">Our Executive Board</h1>
        </section>

        <section className="about-exec">
          <div className="exec-swiper-container">
            <ExecCardSwiper people={execs} />
          </div>
        </section>
      </main>
    </>
  );
}