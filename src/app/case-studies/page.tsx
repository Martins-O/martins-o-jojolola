import CaseStudies from '@/components/sections/CaseStudies'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Detailed case studies showcasing QA, backend development, and blockchain projects with measurable results and technical insights.',
  openGraph: {
    title: 'Case Studies - Martins O Jojolola',
    description: 'Explore detailed case studies of successful QA, backend, and blockchain projects.',
  }
}

export default function CaseStudiesPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <CaseStudies />
    </main>
  )
}