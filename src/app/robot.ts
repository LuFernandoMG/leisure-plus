import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ["/", "/movies", "/series"],
            disallow: []
        },
        sitemap: "https://leisure-plus.vercel.app/sitemap.xml"
    };
}