'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || t.contact.form.error);
      }

      setStatus({ type: 'success', text: t.contact.form.success });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message || t.contact.form.error });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section__title">
            <span className="section__number">{t.contact.sectionNumber}</span> {t.contact.title}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="contact__text">{t.contact.text}</p>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="contact__layout">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__group">
                <label htmlFor="contactName" className="contact-form__label">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  className={`contact-form__input${errors.name ? ' invalid' : ''}`}
                  placeholder={t.contact.form.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="contactEmail" className="contact-form__label">{t.contact.form.email}</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  className={`contact-form__input${errors.email ? ' invalid' : ''}`}
                  placeholder={t.contact.form.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="contactSubject" className="contact-form__label">{t.contact.form.subject}</label>
                <input
                  type="text"
                  id="contactSubject"
                  name="subject"
                  className={`contact-form__input${errors.subject ? ' invalid' : ''}`}
                  placeholder={t.contact.form.subjectPlaceholder}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="contactMessage" className="contact-form__label">{t.contact.form.message}</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  className={`contact-form__input contact-form__textarea${errors.message ? ' invalid' : ''}`}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn--primary contact-form__submit" disabled={sending}>
                <span>{sending ? t.contact.form.sending : t.contact.form.send}</span>
                {sending && <span className="contact-form__spinner"></span>}
              </button>
              {status.text && (
                <p className={`contact-form__status contact-form__status--${status.type}`}>
                  {status.text}
                </p>
              )}
            </form>

            <div className="contact__cards">
              <a href="mailto:tur.lesh.5932@gmail.com" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="contact__label">{t.contact.labels.email}</span>
                <span className="contact__value">tur.lesh.5932@gmail.com</span>
              </a>
              <a href="tel:+995597655115" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="contact__label">{t.contact.labels.phone}</span>
                <span className="contact__value">{'+995\u201159\u20117\u201165\u201151\u201115'}</span>
              </a>
              <a href="https://github.com/CharmedLesh" target="_blank" rel="noopener noreferrer" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="contact__label">{t.contact.labels.github}</span>
                <span className="contact__value">@CharmedLesh</span>
              </a>
              <a href="https://t.me/TurLesh" target="_blank" rel="noopener noreferrer" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="contact__label">{t.contact.labels.telegram}</span>
                <span className="contact__value">@TurLesh</span>
              </a>
              <a href="https://www.linkedin.com/in/viacheslav-matvieiev" target="_blank" rel="noopener noreferrer" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="contact__label">{t.contact.labels.linkedin}</span>
                <span className="contact__value">{t.contact.linkedinName}</span>
              </a>
              <div className="contact__card contact__card--location">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="contact__label">{t.contact.labels.location}</span>
                <span className="contact__value">{t.contact.locationValue}</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
