/**
 * Resume page — /resume
 *
 * Layout: two-column
 *   Main column: dark page header then timeline → awards → certifications
 *   Sidebar: sticky quick-info metadata + animated skill bars
 */
import { timelineEntries, sidebarInfo, awards, certifications } from '../data/resume'
import SkillsGrid from '../components/SkillsGrid'
import { personal } from '../data/personal'
import type { Certification } from '../types'

function Timeline() {
  return (
    <div className="timeline">
      {timelineEntries.map((entry) => (
        <div key={entry.id} className="timeline-entry">
          <p className="timeline-entry__period">{entry.period}</p>
          <h3 className="timeline-entry__role">{entry.role}</h3>
          <p className="timeline-entry__org">{entry.organization}</p>
          {entry.description && (
            <p className="timeline-entry__body">{entry.description}</p>
          )}
          {entry.bullets.length > 0 && (
            <ul className="timeline-entry__bullets">
              {entry.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

function Awards() {
  return (
    <>
      <div className="resume-section__intro">
        <p className="resume-section__label">Recognition</p>
        <h2 className="resume-section__heading">Awards &amp; Achievements</h2>
      </div>
      <div className="awards-grid">
        {awards.map(({ title, event, year, highlight }) => (
          <div
            key={`${title}-${event}`}
            className={`award-card${highlight ? ' award-card--highlight' : ''}`}
          >
            <p className="award-card__place">{title}</p>
            <p className="award-card__event">{event}</p>
            <p className="award-card__year">{year}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function CertGroups() {
  const groupOrder = [
    'Microsoft',
    'Cybersecurity',
    'AWS Cloud & Machine Learning',
    'Professional Development (HRD Corp)',
  ]

  const grouped = groupOrder
    .map((g) => ({ g, items: certifications.filter((c: Certification) => c.group === g) }))
    .filter(({ items }) => items.length > 0)

  return (
    <>
      <div className="resume-section__intro">
        <p className="resume-section__label">Certifications</p>
        <h2 className="resume-section__heading">Professional Credentials</h2>
      </div>
      <div className="cert-groups">
        {grouped.map(({ g, items }) => (
          <div key={g}>
            <p className="cert-group__title">{g}</p>
            <div className="cert-list">
              {items.map(({ title, issuer, year }) => (
                <div key={title} className="cert-item">
                  <span className="cert-item__dot" aria-hidden />
                  <div>
                    <p className="cert-item__title">{title}</p>
                    <p className="cert-item__meta">{issuer} · {year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


function MetaCard() {
  return (
    <div className="sidebar-card">
      <p className="sidebar-card__title">Quick Info</p>
      {sidebarInfo.map(({ label, value, href }) => (
        <div key={label} className="meta-row">
          <span className="meta-row__dot" aria-hidden />
          <div className="meta-row__value">
            <span className="meta-row__label">{label}</span>
            {href ? (
              <a href={href} className="meta-row__link">{value}</a>
            ) : (
              <span className="meta-row__val">{value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ResumePage() {
  return (
    <>
      {/* Dark header: photo + name + bio + buttons */}
      <div className="resume-header" id="contact">
        <div className="container">
          <div className="resume-header__inner">
            {/* Headshot */}
            <div className="resume-header__photo">
              <img src={personal.photo} alt={personal.fullName} />
            </div>

            <div>
              <p className="resume-header__eyebrow">Resume</p>
              <h1 className="resume-header__name">
                Muhammad Firdaus Zahin<br />Bin Nurus Sham
              </h1>
              <p className="resume-header__tagline">
                Information Technology Undergraduate at UTP · MARA Scholar · Seeking Internship
                Sept 2026 – Apr 2027. Experienced in software development, data analytics,
                cybersecurity, and large-scale campus leadership.
              </p>
              <div className="resume-header__actions">
                <a
                  href={personal.cvPath}
                  download={personal.cvDownloadName}
                  className="btn btn--ghost"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </a>
                <a
                  href="mailto:firdausforcaamskin@gmail.com"
                  className="btn btn--ghost"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <section className="section">
        <div className="container">
          <div className="resume-layout">
            {/* Main column: timeline + awards + certs */}
            <main>
              <div className="resume-section__intro">
                <p className="resume-section__label">Experience &amp; Education</p>
                <h2 className="resume-section__heading">My Journey</h2>
              </div>
              <Timeline />

              <div className="resume-main__subsection">
                <Awards />
              </div>

              <div className="resume-main__subsection">
                <CertGroups />
              </div>
            </main>

            {/* Sticky sidebar */}
            <aside className="resume-sidebar">
              <MetaCard />
            </aside>
          </div>
        </div>
      </section>

      {/* Skills bento — full width below the two-column layout */}
      <section className="section section--alt">
        <div className="container">
          <SkillsGrid
            title="Technical Skills"
            subtitle="Languages, frameworks, and tools I use to build real solutions."
          />
        </div>
      </section>
    </>
  )
}
