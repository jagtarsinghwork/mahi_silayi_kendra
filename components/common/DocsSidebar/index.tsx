import React from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  title: string;
}

interface DocsSidebarProps {
  sections: Section[];
}

export default function DocsSidebar({ sections }: DocsSidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 p-6 hidden md:block sticky top-0 h-screen">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
        TestFire Docs
      </h2>
      <nav>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="text-gray-400 hover:text-orange-500 transition"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}