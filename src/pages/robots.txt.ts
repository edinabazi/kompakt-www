import { site } from "../../site.config.mjs";

export const GET = () =>
    new Response(
        `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site.url)}
`,
        {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        },
    );
