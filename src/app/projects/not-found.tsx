'use client';

import Link from 'next/link';
import { Home, ArrowLeft, FolderOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Project Not Found',
  description: 'The project you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 p-6 dark:bg-blue-900/20">
              <FolderOpen
                size={64}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Project Not Found
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            The project you&apos;re looking for doesn&apos;t exist. It may have
            been removed, renamed, or you may have followed an incorrect link.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <FolderOpen size={20} />
            View All Projects
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            What you can do
          </h3>
          <ul className="space-y-2 text-left text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
              <span>
                Explore all my projects to see my work and case studies
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
              <span>Check the URL for any typos or formatting issues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600 dark:text-blue-400">•</span>
              <span>
                Visit the homepage to explore other sections of my portfolio
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
