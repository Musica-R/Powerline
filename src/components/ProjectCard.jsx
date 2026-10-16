import React from 'react';
import PjIcon from './PjIcon';

const edu = ['ICCONS Hospital', 'Ahalia Integrated Campus', 'Aryanet Institute of Technology', 'Valluvanad Hospital'];
const com = ['Mullas Wedding Centre', 'Kolumbil Gardens'];

export const CATS = ['All', 'Industrial', 'Hospitals & Education', 'Commercial & Residential'];
const CAT_ICON = { Industrial: 'factory', 'Hospitals & Education': 'building', 'Commercial & Residential': 'building' };

const catOf = (n) => (edu.includes(n) ? 'Hospitals & Education' : com.includes(n) ? 'Commercial & Residential' : 'Industrial');

// Turns the free-text description into small spec tiles: [icon, top, bottom]
const RULES = [
  [/(\d+)\s*kV\s+switchyard/i, (m) => ['bolt', `${m[1]} kV`, 'Switchyard']],
  [/(\d+)\s*KVA\s+(?:outdoor\s+|indoor\s+)?transformers?/i, (m) => ['transformer', `${m[1]} KVA`, 'Transformer']],
  [/(\d+)\s*KVA\s+DG/i, (m) => ['dg', `${m[1]} KVA`, 'DG Set']],
  [/(\d+)\s*HP\s+blower/i, (m) => ['gear', `${m[1]} HP`, 'Blower Motor']],
  [/star-delta/i, () => ['panel', 'Star-Delta', 'Starter']],
  [/\bUPS\b/, () => ['ups', 'UPS', 'System']],
  [/lightning/i, () => ['ground', 'Lightning', 'Protection']],
  [/panel/i, () => ['panel', 'Panel', 'Boards']],
  [/lighting/i, () => ['bulb', 'Lighting', 'Systems']],
  [/cabl/i, () => ['cable', 'Cabling', '& Termination']],
  [/consultancy/i, () => ['network', 'Electrical', 'Consultancy']],
  [/full electrical/i, () => ['tool', 'Complete', 'Electrical Works']],
];

const getSpecs = (desc) => {
  const out = [];
  RULES.forEach(([re, fn]) => {
    const m = desc.match(re);
    if (m) out.push(fn(m));
  });
  return out.length ? out : [['tool', 'Complete', 'Electrification']];
};

// clients rows: [name, place, desc, value]
export const toProjects = (clients) =>
  clients.map(([name, place, desc, value], i) => ({
    no: i + 1,
    name,
    place,
    desc: /[.!?]$/.test(desc) ? desc : `${desc}.`,
    value,
    cat: catOf(name),
    specs: getSpecs(desc),
  }));

export default function ProjectCard({ p, i = 0, delay }) {
  const max = p.value ? 3 : 4;
  const specs = p.specs.slice(0, max);
  const showScope = !p.value && specs.length < 3;
  return (
    <article className="pj-card" style={{ animationDelay: `${delay ?? i * 110}ms` }}>
      <div className="pj-top">
        <span className="pj-cat"><PjIcon name={CAT_ICON[p.cat]} size={34} />{p.cat}</span>
        <span className="pj-no">{String(p.no).padStart(2, '0')}</span>
      </div>
      <h3>{p.name}</h3>
      <div className="pj-loc"><PjIcon name="pin" size={16} />{p.place}</div>
      <p>{p.desc}</p>
      <div className="pj-specs">
        {specs.map(([ic, a, b]) => (
          <div className="pj-spec" key={a + b}>
            <PjIcon name={ic} size={20} />
            <span><b>{a}</b><small>{b}</small></span>
          </div>
        ))}
        {p.value && (
          <div className="pj-spec val">
            <PjIcon name="rupee" size={20} />
            <span><b>{p.value.replace('₹', '').trim()}</b><small>Project Value</small></span>
          </div>
        )}
        {showScope && (
          <div className="pj-spec val scope">
            <span><b>Project Scope</b><small>Electrification</small></span>
          </div>
        )}
      </div>
    </article>
  );
}