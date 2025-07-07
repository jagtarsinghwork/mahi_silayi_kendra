const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const baseUrl = 'https://testfire.dev';

(async () => {
  const pages = [
    '', // homepage
    'sign-up',
    'sign-in',
    'book-demo',
    'privacy-policy',
    'refund-policy',
    'terms-policy',
    'purchase/payment-product',
    'dashboard/payout',
    'blog',
    'pricing',
    'docs',
    'features', // Add TestFire-specific pages
    'community',
  ];

  const links = pages.map((page) => ({
    url: `/${page}`,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  const stream = new SitemapStream({ hostname: baseUrl });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString(),
  );

  fs.writeFileSync('out/sitemap.xml', xml);
})();
