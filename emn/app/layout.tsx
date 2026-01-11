import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '../src/components/layouts/Header';
import Footer from '../src/components/layouts/Footer';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EMN MECHANICAL FABRICATION SERVICES LTD - Safety & Quality',
  description:
    'Leading provider of marine engineering, fabrication, and maritime services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
