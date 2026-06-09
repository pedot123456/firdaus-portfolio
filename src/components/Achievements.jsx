import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { Trophy, Medal, Award, ExternalLink, FileText, X, ZoomIn } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { achievements } from '../data/portfolioData'

/* ─── Hackathon card config ───────────────────────────────────────────────── */
const HACK_CONFIG = {
  silver: {
    icon: Trophy,
    gradient: 'from-slate-400/15 to-slate-600/5',
    border: 'border-slate-400/30',
    badge: 'bg-slate-400/15 text-slate-200 border-slate-400/25',
    iconColor: '#cbd5e1',
    ring: 'rgba(203,213,225,0.10)',
    accentBar: '#cbd5e180',
  },
  bronze: {
    icon: Medal,
    gradient: 'from-amber-500/15 to-amber-700/5',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
    iconColor: '#f59e0b',
    ring: 'rgba(245,158,11,0.10)',
    accentBar: '#f59e0b80',
  },
  indigo: {
    icon: Award,
    gradient: 'from-indigo-500/15 to-indigo-700/5',
    border: 'border-indigo-500/30',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
    iconColor: '#818cf8',
    ring: 'rgba(99,102,241,0.10)',
    accentBar: '#818cf880',
  },
}

/* ─── Hackathon card ──────────────────────────────────────────────────────── */
function HackathonCard({ item, index, isDark }) {
  const cfg = HACK_CONFIG[item.color] || HACK_CONFIG.indigo
  const Icon = cfg.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 bg-gradient-to-br ${cfg.gradient} ${cfg.border}`}
      style={{ boxShadow: `0 0 28px ${cfg.ring}` }}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${cfg.accentBar}, transparent)` }} />

      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: cfg.ring, border: `1px solid ${cfg.iconColor}25` }}
          >
            <Icon size={22} style={{ color: cfg.iconColor }} />
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${cfg.badge}`}>
            {item.result}
          </span>
        </div>

        <div>
          <p className={`text-[10px] font-mono font-semibold uppercase tracking-widest mb-1.5 ${
            isDark ? 'text-gray-600' : 'text-gray-400'
          }`}>
            {item.host} · {item.year}
          </p>
          <h3 className={`text-sm font-bold leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {item.title}
          </h3>
        </div>

        <p className={`text-xs leading-5 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

/* ─── PDF lightbox ────────────────────────────────────────────────────────── */
function PdfLightbox({ pdfUrl, title, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox header */}
        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FileText size={15} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700 truncate max-w-xs">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <ExternalLink size={12} /> Open PDF
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        {/* PDF embed */}
        <embed
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          type="application/pdf"
          className="w-full"
          style={{ height: '75vh' }}
        />
      </motion.div>
    </motion.div>
  )
}

/* ─── Certificate card with PDF preview ──────────────────────────────────── */
function CertCard({ item, index, isDark }) {
  const [open, setOpen] = useState(false)
  const pdfUrl = `/assets/certificates/${item.pdfFile}`

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-dark-card border-white/5 hover:border-indigo-500/40'
            : 'bg-white border-light-border shadow-card-light hover:border-indigo-300 hover:shadow-glow-sm'
        }`}
        onClick={() => setOpen(true)}
      >
        {/* ── PDF preview iframe ── */}
        <div
          className={`relative w-full overflow-hidden rounded-t-2xl ${
            isDark ? 'bg-gray-900' : 'bg-gray-50'
          }`}
          style={{ height: '180px' }}
        >
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={item.title}
            className="w-full h-full border-none pointer-events-none select-none"
            style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1.5"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <ZoomIn size={18} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow">View Certificate</span>
            </motion.div>
          </div>
          {/* Color accent line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}55)` }}
          />
        </div>

        {/* ── Card footer ── */}
        <div className="px-4 py-3 flex items-center gap-3">
          {/* Issuer color dot */}
          <div
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${item.color}18` }}
          >
            <FileText size={14} style={{ color: item.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-xs font-semibold leading-snug truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {item.title}
            </p>
            <p className={`text-[11px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {item.issuer} · {item.year}
            </p>
          </div>
          <ExternalLink size={13} className={`flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} />
        </div>
      </motion.div>

      {/* PDF lightbox */}
      <AnimatePresence>
        {open && (
          <PdfLightbox pdfUrl={pdfUrl} title={item.title} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

/* ─── Section divider label ───────────────────────────────────────────────── */
function SectionLabel({ children, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-6"
    >
      <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.25em] ${
        isDark ? 'text-gray-600' : 'text-gray-400'
      }`}>
        // {children}
      </span>
      <div className={`flex-1 h-px ${isDark ? 'bg-white/5' : 'bg-light-border'}`} />
    </motion.div>
  )
}

/* ─── Main section ────────────────────────────────────────────────────────── */
export default function Achievements() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="achievements"
      ref={ref}
      className={`relative py-24 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <ScrollReveal>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            04. Achievements
          </p>
          <h2 className="gradient-text section-heading">Awards &amp; Certifications</h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-indigo-500 mt-3 mb-4" />
          <p className={`text-sm max-w-xl font-mono ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            // Competition wins and professional certifications — click any certificate to view.
          </p>
        </motion.div>

        {/* Hackathon wins */}
        <SectionLabel isDark={isDark}>Hackathon Wins</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {achievements.hackathons.map((item, i) => (
            <HackathonCard key={item.id} item={item} index={i} isDark={isDark} />
          ))}
        </div>

        {/* Certifications with PDF previews */}
        <SectionLabel isDark={isDark}>Professional Certifications</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {achievements.certifications.map((item, i) => (
            <CertCard key={item.id} item={item} index={i} isDark={isDark} />
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  )
}
