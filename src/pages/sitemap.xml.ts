import { site } from "../../site.config.mjs";

const lastModified = "2026-05-19";

export const GET = () =>
    new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL("/", site.url)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
        {
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
            },
        },
    );
