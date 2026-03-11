'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved && translations[saved]) {
      setLang(saved);
      return;
    }

    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === 'uk') {
      setLang('uk');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;

    const t = translations[lang];
    document.title = t.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const t = translations[lang];

  const switchLanguage = (newLang) => {
    if (translations[newLang]) setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
