import React, { useState } from 'react';
import './Events.css';
import Header from '../components/Header';


const Events = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  const events = {
    '2024-2025': [
      {
        title: 'Field Day',
        date: "2024-08-29",
        image: '/images/FieldDayFall24.png',
  
      },
      {
        title: 'Feliz Friday',
        date: "2024-08-30",
        image: '/images/Feliz_Friday.jpg',
      },
      {
        title: "S'more night",
        date: "2024-09-05",
        image: '/images/Smores_Night.jpg',
      },
      {
        title: "LAIC GBM #1",
        date: "2024-09-06",
        image: '/images/GBM_1_24.png',

      },
      { 
        title: "Volleyball Tournament",
        date: "2024-09-21",
        image: '/images/Volleyball_24.png',
      },
      { 
        title: "Baile Social",
        date: "2024-10-03",
        image: '/images/Baile_Social.png',
      },
      { 
        title: "Hispanic Heritage Month Dinner",
        date: "2024-10-21",
        image: '/images/Heritage_Dinner.png',
      },
      { 
        title: "Merienda on the Lawn",
        date: "2024-10-21",
        image: '/images/Merienda_24.png',
      },
      { 
        title: "Latinx Ball",
        date: "2024-11-16",
        image: '/images/LatinxBall_24.png',
      },
    
     { 
        title: "Copa Latine",
        date: "2024-11-09",
        image: '/images/Copa_24.png',
      },
      { 
        title: "Pie an Exec",
        date: "2024-11-08",
        image: '/images/Pie.png',
      },
      { 
        title: "Día de los Muertos Pop Up",
        date: "2024-11-08",
        image: '/images/DiaDeLosM.png',
      },
      { 
        title: "General Body Meeting Friendly Speed Dating",
        date: "2025-02-06",
        image: '/images/SpeedDating.png',
      },
      { 
        title: "Music Jeopardy Night",
        date: "2025-03-31",
        image: '/images/Jeopardy24.png',
      },
      { 
        title: "Tote Bag & Bracelet Making",
        date: "2025-04-15",
        image: '/images/ToteBag24.png',
      },
      { 
        title: "4th Year Farewell x Carne Asada",
        date: "2025-04-26",
        image: '/images/Farewell25.png',
      },
      { 
        title: "Agua Frescas & Horchata Fundraiser",
        date: "2025-04-14",
        image: '/images/Agua.png',
      },
      { 
        title: "Field Day",
        date: "2025-04-25",
        image: '/images/FieldDaySpring25.png',
      },
    ],
    '2025-2026': [
      {
        title: 'Event 1.1',
        date: "2025-06-01",
        image: '/images/Event1.1.jpg',
      },
      {
        title: 'Event 1.1',
        date: "2025-06-01",
        image: '/images/Event1.1.jpg',
      },
      {
        title: 'Event 1.1',
        date: "2025-08-04",
        image: '/images/Event1.1.jpg',
      },
    ],
  };

  const getStatus = (dateString) => {
    const today = new Date();
    const eventDate = new Date(dateString + 'T00:00:00');

    today.setHours(0,0,0,0);

    if (eventDate.getTime()=== today.getTime()) return "TODAY";
    if (eventDate< today) return "PAST";
    return "UPCOMING";
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
          {[...events[selectedYear]]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((event, index) => {
              const [year, month, day] = event.date.split("-");
              const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
              const prettyDate = `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;

              return (
                <div key={index} className="event-card">
                  <img src={event.image} alt={event.title} className="event-img" />
                  <div className="event-content">
                  <div className={`status ${getStatus(event.date)}`}>
                    {getStatus(event.date)}
                    </div>
                    <h3>{event.title}</h3>
                    <p>{prettyDate}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Events;