'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-blue-600 dark:text-blue-400">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved or deleted.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Home size={20} />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-100 p-8 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Search size={24} className="text-gray-600 dark:text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
          </div>
          <nav className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Link
              href="/about"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
