import { notFound } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Fetch post by slug or return notFound()
  async function fetchBlogPosts(): Promise<BlogPost[]> {
    // Replace with your API/CMS fetch
    return []; // Return posts (empty array as placeholder)
  }
  return <div className="bg-black text-white p-10">Blog Post: {params.slug}</div>;
}