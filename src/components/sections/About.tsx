'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Zap, Users } from 'lucide-react'
import Image from 'next/image'

export default function About() {
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

  const stats = [
    { number: '30+', label: 'Projects Tested' },
    { number: '3+', label: 'Years QA Experience' },
    { number: '30+', label: 'Smart Contracts Deployed' },
    { number: '90.9%', label: 'Bug Detection Rate' },
  ]

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies ensuring bug-free, reliable software delivery.',
    },
    {
      icon: <Palette size={24} />,
      title: 'Backend Architecture',
      description: 'Building scalable APIs and microservices with robust security and performance.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Blockchain Innovation',
      description: 'Developing secure smart contracts and DeFi protocols across multiple networks.',
    },
    {
      icon: <Users size={24} />,
      title: 'Web3 Integration',
      description: 'Bridging Web2 and Web3 technologies for seamless user experiences.',
    },
  ]

  return (
    <section
      id="about"
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate about creating digital experiences that combine technical excellence with creative innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-6 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                  alt="About me - workspace"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-80"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Quality-Driven Innovation in Web3
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m a multifaceted technology professional with 5+ years of experience in quality
                assurance, backend development, and blockchain innovation. Based in Lagos, Nigeria,
                I specialize in ensuring software excellence while building the future of decentralized applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My expertise spans comprehensive QA methodologies, robust backend architectures with Node.js and Python,
                and cutting-edge blockchain development using Solidity, Rust, and Cairo. I excel at creating
                secure, scalable solutions that bridge traditional Web2 technologies with innovative Web3 protocols.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether it&apos;s implementing automated testing frameworks, designing microservices architectures,
                or developing DeFi protocols, I bring precision, security, and innovation to every project.
                I&apos;m passionate about contributing to the blockchain ecosystem while maintaining the highest quality standards.
              </p>

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download="Martins_O_Jojolola_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-100 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}