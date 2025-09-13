'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e0a3fa?w=150&h=150&fit=crop&crop=face",
      content: "Martins delivered exceptional QA work on our fintech platform. His attention to detail and comprehensive test automation reduced our bug reports by 90%. His blockchain expertise was invaluable for our DeFi integration.",
      rating: 5,
      project: "FinTech Platform QA & DeFi Integration"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Lead Developer at CryptoVentures",
      company: "CryptoVentures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with Martins on our smart contract development was a game-changer. His Solidity skills are top-notch, and his testing approach caught critical vulnerabilities before deployment. Highly recommended!",
      rating: 5,
      project: "Smart Contract Development & Security Testing"
    },
    {
      id: 3,
      name: "Amira Hassan",
      role: "Product Manager at DevCorp",
      company: "DevCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Martins transformed our backend architecture with his microservices expertise. The API performance improved by 300%, and his comprehensive testing ensured zero downtime during migration. Excellent work!",
      rating: 5,
      project: "Backend Architecture & API Development"
    },
    {
      id: 4,
      name: "James Okafor",
      role: "Founder at Lagos Blockchain Hub",
      company: "Lagos Blockchain Hub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Martins is one of the most skilled blockchain developers in Nigeria. His work on our DeFi protocol using Cairo was outstanding. His combination of technical skills and quality assurance mindset is rare.",
      rating: 5,
      project: "DeFi Protocol Development (Cairo/StarkNet)"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "QA Director at Global Tech",
      company: "Global Tech",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Martins elevated our entire QA process. His test automation frameworks using Cypress and Playwright reduced testing time by 70%. His mentorship helped our junior QA team become much more effective.",
      rating: 5,
      project: "QA Process Optimization & Team Training"
    },
    {
      id: 6,
      name: "Michael Adebayo",
      role: "Tech Lead at Nigerian Fintech",
      company: "Nigerian Fintech",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      content: "As a fellow Nigerian developer, I was impressed by Martins' professionalism and technical depth. His work on our payment processing system was flawless, with comprehensive testing that ensured regulatory compliance.",
      rating: 5,
      project: "Payment Processing System & Compliance Testing"
    }
  ]

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
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
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              What clients and collaborators say about working with me on QA, backend development, and blockchain projects
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote size={32} className="text-blue-600" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Project */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '100%', label: 'Project Success Rate' },
              { number: '24h', label: 'Response Time' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}