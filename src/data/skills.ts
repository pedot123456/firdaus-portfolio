export interface SkillItem {
  id: string
  name: string
  category: 'Language' | 'Database' | 'Framework' | 'Cloud' | 'Tool' | 'Design' | 'Infrastructure'
  color: string
}

export const skills: SkillItem[] = [
  { id: 'python',     name: 'Python',       category: 'Language',       color: '#3776AB' },
  { id: 'typescript', name: 'TypeScript',   category: 'Language',       color: '#3178C6' },
  { id: 'javascript', name: 'JavaScript',   category: 'Language',       color: '#F7DF1E' },
  { id: 'sql',        name: 'SQL',          category: 'Database',       color: '#E97627' },
  { id: 'oracle',     name: 'Oracle APEX',  category: 'Database',       color: '#F80000' },
  { id: 'r',          name: 'R',            category: 'Language',       color: '#276DC3' },
  { id: 'vbnet',      name: 'VB .NET',      category: 'Language',       color: '#7B68EE' },
  { id: 'html',       name: 'HTML / CSS',   category: 'Language',       color: '#E34F26' },
  { id: 'react',      name: 'React',        category: 'Framework',      color: '#61DAFB' },
  { id: 'streamlit',  name: 'Streamlit',    category: 'Framework',      color: '#FF4B4B' },
  { id: 'pandas',     name: 'Pandas',       category: 'Framework',      color: '#1F77B4' },
  { id: 'azure',      name: 'Azure',        category: 'Cloud',          color: '#0078D4' },
  { id: 'cisco',      name: 'Cisco',        category: 'Infrastructure', color: '#1BA0D7' },
  { id: 'git',        name: 'Git',          category: 'Tool',           color: '#F05032' },
  { id: 'figma',      name: 'Figma',        category: 'Design',         color: '#A259FF' },
  { id: 'excel',      name: 'Excel',        category: 'Tool',           color: '#217346' },
  { id: 'canva',      name: 'Canva',        category: 'Design',         color: '#00C4CC' },
]
