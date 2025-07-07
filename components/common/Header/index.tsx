'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { title: 'Blog', link: '/blog' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Docs', link: '/docs' },
    { title: 'Features', link: '/features' },
  ];

  if (pathname?.includes('dashboard')) return null;

  return (
    <header className="w-full bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image
            width={40}
            height={40}
            alt="TestFire Logo"
            src="/testfire-logo.svg" // Replace with your logo path
          /> */}
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient font-extrabold text-2xl">
              TEST
            </span>
            <span className="text-orange-500 glow-text text-2xl">FIRE</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-400 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition text-lg"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex flex-wrap space-x-4">
          <Link
            href="/book-call"
            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-white"
          >
            Book a Call
          </Link>
          <Link
            href="/discover"
            className="px-4 py-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white"
          >
            Discover the Platform
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;