import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EMN Fabrication Services - your trusted partner for marine welding, fabrication, and ship maintenance since 2014. Certified professionals serving maritime, oil & gas, and chemical industries in Lagos and Agbara, Nigeria.',
  keywords: [
    'about EMN Fabrication',
    'marine engineering company Nigeria',
    'Lagos fabrication company',
    'maritime services Agbara',
    'ISO certified welding Nigeria',
    'marine construction company',
    'offshore fabrication Nigeria',
    'Niger Dock contractor'
  ],
  openGraph: {
    title: 'About EMN Fabrication Services | Nigeria',
    description: 'Trusted marine fabrication and welding experts serving the maritime industry since 2014.',
    url: 'https://emnfabricationservices.com/aboutpage',
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}