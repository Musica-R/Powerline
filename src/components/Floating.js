import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { WhatsApp, Mobile } from '../icons';
import { company } from '../data/content';

export default function Floating() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <button
        type="button"
        className={`to-top ${showTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ transform: showTop ? 'none' : 'translateY(16px)' }}
      >
        <FaArrowUp
          size={20}
          style={{ transform: 'rotate(0deg)', rotate: '0deg' }}
        />
      </button>

      <div className="floating">
        <a className="float-call" href={`tel:${company.tel}`} aria-label="Call us"><Mobile size={24} /></a>
        <a className="float-wa" href={`https://wa.me/${company.wa}?text=Hello%20Powerline%20Engineers`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsApp size={28} /></a>
      </div>
    </>
  );
}