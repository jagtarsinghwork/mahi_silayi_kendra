const fs = require('fs/promises');
const path = require('path');

// Configuration
const SITE_URL = 'https://sparrowcourier.com';
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'sitemap.xml');

async function generateSitemap() {
  try {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    await fs.writeFile(OUTPUT_FILE, sitemapContent);
    console.log(`Sitemap generated at: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
