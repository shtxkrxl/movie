import Navbar from './components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

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
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
