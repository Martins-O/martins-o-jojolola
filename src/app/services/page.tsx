import Services from '@/components/sections/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Services - QA, Backend & Blockchain Development',
  description: 'Expert consulting services for quality assurance, backend development, and blockchain solutions. Test automation, API development, smart contracts, and more.',
  openGraph: {
    title: 'Professional Services - Martins O Jojolola',
    description: 'Expert consulting services for QA, backend development, and blockchain solutions.',
  }
}

export default function ServicesPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <Services />
    </main>
  )
}