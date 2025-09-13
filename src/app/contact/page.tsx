import Contact from '@/components/sections/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Martins O Jojolola',
  description: 'Get in touch with Martins O Jojolola for QA consulting, backend development, or blockchain development projects.',
}

export default function ContactPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <Contact />
    </main>
  )
}