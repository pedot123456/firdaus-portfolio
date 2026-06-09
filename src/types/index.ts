/** Central TypeScript interfaces for all portfolio data. */

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  accentColor: string
  index: number
  /** Animation theme key → drives the animated badge on each card */
  theme?: 'ai' | 'campus' | 'cyber' | 'iot' | 'data' | 'design'
  /** true → shown in the "Featured Projects" strip on the home page */
  featured?: boolean
  /** Optional grouping label shown on the full projects page */
  category: 'Hackathon / Competition' | 'Data & Analytics' | 'UI/UX Design' | 'Networking & Infrastructure' | 'Database Systems'
  /** e.g. "Apr 2026", "Nov 2025" — displayed on full projects page */
  period: string
  githubUrl?: string
  liveUrl?: string
  linkedinUrl?: string
  imageSrc?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  dateFormatted: string
  tags: string[]
  content: string
  readingTime: number
  featured?: boolean
  author: string
}

export interface TimelineEntry {
  id: string
  role: string
  organization: string
  period: string
  description: string
  bullets: string[]
  category: 'work' | 'leadership' | 'education'
}

export interface SkillEntry {
  name: string
  level: number
}

export interface SidebarInfo {
  label: string
  value: string
  href?: string
}

export interface Award {
  title: string
  event: string
  year: string
  highlight?: boolean
}

export interface Certification {
  title: string
  issuer: string
  year: string
  /** Groups certs into titled blocks on the resume page */
  group: string
}
