export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

// Sample blog posts - replace with your actual content
const blogPosts: BlogPost[] = [];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Sort by publishedAt date, newest first
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.featured);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find((post) => post.slug === slug);
  return post || null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return blogPosts.map((post) => post.slug);
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}
