import React from 'react';
import { WhatsApp, Mobile } from '../icons';
import { company } from '../data/content';

export default function Floating() {
  return (
    <div className="floating">
      <a className="float-call" href={`tel:${company.tel}`} aria-label="Call us"><Mobile size={24} /></a>
      <a className="float-wa" href={`https://wa.me/${company.wa}?text=Hello%20Powerline%20Engineers`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsApp size={28} /></a>
    </div>
  );
}
