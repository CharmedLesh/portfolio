'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <RevealOnScroll>
          <h2 className="section__title">
            <span className="section__number">{t.experience.sectionNumber}</span> {t.experience.title}
          </h2>
        </RevealOnScroll>

        <div className="timeline">
          {t.experience.jobs.map((job, i) => (
            <RevealOnScroll key={i} className="timeline__item-wrap">
              <div className="timeline__item">
                <div className="timeline__marker"></div>
                <div className="timeline__content">
                  <div className="timeline__header">
                    <div>
                      <h3 className="timeline__role">{job.role}</h3>
                      <p className="timeline__company">{job.company}</p>
                    </div>
                    <span className="timeline__date">{job.date}</span>
                  </div>
                  <div className="timeline__projects">
                    {job.projects.map((project, j) => (
                      <div className="timeline__project" key={j}>
                        {project.title && <h4>{project.title}</h4>}
                        <p>{project.description}</p>
                        <div className="timeline__tags">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
