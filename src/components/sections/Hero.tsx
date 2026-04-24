'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig, getMailtoLink } from '@/lib/config';

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
  };

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
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-emerald-200 opacity-70 mix-blend-multiply blur-xl filter dark:bg-emerald-800 dark:mix-blend-overlay"></div>
        <div className="animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-teal-200 opacity-70 mix-blend-multiply blur-xl filter dark:bg-teal-800 dark:mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Martins O Jojolola
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-xl font-medium text-gray-600 sm:text-2xl lg:text-3xl dark:text-gray-300"
            >
              Smart Contract Engineer | Full-Stack Developer | Web3 Builder
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              Building the infrastructure of Web3 — from smart contracts to
              production-grade backends. 10+ hackathons across 7+ ecosystems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-emerald-700"
              >
                View My Work
                <ArrowDown size={18} />
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-gray-300 px-8 py-4 font-medium text-gray-700 transition-colors duration-200 hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-6 lg:justify-start"
            >
              <a
                href={contactConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 transition-colors duration-200 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
              >
                <Github size={24} />
              </a>
              <a
                href={contactConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 transition-colors duration-200 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={getMailtoLink()}
                className="p-3 text-gray-600 transition-colors duration-200 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 opacity-20 blur-2xl"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-72 w-72 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-[420px] xl:w-[420px] dark:border-gray-700"
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
  );
}
