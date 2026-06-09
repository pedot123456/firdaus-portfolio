import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const Home      = lazy(() => import('./routes/index'))
const Projects  = lazy(() => import('./routes/projects'))
const Resume    = lazy(() => import('./routes/resume'))
const BlogIndex = lazy(() => import('./routes/blog/index'))
const BlogPost  = lazy(() => import('./routes/blog/$slug'))
const Contact   = lazy(() => import('./routes/contact'))

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__track">
        <div className="page-loader__bar" />
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <p className="not-found__number">404</p>
        <h1 className="not-found__heading">Page not found</h1>
        <p className="not-found__body">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary">Go back home</Link>
      </div>
    </div>
  )
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

/* Renders inside BrowserRouter so useLocation is available */
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.26, ease: 'easeOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/"           element={<Home />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/resume"     element={<Resume />} />
            <Route path="/blog"       element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <BrowserRouter>
      {/* Loading screen sits as a fixed overlay until boot completes */}
      <AnimatePresence>
        {!booted && (
          <LoadingScreen key="boot" onComplete={() => setBooted(true)} />
        )}
      </AnimatePresence>

      <Header />
      <main id="main-content">
        {/* Routes only mount after boot so hero animations start at the right time */}
        {booted && <AnimatedRoutes />}
      </main>
      <Footer />
    </BrowserRouter>
  )
}
