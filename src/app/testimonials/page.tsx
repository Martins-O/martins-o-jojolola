import Testimonials from '@/components/sections/Testimonials'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read what clients say about working with Martins O Jojolola on QA, backend development, and blockchain projects. 50+ happy clients with 4.9/5 average rating.',
  openGraph: {
    title: 'Client Testimonials - Martins O Jojolola',
    description: 'Read client testimonials and reviews from QA, backend, and blockchain development projects.',
  }
}

export default function TestimonialsPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <Testimonials />
    </main>
  )
}