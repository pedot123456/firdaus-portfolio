/**
 * Central data file — update this to change all portfolio content.
 */

export const personalInfo = {
  name: 'Muhammad Firdaus Zahin',
  lastName: 'Bin Nurus Sham',
  role: 'Information Technology Undergraduate at UTP',
  badge: 'MARA Scholar',
  tagline:
    'Passionate about leveraging technology to solve real-world problems through cybersecurity, digital solutions, and innovation.',
  email: 'firdausforcaamskin@gmail.com',
  linkedin: 'https://linkedin.com/in/muhammad-firdaus-zahin',
  github: 'https://github.com/firdauszahin',
  location: 'Universiti Teknologi PETRONAS, Perak, Malaysia',
  availability: 'Seeking Internship: Sept 2026 – Apr 2027',
}

export const aboutBio = [
  'I am an Information Technology undergraduate at Universiti Teknologi PETRONAS (UTP), currently seeking internship opportunities from September 2026 to April 2027.',
  'With a strong background in technical development and large-scale project leadership, I balance hands-on technical skills with deep involvement in university governance and event management — having directed over 25 large-scale events across multiple organizations.',
  'My interests span cybersecurity, data management, and building digital solutions that create measurable real-world impact.',
]

export const techStack = [
  { name: 'Python', icon: 'SiPython', color: '#3776AB' },
  { name: 'SQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'Oracle APEX', icon: 'SiOracle', color: '#F80000' },
  { name: 'Excel', icon: 'SiMicrosoftexcel', color: '#217346' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'Cybersecurity', icon: 'SiKalilinux', color: '#557C94' },
  { name: 'Power BI', icon: 'SiPowerbi', color: '#F2C811' },
  { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
]

export const projects = [
  // ─── Hackathons ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'BIMTalk — Microsoft ASEAN AI Hackathon 2025',
    subtitle: 'AI Sign Language Translator',
    achievement: '1st Runner-Up',
    achievementColor: 'silver',
    theme: 'ai',
    category: 'Hackathons',
    description:
      'Built an AI-powered sign language translator at the Microsoft ASEAN AI for Accessibility hackathon. Leveraged Azure Cognitive Services, OpenCV, and LSTM models to assist users with hearing impairments in real-time communication.',
    tech: ['Python', 'Azure AI', 'OpenCV', 'LSTM', 'React', 'FastAPI'],
    imageSrc: '/BIMTalk.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'MyUTP++ — CODEXIA 2026',
    subtitle: 'Campus Management Platform',
    achievement: 'Top 6 Finalist',
    achievementColor: 'bronze',
    theme: 'campus',
    category: 'Hackathons',
    description:
      'Qualified as a Top 6 Finalist at CODEXIA 2026. Built a comprehensive campus management system using Oracle APEX and SQL, streamlining student services, room bookings, and event coordination.',
    tech: ['Oracle APEX', 'SQL', 'PL/SQL', 'JavaScript'],
    imageSrc: '/MyUTP++.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'OSINS — SECURE NEX Hackathon 2025',
    subtitle: 'OSINT Cybersecurity Tool',
    achievement: '5th Place',
    achievementColor: 'indigo',
    theme: 'cyber',
    category: 'Hackathons',
    description:
      'Placed 5th at the PETRONAS SECURE NEX Hackathon 2025. Designed and implemented an OSINT tool with Gemini AI integration and D3.js visualisations to map threat actors and enterprise attack surfaces.',
    tech: ['Python', 'Gemini AI', 'D3.js', 'OSINT', 'Cybersecurity'],
    imageSrc: 'https://www.instagram.com/p/DSY0a0fEvOR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  // ─── Data & Analytics ─────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Perak Airspace Analytics',
    subtitle: 'IoT Aircraft Tracking Dashboard',
    achievement: null,
    achievementColor: null,
    theme: 'iot',
    category: 'Data & Analytics',
    description:
      'Built a real-time IoT aircraft tracking dashboard for the Perak airspace using ADS-B data feeds, Streamlit, and pandas. Visualised live flight paths and generated airspace utilisation reports.',
    tech: ['Python', 'Streamlit', 'Pandas', 'IoT', 'Data Visualisation'],
    imageSrc: '/IoT Aircraft.jpeg',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Bank Loan Prediction',
    subtitle: 'ML Classification Model',
    achievement: null,
    achievementColor: null,
    theme: 'data',
    category: 'Data & Analytics',
    description:
      'Developed a machine learning pipeline in R to predict bank loan approvals with 96.45% accuracy. Applied logistic regression, decision trees, and random forest with full cross-validation.',
    tech: ['R', 'Machine Learning', 'Classification', 'Data Analysis'],
    imageSrc: '/Bank Loan.png',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  // ─── UI/UX ─────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'MUDAH.NYEE — E-Commerce Redesign',
    subtitle: 'Figma UX Overhaul',
    achievement: null,
    achievementColor: null,
    theme: 'uiux',
    category: 'UI/UX',
    description:
      'Redesigned the MUDAH.MY mobile e-commerce experience in Figma, achieving 98% task completion in user testing. Focused on simplified navigation, trust signals, and accessible typography.',
    tech: ['Figma', 'UX Research', 'Prototyping', 'User Testing'],
    imageSrc: '/Mudahnyee.jpg',
    githubUrl: '#',
    liveUrl: 'https://www.figma.com/make/TgWQFxUzhpiP4VjrVbyvjI/MUDAH.NYEE-App-Design?fullscreen=1',
    featured: false,
  },
  // ─── Additional Hackathons ───────────────────────────────────────────────────
  {
    id: 7,
    title: 'Golden Drops / Waste To Worth',
    subtitle: 'Oh My Code Competition 2024',
    achievement: '3rd Runner-Up',
    achievementColor: 'indigo',
    theme: 'eco',
    category: 'Hackathons',
    description:
      'Served as Assistant Project Director and Lead Developer for a Visual Basic (.NET) desktop application managing waste cooking oil recycling collection and distribution, aligned with SDG 12. Handled supplier registration, collection scheduling, and progress reporting.',
    tech: ['Visual Basic (.NET)', 'Microsoft Access', 'SQL', 'SDG 12'],
    imageSrc: '/Golden Drops.jpg',
    githubUrl: '#',
    liveUrl: 'http://waste2worth.atwebpages.com/Login_page.html',
    featured: false,
  },
  // ─── Networking & Infrastructure ────────────────────────────────────────────
  {
    id: 8,
    title: 'Secure Multi-Department Network',
    subtitle: 'Enterprise Network Design & Simulation',
    achievement: null,
    achievementColor: null,
    theme: 'network',
    category: 'Networking',
    description:
      'Designed and simulated a fully segmented, secure network infrastructure for a 38-employee multi-department organisation using Cisco Packet Tracer. Implemented VLANs, DHCP/DNS, SSH remote management, SNMP monitoring, and Extended ACLs for strict Layer-3 firewall policies.',
    tech: ['Cisco Packet Tracer', 'VLAN', 'DHCP', 'DNS', 'SSH', 'SNMP', 'ACL', 'OSPF'],
    imageSrc: '/Secure Multi - Departmentjpg.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  // ─── Database Systems ────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Personal Finance Management DB',
    subtitle: 'Normalised RDBMS — YNAB-inspired Budgeting System',
    achievement: null,
    achievementColor: null,
    theme: 'data',
    category: 'Data & Analytics',
    description:
      'Architected a fully normalised RDBMS for personal finance tracking inspired by YNAB. Modelled UML entity-relationship diagrams normalised to 3NF. Wrote DDL scripts for 15+ tables covering accounts, transactions, budgets, categories, and payees, plus DML for deposits, transfers, reconciliation, and reporting.',
    tech: ['SQL', 'Oracle Database', 'UML/ER Modelling', '3NF Normalisation', 'DDL', 'DML'],
    imageSrc: '/Personal Fianance Management DB.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
]

export const skills = [
  {
    category: 'Languages & Databases',
    items: [
      { name: 'Python', level: 80, icon: 'SiPython', color: '#3776AB' },
      { name: 'SQL', level: 75, icon: 'SiMysql', color: '#4479A1' },
      { name: 'Oracle APEX', level: 70, icon: 'SiOracle', color: '#F80000' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Microsoft Excel', level: 85, icon: 'SiMicrosoftexcel', color: '#217346' },
      { name: 'Power BI', level: 65, icon: 'SiPowerbi', color: '#F2C811' },
      { name: 'Git & GitHub', level: 72, icon: 'SiGit', color: '#F05032' },
    ],
  },
  {
    category: 'Core Competencies',
    items: [
      { name: 'Cybersecurity', level: 78, icon: 'shield', color: '#06b6d4' },
      { name: 'Data Management', level: 80, icon: 'database', color: '#8b5cf6' },
      { name: 'Project Management', level: 90, icon: 'briefcase', color: '#10b981' },
      { name: 'Critical Thinking', level: 88, icon: 'brain', color: '#f59e0b' },
    ],
  },
]

// Top 3 leadership roles shown in the Experience section
export const experience = [
  {
    id: 1,
    role: 'President',
    organization: 'Ambassador of Marketing Youth (ARMy UTP)',
    period: 'Aug 2025 – Jul 2026',
    type: 'Leadership',
    color: 'indigo',
    highlights: [
      'Led 50-member cross-functional committees across marketing, creative, and logistics.',
      'Planned and executed over 25 large-scale university events from conception to post-event analysis.',
      'Drove a 40% increase in student engagement through strategic marketing and brand partnerships.',
      'Maintained stakeholder relationships with university administration and external sponsors.',
    ],
  },
  {
    id: 2,
    role: 'Project Team Lead — SandBox Micromobility Initiative',
    organization: 'Student Representative Council (SRC), UTP',
    period: '2024',
    type: 'Project Lead',
    color: 'cyan',
    highlights: [
      'Directed project strategy for the SandBox Micromobility pilot program on campus.',
      'Led safety campaign design and stakeholder communication with university facilities management.',
      'Coordinated user research to gather ridership data and improve policy recommendations.',
      'Produced a final impact report presented to the university administration.',
    ],
  },
  {
    id: 3,
    role: 'Project Director — Orientation Week',
    organization: 'Universiti Teknologi PETRONAS',
    period: 'Jan 2026',
    type: 'Event Director',
    color: 'emerald',
    highlights: [
      'Directed O\'Week for 350 new students with a 111-member organising committee.',
      'Managed end-to-end logistics, programme scheduling, and budget allocation.',
      'Coordinated multiple concurrent tracks across academic, social, and welfare streams.',
      'Delivered the event with zero critical incidents and above-target satisfaction scores.',
    ],
  },
]

export const achievements = {
  hackathons: [
    {
      id: 'h1',
      title: 'Microsoft ASEAN AI for Accessibility Hackathon',
      result: '1st Runner-Up',
      year: '2025',
      host: 'Microsoft ASEAN',
      color: 'silver',
      description: 'Regional AI hackathon across Southeast Asia — built BIMTalk, an AI-powered sign language translator.',
    },
    {
      id: 'h2',
      title: 'CODEXIA National Innovation Challenge',
      result: 'Top 6 Finalist',
      year: '2026',
      host: 'National',
      color: 'bronze',
      description: 'National-level competitive programming and innovation challenge; delivered a full-stack campus management system.',
    },
    {
      id: 'h3',
      title: 'SECURE NEX Hackathon — PETRONAS Group Security',
      result: '5th Place',
      year: '2025',
      host: 'PETRONAS',
      color: 'indigo',
      description: 'Enterprise cybersecurity hackathon; built OSINS, an OSINT-powered threat mapping and analysis tool.',
    },
  ],
  certifications: [
    {
      id: 'c1',
      title: 'AWS Machine Learning Foundations',
      issuer: 'Amazon Web Services',
      year: '2024',
      color: '#FF9900',
      pdfFile: 'aws-ml.pdf',
    },
    {
      id: 'c2',
      title: 'AWS Serverless Architecture',
      issuer: 'Amazon Web Services',
      year: '2024',
      color: '#FF9900',
      pdfFile: 'aws-serverless.pdf',
    },
    {
      id: 'c3',
      title: 'Microsoft Excel — Data Analysis',
      issuer: 'Microsoft',
      year: '2024',
      color: '#217346',
      pdfFile: 'excel.pdf',
    },
    {
      id: 'c4',
      title: 'Cloud Job Roles & Career Pathways',
      issuer: 'AWS / Industry',
      year: '2024',
      color: '#6366f1',
      pdfFile: 'cloud-roles.pdf',
    },
    {
      id: 'c5',
      title: 'Professional Thinking & Critical Analysis',
      issuer: 'HRD Corp Malaysia',
      year: '2024',
      color: '#10b981',
      pdfFile: 'critical-thinking.pdf',
    },
  ],
}
