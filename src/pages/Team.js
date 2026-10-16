import React from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { Award } from '../icons';
import { IMG, team } from '../data/content';

export default function Team() {
  return (
    <>
      <PageHeader title="Our Team" sub="Licensed supervisors and engineers with decades of field experience." img={IMG.site} />
      <section className="section container">
        <div className="grid3">
          {team.map(([n, r, q, d], i) => (
            <Reveal key={n} delay={i * 150} className="member">
              <span className="avatar">{n.split(' ').map((x) => x[0]).join('')}</span>
              <h3>{n}</h3><em>{r}</em>
              <small><Award size={14} /> {q}</small>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
