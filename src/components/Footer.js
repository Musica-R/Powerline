import React from 'react';
import { Link } from 'react-router-dom';
import { Mobile, WhatsApp, Mail, Pin, Globe, Arrow, Clock } from '../icons';
import { nav, company, services, hours } from '../data/content';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-cta">
        {/* <div className="container foot-cta-in">
          <div><h3>Need a reliable electrical contractor?</h3><p>Talk to our engineers about your HV / LV project today.</p></div>
          <div className="foot-cta-btns">
            <a className="btn light" href={`tel:${company.tel}`}><Mobile size={18} /> Call Now</a>
            <a className="btn wa" href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer"><WhatsApp size={18} /> WhatsApp</a>
          </div>
        </div> */}
      </div>
      <div className="container foot-grid">
        <div>
          <img className="foot-logo" src={logo} alt="Powerline Engineers" />
          <p>A Grade Electrical Contractor (CA 485) providing industrial and commercial electrification, HV and LV, with quality and customer care.</p>
          <div className="foot-social">
            <a href={`tel:${company.tel}`} aria-label="Call"><Mobile size={18} /></a>
            <a href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsApp size={18} /></a>
            <a href={`mailto:${company.email}`} aria-label="Email"><Mail size={18} /></a>
            <a href={`https://${company.web}`} target="_blank" rel="noreferrer" aria-label="Website"><Globe size={18} /></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {nav.map(([to, l]) => <Link key={to} to={to}><Arrow size={14} /> {l}</Link>)}
        </div>
        <div>
          <h4>Our Services</h4>
          {services.map(([, t]) => <Link key={t} to="/services"><Arrow size={14} /> {t}</Link>)}
        </div>
        <div>
          <h4>Get In Touch</h4>
          <a href={`tel:${company.tel}`}><Mobile size={16} /> {company.phone}</a>
          <a href={`tel:${company.tel2}`}><Mobile size={16} /> {company.phone2}</a>
          <a href={`https://wa.me/${company.wa}`} target="_blank" rel="noreferrer"><WhatsApp size={16} /> Chat on WhatsApp</a>
          <a href={`mailto:${company.email}`}><Mail size={16} /> {company.email}</a>
          <span><Pin size={16} /> {company.address}</span>
          <span><Clock size={16} /> {hours}</span>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} Powerline Engineers · All rights reserved</div>
    </footer>
  );
}
