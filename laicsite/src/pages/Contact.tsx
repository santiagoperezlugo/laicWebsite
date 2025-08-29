import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
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
  const containerRef = useRef<HTMLElement | null>(null);

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
    <div className="contact-page">
      <div className="background-orb" aria-hidden />
      <Header />
      <main className="contact-main" ref={containerRef}>
        <section className="contact-hero">
          <h1 className="contact-title">Connect with us @:</h1>
          <p className="contact-tag">
            We love meeting new people! Slide into our DMs, say hi on LinkedIn, or drop us an email.
          </p>
        </section>

        <section className="contact-cards" aria-label="Contact Channels">
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
              <div className="card-label" aria-hidden>{l.label}</div>
            </a>
          ))}
        </section>

        <footer className="contact-footer">
          <p>Prefer another platform? Let us know — we’re always down to connect.</p>
        </footer>
      </main>
    </div>
  );
}
