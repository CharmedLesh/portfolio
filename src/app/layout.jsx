import { Inter, JetBrains_Mono } from 'next/font/google';
import { LanguageProvider } from '@/i18n/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'Viacheslav Matvieiev \u2014 Frontend Engineer',
  description:
    'Frontend Engineer with 3 years building production-grade web apps across sports, fintech, IoT, and e-commerce.',
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
