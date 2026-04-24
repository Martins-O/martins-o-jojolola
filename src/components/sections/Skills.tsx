'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Server,
  Shield,
  TestTube,
  Layers,
} from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Smart Contracts',
      icon: <Code2 size={32} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Solidity', level: 95 },
        { name: 'Rust (ink!/Stylus)', level: 85 },
        { name: 'Cairo', level: 80 },
        { name: 'Soroban', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server size={32} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Java/Spring Boot', level: 85 },
        { name: 'Python', level: 85 },
      ],
    },
    {
      title: 'Frontend & Web3',
      icon: <Shield size={32} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Web3.js/Ethers.js', level: 90 },
        { name: 'Wagmi/RainbowKit', level: 85 },
      ],
    },
    {
      title: 'Tools & Infrastructure',
      icon: <Database size={32} />,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Docker', level: 88 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Prisma', level: 85 },
      ],
    },
    {
      title: 'Blockchain Tooling',
      icon: <Layers size={32} />,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Hardhat', level: 90 },
        { name: 'Foundry', level: 88 },
        { name: 'Anchor', level: 85 },
        { name: 'WalletConnect', level: 85 },
      ],
    },
    {
      title: 'Quality Assurance',
      icon: <TestTube size={32} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Smart Contract Testing', level: 90 },
        { name: 'Test Automation', level: 90 },
        { name: 'API Testing', level: 90 },
        { name: 'CI/CD Pipelines', level: 85 },
      ],
    },
  ];

  const blockchainNetworks = [
    { name: 'Ethereum', icon: '⟠' },
    { name: 'Arbitrum', icon: '🔵' },
    { name: 'Base', icon: '🔵' },
    { name: 'Polygon', icon: '🔷' },
    { name: 'Solana', icon: '🌟' },
    { name: 'StarkNet', icon: '🌀' },
    { name: 'Polkadot', icon: '🔴' },
    { name: 'Flow', icon: '🌊' },
    { name: 'Mantle', icon: '🟢' },
    { name: 'Avalanche', icon: '⛰️' },
    { name: 'Somnia', icon: '🟢' },
    { name: 'BSC', icon: '🟡' },
    { name: 'Optimism', icon: '🟠' },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-gray-50 py-20 dark:bg-gray-800"
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
              Technical Expertise
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Comprehensive skills spanning Quality Assurance, Backend
              Development, and cutting-edge Blockchain technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
              >
                <div className="mb-6 flex items-center">
                  <div
                    className={`rounded-lg bg-gradient-to-r p-3 ${category.color} mr-4 text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
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
            <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Blockchain Networks I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {blockchainNetworks.map((network, index) => (
                <motion.div
                  key={network.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-900"
                >
                  <span className="mb-2 text-3xl">{network.icon}</span>
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
  );
}
