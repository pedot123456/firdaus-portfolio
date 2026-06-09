import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Code2, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../data/portfolioData'

const SOCIAL_LINKS = [
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
]

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { isDark } = useTheme()

  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className={`relative border-t py-12 ${
        isDark ? 'bg-dark-surface border-dark-border' : 'bg-gray-50 border-light-border'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Firdaus<span className="gradient-text">.</span>
              </span>
            </button>
            <p className={`text-sm leading-6 max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              IT Undergraduate at UTP · MARA Scholar · Seeking Internship Sept 2026 – Apr 2027
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isDark ? 'border-dark-border' : 'border-light-border'
          }`}
        >
          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Muhammad Firdaus Zahin Bin Nurus Sham. All rights reserved.
          </p>
          <p className={`text-xs flex items-center gap-1.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            Built with <Heart size={11} className="text-red-400" /> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
