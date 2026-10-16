import React from 'react';
import * as Icons from '../icons';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Manpower from '../components/Manpower';
import BrandCarousel from '../components/BrandCarousel';
import Img from '../components/Img';
import { IMG, vision } from '../data/content';

export default function About() {
  return (
    <>
      <PageHeader title="About Us" sub="Experienced electrical contractors, engineers and consultants in Palakkad." img={IMG.factory} />
      <section className="section container split">
        <Reveal variant="left" className="split-img"><Img src={IMG.work} alt="Electrician at work" /></Reveal>
        <div>
          <SectionTitle kicker="Company Profile" title="Quality And Customer Care Is Our Motto" />
          <Reveal as="p" delay={150}>Powerline Engineers executes industrial and commercial electrification projects, High Voltage and Low Voltage. We also deal in all HT and LT switchgear and control gear: moulded case circuit breakers, switch fuse units, contactors, relays, motor starters, HT and LT cables, cable joint kits, glands, sockets, wires, fuses, wiring and lighting accessories, insulators, lightning arresters and AB switches.</Reveal>
          <Reveal as="p" delay={300}>Our well equipped fabrication shop builds all types of control panel boards, motor control and relay panels. We are located very close to Kerala's second largest industrial area, with computerised office space for AutoCAD design and communication facilities.</Reveal>
        </div>
      </section>
      <section className="section dark"><div className="container vm">
        {vision.map(([ic, t, d], i) => { const I = Icons[ic]; return <Reveal key={t} delay={i * 150} className="vm-card"><I size={40} /><h3>{t}</h3><p>{d}</p></Reveal>; })}
      </div></section>
      <Manpower />
      <BrandCarousel />
      <section className="section container narrow">
        <SectionTitle center kicker="Licence" title="Registered And Licensed" text="A Grade Electrical Contractor licence CA 485 and A Class supervisor licence for all HT installations, issued by the Kerala State Electricity Licensing Board, Thiruvananthapuram." />
      </section>
    </>
  );
}
