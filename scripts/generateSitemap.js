const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const baseUrl = "https://delhi365.in";

(async () => {
  const pages = [
    "", // homepage
    "sign-up",
    "sign-in",
    "book-demo",
    "privacy-policy",
    "refund-policy",
    "terms-policy",
    "purchase/payment-product",
    "dashboard/payout",
    "blog",
    "pricing",
    "docs",
    "features",
    "community",
  ];

  const links = pages.map((page) => ({
    url: `/${page}`,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const stream = new SitemapStream({ hostname: baseUrl });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  // Create out directory if it doesn't exist
  const outDir = path.join(process.cwd(), "out");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Write sitemap file
  fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
  console.log(
    "Sitemap generated successfully at:",
    path.join(outDir, "sitemap.xml")
  );
})();
