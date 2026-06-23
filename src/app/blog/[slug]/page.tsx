import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Github,
  ExternalLink,
} from 'lucide-react';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { BlogPostStructuredData } from '@/components/SEO/StructuredData';
import ShareButton from '@/components/ui/ShareButton';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Martins O Jojolola'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostStructuredData
        post={post}
        authorName="Martins O Jojolola"
        authorUrl="https://martins-jojolola.dev"
      />
      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {post.category}
              </span>
              <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl dark:text-white">
                {post.title}
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>Martins O Jojolola</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="mb-8 flex items-center gap-4">
              <ShareButton title={post.title} text={post.excerpt} />

              {post.githubUrl && (
                <Link
                  href={post.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </Link>
              )}

              {post.demoUrl && (
                <Link
                  href={post.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Link>
              )}
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <article
            className="prose prose-lg dark:prose-invert mb-12 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Found this helpful?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I&apos;d love to help you with your next QA, backend, or
              blockchain project.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get In Touch
              </Link>
              <Link
                href="/services"
                className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:text-blue-400"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
