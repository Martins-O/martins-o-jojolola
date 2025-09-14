'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 dark:bg-teal-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Martins O Jojolola
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6"
            >
              QA Engineer | Backend Developer | Blockchain Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              I ensure software quality through comprehensive testing, build robust backend systems,
              and develop cutting-edge blockchain solutions using Solidity, Rust, and Cairo.
              Bridging Web2 and Web3 technologies to create secure, scalable applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12"
            >
              <Link
                href="/projects"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 font-medium rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 items-center justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Martins-O"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/martins-o-jojolola"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jojololamartins686@gmail.com"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur-2xl opacity-20"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl"
              >
                <Image
                  src="/images/PXL_20250705_123229668.RAW-01.COVER.jpg"
                  alt="Martins O Jojolola - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}