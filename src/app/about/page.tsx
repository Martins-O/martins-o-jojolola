import About from '@/components/sections/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Martins O Jojolola',
  description: 'Learn more about Martins O Jojolola - QA Engineer, Backend Developer, and Blockchain Developer from Lagos, Nigeria.',
}

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <About />
    </main>
  )
}