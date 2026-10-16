import React, { useEffect, useRef } from 'react';
import { Arrow } from '../icons';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import lt from '../assets/brands/larsen-toubro.svg';
import siemens from '../assets/brands/siemens.svg';
import abb from '../assets/brands/abb.svg';
import havells from '../assets/brands/havells.svg';
import hpl from '../assets/brands/hpl.svg';
import finolex from '../assets/brands/finolex.svg';
import anchor from '../assets/brands/anchor.svg';

const logos = [['Larsen & Toubro', lt], ['Siemens', siemens], ['ABB', abb], ['Havells', havells], ['HPL', hpl], ['Finolex', finolex], ['Anchor', anchor]];

function move(el, dir) {
  if (!el) return;
  const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
  if (dir > 0 && end) el.scrollTo({ left: 0, behavior: 'smooth' });
  else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
  else el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: 'smooth' });
}

export default function BrandCarousel() {
  const ref = useRef(null);
  const paused = useRef(false);
  useEffect(() => {
    const id = setInterval(() => { if (!paused.current) move(ref.current, 1); }, 2600);
    return () => { clearInterval(id); };
  }, []);
  return (
    <section className="section grey">
      <div className="container">
        <SectionTitle center kicker="Trusted Brands" title="We Deal In Products Of Reputed Companies" text="Approved switchgear, cables, wiring and lighting accessories." />
        <Reveal className="car">
          <button className="car-btn prev" aria-label="Previous" onClick={() => move(ref.current, -1)}><Arrow size={20} /></button>
          <div className="car-track" ref={ref} onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }} onTouchStart={() => { paused.current = true; }}>
            {logos.map(([n, src]) => (
              <div className="car-item" key={n}><img src={src} alt={n} /><span>{n}</span></div>
            ))}
          </div>
          <button className="car-btn next" aria-label="Next" onClick={() => move(ref.current, 1)}><Arrow size={20} /></button>
        </Reveal>
      </div>
    </section>
  );
}
