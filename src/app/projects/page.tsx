import Projects from '@/components/sections/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Martins O Jojolola',
  description: 'Portfolio of QA automation projects, backend systems, and blockchain applications built with Solidity, Rust, and Cairo.',
}

export default function ProjectsPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <Projects />
    </main>
  )
}