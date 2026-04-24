'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  const projects = [
    {
      id: 1,
      title: 'ArbiLink',
      description:
        'Cross-chain messaging protocol on Arbitrum Stylus. Arbitrum Open House NYC Buildathon.',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      categories: ['infrastructure', 'hackathon'],
      tags: ['Rust', 'Stylus', 'TypeScript'],
      demoUrl: '',
      githubUrl: 'https://github.com/Martins-O/arbilink',
      features: ['Cross-chain messaging', 'Arbitrum Stylus', 'Smart Contracts'],
    },
    {
      id: 2,
      title: 'TrustVault',
      description:
        'Decentralized document notarization. Integrates Flow EVM, Filecoin/Storacha, Lit Protocol, NEAR. Built during PL Genesis hackathon.',
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
      categories: ['smart-contracts', 'hackathon'],
      tags: ['Solidity', 'TypeScript'],
      demoUrl: '',
      githubUrl: '',
      features: [
        'Document Notarization',
        'Decentralized Storage',
        'Multi-chain',
      ],
    },
    {
      id: 3,
      title: 'Liquifi',
      description:
        'AI-powered invoice factoring DeFi protocol on Mantle L2, ported to Flow EVM.',
      image:
        'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&h=400&fit=crop',
      categories: ['defi', 'smart-contracts'],
      tags: ['Solidity', 'Node.js'],
      demoUrl: '',
      githubUrl: '',
      features: ['AI Factoring', 'DeFi Protocol', 'Mantle L2'],
    },
    {
      id: 4,
      title: 'Factory EMS',
      description: 'Full-stack Employee Management System.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      categories: ['full-stack'],
      tags: [
        'Next.js 14',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'tRPC',
        'NextAuth',
      ],
      demoUrl: '',
      githubUrl: 'https://github.com/Martins-O/factory-ems',
      features: [
        'Employee Management',
        'Dashboard Analytics',
        'Role-based Access',
      ],
    },
    {
      id: 5,
      title: 'ChainGuard AI',
      description: 'Real-time AI security monitoring for Avalanche subnets.',
      image:
        'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop',
      categories: ['infrastructure', 'smart-contracts'],
      tags: ['Solidity', 'TypeScript'],
      demoUrl: '',
      githubUrl: '',
      features: ['AI Monitoring', 'Avalanche Subnets', 'Real-time Security'],
    },
    {
      id: 6,
      title: 'AgentPay Hub',
      description: 'Solana payment orchestration via MCP/x402 protocol.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      categories: ['defi', 'infrastructure'],
      tags: ['Rust', 'TypeScript'],
      demoUrl: '',
      githubUrl: '',
      features: [
        'Payment Orchestration',
        'MCP/x402 protocol',
        'Solana Network',
      ],
    },
    {
      id: 7,
      title: 'MobileKit',
      description:
        'Open-source mobile Web3 SDK for React Native and Flutter via deep linking. (in-progress)',
      image:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      categories: ['infrastructure', 'full-stack'],
      tags: ['TypeScript'],
      demoUrl: '',
      githubUrl: '',
      features: ['Web3 SDK', 'React Native / Flutter', 'Deep linking'],
    },
    {
      id: 8,
      title: 'SkillChain / Veriforge',
      description:
        'Verifiable skill credentials with blockchain attestation on Base. (in-progress)',
      image:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
      categories: ['smart-contracts', 'full-stack'],
      tags: ['Solidity', 'TypeScript'],
      demoUrl: '',
      githubUrl: '',
      features: ['Skill Verification', 'Blockchain Attestation'],
    },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'smart-contracts', label: 'Smart Contracts' },
    { key: 'full-stack', label: 'Full-Stack' },
    { key: 'defi', label: 'DeFi' },
    { key: 'infrastructure', label: 'Infrastructure' },
    { key: 'hackathon', label: 'Hackathon' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-white py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Featured Projects
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              A showcase of my recent work, demonstrating expertise in various
              technologies and problem-solving approaches.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
              >
                {/* Project Image */}
                <div className="relative h-48 shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-4">
                      {project.demoUrl &&
                        !project.demoUrl.includes('example.com') && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 h-1 w-1 shrink-0 rounded-full bg-blue-600"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex gap-3 border-t border-gray-100 pt-4 dark:border-gray-700">
                    {project.demoUrl &&
                    !project.demoUrl.includes('example.com') ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <div className="inline-flex flex-1 cursor-default items-center justify-center rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        Coming Soon
                      </div>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/martins-o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
