'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('all')

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

  const projects = [
    {
      id: 1,
      title: 'DeFi Yield Farming Protocol',
      description: 'A decentralized yield farming protocol built on Ethereum with smart contracts for liquidity mining, staking rewards, and governance token distribution.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      category: 'blockchain',
      tags: ['Solidity', 'Foundry', 'OpenZeppelin', 'Web3.js', 'React'],
      demoUrl: 'https://defi-protocol.example.com',
      githubUrl: 'https://github.com/Martins-O/defi-yield-farming-protocol',
      features: ['Smart Contracts', 'Liquidity Mining', 'Governance']
    },
    {
      id: 2,
      title: 'Credisom lending protocol',
      description: "Credisomnia is a revolutionary DeFi platform that bridges traditional credit scoring with cutting-edge blockchain technology. Built on Somnia's high-performance blockchain, it offers real-time credit scoring, dynamic lending rates, and soulbound NFT-based credit identity that evolves with your DeFi activities.",
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
      category: 'blockchain',
      tags: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Web3.js', 'React', 'TypeScript'],
      demoUrl: 'https://credisom.vercel.app',
      githubUrl: 'https://github.com/Martins-O/credisomnia',
      features: ['Dynamic Credit Scoring', 'Soulbound Credit NFT', 'Advanced Lending Protocol', 'High-Yield Savings Vault']
    },
    {
      id: 3,
      title: 'ERC-20 Diamond Token standard',
      description: 'A smart contract standard for creating ERC-20 tokens that can be upgraded with additional functionality without breaking compatibility.',
      image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&h=400&fit=crop',
      category: 'blockchain',
      tags: ['Foundry', 'ERC-20', 'Etherscan'],
      // demoUrl: 'https://nft-marketplace.example.com',
      githubUrl: 'https://github.com/Martins-O/Diamond-ERC20-Token',
      features: ['ERC-20 Standard', 'Upgradable Contracts', 'Token Metadata', 'Token Transfers', 'Proxy Pattern']
    },
    // {
    //   id: 4,
    //   title: 'Microservices Backend API',
    //   description: 'A scalable microservices architecture with Node.js, featuring API gateway, authentication service, and real-time communication.',
    //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    //   category: 'backend',
    //   tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'K8s'],
    //   demoUrl: 'https://api.microservices.example.com/docs',
    //   githubUrl: 'https://github.com/jojolola/microservices-backend',
    //   features: ['API Gateway', 'Service Discovery', 'Load Balancing', 'Real-time Messaging']
    // },
    // {
    //   id: 5,
    //   title: 'Cross-chain Bridge Protocol',
    //   description: 'A secure cross-chain bridge enabling asset transfers between Ethereum, Polygon, and BSC networks with automated validation.',
    //   image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop',
    //   category: 'blockchain',
    //   tags: ['Solidity', 'Rust', 'Chainlink', 'Multi-sig', 'Web3'],
    //   demoUrl: 'https://cross-chain-bridge.example.com',
    //   githubUrl: 'https://github.com/jojolola/cross-chain-bridge',
    //   features: ['Multi-chain Support', 'Automated Validation', 'Security Audited', 'Low Fees']
    // },
    // {
    //   id: 6,
    //   title: 'API Performance Testing Suite',
    //   description: 'A comprehensive performance testing suite for REST APIs with load testing, stress testing, and detailed performance analytics.',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    //   category: 'qa',
    //   tags: ['K6', 'Artillery', 'Grafana', 'InfluxDB', 'Node.js'],
    //   demoUrl: 'https://performance-testing.example.com',
    //   githubUrl: 'https://github.com/jojolola/api-performance-testing',
    //   features: ['Load Testing', 'Real-time Monitoring', 'Custom Metrics', 'Automated Reports']
    // },
    // {
    //   id: 7,
    //   title: 'StarkNet Cairo Smart Contracts',
    //   description: 'Advanced Cairo smart contracts for StarkNet including AMM, lending protocol, and zero-knowledge proof implementations.',
    //   image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    //   category: 'blockchain',
    //   tags: ['Cairo', 'StarkNet', 'Zero-Knowledge', 'AMM', 'DeFi'],
    //   demoUrl: 'https://starknet-contracts.example.com',
    //   githubUrl: 'https://github.com/jojolola/starknet-cairo-contracts',
    //   features: ['ZK Proofs', 'Layer 2 Scaling', 'AMM Protocol', 'Cairo Language']
    // },
    // {
    //   id: 8,
    //   title: 'Web3 dApp Testing Framework',
    //   description: 'A specialized testing framework for Web3 applications with blockchain interaction testing, wallet connection mocking, and smart contract testing.',
    //   image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
    //   category: 'qa',
    //   tags: ['Hardhat', 'Ganache', 'Web3.js', 'Mocha', 'Solidity'],
    //   demoUrl: 'https://web3-testing.example.com',
    //   githubUrl: 'https://github.com/jojolola/web3-dapp-testing',
    //   features: ['Smart Contract Testing', 'Wallet Mocking', 'Gas Optimization', 'Fork Testing']
    // },
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'blockchain', label: 'Blockchain' },
    { key: 'qa', label: 'Quality Assurance' },
    { key: 'backend', label: 'Backend' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in various technologies and problem-solving approaches.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/martins-o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}