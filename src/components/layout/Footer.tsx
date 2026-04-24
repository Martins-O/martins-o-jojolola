'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUp } from 'lucide-react';
import { contactConfig, getMailtoLink } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { label: 'Smart Contract Development' },
    { label: 'DeFi Protocol Design' },
    { label: 'Full-Stack Web3 dApps' },
    { label: 'Cross-Chain Infrastructure' },
    { label: 'Backend API Development' },
    { label: 'Developer SDKs/Tooling' },
  ];

  const technologies = [
    { label: 'Solidity' },
    { label: 'Rust' },
    { label: 'Cairo' },
    { label: 'Next.js' },
    { label: 'TypeScript' },
    { label: 'Node.js' },
    { label: 'PostgreSQL' },
    { label: 'Docker' },
    { label: 'Hardhat' },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: contactConfig.social.github,
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: <Linkedin size={20} />,
      href: contactConfig.social.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Twitter size={20} />,
      href: contactConfig.social.twitter,
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Mail size={20} />,
      href: getMailtoLink(),
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Martins O Jojolola
            </h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              Smart Contract Engineer, Full-Stack Developer, and Web3 Builder.
              Specializing in designing robust architectures and building the
              infrastructure of decentralized applications.
            </p>

            {/* Contact Info */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400" />
                <span>{contactConfig.location}</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-red-400" />
                <a
                  href={getMailtoLink()}
                  className="transition-colors hover:text-white"
                >
                  {contactConfig.email}
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
                  className={`rounded-lg bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-700 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
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
        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-gray-800 pt-8"
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-800 px-3 py-1 text-sm transition-colors duration-200 hover:bg-gray-700"
              >
                {tech.label}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} Martins O Jojolola. All rights reserved.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 flex items-center space-x-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white sm:mt-0"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
