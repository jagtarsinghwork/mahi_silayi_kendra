'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const footerLinks = {
    links: {
      title: 'Links',
      items: [
        { title: 'Home', link: '/' },
        { title: 'Blog', link: '/blog' },
        { title: 'Pricing', link: '/pricing' },
      ],
    },
    legal: {
      title: 'Legal',
      items: [
        { title: 'Terms of Use', link: '/terms-policy' },
        { title: 'Privacy Policy', link: '/privacy-policy' },
        { title: 'Refund Policy', link: '/refund-policy' },
      ],
    },
    product: {
      title: 'Product',
      items: [
        { title: 'Features', link: '/features' },
        { title: 'Docs', link: '/docs' },
        { title: 'Community', link: '/community' },
      ],
    },
  };
  const pathname = usePathname();

  if (pathname?.includes('dashboard')) return null;

  return (
    <footer className="w-full relative overflow-hidden">
      <div className="relative">
        {/* Footer Content */}
        <div className="w-full bg-gradient-to-b from-gray-900 to-black py-8 md:py-4">
          <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-between gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
              <Image
                width={40}
                height={40}
                alt="TestFire Logo"
                src="/testfire-logo.svg" // Replace with your logo path
              />
              <div className="ml-4 flex items-center space-x-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient font-extrabold text-[24px]">
                  TEST
                </span>
                <span className="text-orange-500 glow-text text-[24px]">
                  FIRE
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-4 pt-[1rem]">
                <h3 className="font-bold text-white text-lg md:text-xl">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-gray-400 text-sm hover:text-orange-500 transition"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Email */}
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
              <MailIcon className="w-6 md:w-8 h-6 md:h-8 text-orange-500" />
              <span className="ml-2 text-gray-400 text-md md:text-lg">
                support@testfire.ai
              </span>
            </div>
          </div>

          {/* Made in India */}
          <div className="flex items-center justify-center md:justify-end mt-16 md:pr-10">
            <span className="text-gray-400 text-sm">
              Made With ❤️ In India
            </span>
            <div className="ml-2">
              <Icon icon="flagpack:in" className="w-[25px] h-[18px]" />
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="w-full bg-gray-800 py-3 flex justify-center items-center">
          <p className="text-gray-400 text-base">
            Copyright 2025 TestFire by Humintive. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;