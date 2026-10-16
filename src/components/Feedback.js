import React from 'react';
import { Quote, Star } from '../icons';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { feedback } from '../data/content';

export default function Feedback() {
  return (
    <section className="section container">
      <SectionTitle center kicker="Client Feedback" title="Trusted By Industry Leaders" text="Appreciation and repeat work orders from our clients." />
      <Reveal className="rating">
        <b>4.0</b>
        <span className="stars">{[0, 1, 2, 3].map((i) => <Star key={i} size={20} />)}<Star size={20} className="dim" /></span>
        <small>Rated on Justdial · 2 ratings</small>
      </Reveal>
      <div className="fb-grid">
        {feedback.map(([n, role, text, tag], i) => (
          <Reveal key={n} delay={(i % 2) * 150} variant={i % 2 ? 'right' : 'left'} className="fb">
            <Quote size={34} />
            <p>{text}</p>
            <div className="fb-foot"><div><h4>{n}</h4><small>{role}</small></div><em>{tag}</em></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
