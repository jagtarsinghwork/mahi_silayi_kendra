import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-gray-800 p-6 rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/30">
      <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex justify-between text-gray-500 text-sm">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-orange-500 hover:text-orange-400 transition"
      >
        Read More
      </Link>
    </article>
  );
}