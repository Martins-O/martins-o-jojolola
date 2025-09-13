import BlogSection from '@/components/sections/BlogSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Blog',
  description: 'Technical articles and insights on QA, backend development, blockchain, and Web3 technologies by Martins O Jojolola.',
  openGraph: {
    title: 'Technical Blog - Martins O Jojolola',
    description: 'Read technical articles on QA, backend development, and blockchain technologies.',
  }
}

export default function BlogPage() {
  return (
    <main id="main" className="min-h-screen pt-20" tabIndex={-1}>
      <BlogSection />
    </main>
  )
}