import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Close, Mobile, WhatsApp } from '../icons';
import { nav, company } from '../data/content';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 30);
    f(); window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <div className="topbar">
        <div className="container">
          <span><Mobile size={14} /> {company.phone}</span>
          <span className="hide-sm"><WhatsApp size={14} /> WhatsApp us</span>
        </div>
      </div>
      <div className="container nav-in">
        <Link to="/" className="brand"><img src={logo} alt="Powerline Engineers" /><b>POWERLINE<small>ENGINEERS</small></b></Link>
        <nav className={open ? 'open' : ''}>
          {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
          <Link to="/contact" className="btn sm">Get a Quote</Link>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <Close /> : <Menu />}</button>
      </div>
    </header>
  );
}
