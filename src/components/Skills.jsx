'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

const categories = [
  { key: 'core', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'jQuery', 'Node.js'] },
  { key: 'markup', items: ['HTML5', 'BEM', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS'] },
  { key: 'state', items: ['Redux', 'MobX', 'Zustand', 'Zod', 'REST API', 'JWT', 'WebSocket', 'i18next'] },
  { key: 'tooling', items: ['Jest', 'React Testing Library', 'Storybook', 'Nx', 'Git', 'Jira', 'Figma', 'Docker'] },
  { key: 'ai', items: ['Claude Code', 'Codex', 'Cursor'] },
];

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
          {categories.map(({ key, items }) => (
            <RevealOnScroll key={key}>
              <div className="skills__category">
                <h3>{t.skills[key]}</h3>
                <ul className="skills__list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
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
