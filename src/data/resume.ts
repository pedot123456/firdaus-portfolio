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
      'Managed end-to-end undergraduate intake operations and student application processing.',
      'Served as primary contact point for prospective students and parents throughout the admission cycle.',
      'Collaborated on educational marketing initiatives including campus tours and open-day sessions.',
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
      'Managed event operations, equipment setup, and real-time customer engagement.',
      'Served as moderator for podcast sessions and media-related programmes.',
    ],
  },
  {
    id: 'imam-utp',
    category: 'work',
    role: 'Assistant Imam (On-Campus)',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Sep 2023 – Present',
    description: '',
    bullets: [
      'Assisted in daily prayer management, congregational prayers, and campus religious activities.',
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
    period: 'Aug 2025 – Jul 2026',
    description:
      'ARMy is a university-supervised student marketing club at UTP responsible for promoting ' +
      'campus life, student services, and university events.',
    bullets: [
      'Led strategic planning for university programmes and supervised the successful execution of 25+ large-scale events.',
      'Managed cross-functional committees of up to 50 members across logistics, media, protocol, sponsorship, and operations.',
      'Collaborated with external stakeholders: MARA, MAIPK, KPM, SBP, and MRSM.',
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
      'Led a 5-day orientation programme welcoming 350+ new students to UTP.',
      'Coordinated a 111-member committee across all operational departments.',
      'Developed the first-ever Orientation Week Guideline (Terms of Reference) document.',
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
      'Directed a 4-day CSR programme for 160 participants (PETRONAS employee children).',
      'Coordinated 50 committee members and managed programme financial planning totalling RM 109,505.00.',
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
      'Conducted inter-varsity benchmarking with peer organisations at UKM (Lasykar Khaleefa).',
      'Optimised organisational design and reduced committee overhead.',
      'Pioneered the production of an original club album as a branding and engagement initiative.',
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
      'Spearheaded planning and execution of campus-wide cybersecurity awareness events and hackathons.',
      'Organised hands-on penetration testing workshops and CTF competitions.',
      'Managed partnerships with industry professionals for technical talks attended by 300+ students.',
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
      'Secured full corporate funding two weeks ahead of schedule.',
      'Maintained pre-event expenditures below RM 500.',
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
