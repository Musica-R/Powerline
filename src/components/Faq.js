import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '../icons';
import Reveal from './Reveal';
import { faqCats, company } from '../data/content';

export default function Faq() {
  const [cat, setCat] = useState(0);
  const [open, setOpen] = useState(0);
  const pick = (i) => { setCat(i); setOpen(0); };
  return (
    <div className="faq-wrap">
      <aside>
        <Reveal as="h4" className="faq-h">Browse by Category</Reveal>
        {faqCats.map((c, i) => { const I = Icons[c.icon]; return (
          <Reveal key={c.id} delay={i * 110} variant="left">
            <button className={`faq-cat ${cat === i ? 'on' : ''}`} onClick={() => pick(i)}>
              <span className="fc-ic"><I size={18} /></span>
              <span className="fc-t"><b>{c.label}</b><small>{c.items.length} questions</small></span>
              <Icons.Arrow size={16} />
            </button>
          </Reveal>
        ); })}
        <Reveal delay={500} className="faq-help">
          <h4>Still have questions?</h4>
          <p>Can't find the answer? Our engineers are here to help.</p>
          <Link to="/contact" className="btn light sm">Contact Us</Link>
          <a href={`tel:${company.tel}`}>{company.phone}</a>
        </Reveal>
      </aside>
      <div className="faq" key={cat}>
        {faqCats[cat].items.map(([q, a], i) => (
          <Reveal key={q} delay={i * 130} variant="right" className={`faq-item ${open === i ? 'open' : ''}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{q}</span><Icons.Plus size={20} />
            </button>
            <div className="faq-a"><p>{a}</p></div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
