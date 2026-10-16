const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const IMG = {
  hero: u('photo-1473341304170-971dccb5ac1e', 1600),
  about: u('photo-1581092918056-0c4c3acd3789'),
  work: u('photo-1621905252507-b35492cc74b4'),
  plant: u('photo-1565608438257-fac3c27beb36'),
  factory: u('photo-1581094794329-c8112a89af12'),
  site: u('photo-1621905251189-08b45d6a269e'),
  grid: u('photo-1558618666-fcd25c85cd64'),
  panel: u('photo-1504328345606-18bbc8c9d7d1'),
};
export const company = {
  name: 'Powerline Engineers',
  tag: 'A Grade Electrical Contractor · CA 485',
  phone: '+91 94474 27838', phone2: '+91 75588 77838',
  tel: '+919447427838', wa: '919447427838', tel2: '+917558877838',
  email: 'powerlinepalakkad71@yahoo.com',
  address: 'Near Bhagavathy Temple, Pudussery P.O, Palakkad – 678 623, Kerala',
  web: 'www.powerlineengg.com', contact: 'Krishnakumar V',
};

export const nav = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/projects', 'Projects'], ['/team', 'Team'], ['/contact', 'Contact']];

export const quick = [
  ['Shield', 'A Grade Licence', 'Electrical Contractor CA 485, Kerala State Electricity Licensing Board'],
  ['Bolt', 'HV & LV Projects', 'Industrial and commercial electrification, 11 kV to 220 kV'],
  ['Factory', 'Own Fabrication Shop', 'Control, motor control and relay panels built in-house'],
  ['Users', '33 Member Team', 'Supervisors, electricians, cable jointer and draftsman'],
];
export const stats = [[20, '+', 'Years of Experience'], [27, '+', 'Major Clients'], [33, '', 'Team Members'], [220, ' kV', 'Switchyard Capability']];
export const services = [
  ['Bolt', 'HV & LV Electrification', 'Complete industrial and commercial electrification from concept to commissioning, including 11 kV / 22 kV pole structures and switchyards.', "/assets/hv.jpg"],
  ['Gear', 'Transformers & DG Sets', 'Erection and commissioning of power transformers from 100 KVA to 10 MVA and generators from 20 KVA to 2.5 MW.', "/assets/form1.jpg"],
  ['Panel', 'Control Panel Fabrication', 'Well equipped fabrication shop for control panels, motor control centres and relay panels with high quality workmanship.', "/assets/fab.jpg"],
  ['Cable', 'Cabling & Termination', 'HT and LT cables from 1.1 kV to 33 kV: laying, joining, end termination, glands and cable jointing kits.', "/assets/term.jpg"],
  ['Tool', 'Switchgear & Supplies', 'Supply of MCCBs, switch fuse units, contactors, relays, motor starters, wires, insulators, lightning arresters and AB switches.', "/assets/switch.jpg"],
  ['Building', 'Consultancy & Design', 'Electrical design with AutoCAD, scheme preparation as per Inspectorate rules, estimation and project planning for campuses and buildings.', "/assets/cad.jpg" ],
];
export const assets = ['Power transformers 100 KVA to 10 MVA', 'Oil, Air, SF-6 and Vacuum circuit breakers', '11 kV – 220 kV switchyards and substations', 'Electrical induction furnaces', 'Motors 2.5 kW to 2 MW, flame proof / explosion proof switchgear', 'Cables 1.1 kV to 33 kV laying, joining and termination', 'EOT cranes of different capacities', 'UPS and HVAC systems', 'Lightning protection and earthing', 'Motor and power control centres, all motor starters'];
export const brands = ['Larsen & Toubro', 'Siemens', 'ABB', 'Havells', 'HPL', 'Finolex', 'Anchor'];
export const manpower = [['Supervisors', 3], ['Draftsman', 1], ['Accountant', 1], ['Office Assistants', 2], ['Electricians', 15], ['Helpers', 10], ['HV Cable Jointer', 1]];
export const clients = [
  ['APJ Refineries', 'NIDA, Kanjikode', 'Total plant electrification, 22 kV switchyard, 400 KVA transformer, 320 KVA DG set', '₹30 Lakhs'],
  ['Mannarkat Steels Pvt. Ltd.', 'Kanjikode', 'Total electrification, 150 HP blower motor, star-delta starter', ''],
  ['Aditya Fabrics', 'Kanjikode', '11 kV switchyard, 400 KVA transformer, 380 KVA DG set, panel boards', ''],
  ['Pyarilal Foams Pvt. Ltd.', 'Kanjikode', '11 kV switchyard, 400 KVA transformer, 250 KVA DG set', ''],
  ['Star India Conveyors', 'NIDA, Kanjikode', '22 kV switchyard, 315 KVA transformer, panels and LT cabling', ''],
  ['MILMA Cattle Feed Plant', 'Malampuzha', 'Lighting installation, conveyor cabling, LT termination', ''],
  ['ICCONS Hospital', 'Shornur, Palakkad', 'Lighting, UPS system, APFC panel and lightning protection', ''],
  ['Ahalia Integrated Campus', 'Kerala', 'Total electrical consultancy for 4,00,000 sq ft campus', ''],
  ['Empee Distilleries Ltd', 'NIDA, Kanjikode', '22 kV switchyard, 400 KVA transformer, 250 KVA DG set', ''],
  ['Mullas Wedding Centre', 'Mannarkkad', '11 kV switchyard, 250 KVA transformer, 11 kV HT SFU panel', ''],
  ['Aryanet Institute of Technology', 'Mundur, Palakkad', 'Engineering college electrification, 250 KVA outdoor transformer', ''],
  ['Kolumbil Gardens', 'Ollavakkode', 'Apartments electrification, 160 KVA indoor transformer', ''],
  ['Greenway Polymers', 'Pattathalachi', '11 kV switchyard, 450 KVA transformer, panels, LT cabling', ''],
  ['PepsiCo Holding India Ltd', 'Kanjikode', 'MV additions and alterations, 125 KVA DG set', ''],
  ['United Breweries Ltd', 'Kanjikode', 'MV alterations, 125 KVA DG, 1010 KVA and 380 KVA DG synchronisation', ''],
  ['Inox Wind Infrastructure', 'Palakkad', 'HT/LT cable laying and termination, extra works at Malpani locations', ''],
  ['Bioingredia Naturals Pvt. Ltd.', 'Kerala', '500 KVA transformer, 125 KVA DG, full electrical work', '₹65 Lakhs'],
  ['Vera Display', 'Kerala', '630 KVA transformer and electrification work', '₹43 Lakhs'],
  ['Valluvanad Hospital', 'Kerala', '2 × 400 KVA transformers, 2 × 400 KVA DG sets', '₹52 Lakhs'],
  ['Iconn Plastics', 'Kerala', '400 KVA transformer and electrification work', '₹21 Lakhs'],
];
export const team = [
  ['Velayudhan K', 'Senior Electrical Consultant', 'B.Sc Electrical Engineering · A Grade Supervisor Licence', '30 years in Kerala State Electricity Board, retired as Chief Engineer (Transmission). Engineering, erection and commissioning of transformers, switchyards 11–220 kV, generators up to 2.5 MW and VFDs.'],
  ['Jayakumar V', 'Technical Manager', 'B.Tech EEE · A Class Supervisory Licence (Grade A)', 'Over 16 years in electrical design, MEP control, scheme preparation as per Inspectorate rules, estimation and liaison for KSEB power allocation and energisation.'],
  ['Devadas C', 'Project Engineer – EHV', 'Electrical Diploma · Supervisor Competency Certificate', '17+ years in EHV substations, GIS, transmission lines, oil and gas and cement projects across Kuwait, Qatar and Oman, plus 400/220 kV work with ABB India.'],
];
export const vision = [
  ['Award', 'Our Vision', 'To be the most trusted electrical contractor and consultant in Kerala, known for safe, high quality power systems delivered within the stipulated time.'],
  ['Shield', 'Our Mission', 'To deliver HV and LV electrification of any magnitude with an experienced technical team, reputed approved products, quality workmanship and genuine customer care.'],
];
export const faqCats = [
  { id: 'hiring', icon: 'Building', label: 'Hiring & Projects', items: [
    ['Can I hire Powerline Engineers for home electrical fittings?', 'Many contractors provide electric fittings for homes. Please contact Powerline Engineers directly with your requirement and we will confirm the scope of work for you.'],
    ['Do electrical contractors take projects for commercial buildings?', 'Yes. Contractors take on projects for both commercial and residential buildings, with a team of expert electricians who handle outside and inside electric wiring and fittings.'],
    ['Does Powerline Engineers provide repairing service?', 'Our work centres on electrical wiring, fittings and complete project electrification. For repair of fans, TVs, refrigerators or other machines, please call us and check before booking.'],
  ] },
  { id: 'contact', icon: 'Mobile', label: 'Contact & Hours', items: [
    ['How can I contact Powerline Engineers for any emergency need?', 'You can directly visit or call us near Bhagavathy Temple, Pudussery, Palakkad. Working hours are Monday to Saturday, 9:00 am to 5:00 pm. Sunday: closed.'],
  ] },
  { id: 'basics', icon: 'Bolt', label: 'Electrical Basics', items: [
    ['Is an electrical contractor and electrician the same?', 'No. An electrical contractor is distinct from an electrician. A contractor is a businessman who usually hires electricians.'],
    ['How to take care of electrical appliances?', 'Watch out if an appliance is overheating or making sounds while in use. Always consult a reputed electrician or an electrical contractor for services.'],
  ] },
];
export const feedback = [
  ['Bioingredia Naturals Pvt. Ltd.', 'Completion certificate · 10 Nov 2022', 'Powerline Engineers completed the electrical work successfully during the assigned period and were extremely dedicated towards their work.', '₹65 Lakh project'],
  ['Inox Wind Infrastructure Services', 'Repeat work orders · 2017', 'Awarded HT cable laying and associated work worth ₹28.6 lakh, followed by a second work order for extra works worth ₹15.7 lakh in the same year.', '2 work orders'],
  ['Aditya Fabrics (Empee Group)', 'Work order · January 2007', 'Issued a work order for a 400 KVA transformer, 11 kV four-pole switchyard, 380 KVA DG set and all connected electrical works.', 'Total plant electrification'],
  ['Star India Conveyors', 'Work order · June 2007', 'Issued a work order for a 315 KVA transformer, 22 kV four-pole switchyard and connected electrical works.', 'Switchyard & transformer'],
];
export const hours = 'Mon – Sat: 9:00 am – 5:00 pm · Sunday closed';
