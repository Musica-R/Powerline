import React from 'react';
import PjIcon from './PjIcon';

export const CATS = ['All', 'Industrial', 'Institutional', 'Commercial', 'Residential'];

export const CAT_ICON = {
  All: 'layers',
  Industrial: 'factory',
  Institutional: 'building',
  Commercial: 'store',
  Residential: 'home',
};

const categorize = (name, work) => {
  const t = `${name} ${work}`.toLowerCase();
  if (/hospital|college|institute|campus|school/.test(t)) return 'Institutional';
  if (/apartment|gardens|villa|residen/.test(t)) return 'Residential';
  if (/wedding|theatre|theater|mall|hotel/.test(t)) return 'Commercial';
  return 'Industrial';
};

// Pull key ratings out of the work text and pick an icon for each one
const extractSpecs = (work) => {
  const out = [];
  const seen = new Set();
  const add = (icon, label) => {
    if (!seen.has(label) && out.length < 4) { seen.add(label); out.push({ icon, label }); }
  };

  // kV levels (11 kV, 22 kV)
  for (const m of work.matchAll(/(\d+(?:\.\d+)?)\s*kV/gi)) add('bolt', `${m[1]} kV`);

  // KVA ratings: look just after the number to see if it is a transformer or a DG set
  for (const m of work.matchAll(/(\d+(?:\.\d+)?)\s*KVA/gi)) {
    const after = work.slice(m.index + m[0].length, m.index + m[0].length + 22);
    const tr = after.search(/transformer/i);
    const dg = after.search(/\bDG\b|D\.G/i);
    let icon = 'panel';
    if (tr !== -1 && (dg === -1 || tr < dg)) icon = 'transformer';
    else if (dg !== -1) icon = 'dg';
    add(icon, `${m[1]} KVA`);
  }

  // Motors
  for (const m of work.matchAll(/(\d+(?:\.\d+)?)\s*HP/gi)) add('gear', `${m[1]} HP`);

  return out;
};

export const toProjects = (clients) =>
  clients.map(([name, loc, work, value], i) => {
    const cat = categorize(name, work);
    return {
      name, loc, work, value, cat,
      no: String(i + 1).padStart(2, '0'),
      specs: extractSpecs(work),
    };
  });

export default function ProjectCard({ p, delay = 0 }) {
  return (
    <article className="pj-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="pj-top">
        <span className="pj-cat">
          <PjIcon name={CAT_ICON[p.cat]} size={14} />
          {p.cat}
        </span>
        <span className="pj-no">{p.no}</span>
      </div>

      <h3>{p.name}</h3>
      <div className="pj-loc"><PjIcon name="pin" size={13} />{p.loc}</div>

      <p>{p.work}</p>

      <div className="pj-foot">
        <div className="pj-specs">
          {p.specs.map((s) => (
            <span className="pj-chip" key={s.label}>
              <PjIcon name={s.icon} size={12} />
              {s.label}
            </span>
          ))}
        </div>
        {p.value && (
          <span className="pj-value">
            <PjIcon name="rupee" size={11} />
            {p.value.replace('₹', '')}
          </span>
        )}
      </div>
    </article>
  );
}