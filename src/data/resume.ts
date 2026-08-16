import type { TimelineEntry, SkillEntry, SidebarInfo, Award, Certification } from '../types'
import { personal } from './personal'

/* ── Work Experience ─────────────────────────────────────────── */
const workEntries: TimelineEntry[] = [
  {
    id: 'ta-utp',
    category: 'work',
    role: 'Teaching Assistant (Academic Support)',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Jun 2025 – Nov 2025',
    description:
      'Provided academic support to undergraduate students across computing modules.',
    bullets: [
      'Prepared lecture slides and academic presentation materials using Microsoft PowerPoint.',
      'Supported course delivery by clarifying concepts and assisting students during lab sessions.',
    ],
  },
  {
    id: 'admission-utp',
    category: 'work',
    role: 'Admission Assistant',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Sep 2024 – Nov 2025',
    description:
      'Managed end-to-end undergraduate intake operations under the Admissions Office.',
    bullets: [
      'Managed end-to-end undergraduate intake operations, processing student applications with high administrative precision.',
      'Served as primary contact point for prospective local and international students and parents throughout the admission cycle.',
      'Organised, sorted, and cross-checked application files to ensure quick verification of transcripts and prerequisite documentation.',
      'Collaborated on educational marketing initiatives including campus tours and open-day consultation sessions.',
    ],
  },
  {
    id: 'helaian-potret',
    category: 'work',
    role: 'Event Operation & Media Crew',
    organization: 'Helaian Potret Studio',
    period: 'Jan 2025 – Present',
    description:
      'Managed event operations and customer engagement for a professional photography and photobooth services company.',
    bullets: [
      'Managed event operations, equipment setup, and real-time customer engagement for photography and photobooth services across multiple programmes.',
      'Served as moderator for podcast sessions and media-related programmes, facilitating discussions and audience engagement.',
      'Supported promotional activities and client communication for studio-related services.',
    ],
  },
  {
    id: 'imam-utp',
    category: 'work',
    role: 'Assistant Imam (On-Campus)',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Sep 2023 – Aug 2026',
    description: '',
    bullets: [
      'Assisted in daily prayer management, congregational prayers, and campus religious activities at the university mosque.',
      'Developed discipline, communication, and time management skills while balancing academic commitments and part-time responsibilities.',
    ],
  },
]

/* ── Leadership & Organisations ──────────────────────────────── */
const leadershipEntries: TimelineEntry[] = [
  {
    id: 'army-president',
    category: 'leadership',
    role: 'President',
    organization: 'Ambassador of Marketing Youth (ARMy UTP)',
    period: 'Jul 2025 – Jul 2026',
    description:
      'ARMy is a university-supervised student marketing club at UTP responsible for promoting ' +
      'campus life, student services, and university events.',
    bullets: [
      'Led strategic planning and execution of university-level programmes, student engagement initiatives, and external collaborations.',
      'Managed cross-functional committees of up to 50 members across logistics, media, protocol, sponsorship, and operations.',
      'Collaborated with external stakeholders including MARA, MAIPk, Kementerian Pendidikan Malaysia (KPM), MGKK, SBP, and MRSM.',
      'Supervised the successful execution of 25+ events under my tenure, including orientation, outreach, and leadership programmes.',
      'Directed "Unlocking True Potential MRSM@UTP" (May 2025), a 3D2N campus programme for 150+ students and 20 teachers nationwide.',
      'Co-led the "Imtiyaz Energising Futures" 3D2N immersive campus programme with Yayasan Terengganu, and served as Assistant Head of Department, HR.',
    ],
  },
  {
    id: 'oweek-jan2026',
    category: 'leadership',
    role: 'Project Director — Orientation Week Jan 2026',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Jan 2026',
    description: '5-day new student orientation programme.',
    bullets: [
      'Led a 5-day orientation programme welcoming 350+ new students to UTP, working directly with the University President and Vice Provost.',
      'Initiated a brand-new O\'Week structure and authored the first-ever Orientation Week Terms of Reference (Guideline).',
      'Reduced the programme from 6 to 5 days and introduced a new HICOM system for streamlined operations.',
      'Added new engagement slots — Alumni Sharing and DNA of UTP — to better inspire incoming students.',
    ],
  },
  {
    id: 'kem-syabab',
    category: 'leadership',
    role: 'Project Director — Kem Super Syabab 2.0',
    organization: 'PETRONAS CSR Programme',
    period: 'Dec 2025',
    description:
      '4-day CSR camp programme for children of PETRONAS employees.',
    bullets: [
      'Directed a 4-day, 3-night CSR programme for 160 participants (children of PETRONAS employees), focused on spiritual well-being, leadership, and personal growth.',
      'Secured sponsorships and support from YUTP, Majlis Agama Islam Perak (MAIPk), An-Nur Islamic Centre, and PETRONAS Chemical Fertilizer Kedah (PCFK).',
      'Coordinated the committee and managed programme financial planning totalling RM 109,505.00.',
    ],
  },
  {
    id: 'fexes',
    category: 'leadership',
    role: 'Project Director — FEXES 4.0',
    organization: 'Centre for Foundation Studies (CFS), UTP',
    period: 'Feb 2024',
    description: 'Business-management engagement programme for foundation students.',
    bullets: [
      'Led a team engaging 500+ foundation students in Business Management.',
      'Collaborated with Touch \'n Go and Maybank to implement seamless e-payments live at the event.',
      'Secured sponsorship support from Nazhan Production and CFS to fund the initiative.',
    ],
  },
  {
    id: 'src',
    category: 'leadership',
    role: 'Student Representative Council (SRC) — Multiple Roles',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Jan 2024 – Nov 2025',
    description:
      'Formally represented 7,000+ UTP students in the highest student governance body.',
    bullets: [
      'Project Team Lead — SandBox Micromobility Initiative (May 2025 – Jan 2026): directed project strategy, created safety campaigns, and synthesised field observations into formal HSE management recommendations.',
      'Assistant Project Director — Student Barometer Survey 2025: mobilised student body to achieve an 85% survey participation rate; managed legal disbursement of RM 12,830.00 in taskforce resources.',
      'Assistant Exco Welfare (Jan–Nov 2025): spearheaded the Yayasan Bina Upaya Food Coupon programme and Jimat Fridays initiative; led HSSE Cleaning & Clearance for abandoned vehicles.',
      'Assistant Project Director — Student Excellent Awards (SEA) 2025 and Project Director — SRC Team Building (Escape Penang, 27 participants).',
      'Member of Parliament, UTP Student Parliamentary & Election Council (2024–2025): represented Village 6 and advocated for improved campus parking infrastructure.',
    ],
  },
  {
    id: 'muhandis-president',
    category: 'leadership',
    role: 'President',
    organization: 'MUHANDIS UTP',
    period: 'Sep 2023 – Sep 2024',
    description:
      'Led MUHANDIS, a student technology and engineering culture club at UTP.',
    bullets: [
      'Conducted inter-varsity benchmarking with peer organisations at UKM (Lasykar Khaleefa) to integrate best practices in performance management and team discipline.',
      'Optimised organisational design and reduced committee overhead through streamlined management workflows.',
      'Pioneered the production of an original club album, overseeing songwriting through final audio production.',
      'Secured 2nd Place at Cultiva Sports (Futsal) and 3rd Place at the UniSZA International Arabic Festival.',
    ],
  },
  {
    id: 'cyberhax',
    category: 'leadership',
    role: 'Co-Director, Event Department',
    organization: 'CYBERHAX UTP',
    period: 'May 2025 – Nov 2025',
    description:
      'CYBERHAX is UTP\'s student-run cybersecurity club.',
    bullets: [
      'Spearheaded strategic planning, technical scoping, and execution of campus-wide cybersecurity events, workshops, and hackathons.',
      'Managed a cross-functional committee across logistics, technical infrastructure, and marketing to deliver under tight deadlines.',
      'Oversaw risk assessment and crowd management for physical and virtual threat-monitoring simulations.',
      'Competed in PETRONAS Group Security\'s SECURE NEX Hackathon 2025 with UTP SYNTECH, placing 5th.',
    ],
  },
  {
    id: 'petra-vinyl',
    category: 'leadership',
    role: 'Assistant Project Director — Vinyl Of Nusantara',
    organization: 'PETRA UTP',
    period: 'Sep 2024 – Jun 2025',
    description: 'Music and culture event series celebrating Nusantara heritage.',
    bullets: [
      'Supervised the Public Relations and Sponsorship departments for Vinyl Of Nusantara 3.0, securing key partnerships and amplifying event reach.',
      'Led the Food & Beverages department for Vinyl Of Nusantara 2.0, curating a seamless dining experience for attendees.',
    ],
  },
  {
    id: 'aeroxpert',
    category: 'leadership',
    role: 'Head of Sponsorship',
    organization: 'AeroXpert (MPU4 Project)',
    period: 'Dec 2025 – May 2026',
    description: '',
    bullets: [
      'Headed the Business and Sponsorship department, overseeing end-to-end corporate fundraising strategy, outreach, and financial planning.',
      'Secured full targeted corporate sponsorship funding two weeks ahead of the primary event deadline.',
      'Maintained pre-event operational expenditures below RM 500 through strategic resource allocation and negotiation.',
      'Crafted tailored corporate value propositions and pitch decks to build professional ties with external organisations.',
    ],
  },
  {
    id: 'rakan-masjid',
    category: 'leadership',
    role: 'Committee Member',
    organization: 'Rakan Masjid UTP',
    period: 'Jun 2025 – Jul 2026',
    description: '',
    bullets: [
      'Contributed to Islamic and community programmes including UTP #QuranTime, Ihya Ramadan Discovery, and Konvensyen Belia Islam IPT Negeri Perak.',
      'Served as imam coordinator and moderator for "Gema UTP Bersama Al-Aqsa"; led Public Relations for Cahaya Ramadan 2024.',
    ],
  },
  {
    id: 'gpms',
    category: 'leadership',
    role: 'Executive Committee (Academic & Spiritual Affairs)',
    organization: 'Gabungan Pelajar Melayu Semenanjung (GPMS)',
    period: 'Jan 2023 – Dec 2024',
    description: '',
    bullets: [
      'Organised motivational programmes and academic talks at secondary schools across the region.',
    ],
  },
]

/* ── Education ───────────────────────────────────────────────── */
const educationEntries: TimelineEntry[] = [
  {
    id: 'utp-degree',
    category: 'education',
    role: 'Bachelor of Information Technology (Hons)',
    organization: 'Universiti Teknologi PETRONAS (UTP)',
    period: 'Sep 2024 – Jan 2028 (Expected)',
    description: 'Minor in Corporate Management. Fully funded by MARA Scholarship.',
    bullets: [
      'Dean\'s List Recipient.',
      'Relevant Coursework: Database Systems, Software Engineering, Data Communication & Networks, Discrete Mathematics, Statistics, Requirement Engineering.',
    ],
  },
  {
    id: 'utp-foundation',
    category: 'education',
    role: 'Foundation in Information Technology',
    organization: 'Universiti Teknologi PETRONAS (UTP)',
    period: 'Sep 2023 – May 2024',
    description: '',
    bullets: [],
  },
  {
    id: 'tahfiz',
    category: 'education',
    role: 'Certification — Al-Quran & Taranum',
    organization: "Maahad Tahfiz Al-Quran Wal-Qiraat Negeri Perak",
    period: 'May 2022 – May 2023',
    description: '',
    bullets: [],
  },
  {
    id: 'spm',
    category: 'education',
    role: 'Sijil Pelajaran Malaysia (SPM) — Science Stream',
    organization: 'SMK Seri Iskandar',
    period: 'Apr 2017 – Jan 2022',
    description: '',
    bullets: [],
  },
]

/** All entries exported for use by the resume page — order within each group is display order. */
export const timelineEntries: TimelineEntry[] = [
  ...workEntries,
  ...leadershipEntries,
  ...educationEntries,
]

/* ── Skills ─────────────────────────────────────────────────── */
export const skills: SkillEntry[] = [
  { name: 'SQL / Oracle APEX',           level: 82 },
  { name: 'Python',                       level: 76 },
  { name: 'Microsoft Excel',             level: 86 },
  { name: 'Project Management',          level: 92 },
  { name: 'HTML / CSS / JavaScript',     level: 68 },
  { name: 'Data Management',             level: 80 },
  { name: 'Figma / Canva',               level: 72 },
  { name: 'Networking (Cisco / Huawei)', level: 65 },
]

/* ── Sidebar quick-info ──────────────────────────────────────── */
export const sidebarInfo: SidebarInfo[] = [
  { label: 'University',    value: 'Universiti Teknologi PETRONAS' },
  { label: 'Programme',     value: 'B.IT (Hons) · Minor Corp. Mgmt' },
  { label: 'Scholarship',   value: 'MARA (Full)' },
  { label: 'Internship',    value: 'Sept 2026 – Apr 2027' },
  { label: 'Location',      value: 'Perak, Malaysia' },
  { label: 'Phone',         value: personal.phone,  href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { label: 'Email',         value: personal.email,  href: `mailto:${personal.email}` },
]

/* ── Awards ──────────────────────────────────────────────────── */
export const awards: Award[] = [
  { title: '1st Runner-Up',       event: 'Microsoft ASEAN AI for Accessibility Hackathon', year: '2025', highlight: true },
  { title: 'Top 6 Finalist',      event: 'CODEXIA MVP National Competition',               year: '2026', highlight: true },
  { title: '5th Place',           event: 'Secure Nex Hackathon (PETRONAS Group Security)', year: '2025' },
  { title: '3rd Runner-Up',       event: 'Oh My Code Competition',                         year: '2024' },
  { title: "Dean's List",         event: 'Universiti Teknologi PETRONAS',                  year: '2024–2025' },
  { title: 'Leadership Award',    event: 'Universiti Teknologi PETRONAS',                  year: '2025' },
]

/* ── Certifications ──────────────────────────────────────────── */
export const certifications: Certification[] = [
  /* Microsoft */
  {
    group: 'Microsoft',
    title: 'BERSAMA MALAYSIA: Microsoft AI For All',
    issuer: 'Microsoft',
    year: 'Feb 2025',
  },

  /* Cybersecurity */
  {
    group: 'Cybersecurity',
    title: 'How Hackers Break Into WiFi (IEEE 802.11 Exploitation)',
    issuer: '0day Academy × OWASP',
    year: 'Jan 2026',
  },
  {
    group: 'Cybersecurity',
    title: 'How Hackers Break Into Networks',
    issuer: '0day Academy',
    year: 'Jun 2025',
  },

  /* AWS Cloud & Machine Learning */
  {
    group: 'AWS Cloud & Machine Learning',
    title: 'Job Roles in the Cloud',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Jun 2026',
  },
  {
    group: 'AWS Cloud & Machine Learning',
    title: 'Getting into the Serverless Mindset',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Jun 2026',
  },
  {
    group: 'AWS Cloud & Machine Learning',
    title: 'Machine Learning Essentials for Business & Technical Decision Makers',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Jun 2026',
  },

  /* Professional Development — HRD Corp */
  {
    group: 'Professional Development (HRD Corp)',
    title: 'Critical Thinking Skills for Professionals',
    issuer: 'HRD Corp',
    year: 'Jun 2026',
  },
  {
    group: 'Professional Development (HRD Corp)',
    title: 'Tips Ajaib Menggunakan MS Excel — Advanced Data Management',
    issuer: 'HRD Corp',
    year: 'Jun 2026',
  },
]
