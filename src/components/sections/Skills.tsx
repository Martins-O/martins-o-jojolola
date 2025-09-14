'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Server, 
  Shield,
  TestTube,
  Layers
} from 'lucide-react'

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={32} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 85 },
        { name: 'Solidity', level: 90 },
        { name: 'Rust', level: 85 },
        { name: 'Cairo', level: 80 },
        { name: 'SQL', level: 88 },
      ]
    },
    {
      title: 'Quality Assurance',
      icon: <TestTube size={32} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Test Automation', level: 95 },
        { name: 'Manual Testing', level: 90 },
        { name: 'API Testing', level: 90 },
        { name: 'Performance Testing', level: 85 },
        { name: 'BDD/TDD', level: 90 },
        { name: 'Smart Contract Testing', level: 88 },
        { name: 'Load Testing', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={32} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Django', level: 90 },
        { name: 'FastAPI', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 85 },
        { name: 'Microservices', level: 85 },
        { name: 'Smart Contracts', level: 88 },
        { name: 'DeFi Protocols', level: 85 },
      ]
    },
    {
      title: 'Frontend & Web3',
      icon: <Shield size={32} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Web3.js/Ethers.js', level: 90 },
        { name: 'Wagmi', level: 85 },
        { name: 'RainbowKit', level: 85 },
        { name: 'Web3 Integration', level: 88 },
        { name: 'MetaMask API', level: 90 },
        { name: 'WalletConnect', level: 85 },
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: <Database size={32} />,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Cypress', level: 90 },
        { name: 'Playwright', level: 88 },
        { name: 'Selenium', level: 88 },
        { name: 'Hardhat/Foundry', level: 85 },
        { name: 'OpenZeppelin', level: 88 },
        { name: 'Postman', level: 92 },
        { name: 'Jest', level: 85 },
        { name: 'Pytest', level: 85 },
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <Layers size={32} />,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'CI/CD', level: 85 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 90 },
        { name: 'Redis', level: 85 },
      ]
    },
  ]

   const blockchainNetworks = [
    { name: 'Ethereum', icon: '⟠' },
    { name: 'Polygon', icon: '🔷' },
    { name: 'Solana', icon: '🌟' },
    { name: 'StarkNet', icon: '🌀' },
    { name: 'BSC', icon: '🟡' },
    { name: 'Arbitrum', icon: '🔵' },
    { name: 'Avalanche', icon: '⛰️' },
    { name: 'Optimism', icon: '🟠' },
    { name: 'Lisk', icon: '🟣' },
    { name: 'somnia', icon: '🟢' },
    { name: 'Ethereum Classic', icon: '⛓️' },
  ]

  return (
    <section
      id="skills"
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
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive skills spanning Quality Assurance, Backend Development, and cutting-edge Blockchain technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blockchain Networks */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Blockchain Networks I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {blockchainNetworks.map((network, index) => (
                <motion.div
                  key={network.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="text-3xl mb-2">{network.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {network.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}