import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/sda/', '/api/'],
    },
    sitemap: 'https://directtitleloans.com/sitemap.xml',
  };
}
