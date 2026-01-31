'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { contactConfig, getMailtoLink, getTelLink } from '@/lib/config';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: contactConfig.email,
      href: getMailtoLink(),
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: contactConfig.phone,
      href: getTelLink(),
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: contactConfig.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: contactConfig.social.github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: contactConfig.social.linkedin,
      color: 'hover:text-blue-600',
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      href: contactConfig.social.twitter,
      color: 'hover:text-blue-400',
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: getMailtoLink(),
      color: 'hover:text-red-500',
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-gray-50 py-20 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Get In Touch
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind or just want to chat? I&apos;d love to hear
              from you. Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Let&apos;s Connect
                </h3>
                <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                  I&apos;m always excited to work on new projects and
                  collaborate with amazing people. Whether you&apos;re looking
                  for a developer to join your team or need help bringing your
                  ideas to life, don&apos;t hesitate to reach out.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Follow me on:
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded-lg bg-white p-3 text-gray-600 shadow-md transition-colors dark:bg-gray-700 dark:text-gray-400 ${social.color}`}
                        title={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20"
                  >
                    <CheckCircle
                      size={20}
                      className="mr-3 text-green-600 dark:text-green-400"
                    />
                    <span className="text-green-800 dark:text-green-300">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20"
                  >
                    <AlertCircle
                      size={20}
                      className="mr-3 text-red-600 dark:text-red-400"
                    />
                    <span className="text-red-800 dark:text-red-300">
                      Failed to send message. Please try again.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      placeholder="your.email@domain.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Service Field */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Service Interest (Optional)
                    </label>
                    <select
                      {...register('service')}
                      id="service"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="qa-consultation">
                        QA Strategy & Test Automation
                      </option>
                      <option value="backend-development">
                        Backend API & Microservices
                      </option>
                      <option value="blockchain-development">
                        Smart Contracts & DeFi Solutions
                      </option>
                      <option value="general-consultation">
                        General Consultation
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      placeholder="Tell me about your project or just say hello!"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:bg-blue-400"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">
                Ready to Start Your Project?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-blue-100">
                Let&apos;s discuss your ideas and turn them into reality.
                I&apos;m here to help you create something extraordinary.
              </p>
              <a
                href={getMailtoLink()}
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-gray-100"
              >
                <Mail size={18} className="mr-2" />
                Email Me Directly
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
