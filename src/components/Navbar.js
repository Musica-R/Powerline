import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Close, Mobile, WhatsApp } from '../icons';
import { nav, company } from '../data/content';
import logo from '../assets/logo.svg';

const MOBILE_BP = 768;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  // close the drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // solid header on scroll (hysteresis prevents toggling near the threshold)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid((prev) => (prev ? y > 10 : y > 50));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // on resize: close drawer on desktop and disable transitions while the
  // layout switches between desktop and mobile (this stops the flicker)
  useEffect(() => {
    let timer;
    const onResize = () => {
      // classList (not state) so it applies before the browser restyles this frame
      headerRef.current?.classList.add('no-anim');
      clearTimeout(timer);
      timer = setTimeout(() => headerRef.current?.classList.remove('no-anim'), 200);

      if (window.innerWidth > MOBILE_BP) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // lock page scroll while the drawer is open + close on Escape
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;

    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`nav${solid ? ' solid' : ''}`}>
      <div className="topbar">
        <div className="container">
          <span><Mobile size={14} /> {company.phone}</span>
          <span className="hide-sm"><WhatsApp size={14} /> WhatsApp us</span>
        </div>
      </div>

      <div className="container nav-in">
        <Link to="/" className="brand" onClick={close}>
          <img src={logo} alt="Powerline Engineers" />
          <b>POWERLINE<small>ENGINEERS</small></b>
        </Link>

        <nav className={open ? 'open' : ''}>
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn sm" onClick={close}>Get a Quote</Link>
        </nav>

        <button
          type="button"
          className="burger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`nav-overlay${open ? ' show' : ''}`} onClick={close} aria-hidden="true" />
    </header>
  );
}