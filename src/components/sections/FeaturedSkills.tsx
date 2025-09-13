'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function FeaturedSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  const skillCategories = [
    {
      title: 'Quality Assurance',
      skills: ['Test Automation', 'Cypress', 'Playwright', 'API Testing'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'Microservices'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Blockchain',
      skills: ['Solidity', 'Rust', 'Cairo', 'Smart Contracts'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ]

  const blockchainNetworks = [
    { name: 'Ethereum', icon: '⟠' },
    { name: 'Polygon', icon: '🔷' },
    { name: 'Solana', icon: '🌟' },
    { name: 'StarkNet', icon: '🌀' },
    { name: 'BSC', icon: '🟡' },
    { name: 'Arbitrum', icon: '🔵' }
  ]

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
              Core Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Key technical competencies spanning quality assurance, backend development, and blockchain technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`${category.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}>
                  <div className="w-8 h-8"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blockchain Networks */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Blockchain Networks
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {blockchainNetworks.map((network, index) => (
                <motion.div
                  key={network.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl mb-2">{network.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {network.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/skills"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Explore All Skills
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}