import React from 'react';
import { Link } from 'react-router-dom';
import Reveal, { Words } from './Reveal';
import { IMG } from '../data/content';

export default function PageHeader({ title, sub, img = IMG.grid }) {
  return (
    <section className="page-head" style={{ backgroundImage: `linear-gradient(105deg,rgba(10,10,10,.92),rgba(10,10,10,.55)),url(${img})` }}>
      <div className="container">
        <Reveal as="p" className="crumb"><Link to="/">Home</Link> / {title}</Reveal>
        <Words as="h1" text={title} />
        <Reveal as="p" delay={250} className="lead">{sub}</Reveal>
      </div>
    </section>
  );
}
