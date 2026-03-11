'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section__title">
            <span className="section__number">{t.about.sectionNumber}</span> {t.about.title}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="about__content">
            <div className="about__text">
              <p>{t.about.text1}</p>
              <p>
                {t.about.text2Before}
                <span className="accent">React</span>,{' '}
                <span className="accent">Next.js</span>,{' '}
                <span className="accent">Vue.js</span>
                {t.about.text2After}
              </p>
            </div>
            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-number">{t.about.yearsNumber}</span>
                <span className="about__detail-label">{t.about.yearsLabel}</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-number">{t.about.sectorsNumber}</span>
                <span className="about__detail-label">{t.about.sectorsLabel}</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-number">{t.about.projectsNumber}</span>
                <span className="about__detail-label">{t.about.projectsLabel}</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
