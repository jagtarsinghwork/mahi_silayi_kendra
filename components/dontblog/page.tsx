import React from 'react';
import BlogPostCard from '@/components/common/BlogPostCard';
import { Metadata } from 'next';
import Header from '@/components/common/Header';
import BlogLayout from './layout';

export const metadata: Metadata = {
  title: 'TestFire Blog | Humintive',
  description:
    'Stay updated with the latest news, tutorials, and insights on AI-driven mobile app testing from TestFire by Humintive.',
  openGraph: {
    title: 'TestFire Blog',
    description: 'Tutorials and insights on TestFire’s AI testing platform.',
    url: 'https://testfire.ai/blog',
  },
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}

export default async function BlogPage() {
  // Mock blog posts (replace with API fetch, e.g., from CMS)
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'How TestFire’s AI Boosts App Testing Efficiency',
      excerpt: 'Learn how TestFire’s AI-driven tools can reduce testing time by 50%.',
      date: 'July 1, 2025',
      author: 'TestFire Team',
      slug: 'ai-testing-efficiency',
    },
    {
      id: '2',
      title: 'Top 5 Tips for Mobile App Testing in 2025',
      excerpt: 'Discover best practices for testing your mobile apps with TestFire.',
      date: 'June 15, 2025',
      author: 'TestFire Team',
      slug: 'mobile-app-testing-tips',
    },
    {
      id: '3',
      title: 'Integrating TestFire with CI/CD Pipelines',
      excerpt: 'A step-by-step guide to automating testing with TestFire in your CI/CD workflow.',
      date: 'June 1, 2025',
      author: 'TestFire Team',
      slug: 'cicd-integration',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          TestFire Blog
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Stay updated with the latest tutorials, insights, and updates on AI-driven testing with TestFire.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}