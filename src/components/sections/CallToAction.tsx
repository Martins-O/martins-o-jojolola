'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Download } from 'lucide-react';
import { contactConfig, getMailtoLink } from '@/lib/config';

export default function CallToAction() {
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
    hidden: { opacity: 0, y: 30 },
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
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100">
              Whether you need quality assurance expertise, backend development,
              or blockchain innovation, I&apos;m here to help bring your vision
              to life.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { number: 'Available', label: 'For Projects' },
              { number: '24hrs', label: 'Response Time' },
              { number: 'Remote', label: 'Work Ready' },
              { number: 'Lagos', label: 'Based in Nigeria' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
            >
              <MessageSquare
                size={20}
                className="mr-2 transition-transform group-hover:scale-110"
              />
              Start a Conversation
            </Link>

            <a
              href={getMailtoLink()}
              className="group inline-flex items-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-blue-600"
            >
              <Mail
                size={20}
                className="mr-2 transition-transform group-hover:scale-110"
              />
              Send Email
            </a>

            <a
              href="/resume.pdf"
              download="Martins_O_Jojolola_Resume.pdf"
              className="group inline-flex items-center rounded-lg border-2 border-white/50 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              <Download
                size={20}
                className="mr-2 transition-transform group-hover:scale-110"
              />
              Download Resume
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-blue-100">
            <p className="text-lg">
              {contactConfig.email} | {contactConfig.phone} |{' '}
              {contactConfig.location}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
