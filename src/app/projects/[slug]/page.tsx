import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Github,
  ExternalLink,
  CheckCircle,
  Award,
  Zap,
} from 'lucide-react';
import { getProject, getAllProjectSlugs } from '@/lib/projects';
import { ProjectStructuredData } from '@/components/SEO/StructuredData';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Project Case Study`,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Project Case Study`,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectStructuredData
        project={project}
        authorName="Martins O Jojolola"
        authorUrl="https://martins-jojolola.dev"
      />
      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {project.category}
              </span>
              <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-5xl dark:text-white">
                {project.title}
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{project.completedAt}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                <span>{project.teamSize}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp size={16} className="mr-2" />
                <span>{project.role}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8 flex items-center gap-4">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Live Project
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Github size={16} className="mr-2" />
                  View Source Code
                </Link>
              )}
            </div>

            {/* Cover Image */}
            {project.coverImage && (
              <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Project Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Overview */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Project Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.overview}
                  </p>
                </div>
              </section>

              {/* Challenge */}
              {project.challenge && (
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    The Challenge
                  </h2>
                  <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-6 dark:bg-red-900/20">
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {project.challenge}
                    </p>
                  </div>
                </section>
              )}

              {/* Solution */}
              {project.solution && (
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    The Solution
                  </h2>
                  <div className="rounded-lg border-l-4 border-green-400 bg-green-50 p-6 dark:bg-green-900/20">
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {project.solution}
                    </p>
                  </div>
                </section>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Results & Impact
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {project.results.map((result, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20"
                      >
                        <Award className="mx-auto mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <div className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">
                <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Category
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Duration
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      Team Size
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.teamSize}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">
                      My Role
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Interested in Similar Results?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
              I&apos;d love to discuss how I can help bring similar success to
              your next {project.category.toLowerCase()} project.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:text-blue-400"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
