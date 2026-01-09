import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../src/components/layouts/Header';
import Footer from '../src/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarineTech Engineering - Marine Engineering Excellence',
  description: 'Leading provider of marine engineering, fabrication, and maritime services. Expert welding, ship hull maintenance, valve services, and marine construction.',
  keywords: 'marine engineering, ship repair, welding, fabrication, hull maintenance, valve services, marine construction, offshore services',
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}