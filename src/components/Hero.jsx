'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero__bg"></div>
      <div className="container hero__content">
        <RevealOnScroll>
          <p className="hero__greeting">{t.hero.greeting}</p>
        </RevealOnScroll>
        <RevealOnScroll>
          <h1 className="hero__name">{t.hero.name}</h1>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="hero__title">{t.hero.title}</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="hero__summary">{t.hero.summary}</p>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">{t.hero.getInTouch}</a>
            <a href="#experience" className="btn btn--outline">{t.hero.viewExperience}</a>
            <a href="/cv.pdf" download="Viacheslav Matvieiev – Software Engineer CV.pdf" className="btn btn--outline">{t.hero.downloadCv}</a>
          </div>
        </RevealOnScroll>
      </div>
      <div className="hero__scroll">
        <span>{t.hero.scroll}</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
