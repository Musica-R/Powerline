import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard, { toProjects } from './ProjectCard';
import PjIcon from './PjIcon';
import { clients } from '../data/content';

const perView = () => {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  return w <= 640 ? 1 : w <= 1024 ? 2 : 3;
};

export default function ProjectsCarousel({ limit = 9 }) {
  const items = toProjects(clients).slice(0, limit);
  const [per, setPer] = useState(perView);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const max = Math.max(0, items.length - per);

  useEffect(() => {
    const onResize = () => setPer(perView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => { if (idx > max) setIdx(max); }, [max, idx]);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setIdx((i) => (i >= max ? 0 : i + 1)), 3800);
    return () => clearInterval(t);
  }, [paused, max]);

  const prev = () => setIdx((i) => (i <= 0 ? max : i - 1));
  const next = () => setIdx((i) => (i >= max ? 0 : i + 1));

  return (
    <section className="section container pj-sec">
      <div className="pj-sec-head">
        <div>
          <span className="kicker">Our Projects</span>
          <h2>Projects That <em>Power Progress</em></h2>
        </div>
        <div className="pj-nav">
          <button onClick={prev} aria-label="Previous" className="rev"><PjIcon name="arrow" size={20} /></button>
          <button onClick={next} aria-label="Next"><PjIcon name="arrow" size={20} /></button>
        </div>
      </div>

      <div
        className="pj-car"
        style={{ '--per': per, '--idx': idx }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.map((p, i) => {
          const step = Math.min(Math.max(i - idx, 0), per) * 110; // cascade: one card after another
          return (
            <div className="pj-slide" key={p.no} style={{ transitionDelay: `${step}ms` }}>
              <ProjectCard p={p} i={i} delay={Math.min(i, per) * 120} />
            </div>
          );
        })}
      </div>

      <div className="pj-dots">
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button key={i} className={i === idx ? 'on' : ''} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`} />
        ))}
      </div>

      <div className="center">
        <Link to="/projects" className="btn">View All Projects <PjIcon name="arrow" size={18} /></Link>
      </div>
    </section>
  );
}