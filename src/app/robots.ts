import { MetadataRoute } from 'next';

const BASE_URL = 'https://ai-mkt-elearning.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Google, Bing, general crawlers
        userAgent: '*',
        allow: '/',
      },
      {
        // Allow AI crawlers for GEO (Generative Engine Optimization)
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai'],
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
