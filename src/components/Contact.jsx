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
              <a href="https://www.linkedin.com/in/viacheslav-matvieiev" target="_blank" rel="noopener noreferrer" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="contact__label">{t.contact.labels.linkedin}</span>
                <span className="contact__value">{t.contact.linkedinName}</span>
              </a>
              <a href="https://t.me/TurLesh" target="_blank" rel="noopener noreferrer" className="contact__card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="contact__label">{t.contact.labels.telegram}</span>
                <span className="contact__value">@TurLesh</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
