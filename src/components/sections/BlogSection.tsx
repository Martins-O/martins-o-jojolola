'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Smart Contract Testing with Hardhat and Chai",
      excerpt: "Learn how to write comprehensive tests for your Solidity smart contracts using industry best practices and advanced testing patterns.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      category: "Blockchain",
      tags: ["Solidity", "Testing", "Hardhat", "Smart Contracts"],
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      slug: "smart-contract-testing-hardhat-chai"
    },
    {
      id: 2,
      title: "Building Robust Test Automation Frameworks with Cypress",
      excerpt: "Step-by-step guide to creating scalable, maintainable test automation frameworks that grow with your application.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      category: "QA",
      tags: ["Cypress", "Test Automation", "JavaScript", "CI/CD"],
      publishedAt: "2024-01-10",
      readTime: "12 min read",
      slug: "cypress-test-automation-framework"
    },
    {
      id: 3,
      title: "Microservices Architecture with Node.js and Docker",
      excerpt: "Design patterns and best practices for building scalable microservices using Node.js, Docker, and container orchestration.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      category: "Backend",
      tags: ["Node.js", "Docker", "Microservices", "Architecture"],
      publishedAt: "2024-01-05",
      readTime: "15 min read",
      slug: "microservices-nodejs-docker"
    },
    {
      id: 4,
      title: "Cairo Smart Contracts: Getting Started with StarkNet",
      excerpt: "Introduction to Cairo programming language and building your first smart contracts on StarkNet's Layer 2 solution.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      category: "Blockchain",
      tags: ["Cairo", "StarkNet", "Layer 2", "Zero-Knowledge"],
      publishedAt: "2023-12-28",
      readTime: "10 min read",
      slug: "cairo-smart-contracts-starknet"
    },
    {
      id: 5,
      title: "API Performance Testing: Tools and Strategies",
      excerpt: "Comprehensive guide to API performance testing using K6, Artillery, and custom monitoring solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "QA",
      tags: ["Performance Testing", "K6", "APIs", "Monitoring"],
      publishedAt: "2023-12-20",
      readTime: "7 min read",
      slug: "api-performance-testing-guide"
    },
    {
      id: 6,
      title: "Web3 Frontend Development: Connecting to Blockchain",
      excerpt: "Learn how to build Web3 frontends that seamlessly interact with smart contracts using ethers.js and wagmi.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      category: "Web3",
      tags: ["Web3", "React", "Ethers.js", "Wagmi"],
      publishedAt: "2023-12-15",
      readTime: "11 min read",
      slug: "web3-frontend-development"
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blockchain':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'QA':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Backend':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Web3':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Insights, tutorials, and best practices in QA, backend development, and blockchain technology
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blogPosts[0].category)}`}>
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(blogPosts[0].publishedAt)}
                    <span className="mx-3">•</span>
                    <Clock size={16} className="mr-2" />
                    {blogPosts[0].readTime}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                  >
                    Read Article
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(post.publishedAt)}
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group-hover:underline"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View All Articles
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}