import React from 'react';
import { Users, Shield, Panel, Award, Bolt, Tool, Cable } from '../icons';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import Counter from './Counter';
import { manpower } from '../data/content';

const icons = [Shield, Panel, Award, Users, Bolt, Tool, Cable];

export default function Manpower() {
  const total = manpower.reduce((a, [, n]) => a + n, 0);
  const max = Math.max(...manpower.map((m) => m[1]));
  return (
    <section className="section container">
      <SectionTitle center kicker="Our People" title="Dedicated Manpower Strength" text="A disciplined on-site and office team behind every project." />
      <div className="mp">
        <Reveal variant="left" className="mp-total">
          <Users size={46} />
          <b><Counter to={total} /></b>
          <span>Skilled team members</span>
          <p>Supervisors, electricians, helpers, draftsman and an HV cable jointer working under an experienced technical team.</p>
        </Reveal>
        <div className="mp-list">
          {manpower.map(([role, n], i) => { const I = icons[i]; return (
            <Reveal key={role} delay={i * 110} variant="right" className="mp-row">
              <span className="mp-ic"><I size={22} /></span>
              <div className="mp-bar">
                <div className="mp-top"><b>{role}</b><em>{String(n).padStart(2, '0')}</em></div>
                <i style={{ '--w': `${(n / max) * 100}%` }} />
              </div>
            </Reveal>
          ); })}
        </div>
      </div>
    </section>
  );
}
