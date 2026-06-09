import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { personal } from '../data/personal'

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume' },
  { to: '/blog',     label: 'Writing' },
  { to: '/contact',  label: 'Contact' },
]

function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">

          <Link to="/" className="site-header__wordmark">
            Firdaus Zahin
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  ['site-nav__link', isActive ? 'site-nav__link--active' : ''].join(' ').trim()
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Availability status badge — desktop */}
          <div className="status-badge" role="status" aria-label="Open to internship applications starting September 2026">
            <span className="status-badge__dot" aria-hidden />
            <span>Open to Internship · Sept 2026</span>
          </div>

          {/* Download CV — desktop */}
          <a
            href={personal.cvPath}
            download={personal.cvDownloadName}
            className="btn--cv"
            aria-label="Download Firdaus Zahin's resume as PDF"
          >
            <IconDownload />
            Download CV
          </a>

          <Link to="/contact" className="btn--hello">Say Hello</Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`site-header__menu-toggle${menuOpen ? ' site-header__menu-toggle--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>

      {menuOpen && (
        <div className="mobile-drawer">

          {/* Availability badge */}
          <div className="mobile-drawer__status">
            <div className="status-badge" role="status">
              <span className="status-badge__dot" aria-hidden />
              <span>Open to Internship · Sept 2026</span>
            </div>
          </div>

          <nav className="mobile-drawer__nav">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  ['mobile-drawer__link', isActive ? 'mobile-drawer__link--active' : ''].join(' ').trim()
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Download CV in drawer */}
          <a
            href={personal.cvPath}
            download={personal.cvDownloadName}
            onClick={close}
            className="btn--cv mobile-drawer__cv"
          >
            <IconDownload />
            Download CV
          </a>

          <Link to="/contact" onClick={close} className="btn btn--primary mobile-drawer__cta">
            Say Hello
          </Link>

        </div>
      )}
    </header>
  )
}
