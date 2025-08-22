import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

// const { i18n } = require('./next-i18next.config');

const {
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_RAZORPAY_KEY,
  NEXT_PUBLIC_MONTH_DAYS,
  NEXT_PUBLIC_QUARTER_DAYS,
  NEXT_PUBLIC_YEAR_DAYS,
} = process.env;

const nextConfig: NextConfig = {
  output: 'export',
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: ['./sass'],
  },
  images: {
    unoptimized: true, // Optional for now

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sapprowcourier.in',
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
  // i18n: i18n,
  // experimental: {
  //   serverComponentsExternalPackages: ['next-i18next'], // Allow next-i18next in server components
  // },
};

export default withNextIntl(nextConfig);
