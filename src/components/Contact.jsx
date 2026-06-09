import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, MapPin, Clock } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../data/portfolioData'

function ContactInfoCard({ icon: Icon, label, value, href, isDark }) {
  const Wrapper = href ? 'a' : 'div'
  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
        isDark
          ? 'bg-dark-card border-dark-border hover:border-indigo-500/30 hover:bg-indigo-500/5'
          : 'bg-white border-light-border shadow-card-light hover:border-indigo-200'
      } ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-indigo-400" />
      </div>
      <div>
        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
        <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
          {value}
        </p>
      </div>
    </Wrapper>
  )
}

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error on typing
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('sending')

    // Frontend-only: simulate sending (replace with EmailJS / Formspree in production)
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL_FORM)
    }, 1500)
  }

  const inputBase = `w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200 focus:ring-2`
  const inputDark = `bg-dark-surface border-dark-border text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-indigo-500/20`
  const inputLight = `bg-white border-light-border text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400/20`

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            05. Contact
          </p>
          <h2 className="gradient-text section-heading">Get In Touch</h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mt-3 mb-4" />
          <p className={`text-base max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm actively seeking internship opportunities for Sept 2026 – Apr 2027. Whether you have
            a role, collaboration idea, or just want to connect — feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left column: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className={`text-base font-semibold mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Details
            </h3>

            <ContactInfoCard
              icon={Mail}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              isDark={isDark}
            />
            <ContactInfoCard
              icon={Linkedin}
              label="LinkedIn"
              value="Muhammad Firdaus Zahin"
              href={personalInfo.linkedin}
              isDark={isDark}
            />
            <ContactInfoCard
              icon={MapPin}
              label="Location"
              value="Perak, Malaysia"
              isDark={isDark}
            />
            <ContactInfoCard
              icon={Clock}
              label="Availability"
              value="Sept 2026 – Apr 2027"
              isDark={isDark}
            />

            {/* Quick reply note */}
            <div
              className={`mt-6 p-4 rounded-xl border text-sm ${
                isDark
                  ? 'bg-indigo-500/8 border-indigo-500/20 text-gray-400'
                  : 'bg-indigo-50 border-indigo-200 text-gray-600'
              }`}
            >
              <p className="font-medium text-indigo-400 mb-1">Typical response time</p>
              <p>Within 24–48 hours. For urgent matters, email directly.</p>
            </div>
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDark
                  ? 'bg-dark-card border-dark-border'
                  : 'bg-white border-light-border shadow-card-light'
              }`}
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Message Sent!
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Thank you for reaching out. I'll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary text-sm mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1.5 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`${inputBase} ${isDark ? inputDark : inputLight} ${
                          errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className={`block text-xs font-medium mb-1.5 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`${inputBase} ${isDark ? inputDark : inputLight} ${
                          errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity"
                      className={`${inputBase} ${isDark ? inputDark : inputLight}`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about the opportunity or what you'd like to discuss..."
                      className={`${inputBase} ${isDark ? inputDark : inputLight} resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary justify-center py-3.5"
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
