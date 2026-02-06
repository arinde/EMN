import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive marine fabrication, welding, ship hull maintenance, valve servicing, and engineering solutions in Lagos and Agbara, Nigeria. Expert services for shipbuilding, offshore, and oil & gas industries.',
  keywords: [
    'marine services Nigeria',
    'welding fabrication Lagos',
    'ship hull maintenance',
    'marine valve servicing',
    'marine construction Lagos',
    'certified labour supply',
    'sand blasting painting',
    'equipment rentals Lagos',
    'tank calibration Nigeria',
    'marine logistics'
  ],
  openGraph: {
    title: 'Marine Services | EMN Fabrication Services',
    description: 'Expert marine fabrication, welding, and engineering solutions in Lagos and Agbara, Nigeria.',
    url: 'https://emnfabricationservices.com/services',
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}