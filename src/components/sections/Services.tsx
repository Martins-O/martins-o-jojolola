'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'qa-consultation',
    category: 'Quality Assurance',
    title: 'QA Strategy & Test Automation',
    description: 'Comprehensive QA consultation, test strategy development, and automated testing framework implementation.',
    icon: TestTube,
    features: [
      'Test automation strategy & roadmap',
      'Cypress/Playwright framework setup',
      'CI/CD integration & reporting',
      'Team training & knowledge transfer',
      'Quality metrics & KPI definition'
    ],
    pricing: {
      consultation: '$150/hour',
      project: 'From $3,000',
      retainer: '$2,500/month'
    },
    timeline: '2-8 weeks',
    deliverables: [
      'Test automation framework',
      'Comprehensive test suites',
      'CI/CD pipeline integration',
      'Team training materials',
      'Quality assurance documentation'
    ]
  },
  {
    id: 'backend-development',
    category: 'Backend Development',
    title: 'Backend API & Microservices',
    description: 'Scalable backend development with Node.js/Python, API design, and microservices architecture.',
    icon: Database,
    features: [
      'RESTful API design & development',
      'Microservices architecture',
      'Database design & optimization',
      'Authentication & authorization',
      'Performance optimization & monitoring'
    ],
    pricing: {
      consultation: '$120/hour',
      project: 'From $5,000',
      retainer: '$4,000/month'
    },
    timeline: '4-12 weeks',
    deliverables: [
      'Production-ready APIs',
      'Database schema & migrations',
      'Documentation & API specs',
      'Deployment configuration',
      'Monitoring & logging setup'
    ]
  },
  {
    id: 'blockchain-development',
    category: 'Blockchain Development',
    title: 'Smart Contracts & DeFi Solutions',
    description: 'End-to-end blockchain development including smart contracts, DeFi protocols, and Web3 integrations.',
    icon: Coins,
    features: [
      'Smart contract development (Solidity/Rust)',
      'DeFi protocol design & implementation',
      'Security audits & gas optimization',
      'Cross-chain integration solutions',
      'Web3 frontend integration'
    ],
    pricing: {
      consultation: '$200/hour',
      project: 'From $8,000',
      retainer: '$6,000/month'
    },
    timeline: '6-16 weeks',
    deliverables: [
      'Audited smart contracts',
      'Deployment scripts & documentation',
      'Security audit reports',
      'Web3 integration guide',
      'Mainnet deployment support'
    ]
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'Free 30-minute consultation to understand your requirements and challenges.',
    icon: Users
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    description: 'Detailed project proposal with timeline, milestones, and deliverables.',
    icon: Code
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with regular updates and comprehensive testing.',
    icon: TrendingUp
  },
  {
    step: '04',
    title: 'Delivery & Support',
    description: 'Final delivery with documentation and ongoing support options.',
    icon: Shield
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert consulting and development services for quality assurance, backend development, 
            and blockchain solutions. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-1 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Service Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                          {service.category}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        What&apos;s Included:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="lg:w-80">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Investment Options:
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Consultation</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {service.pricing.consultation}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Project</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {service.pricing.project}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Monthly Retainer</span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {service.pricing.retainer}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Timeline
                          </span>
                        </div>
                        <span className="text-gray-900 dark:text-white font-semibold">
                          {service.timeline}
                        </span>
                      </div>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 group"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How We Work Together
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your project requirements and how I can help 
            you achieve your goals with quality assurance, backend development, or blockchain solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2 group"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}