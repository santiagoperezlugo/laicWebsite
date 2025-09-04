import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

type ContactLink = {
  id: string;
  href: string;
  label: string;
  className: string;
  aria: string;
};

const LINKS: ContactLink[] = [
  {
    id: 'groupme',
    href:'https://groupme.com/join_group/99299204/lXOjv00i',
    label: 'GroupMe',
  className: 'groupme',
    aria: 'GroupMe'
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/laic.uva/',
    label: 'Instagram',
    className: 'instagram',
    aria: 'Instagram'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/latin-american-identities-coalition-laic',
    label: 'LinkedIn',
    className: 'linkedin',
    aria: 'LinkedIn'
  }
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Pointer reactive highlight + tilt
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>('.contact-card'));
    const move = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', (x * 100).toFixed(2) + '%');
      el.style.setProperty('--my', (y * 100).toFixed(2) + '%');
      // subtle tilt
      const tiltX = (y - 0.5) * 10;
      const tiltY = (x - 0.5) * -10;
      el.style.setProperty('--tiltX', tiltX.toFixed(2) + 'deg');
      el.style.setProperty('--tiltY', tiltY.toFixed(2) + 'deg');
    };
    const leave = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.removeProperty('--tiltX');
      el.style.removeProperty('--tiltY');
    };
    cards.forEach(c => {
      c.addEventListener('mousemove', move as any);
      c.addEventListener('mouseleave', leave as any);
    });
    return () => {
      cards.forEach(c => {
        c.removeEventListener('mousemove', move as any);
        c.removeEventListener('mouseleave', leave as any);
      });
    };
  }, []);

  // Intersection reveal animation
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; 
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(ent => {
          if (ent.isIntersecting) {
            ent.target.classList.add('in-view');
            obs.unobserve(ent.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    containerRef.current.querySelectorAll('.contact-card').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="contact-hero-shell" ref={containerRef}>
      <header className="contact-topnav">
        <div className="contact-topnav-content">
          <nav className="contact-topnav-nav">
            <Link to="/home" className="contact-topnav-link">HOME</Link>
            <Link to="/about" className="contact-topnav-link">ABOUT</Link>
            <Link to="/events" className="contact-topnav-link">EVENTS</Link>
            <Link to="/clubs" className="contact-topnav-link">CLUBS</Link>
            <Link to="/resources" className="contact-topnav-link">RESOURCES</Link>
            <Link to="/contact" className="contact-topnav-link">CONTACT</Link>
          </nav>
        </div>
      </header>
      <div className="contact-hero-content">
        <div className="contact-icon-grid" aria-label="Contact Channels">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              data-index={i}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={"contact-card " + l.className}
              aria-label={l.aria}
            >
              <div className="icon" role="img" aria-label={l.aria} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
