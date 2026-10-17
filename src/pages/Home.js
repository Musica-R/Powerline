import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '../icons';
import Reveal, { Words } from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import Counter from '../components/Counter';
import Faq from '../components/Faq';
import Img from '../components/Img';
import BrandCarousel from '../components/BrandCarousel';
import Feedback from '../components/Feedback';
import { quick, stats, services, vision,  assets, company } from '../data/content';
import ProjectsCarousel from '../components/ProjectsCarousel';
import '../styles/animations.css'; 

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const hero = document.querySelector('.hero');
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        if (hero && y < window.innerHeight) hero.style.setProperty('--py', `${y * 0.25}px`);
        setShowTop(y > 700);
        ticking = false;
      });
    };

    // glow that follows the mouse on service cards
    const onMove = (e) => {
      const card = e.target.closest && e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mousemove', onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" aria-hidden="true" />

      <section className="hero" style={{ backgroundImage: `linear-gradient(100deg,rgba(8,8,8,.93) 35%,rgba(8,8,8,.45)),url("/assets/form1.png")` }}>
        <div className="sparks" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => <i key={i} style={{ '--i': i }} />)}
        </div>
        <div className="container hero-in">
          <Reveal as="span" className="kicker light">A Grade Electrical Contractor · CA 485</Reveal>
          <Words as="h1" text="Powering Industry With Safe, Reliable Electrification" step={90} />
          <Reveal as="p" delay={500} className="lead">Electrical contractors, engineers and consultants delivering High Voltage and Low Voltage projects of any magnitude, on time, from our base near Kerala's second largest industrial area.</Reveal>
          <Reveal delay={700} className="hero-btns">
            <Link to="/contact" className="btn pulse">Request a Quote <Icons.Arrow size={18} /></Link>
            <Link to="/projects" className="btn ghost">View Projects</Link>
            <a className="btn wa" href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer"><Icons.WhatsApp size={18} /> WhatsApp</a>
          </Reveal>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll down"><span /></a>
      </section>

      <section className="quick container">
        {quick.map(([ic, t, d], i) => { const I = Icons[ic]; return (
          <Reveal key={t} delay={i * 120} className="quick-card"><I size={34} /><h3>{t}</h3><p>{d}</p></Reveal>
        ); })}
      </section>

      <section id="about" className="section container split">
        <Reveal variant="left" className="split-img"><Img src="/assets/eng.jpg" alt="Engineers at work" /><div className="badge"><b>20+</b><span>Years of Experience</span></div></Reveal>
        <div>
          <SectionTitle kicker="Who We Are" title="A Leading Consortium of Electrical Engineers" />
          <Reveal as="p" delay={150}>Powerline Engineers is a leading electrical contractor, engineers and consultant with experience in industrial and commercial electrification, both High Voltage and Low Voltage.</Reveal>
          <Reveal as="p" delay={300}>A dedicated manpower strength under a highly experienced technical team lets us carry out projects of any magnitude and type within the stipulated time. We swear by quality and customer care.</Reveal>
          <ul className="ticks">{['Computerised office with AutoCAD design', 'Well equipped panel fabrication shop', 'Financially sound, recognised by clients'].map((t, i) => <Reveal as="li" key={t} delay={400 + i * 120}><Icons.Check size={18} />{t}</Reveal>)}</ul>
          <Reveal delay={800}><Link to="/about" className="btn">More About Us <Icons.Arrow size={18} /></Link></Reveal>
        </div>
      </section>

      <section className="stats"><div className="container stats-in">
        {stats.map(([n, s, l], i) => <Reveal key={l} delay={i * 120} className="stat"><b><Counter to={n} suffix={s} /></b><span>{l}</span></Reveal>)}
      </div></section>

      {/* Scrolling strip of our services */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...services, ...services].map(([, t], i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <section className="section container">
        <SectionTitle center kicker="What We Do" title="Complete Electrical Solutions" text="From design and supply to erection, testing and commissioning." />
        <div className="grid3">
          {services.map(([ic, t, d, img], i) => { const I = Icons[ic]; return (
            <Reveal key={t} delay={(i % 3) * 300} className="card"><Img src={img} alt={t} /><div className="card-b"><span className="ic"><I size={26} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>
          ); })}
        </div>
      </section>

      <section className="section dark"><div className="container vm">
        {vision.map(([ic, t, d], i) => { const I = Icons[ic]; return (
          <Reveal key={t} variant={i ? 'right' : 'left'} className="vm-card"><I size={40} /><h3>{t}</h3><p>{d}</p></Reveal>
        ); })}
      </div></section>

      <section className="section container split rev">
        <div>
          <SectionTitle kicker="Our Expertise" title="Engineering, Erection and Commissioning" />
          <ul className="ticks">{assets.map((t, i) => <Reveal as="li" key={t} delay={i * 90}><Icons.Check size={18} />{t}</Reveal>)}</ul>
        </div>
        <Reveal variant="right" className="split-img"><Img src="/assets/exp.png" alt="Substation equipment" /></Reveal>
      </section>

      <BrandCarousel />

      {/* <section className="section container">
        <SectionTitle center kicker="Our Work" title="Featured Projects" />
        <div className="grid3">
          {[clients[0], clients[16], clients[18]].map(([n, p, d, v], i) => (
            <Reveal key={n} delay={i * 140} className="proj"><Img src={[IMG.factory, IMG.work, IMG.site][i]} alt={n} /><div className="proj-b"><small>{p}</small><h3>{n}</h3><p>{d}</p>{v && <strong>{v}</strong>}</div></Reveal>
          ))}
        </div>
        <Reveal className="center"><Link to="/projects" className="btn">All Projects <Icons.Arrow size={18} /></Link></Reveal>
      </section> */}

      <ProjectsCarousel />

      <Feedback />

      <section className="section grey"><div className="container narrow">
        <SectionTitle center kicker="FAQ" title="Got Questions? We Have Answers" text="Everything about our licence, services, supply and projects." />
        <Faq />
      </div></section>

      <section className="cta"><div className="container">
        <Words text="Planning an electrical project? Talk to our engineers." />
        <Reveal delay={300}><div className="foot-cta-btns" style={{justifyContent:"center"}}><Link to="/contact" className="btn light">Contact Us <Icons.Arrow size={18} /></Link><a className="btn wa" href={`tel:${company.tel}`}><Icons.Mobile size={18} /> {company.phone}</a></div></Reveal>
      </div></section>
    </>
  );
}