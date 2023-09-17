import type { MetadataRoute } from 'next'

const robotsGenerator = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: `Googlebot`,
      disallow: `/nogooglebot/`
    },
    {
      userAgent: `*`,
      allow: `/`
    }
  ],
  sitemap: `https://pet-shop-clara.vercel.app/sitemap.xml`
})

export default robotsGenerator