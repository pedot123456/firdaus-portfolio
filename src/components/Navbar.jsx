import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection, useScrolled } from '../hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'Home',         labelMS: 'Utama',       href: '#hero' },
  { label: 'Experience',   labelMS: 'Pengalaman',  href: '#experience' },
  { label: 'Projects',     labelMS: 'Projek',      href: '#projects' },
  { label: 'Achievements', labelMS: 'Pencapaian',  href: '#achievements' },
  { label: 'Contact',      labelMS: 'Hubungi',     href: '#contact' },
]

const SECTION_IDS = ['hero', 'experience', 'projects', 'achievements', 'contact']

const LANGUAGES = [
  { code: 'en', label: 'English',       flag: '🇬🇧' },
  { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [langOpen,   setLangOpen]     = useState(false)
  const [language,   setLanguage]     = useState('en')
  const scrolled     = useScrolled(60)
  const activeSection = useActiveSection(SECTION_IDS)
  const langRef      = useRef(null)

  // Close language dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const selectLang = (code) => {
    setLanguage(code)
    setLangOpen(false)
  }

  const linkLabel = (link) => language === 'ms' ? link.labelMS : link.label

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-dark-bg/90 border-b border-dark-border/60 backdrop-blur-2xl'
              : 'bg-white/90 border-b border-gray-200/60 backdrop-blur-2xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* ── Logo ── */}
            <motion.button
              onClick={() => handleNavClick('#hero')}
              whileHover={{ opacity: 0.75 }}
              transition={{ duration: 0.15 }}
              className="flex-shrink-0"
            >
              <span
                className={`text-base font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Firdaus Zahin
              </span>
            </motion.button>

            {/* ── Desktop: links + controls ── */}
            <div className="hidden md:flex items-center gap-1">
              {/* Nav links */}
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive  = activeSection === sectionId
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3.5 py-2 text-sm transition-colors duration-150 ${
                      isActive
                        ? isDark ? 'text-white' : 'text-gray-900'
                        : isDark
                        ? 'text-gray-500 hover:text-gray-200'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {linkLabel(link)}
                    {/* Underline indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full ${
                          isDark ? 'bg-white' : 'bg-gray-900'
                        }`}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                      />
                    )}
                  </button>
                )
              })}

              {/* Divider */}
              <div className={`w-px h-4 mx-2 ${isDark ? 'bg-dark-border' : 'bg-gray-200'}`} />

              {/* Language dropdown */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen((p) => !p)}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-white hover:bg-white/8'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                  }`}
                  aria-label="Language selector"
                  aria-expanded={langOpen}
                >
                  <Globe size={15} />
                  <span className="text-xs font-medium uppercase tracking-wide">
                    {language}
                  </span>
                  <motion.span animate={{ rotate: langOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={12} />
                  </motion.span>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className={`absolute right-0 top-full mt-2 w-44 rounded-xl border overflow-hidden shadow-xl z-50 ${
                        isDark
                          ? 'bg-dark-surface border-dark-border'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => selectLang(lang.code)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left ${
                            language === lang.code
                              ? isDark
                                ? 'bg-indigo-500/15 text-indigo-300'
                                : 'bg-indigo-50 text-indigo-700'
                              : isDark
                              ? 'text-gray-300 hover:bg-white/6 hover:text-white'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="font-medium">{lang.label}</span>
                          {language === lang.code && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-white hover:bg-white/8'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    {isDark ? <Sun size={17} /> : <Moon size={17} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            {/* ── Mobile: theme + hamburger ── */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? 'x' : 'menu'}
                    initial={{ opacity: 0, rotate: -15 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 15 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ──
           Uses clipPath (not height) so overflow-hidden never clips child items. ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)'   }}
            exit={{    opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-[60px] left-0 right-0 z-40 border-b ${
              isDark
                ? 'bg-dark-bg border-dark-border'
                : 'bg-white border-gray-200'
            }`}
            style={{ WebkitBackdropFilter: 'blur(20px)', backdropFilter: 'blur(20px)' }}
          >
            <div className="w-full max-w-7xl mx-auto px-4 pt-2 pb-4">

              {/* Nav links — big tap targets */}
              <nav className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive  = activeSection === sectionId
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-colors flex items-center justify-between gap-3 ${
                        isActive
                          ? isDark
                            ? 'text-white bg-white/10'
                            : 'text-gray-900 bg-gray-100'
                          : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-white/6'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span>{linkLabel(link)}</span>
                      {isActive && (
                        <span
                          className="flex-shrink-0 w-2 h-2 rounded-full"
                          style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}
                        />
                      )}
                    </button>
                  )
                })}
              </nav>

              {/* Language row */}
              <div className={`mt-3 pt-3 border-t flex items-center gap-2 flex-wrap ${
                isDark ? 'border-dark-border' : 'border-gray-100'
              }`}>
                <Globe size={13} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      language === lang.code
                        ? isDark
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : isDark
                        ? 'text-gray-500 hover:text-gray-200 border border-transparent'
                        : 'text-gray-500 hover:text-gray-800 border border-transparent'
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
