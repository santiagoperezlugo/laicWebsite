import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ExecCardSwiper.css';

function ExecCard({ person }) {
  const [isWhyExpanded, setIsWhyExpanded] = useState(false);
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
        {/* Detail sections */}
        <dl className="exec-card__details">
          {[{
            key: 'hometown', label: 'Hometown', value: person.hometown,
          }, {
            key: 'major', label: 'Major', value: person.major,
          }, {
            key: 'ethnicity', label: 'Ethnicity', value: person.ethnicity,
          }, {
            key: 'funFact', label: 'Fun fact', value: person.funFact,
          }, {
            key: 'whyLaic', label: 'Why LAIC?', value: person.whyLaic,
          }].map((row) => (
            <div
              className={`exec-card__detail ${row.key === 'whyLaic' ? 'exec-card__detail--stack' : ''}`}
              key={row.key}
            >
              <dt className="exec-card__detail-label">{row.label}</dt>
              {row.key === 'whyLaic' ? (
                <>
                  <dd
                    className={`exec-card__detail-value ${isWhyExpanded ? 'is-expanded' : 'is-collapsed'}`}
                  >
                    {row.value || '—'}
                  </dd>
                  {row.value && row.value.length > 0 && (
                    <button
                      type="button"
                      className="exec-card__toggle"
                      onClick={() => setIsWhyExpanded((v) => !v)}
                      aria-expanded={isWhyExpanded}
                    >
                      {isWhyExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </>
              ) : (
                <dd className="exec-card__detail-value">{row.value || '—'}</dd>
              )}
            </div>
          ))}
        </dl>
  {/* Bio removed per request */}
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
  loop
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
