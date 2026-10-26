import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import Feedback from '../components/Feedback';
import Faq from '../components/Faq';
import Img from '../components/Img';
import PjIcon from '../components/PjIcon';
import ProjectCard, { toProjects, CATS, CAT_ICON } from '../components/ProjectCard';
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
    ['building', all.length - industrial, 'Institutional, Commercial & Residential'],
  ];

  return (
    <>
      <PageHeader
        title="Our Projects"
        sub="Electrical infrastructure delivered with precision, safety and reliability."
        img="/assets/newbg3.jpg"
      />

      {/* ===== Stats strip ===== */}
      <section className="pj-strip">
        <div className="container pj-strip-in">
          {stats.map(([ic, n, l]) => (
            <div className="pj-stat" key={l}>
              <PjIcon name={ic} size={26} />
              <b><Counter to={n} /></b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>
       <br />
      {/* ===== Filters + cards ===== */}
      <section className="container pj-body">
        <div className="pj-chips">
          {CATS.map((c) => (
            <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
              <PjIcon name={CAT_ICON[c]} size={15} />
              {c === 'All' ? 'All Projects' : c} <small>{count(c)}</small>
            </button>
          ))}
        </div>

        {/* key={cat} remounts the grid so cards animate in on every filter change */}
        <div className="pj-grid" key={cat}>
          {shown.map((p, i) => <ProjectCard key={p.name} p={p} i={i} delay={(i % 6) * 90} />)}
        </div>
      </section>
    <br />
      {/* ===== Featured project ===== */}
      <section className="section grey">
        <div className="container">
          <div className="spot">
            <Reveal variant="left" className="spot-img">
              <Img src="/assets/pro.jpg" alt="Bioingredia project" />
              <span className="spot-tag">Featured Project</span>
            </Reveal>
            <div>
              <Reveal as="span" className="kicker">₹65 Lakh · Completed Oct 2022</Reveal>
              <Reveal as="h2" delay={100}>Bioingredia Naturals Pvt. Ltd.</Reveal>
              <Reveal as="p" delay={200}>Full electrical works delivered successfully within the assigned period and recognised by the client with a completion certificate.</Reveal>
              <ul className="ticks">
                {['500 KVA transformer', '125 KVA DG set', 'Panels, cabling and complete electrification'].map((t, i) => (
                  <Reveal as="li" key={t} delay={300 + i * 120}><Check size={18} />{t}</Reveal>
                ))}
              </ul>
              <Reveal delay={700}><Link to="/contact" className="btn">Start Your Project <Arrow size={18} /></Link></Reveal>
            </div>
          </div>
          <Reveal className="center">
            <a className="btn wa" href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer">
              <WhatsApp size={18} /> Share Your Requirement
            </a>
          </Reveal>
        </div>
      </section>

      <Feedback />

      <section className="section">
        <div className="container">
          <SectionTitle center kicker="FAQ" title="Got Questions? We Have Answers" text="Quick answers about hiring, contact hours and electrical basics." />
          <Faq />
        </div>
      </section>
    </>
  );
}