import React, { useEffect } from 'react';
import Header from '../components/Header';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>('.contact-card'));
    const handleMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    cards.forEach((c) => {
      c.addEventListener('mousemove', handleMove as any);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener('mousemove', handleMove as any);
      });
    };
  }, []);
  return (
    <div className="contact-page">
      <Header />
      <main className="contact-main">
        <section className="contact-hero">
          <h1 className="contact-title">
            Connect with us @:
          </h1>
          <p className="contact-tag">
            We love meeting new people! Slide into our DMs, say hi on LinkedIn, or drop us an email.
          </p>
        </section>

        <section className="contact-cards">
          <a
            href="https://instagram.com/uvlaic"
            target="_blank"
            rel="noreferrer"
              className="contact-card instagram"
              aria-label="Instagram"
          >
            <div className="icon" role="img" aria-label="Instagram" />
          </a>

          <a
            href="https://www.linkedin.com/company/latin-american-identities-coalition-laic"
            target="_blank"
            rel="noreferrer"
              className="contact-card linkedin"
              aria-label="LinkedIn"
          >
            <div className="icon" role="img" aria-label="LinkedIn" />
          </a>

            <a href="mailto:email@placeholder.com" className="contact-card email" aria-label="Email">
            <div className="icon" role="img" aria-label="Email" />
          </a>
        </section>

        <footer className="contact-footer">
          <p>
            Prefer another platform? Let us know — we’re always down to connect.
          </p>
        </footer>
      </main>
    </div>
  );
}
