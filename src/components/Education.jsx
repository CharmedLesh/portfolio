'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="section education" id="education">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section__title">
            <span className="section__number">{t.education.sectionNumber}</span> {t.education.title}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="education__card">
            <div className="education__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
              </svg>
            </div>
            <div className="education__info">
              <h3>{t.education.degree}</h3>
              <p className="education__school">{t.education.school}</p>
              <span className="education__date">{t.education.date}</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
