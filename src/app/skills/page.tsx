import Skills from '@/components/sections/Skills'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - Martins O Jojolola',
  description: 'Technical skills and expertise in Quality Assurance, Backend Development, and Blockchain technologies including Solidity, Rust, and Cairo.',
}

export default function SkillsPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <Skills />
    </main>
  )
}