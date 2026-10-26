import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { Mobile, WhatsApp, Mail, Pin, Globe } from '../icons';
import { IMG, company } from '../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const info = [
    [Mobile, 'Mobile', `${company.phone} / ${company.phone2}`, `tel:${company.tel}`],
    [WhatsApp, 'WhatsApp', 'Chat with us now', `https://wa.me/${company.wa}`],
    [Mail, 'Email', company.email, `mailto:${company.email}`],
    [Pin, 'Address', company.address],
  ];

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);

    const text =
      `*New Enquiry from Website*\n\n` +
      `*Name:* ${f.get('name')}\n` +
      `*Phone:* ${f.get('phone')}\n` +
      `*Message:* ${f.get('msg')}`;

    const url = `https://wa.me/${company.wa}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSent(true);
    e.target.reset();
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        sub={`Speak to ${company.contact} or send your project requirement.`}
        img="/assets/newbg5.jpg"
      />
      <section className="section container contact">
        <div>
          {info.map(([I, t, v, href], i) => (
            <Reveal key={t} delay={i * 120} className="info">
              <span className="ic"><I size={24} /></span>
              <div>
                <h4>{t}</h4>
                {href ? <a href={href}>{v}</a> : <p>{v}</p>}
              </div>
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
            {sent && <p className="ok">Opening WhatsApp…</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}