'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

const frontendItems = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'HTML5',
  'CSS3', 'Sass', 'BEM', 'Bootstrap', 'Tailwind CSS', 'Redux', 'MobX',
  'Zustand', 'i18next', 'Storybook', 'Zod', 'REST API', 'JWT', 'WebSocket',
];

const testingItems = ['Jest', 'React Testing Library'];

const devtoolsItems = ['Nx', 'Git', 'Bitbucket', 'Figma', 'Jira', 'Kanban', 'Scrum'];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section__title">
            <span className="section__number">{t.skills.sectionNumber}</span> {t.skills.title}
          </h2>
        </RevealOnScroll>
        <div className="skills__grid">
          <RevealOnScroll>
            <div className="skills__category">
              <h3>{t.skills.frontend}</h3>
              <ul className="skills__list">
                {frontendItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="skills__category">
              <h3>{t.skills.testing}</h3>
              <ul className="skills__list">
                {testingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="skills__category">
              <h3>{t.skills.devtools}</h3>
              <ul className="skills__list">
                {devtoolsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="skills__category">
              <h3>{t.skills.languages}</h3>
              <ul className="skills__list skills__list--langs">
                {t.skills.langItems.map((lang) => (
                  <li key={lang.name}>
                    <span>{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
