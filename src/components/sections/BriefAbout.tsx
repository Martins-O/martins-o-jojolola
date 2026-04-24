'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TestTube, Server, Shield, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function BriefAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const specializations = [
    {
      icon: <TestTube size={24} />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies and automation frameworks',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Scalable APIs and microservices architecture',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Shield size={24} />,
      title: 'Blockchain Development',
      description: 'Smart contracts and DeFi protocols',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Code2 size={24} />,
      title: 'Web3 Integration',
      description: 'Bridging traditional and decentralized technologies',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { number: '10+', label: 'Hackathons Entered' },
    { number: '7+', label: 'Ecosystems' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Smart Contracts Deployed' },
  ];

  return (
    <section ref={ref} className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              About Me
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              A passionate technology professional from Lagos, Nigeria,
              specializing in quality assurance, backend development, and
              blockchain innovation. I ensure software excellence while building
              the future of decentralized applications.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="mb-2 text-3xl font-bold text-blue-600 sm:text-4xl dark:text-blue-400"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Specializations */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center"
              >
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${spec.color} mb-4 text-white transition-transform duration-300 group-hover:scale-110`}
                >
                  {spec.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
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
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
