'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  type: 'page' | 'project' | 'blog' | 'skill'
  url: string
  description: string
  category?: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const searchData: SearchResult[] = [
    // Pages
    { id: '1', title: 'About Me', type: 'page', url: '/about', description: 'Learn about my background in QA, backend development, and blockchain' },
    { id: '2', title: 'Skills & Expertise', type: 'page', url: '/skills', description: 'Technical skills in QA, Node.js, Solidity, Rust, and more' },
    { id: '3', title: 'Projects Portfolio', type: 'page', url: '/projects', description: 'Showcase of QA, backend, and blockchain projects' },
    { id: '4', title: 'Professional Services', type: 'page', url: '/services', description: 'Consulting services for QA, backend development, and blockchain solutions' },
    { id: '5', title: 'Contact Information', type: 'page', url: '/contact', description: 'Get in touch for QA, backend, or blockchain development projects' },
    { id: '6', title: 'Case Studies', type: 'page', url: '/case-studies', description: 'Detailed project case studies with results and insights' },
    { id: '7', title: 'Client Testimonials', type: 'page', url: '/testimonials', description: 'What clients say about working with me' },
    { id: '8', title: 'Technical Blog', type: 'page', url: '/blog', description: 'Articles on QA, backend development, and blockchain' },
    
    // Skills
    { id: '9', title: 'Quality Assurance', type: 'skill', url: '/skills#qa', description: 'Test automation, Cypress, Playwright, API testing' },
    { id: '10', title: 'Backend Development', type: 'skill', url: '/skills#backend', description: 'Node.js, Python, PostgreSQL, microservices' },
    { id: '11', title: 'Blockchain Development', type: 'skill', url: '/skills#blockchain', description: 'Solidity, Rust, Cairo, smart contracts, DeFi' },
    { id: '12', title: 'Test Automation', type: 'skill', url: '/skills#qa', description: 'Cypress, Playwright, Jest, automated testing frameworks' },
    { id: '13', title: 'Smart Contracts', type: 'skill', url: '/skills#blockchain', description: 'Solidity, security audits, gas optimization' },
    { id: '14', title: 'Node.js Development', type: 'skill', url: '/skills#backend', description: 'REST APIs, Express.js, microservices architecture' },
    
    // Projects
    { id: '15', title: 'DeFi Yield Farming Protocol', type: 'project', url: '/projects#defi', description: 'Ethereum smart contracts for liquidity mining and staking', category: 'Blockchain' },
    { id: '16', title: 'Automated Testing Framework', type: 'project', url: '/projects#testing', description: 'Comprehensive test automation with parallel execution', category: 'QA' },
    { id: '17', title: 'Microservices Backend API', type: 'project', url: '/projects#backend', description: 'Scalable Node.js microservices architecture', category: 'Backend' },
    { id: '18', title: 'Cross-chain Bridge Protocol', type: 'project', url: '/projects#bridge', description: 'Multi-chain asset transfer with automated validation', category: 'Blockchain' },
    { id: '19', title: 'NFT Marketplace Contract', type: 'project', url: '/projects#nft', description: 'Secure NFT trading with royalties and auctions', category: 'Blockchain' },
    
    // Blog Posts
    { id: '20', title: 'Smart Contract Testing Guide', type: 'blog', url: '/blog/smart-contract-testing', description: 'Comprehensive testing with Hardhat and Chai' },
    { id: '21', title: 'Cypress Automation Framework', type: 'blog', url: '/blog/cypress-framework', description: 'Building robust test automation frameworks' },
    { id: '22', title: 'Microservices with Node.js', type: 'blog', url: '/blog/nodejs-microservices', description: 'Architecture patterns and Docker deployment' },
    { id: '23', title: 'Cairo Smart Contracts', type: 'blog', url: '/blog/cairo-starknet', description: 'Getting started with StarkNet development' }
  ]

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate search delay
    const timeout = setTimeout(() => {
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8) // Limit to 8 results
      
      setResults(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [query])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'project': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'blog': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'skill': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const handleResultClick = () => {
    setQuery('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl mt-20 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <Search size={20} className="text-gray-400 mr-4" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, skills, articles, or pages..."
                className="flex-1 text-lg bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading && (
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
                </div>
              )}

              {!isLoading && query && results.length === 0 && (
                <div className="text-center p-8 text-gray-500 dark:text-gray-400">
                  <Search size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No results found for &quot;{query}&quot;</p>
                  <p className="text-sm mt-2">Try searching for skills, projects, or topics</p>
                </div>
              )}

              {!isLoading && results.length > 0 && (
                <div className="p-2">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={handleResultClick}
                      className="flex items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                          {result.category && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {result.category}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors mt-1 ml-4" />
                    </Link>
                  ))}
                </div>
              )}

              {!query && (
                <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                  <Search size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="font-medium mb-2">Search my portfolio</p>
                  <p className="text-sm">Find projects, skills, articles, and more</p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            {!query && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Quick Actions</p>
                <div className="flex flex-wrap gap-2">
                  {['Quality Assurance', 'Blockchain', 'Node.js', 'Solidity', 'Testing'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}