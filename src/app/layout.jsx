import { Inter, JetBrains_Mono } from 'next/font/google';
import { LanguageProvider } from '@/i18n/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'Viacheslav Matvieiev \u2014 React/Next.js & Automation Engineer',
  description:
    'Frontend Engineer with 3 years of experience building web applications with TypeScript, React, and Next.js for products with millions of users. Also builds production automation workflows with n8n.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
