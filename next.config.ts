import type { NextConfig } from 'next';

const {
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_RAZORPAY_KEY,
  NEXT_PUBLIC_MONTH_DAYS,
  NEXT_PUBLIC_QUARTER_DAYS,
  NEXT_PUBLIC_YEAR_DAYS,
} = process.env;

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: ['./sass'],
  },
  images: {
    unoptimized: true, // Optional for now
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'testfire.dev', pathname: '/**' },
    //   { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testfire.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_RAZORPAY_KEY,
    NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_MONTH_DAYS,
    NEXT_PUBLIC_QUARTER_DAYS,
    NEXT_PUBLIC_YEAR_DAYS,
  },
};

export default nextConfig;
