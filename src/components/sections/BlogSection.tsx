'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts, type BlogPost } from '@/lib/blog';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllBlogPosts().then((posts) => {
      setBlogPosts(posts.slice(0, 6)); // Show latest 6 posts
    });
  }, []);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blockchain':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Quality Assurance':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Backend Development':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Web3':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section ref={ref} className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Latest Articles
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Insights, tutorials, and best practices in QA, backend
              development, and blockchain technology
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.length > 0 ? (
            <motion.div variants={itemVariants} className="mb-16">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-80 lg:h-auto">
                    <Image
                      src={
                        blogPosts[0].coverImage ||
                        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop'
                      }
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-6 left-6">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(blogPosts[0].category)}`}
                      >
                        {blogPosts[0].category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(blogPosts[0].publishedAt)}
                      <span className="mx-3">•</span>
                      <Clock size={16} className="mr-2" />
                      {blogPosts[0].readingTime} min read
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                      {blogPosts[0].title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {blogPosts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="group inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Read Article
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="mb-16">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-900">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-80 animate-pulse bg-gray-200 lg:h-auto dark:bg-gray-800"></div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="mb-4 h-4 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mb-4 h-8 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mb-6 h-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.length > 1 &&
              blogPosts.slice(1).map((post) => (
                <motion.article
                  key={post.slug}
                  variants={itemVariants}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        post.coverImage ||
                        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop'
                      }
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-2" />
                      {formatDate(post.publishedAt)}
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-2" />
                      {post.readingTime} min read
                    </div>
                    <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:underline hover:text-blue-700"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              View All Articles
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
