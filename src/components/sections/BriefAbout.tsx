'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TestTube, Server, Shield, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function BriefAbout() {
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

  const specializations = [
    {
      icon: <TestTube size={24} />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies and automation frameworks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development', 
      description: 'Scalable APIs and microservices architecture',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Shield size={24} />,
      title: 'Blockchain Development',
      description: 'Smart contracts and DeFi protocols',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Web3 Integration',
      description: 'Bridging traditional and decentralized technologies',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '30+', label: 'Projects Tested' },
    { number: '30+', label: 'Smart Contracts' },
    { number: '90.9%', label: 'Bug Detection Rate' }
  ]

  return (
    <section
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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A passionate technology professional from Lagos, Nigeria, specializing in quality assurance, 
              backend development, and blockchain innovation. I ensure software excellence while building 
              the future of decentralized applications.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Specializations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${spec.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {spec.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}