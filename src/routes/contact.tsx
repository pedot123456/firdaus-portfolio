import { useState } from 'react'
import { personal } from '../data/personal'

type FormState = { name: string; email: string; message: string }
type Status = 'idle' | 'sent'

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const mailto = `mailto:${personal.email}?subject=Portfolio enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Hi Firdaus,\n\n${form.message}\n\n— ${form.name} (${form.email})`)}`
    window.location.href = mailto
    setStatus('sent')
  }

  return (
    <div className="contact-page">
      <div className="container">

        {/* Page heading */}
        <div className="contact-page__header">
          <p className="section__label">Contact</p>
          <h1 className="contact-page__title">Let's Connect</h1>
          <p className="contact-page__subtitle">
            Open to internship opportunities, collaborations, and good conversations.
          </p>
        </div>

        {/* ── Map ── */}
        <div className="contact-map">
          <iframe
            title="Universiti Teknologi PETRONAS location"
            src="https://maps.google.com/maps?q=universiti+teknologi+petronas+seri+iskandar+perak&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* ── Details + Form ── */}
        <div className="contact-body">

          {/* Left panel: details */}
          <div className="contact-panel">
            <p className="contact-panel__title">Get in Touch</p>

            <div className="contact-detail-row">
              <span className="contact-detail-row__icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div>
                <p className="contact-detail-row__label">Mobile</p>
                <a href="tel:+601131435653" className="contact-detail-row__value">+60 11-3143 5653</a>
              </div>
            </div>

            <div className="contact-detail-row">
              <span className="contact-detail-row__icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div>
                <p className="contact-detail-row__label">Email</p>
                <a href={`mailto:${personal.email}`} className="contact-detail-row__value">{personal.email}</a>
              </div>
            </div>

            <div className="contact-detail-row">
              <span className="contact-detail-row__icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <div>
                <p className="contact-detail-row__label">LinkedIn</p>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail-row__value contact-detail-row__value--truncate"
                >
                  {personal.linkedinLabel}
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <span className="contact-detail-row__icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </span>
              <div>
                <p className="contact-detail-row__label">Instagram</p>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail-row__value"
                >
                  {personal.instagramLabel}
                </a>
              </div>
            </div>

            {/* LinkedIn QR code */}
            <div className="contact-qr">
              <div className="contact-qr__box">
                <img
                  src={personal.linkedinQr}
                  alt="LinkedIn QR Code — scan to view Firdaus Zahin's LinkedIn profile"
                  className="contact-qr__image"
                  width={128}
                  height={128}
                />
                <p className="contact-qr__label">LinkedIn QR Code</p>
                <p className="contact-qr__hint">Scan to connect</p>
              </div>
            </div>
          </div>

          {/* Right panel: form */}
          <div className="contact-panel">
            <p className="contact-panel__title">Send a Message</p>

            {status === 'sent' ? (
              <div className="form-success">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p className="form-success__heading">Message sent!</p>
                <p className="form-success__body">
                  Your email client should have opened. I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="cf-name" className="form-label">Full Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Muhammad Ali"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="cf-email" className="form-label">Email Address</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="cf-message" className="form-label">Your Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Hi Firdaus, I'd like to discuss an internship opportunity…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
