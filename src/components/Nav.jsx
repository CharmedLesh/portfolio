'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageDropdown from './LanguageDropdown';

export default function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__container">
        <a href="#hero" className="nav__logo">
          V<span className="accent">.</span>M
        </a>
        <button
          className={`nav__toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav__links${menuOpen ? ' active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>{t.nav.about}</a></li>
          <li><a href="#experience" onClick={closeMenu}>{t.nav.experience}</a></li>
          <li><a href="#skills" onClick={closeMenu}>{t.nav.skills}</a></li>
          <li><a href="#education" onClick={closeMenu}>{t.nav.education}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t.nav.contact}</a></li>
          <li>
            <a
              href="/cv.pdf"
              download="Viacheslav Matvieiev – Frontend Engineer CV.pdf"
              className="nav__cta"
              onClick={closeMenu}
            >
              {t.nav.downloadCv}
            </a>
          </li>
          <li><LanguageDropdown /></li>
        </ul>
      </div>
    </nav>
  );
}
