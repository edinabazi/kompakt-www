import { site } from "../../site.config.mjs";

export const GET = () =>
    new Response(
        JSON.stringify(
            {
                name: site.name,
                short_name: site.name,
                description: site.tagline,
                icons: [
                    {
                        src: site.assets.favicon,
                        sizes: "224x224",
                        type: "image/png",
                    },
                ],
                theme_color: site.themeColor,
                background_color: site.themeColor,
                display: "standalone",
            },
            null,
            2,
        ),
        {
            headers: {
                "Content-Type": "application/manifest+json; charset=utf-8",
            },
        },
    );
