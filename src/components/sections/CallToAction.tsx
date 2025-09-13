'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Mail, MessageSquare, Download } from 'lucide-react'

export default function CallToAction() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Whether you need quality assurance expertise, backend development, 
              or blockchain innovation, I&apos;m here to help bring your vision to life.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: 'Available', label: 'For Projects' },
              { number: '24hrs', label: 'Response Time' },
              { number: 'Remote', label: 'Work Ready' },
              { number: 'Lagos', label: 'Based in Nigeria' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <MessageSquare size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Start a Conversation
            </Link>
            
            <a
              href="mailto:jojololamartins686@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 group"
            >
              <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Send Email
            </a>
            
            <a
              href="/resume.pdf"
              download="Martins_O_Jojolola_Resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-200 group"
            >
              <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-blue-100">
            <p className="text-lg">
              📧 jojololamartins686@gmail.com | 📱 +234 814 658 7069 | 📍 Lagos, Nigeria
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}