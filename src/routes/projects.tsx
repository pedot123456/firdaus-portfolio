/**
 * Projects page — /projects
 *
 * All 9 projects grouped by category, each group in its own section.
 */
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import type { Project } from '../types'
import { personal } from '../data/personal'

const CATEGORY_ORDER: Project['category'][] = [
  'Hackathon / Competition',
  'Data & Analytics',
  'UI/UX Design',
  'Networking & Infrastructure',
  'Database Systems',
]

const CATEGORY_LABELS: Record<Project['category'], { label: string; subtitle: string }> = {
  'Hackathon / Competition': {
    label: 'Hackathon & Competition',
    subtitle: 'Award-winning builds delivered under competition pressure.',
  },
  'Data & Analytics': {
    label: 'Data & Analytics',
    subtitle: 'Real-world datasets, predictive models, and interactive dashboards.',
  },
  'UI/UX Design': {
    label: 'UI/UX Design',
    subtitle: 'Human-centred design research translated into high-fidelity prototypes.',
  },
  'Networking & Infrastructure': {
    label: 'Networking & Infrastructure',
    subtitle: 'Enterprise network topology design with security-first architecture.',
  },
  'Database Systems': {
    label: 'Database Systems',
    subtitle: 'Normalised relational schemas and comprehensive SQL workloads.',
  },
}

export default function ProjectsPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: projects.filter((p) => p.category === cat),
  })).filter(({ items }) => items.length > 0)

  return (
    <>
      {/* Dark page banner */}
      <div className="page-banner">
        <div className="container">
          <p className="page-banner__label">Portfolio</p>
          <h1 className="page-banner__title">Projects &amp; Competitions</h1>
          <p className="page-banner__subtitle">
            9 projects spanning hackathons, data science, UI/UX design, networking, and database
            engineering — each one solving a real problem.
          </p>
        </div>
      </div>

      {/* Grouped sections */}
      {grouped.map(({ cat, items }, gi) => (
        <section key={cat} className={`section${gi % 2 !== 0 ? ' section--warm' : ''}`}>
          <div className="container">
            <div className="section__header">
              <p className="section__label">{CATEGORY_LABELS[cat].label}</p>
              <p className="section__subtitle section__subtitle--narrow">
                {CATEGORY_LABELS[cat].subtitle}
              </p>
            </div>

            <div className="project-grid">
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer note */}
      <div className="section section--warm projects-more">
        <div className="container">
          <div className="projects-more__box">
            <p className="projects-more__text">
              More projects always in the works.{' '}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-more__link"
              >
                Follow on GitHub →
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
