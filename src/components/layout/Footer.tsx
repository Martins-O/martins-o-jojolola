'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    { label: 'QA Automation' },
    { label: 'Backend Development' },
    { label: 'Smart Contract Development' },
    { label: 'DeFi Protocol Development' },
    { label: 'API Testing' },
    { label: 'Web3 Integration' },
  ]

  const technologies = [
    { label: 'Solidity' },
    { label: 'Rust' },
    { label: 'Cairo' },
    { label: 'Node.js' },
    { label: 'Java'},
    { label: 'Python' },
    { label: 'Cypress' },
    { label: 'Appium' },
    { label: 'Web3.js' },
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/Martins-O',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/martins-o-jojolola',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com/jojoOfETH',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:jojololamartins686@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Martins O Jojolola
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Quality Assurance Engineer, Backend Developer, and Blockchain Developer from Lagos, Nigeria. 
              Specializing in ensuring software excellence while building the future of decentralized applications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-green-400" />
                <a href="tel:+2348146587069" className="hover:text-white transition-colors">
                  +234 814 658 7069
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-red-400" />
                <a href="mailto:jojololamartins686@gmail.com" className="hover:text-white transition-colors">
                  jojololamartins686@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="py-1 text-sm">
                  {service.label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200"
              >
                {tech.label}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Martins O Jojolola. All rights reserved.
            </p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-0 flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}