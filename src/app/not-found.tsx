import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Home size={20} />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search size={24} className="text-gray-600 dark:text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}
