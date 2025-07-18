import React, { useState } from 'react';
import './Events.css';
import Header from '../components/Header';


const Events = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  const events = {
    '2024-2025': [
      {
        title: 'Field Day',
        date: "August 29th, 2024",
        status: 'past',
        image: '/images/FieldDayFall24.png',
  
      },
      {
        title: 'Feliz Friday',
        date: "August 30th, 2024",
        status: 'past',
        image: '/images/Feliz_Friday.jpg',
      },
      {
        title: "S'more night",
        date: "September 5th, 2024",
        status: 'past',
        image: '/images/Smores_Night.jpg',
      },
      {
        title: "LAIC GBM #1",
        date: "September 6th, 2024",
        status: 'past',
        image: '/images/GBM_1_24.png',

      },
      { 
        title: "Volleyball Tournament",
        date: "September 21st, 2024",
        status: 'past',
        image: '/images/Volleyball_24.png',
      },
      { 
        title: "Baile Social",
        date: "October 21st, 2024",
        status: 'past',
        image: '/images/Baile_Social.png',
      },
      { 
        title: "Hispanic Heritage Month Dinner",
        date: "October 21st, 2024",
        status: 'past',
        image: '/images/Heritage_Dinner.png',
      },
      { 
        title: "Merienda on the Lawn",
        date: "October 10th, 2024",
        status: 'past',
        image: '/images/Merienda_24.png',
      },
      { 
        title: "Latinx Ball",
        date: "November 16th, 2024",
        status: 'past',
        image: '/images/LatinxBall_24.png',
      },
    
     { 
        title: "Copa Latine",
        date: "November 9th, 2024",
        status: 'past',
        image: '/images/Copa_24.png',
      },
      { 
        title: "Pie an Exec",
        date: "November 8th, 2024",
        status: 'past',
        image: '/images/Pie.png',
      },
      { 
        title: "Día de los Muertos Pop Up",
        date: "November 8th, 2024",
        status: 'past',
        image: '/images/DiaDeLosM.png',
      },
      { 
        title: "General Body Meeting Friendly Speed Dating",
        date: "February 6th, 2025",
        status: 'past',
        image: '/images/SpeedDating.png',
      },
      { 
        title: "Music Jeopardy Night",
        date: "March 31st, 2025",
        status: 'past',
        image: '/images/Jeopardy24.png',
      },
      { 
        title: "Tote Bag & Bracelet Making",
        date: "April 15th, 2025",
        status: 'past',
        image: '/images/ToteBag24.png',
      },
      { 
        title: "4th Year Farewell x Carne Asada",
        date: "April 26th, 2025",
        status: 'past',
        image: '/images/Farewell25.png',
      },
      { 
        title: "Agua Frescas & Horchata Fundraiser",
        date: "April 14th, 2025",
        status: 'past',
        image: '/images/Agua.png',
      },
      { 
        title: "Field Day",
        date: "April 25th, 2025",
        status: 'past',
        image: '/images/FieldDaySpring25.png',
      },
    ],
    '2025-2026': [
      {
        title: 'Event 1.1',
        date: "Jun 01, 2025",
        status: 'upcoming',
        image: '/images/Event1.1.jpg',
      },
    ],
  };

  
  return (
    <div className="events-page">
      <Header /> {}

      <div className="events-wrapper">
        <h1 className="events-title">Events</h1>

        <div className="year-selector">
          <button
            onClick={() => setSelectedYear('2024-2025')}
            className={selectedYear === '2024-2025' ? 'active' : ''}
          >
            2024-2025
          </button>
          <button
            onClick={() => setSelectedYear('2025-2026')}
            className={selectedYear === '2025-2026' ? 'active' : ''}
          >
            2025-2026
          </button>
        </div>

        <div className="event-grid">
          {events[selectedYear].map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="event-content">
                <div className={`status ${event.status}`}>{event.status}</div>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
