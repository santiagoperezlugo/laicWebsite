import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ExecCardSwiper.css';

function ExecCard({ person }) {
  return (
    <article className="exec-card">
      <div className="exec-card__media">
        <img
          src={person.image || '/images/logo.png'}
          alt={person.imageAlt || `${person.name} headshot`}
        />
      </div>
      <div className="exec-card__body">
        <h3 className="exec-card__name">{person.name}</h3>
        <p className="exec-card__role">{person.role}</p>
        {person.bio && <p className="exec-card__bio">{person.bio}</p>}
      </div>
    </article>
  );
}

export default function ExecCardSwiper({ people = [] }) {
  return (
    <div className="exec-swiper__wrap">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        centeredSlides
        slidesPerView="auto"
        spaceBetween={16}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
        grabCursor
        className="exec-swiper"
      >
        {people.map((p) => (
          <SwiperSlide key={p.name}>
            <ExecCard person={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
