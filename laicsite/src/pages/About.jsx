import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import ExecCardSwiper from '../components/ExecCardSwiper';
import Header from '../components/Header';

const execs = [
  {
    name: 'Steven Santos',
    role: 'Co-President',
    image: '/images/exec/steven.jpeg',
    hometown: 'Columbia, Maryland',
    major: 'Economics',
    ethnicity: 'Honduran & German',
    funFact:
      'I was feet away from an 18-foot gator',
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
    image: '/images/exec/santi.jpg',
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
  const communityImages = [
  { src: '/images/community/picnic.JPEG', alt: 'LAIC community picnic on the Lawn' },
  { src: '/images/community/bracelets.jpg', alt: 'LAIC community event photo' },
  { src: '/images/community/cute_field.jpg', alt: 'LAIC community event photo' },
  { src: '/images/community/food.jpg', alt: 'LAIC community event photo' },
  { src: '/images/community/girl_tugOW.jpg', alt: 'LAIC community event photo' },
  { src: '/images/community/hug.jpg', alt: 'LAIC community event photo' },
  { src: '/images/community/lsc_full.jpg', alt: 'LAIC community event photo' },
  { src: '/images/community/pie.jpg', alt: 'LAIC community pie social' },
  { src: '/images/community/sports.JPEG', alt: 'LAIC intramurals and community activities' },
  { src: '/images/community/trio.jpg', alt: 'LAIC community event photo' },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Lock the frame to the picnic image's aspect ratio so images don't change size
  const [aspectRatio, setAspectRatio] = useState(1.5); // default 3:2
  const hasLockedRatio = useRef(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c + 1) % communityImages.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c - 1 + communityImages.length) % communityImages.length);
  };

  useEffect(() => {
    const t = setTimeout(() => setIsAnimating(false), 220);
    return () => clearTimeout(t);
  }, [current]);

  // keyboard support (left/right)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const toReveal = Array.from(document.querySelectorAll('.reveal'));

    if (prefersReduced) {
      toReveal.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    toReveal.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-section reveal" style={{ textAlign: 'center' }}>
          <h2
            className="section-title mission-title unified-title"
            style={{ color: '#146c43', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 'clamp(2rem, 6vw, 3rem)' }}
          >
            Our Mission
          </h2>
          <p className="mission-text" style={{ maxWidth: '72ch', margin: '8px auto 0', color: '#0f5132' }}>
            To empower and uplift Latinx students at UVA by organizing events for the Latin American community on Grounds, fostering a safe and collaborative space for organizations and students to share updates and make collective decisions, and serving as a liaison between the community, University administration, alumni, faculty, and peers.
          </p>
        </section>

        <section className="about-intro theme-navy reveal" style={{ gridTemplateColumns: '1fr', justifyItems: 'center' }}>
          <div
            className="intro-media reveal"
            style={{
              position: 'relative',
              overflow: 'hidden',
              // Lock height relative to width using aspect ratio so slides don't jump
              aspectRatio: aspectRatio,
              width: '92%',
              maxWidth: '900px',
              margin: '0 auto'
            }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              touchDeltaX.current = 0;
            }}
            onTouchMove={(e) => {
              if (touchStartX.current == null) return;
              touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
            }}
            onTouchEnd={() => {
              const threshold = 40; // swipe threshold in px
              if (touchDeltaX.current > threshold) {
                prev();
              } else if (touchDeltaX.current < -threshold) {
                next();
              }
              touchStartX.current = null;
              touchDeltaX.current = 0;
            }}
            aria-roledescription="carousel"
            aria-label="Community photos"
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              onMouseDown={(e) => e.preventDefault()} // avoid focus ring on mouse click, keep for keyboard
              style={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                background: 'transparent',
                color: '#fff',
                border: 'none',
                padding: 0,
                width: 'auto',
                height: 'auto',
                cursor: 'pointer',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                userSelect: 'none'
              }}
            >
              <span style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>‹</span>
            </button>

            <img
              key={communityImages[current].src}
              src={communityImages[current].src}
              alt={communityImages[current].alt}
              loading="lazy"
              className="intro-image reveal"
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                transition: 'opacity 200ms ease',
                opacity: isAnimating ? 0.85 : 1
              }}
              onError={(e) => {
                // If a format isn't supported (e.g., HEIC), skip to next image
                e.currentTarget.onerror = null;
                next();
              }}
              onLoad={(e) => {
                // Lock ratio once based on the picnic image so slides keep same size
                if (!hasLockedRatio.current && current === 0) {
                  const w = e.currentTarget.naturalWidth || 3;
                  const h = e.currentTarget.naturalHeight || 2;
                  if (w > 0 && h > 0) {
                    setAspectRatio(w / h);
                    hasLockedRatio.current = true;
                  }
                }
              }}
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              onMouseDown={(e) => e.preventDefault()} // avoid focus ring on mouse click, keep for keyboard
              style={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                background: 'transparent',
                color: '#fff',
                border: 'none',
                padding: 0,
                width: 'auto',
                height: 'auto',
                cursor: 'pointer',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                userSelect: 'none'
              }}
            >
              <span style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>›</span>
            </button>
          </div>
  </section>

  <section className="about-divider theme-blue reveal" aria-labelledby="about-divider-title">
          <h2 id="about-divider-title" className="divider-kicker unified-title">What We Do</h2>
          <p className="divider-lead">We bring people together—through community, culture, leadership, and service.</p>
          <ul className="what-list" aria-label="LAIC programs and focus areas">
            <li className="what-item reveal">
              <h3>Community & Social</h3>
              <p>GBMs, socials, and mixers that make Grounds feel like home.</p>
            </li>
            <li className="what-item reveal">
              <h3>Culture & Celebration</h3>
              <p>Heritage events that honor and uplift Latinx identities.</p>
            </li>
            <li className="what-item reveal">
              <h3>Leadership & Growth</h3>
              <p>Opportunities to lead, learn, and serve on and off Grounds.</p>
            </li>
            <li className="what-item reveal">
              <h3>Service & Advocacy</h3>
              <p>Building solidarity and giving back to the wider community.</p>
            </li>
          </ul>
        </section>

        <section className="about-intro reverse theme-green reveal">
          <div className="intro-media reveal">
            <img
              src="/images/community/sports.JPEG"
              alt="LAIC intramurals and community activities"
              loading="lazy"
              className="intro-image reveal"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/Volleyball_24.png';
              }}
            />
          </div>
          <div className="intro-copy reveal">
            <h2 className="section-title unified-title">Join Our Community</h2>
            <p>
              LAIC is a welcoming home for Latinx students at UVA—a place to find friends, celebrate culture,
              and build community that lasts beyond Grounds. Through socials, heritage events, and leadership
              opportunities, we create supportive spaces where everyone feels seen, valued, and empowered to grow.
            </p>
            <a
              href="https://groupme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="qr-placeholder-link"
              aria-label="Join our GroupMe"
            >
              <img
                src="/images/icons/groupme.png"
                alt="Join us on GroupMe – scan or tap"
                className="qr-image"
                loading="lazy"
              />
            </a>
          </div>
        </section>

        <section className="about-hero reveal">
          <h1 className="about-title">Meet our Executive Board</h1>
        </section>

        <section className="about-exec reveal">
          <div className="exec-swiper-container reveal">
            <ExecCardSwiper people={execs} />
          </div>
        </section>
        
      </main>
    </>
  );
}