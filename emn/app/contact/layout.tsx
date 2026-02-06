import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with EMN Fabrication Services in Lagos and Badagry. Call +234 803 697 5415 or email kunlemustapha27@yahoo.com for marine fabrication, welding, and ship maintenance services.',
  openGraph: {
    title: 'Contact EMN Fabrication Services | Lagos & Badagry',
    description: 'Contact us for marine welding and fabrication services in Lagos.',
    url: 'https://emnfabricationservices.com/contact',
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}