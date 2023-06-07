import './globals.css';
import { Montserrat } from 'next/font/google';

const inter = Montserrat({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Movie',
  description: 'Сайт кинотека',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
