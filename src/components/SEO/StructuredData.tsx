import { BlogPost } from '@/lib/blog'
import { Project } from '@/lib/projects'

interface PersonStructuredDataProps {
  name: string
  jobTitle: string
  description: string
  url: string
  sameAs: string[]
  skills: string[]
}

interface BlogPostStructuredDataProps {
  post: BlogPost
  authorName: string
  authorUrl: string
}

interface ProjectStructuredDataProps {
  project: Project
  authorName: string
  authorUrl: string
}

export function PersonStructuredData({
  name,
  jobTitle,
  description,
  url,
  sameAs,
  skills
}: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "url": url,
    "sameAs": sameAs,
    "knowsAbout": skills,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BlogPostStructuredData({ post, authorName, authorUrl }: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${authorUrl}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "timeRequired": `PT${post.readingTime}M`,
    "about": post.tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ProjectStructuredData({ project, authorName, authorUrl }: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.coverImage,
    "url": `${authorUrl}/projects/${project.slug}`,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "creator": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "genre": project.category,
    "keywords": project.technologies.join(", "),
    "about": project.technologies.map(tech => ({
      "@type": "Thing",
      "name": tech
    })),
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.overview,
      "applicationCategory": project.category,
      "programmingLanguage": project.technologies,
      ...(project.githubUrl && { "codeRepository": project.githubUrl }),
      ...(project.liveUrl && { "url": project.liveUrl })
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Martins O Jojolola - Portfolio",
    "description": "Quality Assurance Engineer & Backend Developer specializing in automated testing, API development, and blockchain solutions",
    "url": "https://martinsjojolola.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://martinsjojolola.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}