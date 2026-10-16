import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import Feedback from '../components/Feedback';
import Faq from '../components/Faq';
import Img from '../components/Img';
import ProjectCard, { toProjects, CATS } from '../components/ProjectCard';
import PjIcon from '../components/PjIcon';
import { Check, Arrow, WhatsApp } from '../icons';
import { IMG, clients, company } from '../data/content';
import './projects.css';

export default function Projects() {
  const [cat, setCat] = useState('All');
  const all = useMemo(() => toProjects(clients), []);
  const count = (c) => (c === 'All' ? all.length : all.filter((p) => p.cat === c).length);
  const shown = all.filter((p) => cat === 'All' || p.cat === cat);
  const industrial = count('Industrial');

  const stats = [
    ['layers', all.length, 'Projects Delivered'],
    ['factory', industrial, 'Industrial Projects'],
    ['building', all.length - industrial, 'Other Sectors'],
  ];

  return (
    <>
      {/* ===== Header ===== */}
      <section className="container pj-head">
        <div className="pj-head-l">
          <br />
          <Reveal as="span" className="kicker pj-kicker">Our Projects</Reveal>
          <Reveal as="h1" delay={100}>Projects That <em>Power Progress</em></Reveal>
          <Reveal as="p" delay={200}>Electrical infrastructure delivered with precision, safety and reliability.</Reveal>
        </div>
        <Reveal variant="right" className="pj-stats">
          {stats.map(([ic, n, l]) => (
            <div className="pj-stat" key={l}>
              <PjIcon name={ic} size={34} />
              <b><Counter to={n} /></b>
              <span>{l}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ===== Filters + cards ===== */}
      <section className="container pj-body">
        <div className="pj-chips">
          {CATS.map((c) => (
            <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
              {c === 'All' ? 'All Projects' : c} <small>{count(c)}</small>
            </button>
          ))}
        </div>

        {/* key={cat} remounts the grid so cards animate in one by one on every filter change */}
        <div className="pj-grid" key={cat}>
          {shown.map((p, i) => <ProjectCard key={p.name} p={p} i={i} delay={(i % 6) * 110} />)}
        </div>
      </section>

      {/* ===== Featured project ===== */}
      <section className="section container">
        <div className="spot">
          <Reveal variant="left" className="spot-img"><Img src={IMG.factory} alt="Bioingredia project" /><span className="spot-tag">Featured Project</span></Reveal>
          <div>
            <Reveal as="span" className="kicker">₹65 Lakh · Completed Oct 2022</Reveal>
            <Reveal as="h2" delay={100}>Bioingredia Naturals Pvt. Ltd.</Reveal>
            <Reveal as="p" delay={200}>Full electrical works delivered successfully within the assigned period and recognised by the client with a completion certificate.</Reveal>
            <ul className="ticks">{['500 KVA transformer', '125 KVA DG set', 'Panels, cabling and complete electrification'].map((t, i) => <Reveal as="li" key={t} delay={300 + i * 120}><Check size={18} />{t}</Reveal>)}</ul>
            <Reveal delay={700}><Link to="/contact" className="btn">Start Your Project <Arrow size={18} /></Link></Reveal>
          </div>
        </div>
        <Reveal className="center"><a className="btn wa" href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer"><WhatsApp size={18} /> Share Your Requirement</a></Reveal>
      </section>

      <Feedback />

      <section className="section grey"><div className="container">
        <SectionTitle center kicker="FAQ" title="Got Questions? We Have Answers" text="Quick answers about hiring, contact hours and electrical basics." />
        <Faq />
      </div></section>
    </>
  );
}