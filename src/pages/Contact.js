import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { Mobile, WhatsApp, Mail, Pin, Globe } from '../icons';
import { IMG, company } from '../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const info = [[Mobile, 'Mobile', `${company.phone} / ${company.phone2}`, `tel:${company.tel}`], [WhatsApp, 'WhatsApp', 'Chat with us now', `https://wa.me/${company.wa}`], [Mail, 'Email', company.email, `mailto:${company.email}`], [Pin, 'Address', company.address], [Globe, 'Website', company.web]];
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `Name: ${f.get('name')}%0APhone: ${f.get('phone')}%0A${encodeURIComponent(f.get('msg'))}`;
    window.location.href = `mailto:${company.email}?subject=Enquiry from website&body=${body}`;
    setSent(true);
  };
  return (
    <>
      <PageHeader title="Contact Us" sub={`Speak to ${company.contact} or send your project requirement.`} img={IMG.grid} />
      <section className="section container contact">
        <div>
          {info.map(([I, t, v, href], i) => (
            <Reveal key={t} delay={i * 120} className="info">
              <span className="ic"><I size={24} /></span>
              <div><h4>{t}</h4>{href ? <a href={href}>{v}</a> : <p>{v}</p>}</div>
            </Reveal>
          ))}
        </div>
        <Reveal variant="right">
          <form className="form" onSubmit={submit}>
            <h3>Send an Enquiry</h3>
            <input name="name" placeholder="Your name" required />
            <input name="phone" placeholder="Phone number" required />
            <textarea name="msg" rows="5" placeholder="Tell us about your project" required />
            <button className="btn" type="submit">Send Message</button>
            {sent && <p className="ok">Opening your email app…</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}
