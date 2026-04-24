'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Code,
  TestTube,
  Database,
  Coins,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    id: 'smart-contracts',
    category: 'Smart Contracts',
    title: 'Smart Contracts & DeFi Solutions',
    description:
      'Secure smart contract development, DeFi protocol design, and comprehensive security optimizations.',
    icon: Coins,
    features: [
      'Smart contract development (Solidity/Rust)',
      'DeFi protocol design & implementation',
      'Security optimizations & pre-audit reviews',
      'Cross-chain messaging integration',
      'Tokenomics implementation',
    ],
    timeline: '4-12 weeks',
    deliverables: [
      'Audited-ready smart contracts',
      'Deployment scripts & documentation',
      'Security review reports',
      'Test coverage & simulation',
      'Mainnet deployment support',
    ],
  },
  {
    id: 'full-stack-development',
    category: 'Full-Stack Development',
    title: 'Full-Stack Web3 Applications',
    description:
      'End-to-end dApp development with Next.js, Node.js, and robust Web3 integrations.',
    icon: Code,
    features: [
      'Responsive Next.js frontends',
      'Scalable Node.js/TypeScript backends',
      'Web3 wallet integrations',
      'Database design (SQL/NoSQL)',
      'Authentication & security',
    ],
    timeline: '6-14 weeks',
    deliverables: [
      'Production-ready dApp',
      'Backend APIs & microservices',
      'Database schema & migrations',
      'Deployment configurations',
      'Source code & documentation',
    ],
  },
  {
    id: 'web3-infrastructure',
    category: 'Web3 Infrastructure',
    title: 'Infrastructure & Developer Tooling',
    description:
      'Building custom blockchain infrastructure, SDKs, and developer-facing tools.',
    icon: Database,
    features: [
      'Custom SDK development',
      'Cross-chain bridges & protocols',
      'Indexer & subgraph development',
      'CI/CD for Web3 projects',
      'Developer documentation',
    ],
    timeline: '6-16 weeks',
    deliverables: [
      'NPM packages / libraries',
      'Infrastructure automation',
      'Integration guides',
      'API/SDK documentation',
      'Performance metrics',
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'Free 30-minute consultation to understand your requirements and challenges.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    description:
      'Detailed project proposal with timeline, milestones, and deliverables.',
    icon: Code,
  },
  {
    step: '03',
    title: 'Development & Testing',
    description:
      'Agile development with regular updates and comprehensive testing.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Delivery & Support',
    description:
      'Final delivery with documentation and ongoing support options.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Professional Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Expert development services for smart contracts, full-stack Web3
            applications, and blockchain infrastructure. Let&apos;s build
            something amazing together.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-20 grid gap-8 lg:grid-cols-1">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
            >
              <div className="p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  {/* Service Info */}
                  <div className="flex-1">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20">
                        <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                          {service.category}
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        What&apos;s Included:
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                        Key Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline & CTA */}
                  <div className="lg:w-80">
                    <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
                      <div className="mb-6">
                        <div className="mb-2 flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Timeline
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {service.timeline}
                        </span>
                      </div>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            How We Work Together
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                    <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white"
        >
          <h3 className="mb-4 text-2xl font-bold">
            Ready to Start Your Project?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-blue-100">
            Book a free 30-minute consultation to discuss your project
            requirements and how I can help you achieve your goals with secure
            smart contracts, full-stack development, or Web3 infrastructure.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-50"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-studies"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-blue-600"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
