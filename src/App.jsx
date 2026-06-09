import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import CursorSpotlight from './components/CursorSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

/* ─── Main layout ─────────────────────────────────────────────────────────── */
function PortfolioLayout() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/* ─── App root ────────────────────────────────────────────────────────────── */
export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Prevent scroll while the loader overlay is active
  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [loaded])

  return (
    <BrowserRouter>
      <ThemeProvider>
        {/*
          PortfolioLayout always renders underneath so the page is ready
          the moment the vault-door exit completes. Loader sits on top as
          a fixed z-[10000] overlay; onDone unmounts it.
        */}
        <PortfolioLayout />
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </ThemeProvider>
    </BrowserRouter>
  )
}
