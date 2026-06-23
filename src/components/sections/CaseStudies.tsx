'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudies() {
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

  const caseStudies = [
    {
      id: 1,
      title: 'DeFi Yield Farming Protocol - 99.9% Uptime Achievement',
      client: 'CryptoVentures Ltd',
      category: 'Blockchain Development',
      duration: '6 months',
      teamSize: '5 developers',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
      problem:
        'Client needed a secure, high-performance DeFi protocol for yield farming with complex smart contract interactions.',
      solution:
        'Developed comprehensive smart contracts using Solidity, implemented rigorous testing with Hardhat, and created automated deployment pipelines.',
      results: [
        '99.9% uptime since launch',
        '$2M+ TVL (Total Value Locked)',
        'Zero security vulnerabilities',
        '300+ daily active users',
      ],
      technologies: [
        'Solidity',
        'Foundry',
        'OpenZeppelin',
        'Ethereum',
        'Web3.js',
      ],
      slug: 'defi-yield-farming-protocol',
    },
    {
      id: 2,
      title: 'E-commerce Platform QA Transformation - 90% Bug Reduction',
      client: 'TechFlow Solutions',
      category: 'Quality Assurance',
      duration: '4 months',
      teamSize: '8 team members',
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop',
      problem:
        'Legacy e-commerce platform with high bug rates, slow testing cycles, and poor user experience affecting conversion rates.',
      solution:
        'Implemented comprehensive test automation using Cypress and Playwright, established CI/CD pipelines, and trained the QA team.',
      results: [
        '90% reduction in production bugs',
        '70% faster testing cycles',
        '45% improvement in conversion rates',
        'Zero critical failures post-launch',
      ],
      technologies: ['Cypress', 'Playwright', 'Jest', 'GitHub Actions', 'K6'],
      slug: 'ecommerce-qa-transformation',
    },
    {
      id: 3,
      title: 'Microservices Backend Architecture - 300% Performance Boost',
      client: 'Nigerian Fintech Startup',
      category: 'Backend Development',
      duration: '8 months',
      teamSize: '12 engineers',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      problem:
        'Monolithic architecture causing scalability issues, slow API responses, and difficulty in team collaboration.',
      solution:
        'Designed and implemented microservices architecture with Node.js, PostgreSQL clustering, and comprehensive API testing.',
      results: [
        '300% improvement in API performance',
        'Zero downtime during migration',
        '50% reduction in server costs',
        'Regulatory compliance achieved',
      ],
      technologies: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'],
      slug: 'fintech-microservices-architecture',
    },
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
              Case Studies
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              In-depth look at real projects showcasing problem-solving
              approaches, technical implementation, and measurable results
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="group relative h-80 overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                        {study.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="max-w-xl">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                      {study.title}
                    </h3>

                    <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {study.teamSize}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Challenge:
                      </h4>
                      <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {study.problem}
                      </p>

                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Solution:
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="mb-3 flex items-center font-semibold text-gray-900 dark:text-white">
                        <TrendingUp size={18} className="mr-2 text-green-500" />
                        Key Results:
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Read Full Case Study
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              View All Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
