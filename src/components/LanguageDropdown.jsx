'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'uk', label: 'Українська', short: 'UA' },
];

export default function LanguageDropdown() {
  const { lang, switchLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-dropdown__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Change language"
      >
        {current.short}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d={open ? 'M3 7.5L6 4.5L9 7.5' : 'M3 4.5L6 7.5L9 4.5'} />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown__menu">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-dropdown__option${l.code === lang ? ' lang-dropdown__option--active' : ''}`}
              onClick={() => {
                switchLanguage(l.code);
                setOpen(false);
              }}
            >
              <span>{l.label}</span>
              <span className="lang-dropdown__short">{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
