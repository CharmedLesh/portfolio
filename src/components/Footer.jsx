'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.footer.text}</p>
      </div>
    </footer>
  );
}
