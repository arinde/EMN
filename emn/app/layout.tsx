import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '../src/components/layouts/Header';
import Footer from '../src/components/layouts/Footer';
import StructuredData from '@/src/components/StructuredData';

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
  title: {default : 'EMN MECHANICAL FABRICATION SERVICES LTD - Safety & Quality | Lagos & Agbara Ogun, Nigeria',
    template: '%s | EMN Fabrication Services'
  },
  
  description:
    'Professional marine and industrial fabrication, welding, ship hull maintenance, valve servicing, and certified labour supply. Serving shipbuilding, offshore, and oil & gas industries with expert marine services, in Lagos & Agbara, Nigeria',
  keywords: [
    'marine fabrication Lagos',
    'ship welding services Apapa',
    'marine valve servicing Badagry',
    'ship hull maintenance Agbara',
    'marine construction Lagos',
    'certified marine welders Agbara',
    'offshore welding Agbara',
    'marine logistics Agbara',
    'industrial fabrication Agbara',
    'chemical machine structures Ogun',
    'tank calibration Opic',
    'marine equipment rental Ogun'
  ],
  authors: [{ name: 'EMN Mechanical Fabrication Services' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://emnfabricationservices.com',
    siteName: 'EMN Mechanical Fabrication Services',
    title: 'EMN Fabrication Services - Marine Welding & Fabrication Experts | Lagos & Agbara, Nigeria',
    description: 'Professional marine & industrial fabrication, welding, ship hull maintenance, valve servicing, and certified labour supply for maritime industries in Nigeria',
    images: [
      {
        url: '/og-image.jpg', // We'll create this next
        width: 1200,
        height: 630,
        alt: 'EMN Fabrication Services - Marine Industry Experts in Nigeria'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMN Fabrication Services - Marine Welding & Fabrication',
    description: 'Expert marine fabrication, welding, and ship maintenance services in Nigeria',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: '', // We'll add this later from Search Console
  }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
