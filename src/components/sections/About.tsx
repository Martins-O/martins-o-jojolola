'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Zap, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
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

  const stats = [
    { number: '10+', label: 'Hackathons Entered' },
    { number: '7+', label: 'Ecosystems' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Smart Contracts Deployed' },
  ];

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Smart Contracts & Protocols',
      description:
        'Developing secure smart contracts and DeFi protocols across multiple networks.',
    },
    {
      icon: <Server size={24} />,
      title: 'Full-Stack Architecture',
      description:
        'Building scalable applications with robust Next.js frontends and Node.js backends.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Infrastructure & Tooling',
      description:
        'Engineering reliable cross-chain solutions, SDKs, and developer tooling.',
    },
    {
      icon: <Users size={24} />,
      title: 'Web3 Integration',
      description:
        'Bridging Web2 and Web3 technologies for seamless user experiences.',
    },
  ];

  return (
    <section id="about" ref={ref} className="bg-white py-20 dark:bg-gray-900">
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
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Passionate about creating digital experiences that combine
              technical excellence with creative innovation.
            </p>
          </motion.div>

          <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 rotate-6 transform rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"></div>
              <div className="relative rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                  alt="About me - workspace"
                  width={600}
                  height={400}
                  className="h-80 w-full rounded-lg object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Building the Infrastructure of Web3
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                I&apos;m a Smart Contract Engineer and Full-Stack Developer with
                3+ years of experience building decentralized applications and
                blockchain infrastructure. With participation in 10+ hackathons
                across 7+ ecosystems, I specialize in bringing innovative Web3
                concepts to life.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                My expertise spans writing secure smart contracts using Solidity
                and Rust, developing robust full-stack applications with Next.js
                and TypeScript, and architecting scalable backend systems. I
                excel at creating solutions that bridge traditional technologies
                with cutting-edge Web3 protocols.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Whether it&apos;s designing DeFi protocols, implementing
                cross-chain messaging systems, or building SDKs for seamless
                integrations, I bring precision and innovation to every project.
                I&apos;m passionate about expanding the boundaries of the
                blockchain ecosystem.
              </p>

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download="Martins_O_Jojolola_Resume.pdf"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="mb-12 text-center text-2xl font-bold text-gray-900 dark:text-white">
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12"
          >
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="mb-2 text-3xl font-bold text-white sm:text-4xl"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-blue-100 sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
