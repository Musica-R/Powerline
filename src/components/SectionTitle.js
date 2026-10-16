import React from 'react';
import Reveal, { Words } from './Reveal';

export default function SectionTitle({ kicker, title, text, center }) {
  return (
    <div className={`sec-title ${center ? 'center' : ''}`}>
      <Reveal as="span" className="kicker">{kicker}</Reveal>
      <Words text={title} />
      {text && <Reveal as="p" delay={200}>{text}</Reveal>}
    </div>
  );
}
