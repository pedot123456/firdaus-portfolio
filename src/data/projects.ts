import type { Project } from '../types'

/**
 * All portfolio projects — competition wins, academic builds, and personal tools.
 *
 * Ordering: competition achievements first (by placing), then technical projects
 * newest-first within each group.
 *
 * featured: true  → shown in the home-page "Featured Projects" strip (top 3 competition wins)
 * featured: false → projects page only
 */

/* Shared base URL for LinkedIn project overlay links */
const LI_BASE =
  'https://www.linkedin.com/in/muhammad-firdaus-zahin-bin-nurus-sham-3ba334341/overlay/Project'
const LI_SUFFIX =
  '/treasury/?profileId=ACoAAFWoBD4Bfnf4DjF9WXbFpyGPXM1gwghGiUI&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BSHJEM8I7QTa8HsVq8cpExw%3D%3D'
const LI_SUFFIX_B =
  '/treasury/?profileId=ACoAAFWoBD4Bfnf4DjF9WXbFpyGPXM1gwghGiUI&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNYAEPjikSRipk7XVzgKWtA%3D%3D'

export const projects: Project[] = [
  /* ── Competition & Hackathon ─────────────────────────────── */
  {
    id: 'bimtalk',
    index: 1,
    theme: 'ai',
    featured: true,
    category: 'Hackathon / Competition',
    period: 'Jun 2025',
    title: 'BIMTalk',
    subtitle: 'Microsoft ASEAN AI for Accessibility Hackathon 2025 — 1st Runner-Up',
    description:
      'Designed the core software architecture for an AI-powered real-time translation platform ' +
      'between Bahasa Isyarat Malaysia (BIM — Malaysian Sign Language) and spoken Malay, winning ' +
      '1st Runner-Up at the Microsoft ASEAN AI for Accessibility Hackathon 2025. Targeted ' +
      'healthcare, education, and public-service accessibility use cases. Integrated OpenCV ' +
      'for gesture capture, Azure Custom Vision for sign recognition, LSTM networks for gesture ' +
      'sequencing, ChatGPT API for natural-language generation, and Azure Speech Services for ' +
      'voice output.',
    technologies: ['Python', 'OpenCV', 'Azure Custom Vision', 'Azure Speech Services', 'LSTM', 'ChatGPT API'],
    accentColor: '#0F5FA8',
    githubUrl: 'https://github.com/pedot123456',
    linkedinUrl: `${LI_BASE}/2017507117${LI_SUFFIX}`,
    imageSrc: '/bimtalk.png',
  },
  {
    id: 'myutp-plus',
    index: 2,
    theme: 'campus',
    featured: true,
    category: 'Hackathon / Competition',
    period: 'Apr 2026',
    title: 'MyUTP++',
    subtitle: 'CODEXIA 2026 — Top 6 Finalist',
    description:
      'Developed an MVP digital campus solution using Oracle APEX and SQL, reaching the Top 6 ' +
      'Finalist stage at CODEXIA 2026 — a national-level competitive application development ' +
      'programme. Led project coordination, technical development, and UI/UX design to deliver ' +
      'a centralised platform integrating event management, social interaction, direct messaging, ' +
      'a peer-to-peer marketplace, and real-time event categorisation for UTP students.',
    technologies: ['Oracle APEX', 'SQL', 'PL/SQL', 'Oracle Database', 'HTML/CSS', 'JavaScript'],
    accentColor: '#C4502B',
    githubUrl: 'https://github.com/pedot123456',
    linkedinUrl: `${LI_BASE}/2019584543${LI_SUFFIX_B}`,
    imageSrc: '/myutp-plus.png',
  },
  {
    id: 'osins',
    index: 3,
    theme: 'cyber',
    featured: true,
    category: 'Hackathon / Competition',
    period: 'Nov 2025',
    title: 'OSINS',
    subtitle: 'Secure Nex Hackathon 2025 (PETRONAS Group Security) — 5th Place',
    description:
      'Developed an OSINT-based cybersecurity solution within 48 hours at the PETRONAS Group ' +
      'Security Secure Nex Hackathon 2025, placing 5th. Integrated Instagram and TikTok APIs ' +
      'for publicly available data analysis. Designed heat-map and force-directed graph ' +
      'visualisations to surface threat actor patterns and entity relationships, and leveraged ' +
      'Gemini AI for automated cybersecurity risk classification and analyst triage.',
    technologies: ['Python', 'Gemini AI', 'Instagram API', 'TikTok API', 'D3.js', 'FastAPI'],
    accentColor: '#2E7D32',
    githubUrl: 'https://github.com/pedot123456',
    linkedinUrl: `${LI_BASE}/2018633329${LI_SUFFIX}`,
    imageSrc: '/osins.png',
  },
  {
    id: 'golden-drops',
    index: 4,
    theme: 'campus',
    featured: false,
    category: 'Hackathon / Competition',
    period: 'May 2024',
    title: 'Golden Drops / Waste To Worth',
    subtitle: 'Oh My Code Competition 2024 — 3rd Runner-Up',
    description:
      'Served as Assistant Project Director and Lead Developer for a Visual Basic (.NET) ' +
      'desktop application managing waste cooking oil recycling collection and distribution, ' +
      'directly aligned with SDG 12 (Responsible Consumption and Production). The application ' +
      'handled supplier registration, collection scheduling, and progress reporting — earning ' +
      '3rd Runner-Up at the Oh My Code competition.',
    technologies: ['Visual Basic (.NET)', 'Microsoft Access', 'SQL', 'SDG 12'],
    accentColor: '#558B2F',
    githubUrl: 'https://github.com/pedot123456',
    liveUrl: 'http://waste2worth.atwebpages.com/Login_page.html',
    linkedinUrl: `${LI_BASE}/2016258425${LI_SUFFIX}`,
    imageSrc: '/golden-drops.png',
  },

  /* ── Data & Analytics ────────────────────────────────────── */
  {
    id: 'iot-aircraft',
    index: 5,
    theme: 'iot',
    featured: false,
    category: 'Data & Analytics',
    period: 'Feb – Mar 2026',
    title: 'Perak Airspace Analytics',
    subtitle: 'IoT Aircraft Monitoring System',
    description:
      'Developed an IoT-based real-time analytics system for monitoring aircraft within the ' +
      'Perak airspace. Implemented automated data acquisition from the OpenSky Network API ' +
      'using Python, stored flight records in SQLite, and built interactive Streamlit dashboards ' +
      'for live aircraft tracking, altitude-velocity scatter plots, and historical flight-path ' +
      'heatmaps. The system updates automatically on a configurable polling interval.',
    technologies: ['Python', 'SQLite', 'Streamlit', 'OpenSky Network API', 'Pandas', 'Plotly'],
    accentColor: '#6B4F9E',
    githubUrl: 'https://github.com/pedot123456',
    liveUrl: 'https://utp-iot-data-acquisition-analytic-system-aircraft-project-amuj.streamlit.app/',
    linkedinUrl: `${LI_BASE}/144554557${LI_SUFFIX_B}`,
    imageSrc: '/iot-aircraft.png',
  },
  {
    id: 'loan-prediction',
    index: 6,
    theme: 'data',
    featured: false,
    category: 'Data & Analytics',
    period: 'Feb – Mar 2026',
    title: 'Bank Loan Acceptance Model',
    subtitle: 'Predictive Modelling for Personal Loan Marketing',
    description:
      'Developed a supervised machine-learning pipeline in R using the caret package to ' +
      'optimise personal loan marketing outreach for a bank dataset. Implemented k-Nearest ' +
      'Neighbours (kNN) classification with 5-Fold Cross-Validation and systematic ' +
      'hyperparameter tuning (grid search over k). Achieved a final classification accuracy ' +
      'of 96.45%, outperforming baseline logistic regression by a significant margin.',
    technologies: ['R', 'caret', 'kNN', 'Cross-Validation', 'ggplot2', 'Data Preprocessing'],
    accentColor: '#B8860B',
    githubUrl: 'https://github.com/pedot123456/UTP-Data-Science-Assignments',
    linkedinUrl: `${LI_BASE}/192930799${LI_SUFFIX}`,
    imageSrc: '/loan-prediction.png',
  },

  /* ── UI/UX Design ────────────────────────────────────────── */
  {
    id: 'mudah-nyee',
    index: 7,
    theme: 'design',
    featured: false,
    category: 'UI/UX Design',
    period: 'Sep – Nov 2025',
    title: 'MUDAH.NYEE',
    subtitle: 'E-Commerce Platform UI/UX Redesign — HCI Project',
    description:
      'Led the UI/UX redesign of an e-commerce platform applying Human-Computer Interaction ' +
      '(HCI) principles including affordance theory, Fitts\'s Law, and Nielsen\'s heuristics. ' +
      'Built high-fidelity interactive prototypes in Figma with a complete design system. ' +
      'Conducted structured usability testing that yielded an 80% ease-of-navigation score ' +
      'and a 98% task completion efficiency index across test participants.',
    technologies: ['Figma', 'HCI Principles', 'Usability Testing', 'Prototyping', 'Design System'],
    accentColor: '#C2185B',
    githubUrl: '#',
    liveUrl: 'https://www.figma.com/make/TgWQFxUzhpiP4VjrVbyvjI/MUDAH.NYEE-App-Design?fullscreen=1&t=zfpk1tO14g4ZnUEi-1&code-node-id=0-9',
    imageSrc: '/mudah-nyee.png',
  },

  /* ── Networking & Infrastructure ─────────────────────────── */
  {
    id: 'secure-network',
    index: 8,
    theme: 'cyber',
    featured: false,
    category: 'Networking & Infrastructure',
    period: 'Sep – Nov 2025',
    title: 'Secure Multi-Department Network',
    subtitle: 'Enterprise Network Design & Simulation — 38-Employee Organisation',
    description:
      'Designed and simulated a fully segmented, secure network infrastructure for a ' +
      '38-employee multi-department organisation using Cisco Packet Tracer. Implemented ' +
      'VLANs for inter-department isolation, DHCP and DNS server configuration, SSH ' +
      'remote management, SNMP for network monitoring, and Extended Access Control Lists ' +
      '(ACLs) to enforce strict Layer-3 firewall policies. Documented the full topology ' +
      'and security rationale in a formal network design report.',
    technologies: ['Cisco Packet Tracer', 'VLAN', 'DHCP', 'DNS', 'SSH', 'SNMP', 'ACL', 'OSPF'],
    accentColor: '#37474F',
    githubUrl: '#',
    linkedinUrl: `${LI_BASE}/226645268${LI_SUFFIX}`,
    imageSrc: '/secure-network.png',
  },

  /* ── Database Systems ────────────────────────────────────── */
  {
    id: 'finance-db',
    index: 9,
    theme: 'data',
    featured: false,
    category: 'Database Systems',
    period: 'Sep – Nov 2024',
    title: 'Personal Finance Management DB',
    subtitle: 'Normalised RDBMS — YNAB-inspired Budgeting System',
    description:
      'Architected a fully normalised Relational Database Management System (RDBMS) for ' +
      'personal finance tracking, inspired by the You Need A Budget (YNAB) methodology. ' +
      'Modelled UML entity-relationship diagrams and normalised all tables to Third Normal ' +
      'Form (3NF) to eliminate data redundancy. Wrote comprehensive DDL scripts for 15+ ' +
      'functional tables (accounts, transactions, budgets, categories, payees) and DML ' +
      'scripts covering deposits, transfers, reconciliation, and reporting queries.',
    technologies: ['SQL', 'Oracle Database', 'UML/ER Modelling', '3NF Normalisation', 'DDL', 'DML'],
    accentColor: '#00695C',
    githubUrl: 'https://github.com/pedot123456',
    linkedinUrl: `${LI_BASE}/193447458${LI_SUFFIX}`,
    imageSrc: '/finance-db.png',
  },
]

/** Projects to display on the home page "Featured" strip (competition wins only). */
export const featuredProjects = projects.filter((p) => p.featured)
