import React from "react";
import "./About.css"; 
import Header from '../components/Header';

const execs = [
  {
    name: "Steven Santos",
    role: "Co-President",
    image: "/images/Steven.jpg",
    bio: "Steven's Bio ",
  },
  {
    name: "Yadira Gomez",
    role: "Co-President",
    image: "/images/Yadira.jpg",
    bio: "Yadira's Bio",
  },
  {
    name: "Nicole Checker",
    role: "Vice President",
    image: "/images/Nicole.jpg",
    bio: "I am a Computure Science major. I am from Jackson Hole Wyoming and I am Mexican. A fun fact about me is that I am afraid of butterflies. I joined LAIC because I wanted to be part of a community that celebrates Latinx culture and creates a space where we can feel seen, supported, and proud of who we are.",
  },
  {
    name: "Angeline Damian",
    role: "Secretary",
    image: "/images/Angeline.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Esther Casco",
    role: "Public Relations",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Melani Silva",
    role: "Public Relations",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Agustin Hansen-Vik",
    role: "Treasurer",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Cynthia Gutierrez",
    role: "Treasurer",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Epi Francisco",
    role: "Historian",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Selma Perez",
    role: "Event Cordinator",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Adrian Celaya",
    role: "Event Cordinator",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Eric Thompson",
    role: "Event Cordinator",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Santi Perez",
    role: "Event Cordinator",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  {
    name: "Madison Sejas Siles",
    role: "Event Cordinator",
    image: "/images/Boop.jpg",
    bio:"I'm a Computer Science major from Fairfax, VA. I'm Bolivian and Argentine, and I love fishing. I joined LAIC because community is my favorite aspect of our culture, through LAIC I can host events that uplift and unify the Latinx community at UVA, ensuring that Latinx students have a home away from home",
  },
  {
    name: "Jimmy Sejas",
    role: "Event Cordinator",
    image: "/images/Boop.jpg",
    bio: "Boop Boop ",
  },
  
];

const Exec = () => {
  return (
    <div className="exec-page">
        <Header/>
      <div className="exec-wrapper">
        <h1 className="exec-title">Meet the Exec Team</h1>
        <div className="exec-grid">
          {execs.map((member, index) => (
            <div key={index} className="exec-card">
              <img src={member.image} alt={member.name} className="exec-img" />
              <h3>{member.name}</h3>
              <p className="exec-role">{member.role}</p>
              <p className="exec-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exec;
