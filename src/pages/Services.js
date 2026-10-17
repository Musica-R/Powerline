import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '../icons';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Img from '../components/Img';
import { IMG, services, assets, company, instruments, tools } from '../data/content';

const steps = [
  ['Consult & Survey', 'We understand your load, site and statutory needs.'],
  ['Design & Estimate', 'AutoCAD drawings, schemes as per Inspectorate rules, costing.'],
  ['Supply & Fabricate', 'Approved equipment plus panels from our own fabrication shop.'],
  ['Erect & Commission', 'Installation, testing and energisation within the schedule.'],
];

function EquipTable({ icon, title, sub, rows }) {
  const I = Icons[icon] || Icons.Bolt;
  return (
    <Reveal className="tbl-card">
      <div className="tbl-head">
        <span className="ic"><I size={22} /></span>
        <div>
          <h3>{title}</h3>
          <small>{sub}</small>
        </div>
      </div>
      <div className="tbl-scroll">
        <table className="tbl">
          <thead>
            <tr>
              <th>Item</th>
              <th>Rating / Spec</th>
              <th>Make</th>
              <th className="qty">Qty</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([item, spec, make, qty], i) => (
              <tr key={item + i}>
                <td>{item}</td>
                <td>{spec || <span className="dash">–</span>}</td>
                <td>{make || <span className="dash">–</span>}</td>
                <td className="qty"><b>{qty}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" sub="Design, supply, erection, testing and commissioning under one roof." img={IMG.panel} />
      <section className="section container">
        <SectionTitle center kicker="What We Do" title="Complete Electrical Solutions" text="Six core services for industrial and commercial clients." />
        <div className="svc-grid">
          {services.map(([ic, t, d, img], i) => { const I = Icons[ic]; return (
            <Reveal key={t} delay={(i % 3) * 140} className="svc-card">
              <div className="svc-img"><Img src={img} alt={t} /><span className="num">{String(i + 1).padStart(2, '0')}</span></div>
              <div className="svc-b">
                <span className="ic"><I size={26} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
                <Link to="/contact" className="more">Enquire now <Icons.Arrow size={16} /></Link>
              </div>
            </Reveal>
          ); })}
        </div>
      </section>

      <section className="section dark"><div className="container">
        <div className="sec-title center"><span className="kicker light">Our Process</span><h2 style={{ color: '#fff' }}>How We Work</h2></div>
        <div className="steps">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 160} className="step"><b>{i + 1}</b><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </div>
      </div></section>

      <section className="section grey"><div className="container narrow">
        <SectionTitle center kicker="Capabilities" title="What We Engineer, Erect And Commission" />
        <ul className="ticks two">{assets.map((t, i) => <Reveal as="li" key={t} delay={i * 80}><Icons.Check size={18} />{t}</Reveal>)}</ul>
        <Reveal className="center">
          <a className="btn wa" href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer"><Icons.WhatsApp size={18} /> Discuss on WhatsApp</a>
        </Reveal>
      </div></section>

      <section className="section container">
        <SectionTitle
          center
          kicker="Our Equipment"
          title="Measuring Instruments & Tools"
          text="Calibrated testing instruments and a full set of tools and machines for site work, erection and commissioning."
        />
        <div className="tbl-grid">
          <EquipTable icon="Gear" title="Measuring Instruments" sub="Testing and measurement" rows={instruments} />
          <EquipTable icon="Tool" title="Tools & Machines" sub="Erection, fabrication and drafting" rows={tools} />
        </div>
      </section>
    </>
  );
}